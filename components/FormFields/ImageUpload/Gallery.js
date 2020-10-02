import React, { useState, useEffect, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import isUrl from 'is-url';
import { useField } from 'formik';
import { toast } from 'react-toastify';

import { ImageUploadStyled, ImageContainer, LabelStyled } from './styled';
import { FormLabel } from '../TextInput';
import { Error } from '../Error';

export const Gallery = ({ setFieldValue, name, images, max, ...props }) => {
    const [files, setFiles] = useState(images || []);
    //eslint-disable-next-line
    const [field, meta] = useField(name);

    //set the formik field value only once the internal state has been set
    useEffect(() => {
        setFieldValue(name, files);
    }, [setFieldValue, name, files]);

    const imageEl = useRef(null);

    const handleImgClick = (event, id) => {
        event.stopPropagation();

        //copy state array and remove index, then re-set
        let filesModified = [...files];
        filesModified.splice(id, 1);
        setFiles(filesModified);
    };

    const { getRootProps, getInputProps } = useDropzone({
        multiple: true,
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            //check if max file limit is set on uploads
            if (max && field.value.length + acceptedFiles.length > max) {
                return toast.error(`Maximum of ${max} files allowed.`);
            } else
                setFiles([
                    ...files,
                    ...acceptedFiles.map((file) =>
                        Object.assign(file, {
                            preview: URL.createObjectURL(file)
                        })
                    )
                ]);
        }
    });

    return (
        <div className={props.className}>
            <LabelStyled className="h4">{props.label}</LabelStyled>
            <ImageUploadStyled gallery {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                {files && files.length
                    ? files.map((file, i) => {
                        //use isUrl function to check if the value is just a plain image URL which has been previously uploaded
                        // in that case, it doesn't have a preview property
                        return (
                            <ImageContainer key={i} ref={imageEl} onClick={(e) => handleImgClick(e, i)}>
                                <img src={isUrl(file) ? file : file.preview} alt={file.name} />
                                {/* <DeleteStyled /> */}
                            </ImageContainer>
                        );
                    })
                    : 'Drag and drop an image here, or click to select.'}
            </ImageUploadStyled>

            <Error meta={meta} />
        </div>
    );
};
