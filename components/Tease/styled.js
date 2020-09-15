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
            border: 1px solid ${(props) => props.theme.colors.borderGrey};
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