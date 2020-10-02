import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { ImageUploadStyled } from './styled';

export const ImageUpload = ({ setFieldValue, name, image, ...props }) => {
    const [files, setFiles] = useState([{ preview: image }]);

    const { getRootProps, getInputProps } = useDropzone({
        multiple: false,
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            setFieldValue(name, acceptedFiles[0]);

            //base64 method
            // const reader = new FileReader();
            // reader.onload = () => {
            //     var base64Image = reader.result;
            //     console.log(base64Image);
            //     setFieldValue(name, base64Image);
            // };

            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    })
                )
            );
        }
    });

    return (
        <div className={props.className}>
            <label>{props.label}</label>
            <ImageUploadStyled {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                {files[0].preview ? (
                    <img src={files[0].preview} alt={files[0].name} />
                ) : (
                        <p style={{ padding: '1rem' }}>Drag and drop an image here, or click to select</p>
                    )}
            </ImageUploadStyled>
        </div>
    );
};
