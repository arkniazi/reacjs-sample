import styled from "styled-components"
import { AnimatePresence, motion } from 'framer-motion'

const tease = styled(motion.div)`
    .gridViewStyled{
        font-family: ${(props) => props.theme.font.heading};
        font-weight: bold;

        &__favouriteIcon{
            position: absolute;
            right: 0;
            cursor: pointer;
            path{
                fill: transparent;
                transition: fill .3s ease;
            }
            &:hover path{
                fill: ${(props) => props.theme.colors.orange}
            }

            &.active{
                path{
                    fill: ${(props) => props.theme.colors.orange}
                }
                &:hover path{
                fill: transparent;
            }
            }
        }
        
        &__imageWrap{
            position: relative;
            margin-bottom: 10px;
            border-bottom:4px solid black;

        }

        &__priceTag{
            background-color: black;
            color: white;
            padding: 10px 10px 6px 10px;
            display: inline-block;
            position: absolute;
            left: 0;
            bottom: 0;
        }

        &__title{
            font-size: 14px;
            margin-bottom: 5px;
        }

        &__meta{
            text-transform: uppercase;
            font-size: 12px;
        }
    }
`

export const GridTeaseStyled = styled(tease)`
      margin: 0 12.5px 55px 12.5px;
      max-width: calc(50% - 25px);

      img{
          max-width: 100%;
      }
    ${(props) => props.theme.mediaQueries.lg} {
        max-width: unset;
    }
`




export const HorizontalTeaseStyled = styled(tease)` 
    border-top: 2px solid black;
    margin: 0 12.5px 0px 12.5px;
    padding: 20px 0;
    width: 100%;

    &:first-child{
        border-top: 0;
    }
    .gridViewStyled{
        display: flex;
        
        &__imageWrap{
            border: 1px solid ${(props) => props.theme.colors.borderGray};
            margin-right: 20px;
            margin-bottom: 0;
            border-bottom: 0;
        }

        &__title{
            font-size: 16px;
        }

        &__description{
            font-family: ${(props) => props.theme.font.body};
            font-weight: normal;
            font-size: 14px;
            padding: 16px 0 5px 0;
        }
    }
`

export const SellingItemVariant = styled.div`
    min-width: 135px;
    margin-left: 100px;
`
export const StatusStyled = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .icon{
        border: 2px solid ${(props) => props.active ? props.theme.colors.orange : props.theme.colors.black};
        height: 15px;
        width: 15px;
        margin-right: 5px;
        border-radius: 50%;
        background-color: ${(props) => props.active && props.theme.colors.orange}
    }
    p{
      font-size: ${props => props.theme.fontSizes.desktop.label.size};  
      font-family: ${props => props.theme.font.heading};
      text-transform: uppercase;
    }
`

export const ItemTimeStyled = styled.div`
    margin-bottom: 25px;
    p{
        font-size: ${props => props.theme.fontSizes.desktop.label.size};
        display: flex;
        font-weight: lighter;
        margin-bottom: 5px;
        color: ${props => props.theme.colors.slateGray};
        span{
            font-weight: bold;
            margin-right:3px;
        }
    }
`

export const ItemCTAStyled = styled.div`

    button{
        font-size: ${props => props.theme.fontSizes.desktop.label.size};
        color: ${props => props.theme.colors.darkGray};
        border: none;
        background-color: transparent;
        display: flex;
        align-items: center;    
        margin-bottom: 15px;
        cursor: pointer;
        &:focus{
            outline: none;
        }

        span{
            transform: translateX(12px);
            will-change:transform;
            transition: transform .3s ease;
        }

        &:hover span{
            transform: translateX(5px);
        }
    }
   
`