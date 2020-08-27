import { useField } from "formik"
import styled, { css } from "styled-components"
import { Error } from "../Error"

const InputWrapper = styled.div`
    position: relative;
    width: ${(props) => (props.fullWidth ? "100%" : "initial")};
    flex-basis: ${(props) => (props.gridBasis ? props.gridBasis : "")};
`
const LabelStyled = styled.label`
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.font.heading};
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;

    .cover{
        padding: 13px 0;
        background: transparent;
        display: block;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background .3s ease;
    }

    p{
        font-size: ${(props) => props.theme.fontSizes.desktop.label.size}
    }
`
const RadioStyled = styled.input`
    display: none;

    &:checked + .cover {
        background: ${(props) => props.theme.colors.orange};
    }
`

export const RadioBoxed = ({ label, required, className, fullWidth, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <InputWrapper className={className} fullWidth={fullWidth} gridBasis={props.gridBasis}>
            <LabelStyled>
                <RadioStyled {...field} {...props} type="radio" />
                <div className="cover">
                    <p>{label}</p>
                </div>

            </LabelStyled>

            <Error meta={meta} />
        </InputWrapper>
    )
}
