import styled from 'styled-components';

const getColor = (props) => {
    if (props.isDragAccept) {
        return '#00e676';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isDragActive) {
        return '#2196f3';
    }
    return '#eeeeee';
};

export const LabelStyled = styled.label`
    letter-spacing: unset;
    font-weight: 500;
    margin-top: 45px;
    margin-bottom: 15px;
    display: block;
`

export const DeleteStyled = styled.div`
    position: absolute;
    height: 16px;
    width: 16px;
    top: 1%;
    right: 6%;
    transform: scale(1);
    display: block;
    transition: ${(props) => props.theme.transitions.default};
`


//this is used for the gallery field items as we need to wrap the delete button
export const ImageContainer = styled.div`
    transition: ${(props) => props.theme.transitions.default};
    position: relative;
    margin-right: 20px;
    margin-bottom: 20px;
    /* width: calc(33% - 40px); */
    img {
        transition: ${(props) => props.theme.transitions.default};
    }

    &:hover {
        img {
            opacity: 0.35;
        }

        ${DeleteStyled} {
            transform: translateY(50%) translateX(-50%) scale(1.3);
        }
    }

    &:last-child, &:nth-child(4){
        margin-right: 0;
    }

    &:nth-child(5), &:nth-child(6), &:nth-child(7){
        margin-bottom: 0;
    }
`;


export const ImageUploadStyled = styled.div`
    display: flex;
    flex-grow: 0;
    flex-direction: column;
    padding: 15px;
    border: 2px dashed;
    color: ${(props) => props.theme.colors.textDark};
    outline: none;
    transition: border 0.24s ease-in-out;
    margin: 0 0 ${(props) => props.theme.space.sm};
    cursor: pointer;
    font-size: ${(props) => props.theme.fontSizes.sm};
    /* transition: ${(props) => props.theme.transitions.default}; */
    max-width: ${(props) => (props.gallery ? 'none' : '170px')};
    text-align: center;
    ${'' /* min-height: ${(props) => (props.gallery ? '100px' : 'auto')}; */}
    flex-direction: ${(props) => (props.files ? 'column' : 'row')};
    flex-wrap: wrap;
    justify-content: ${(props) => (props.gallery ? 'flex-start' : 'center')};
    align-items: ${(props) => (props.files ? 'flex-start' : 'center')};
    width: 100%;

    ${(props) =>
        props.width &&
        `
        max-width: ${props.width};
    `}

    &:hover {
        border-color: ${(props) => props.theme.colors.mint};
    }

    img {
        width: ${(props) => (props.gallery ? '186px' : 'auto')};
        height: ${(props) => (props.gallery ? '183px' : 'auto')};
        object-fit: ${(props) => (props.gallery ? 'cover' : 'scale-down')};
    }

    &.upload-attached{
        padding: 0;
        border: 0;
    }
`;

export const ImageUploadLabel = styled.p`
    font-size: ${(props) => props.theme.fontSizes.md};
    font-weight: 500;
    color: ${(props) => props.theme.colors.navy};
    margin: 0 0 ${(props) => props.theme.space.xs};
`;
