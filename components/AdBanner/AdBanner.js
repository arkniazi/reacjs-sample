import React, { useEffect } from "react";
import { AdBannerStyled } from "./styled"
import { FlexContainer } from "../styles/Page"
import { Image } from "../Image"
import { ComponentContainer } from "../styles/Page"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const AdBanner = ({ margin }) => {
    const controls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.1
    });

    useEffect(() => {
        if (inView) {
            controls.start({
                scale: 1,
                rotate: '0deg',
                opacity: 1
            });
        }
    }, [controls, inView]);


    return (
        <ComponentContainer >
            <AdBannerStyled margin={margin}>
                <div className="adBannerStyled__flex-container">
                    <div className="adBannerStyled__column">
                        {

                            <motion.img
                                ref={ref}
                                className="adBannerStyled__poster"
                                src="/images/adBanner/poster.png"
                                alt="banner poster"
                                initial={{ scale: 1.7, rotate: '-17deg', opacity: 0 }}
                                animate={controls}
                                transition={{
                                    duration: 0.3
                                }}
                            />

                        }
                    </div>
                    <div className="adBannerStyled__column content">
                        <h2 className="h1">Be part of the surf community</h2>
                        <h2 className="h1 black">Thats keeping business local.</h2>
                        <Image
                            className="adBannerStyled__decoration"
                            path="/images/adBanner/decoration.png"
                            alt="banner decoration"
                        />
                    </div>
                </div>
            </AdBannerStyled>
        </ComponentContainer>
    )
}
