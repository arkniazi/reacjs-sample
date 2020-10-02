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

// export const DeleteStyled = styled(Cross)`
//     opacity: 0;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translateY(-40%) translateX(-50%);
//     display: block;
//     transition: ${(props) => props.theme.transitions.default};
//     color: ${(props) => props.theme.colors.redDark};
// `;

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
    color: ${(props) => props.theme.colors.textDark};
    outline: none;
    transition: border 0.24s ease-in-out;
    margin: 0 0 ${(props) => props.theme.space.sm};
    cursor: pointer;
    font-size: ${(props) => props.theme.fontSizes.sm};
    transition: ${(props) => props.theme.transitions.default};
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
`;

export const ImageUploadLabel = styled.p`
    font-size: ${(props) => props.theme.fontSizes.md};
    font-weight: 500;
    color: ${(props) => props.theme.colors.navy};
    margin: 0 0 ${(props) => props.theme.space.xs};
`;
