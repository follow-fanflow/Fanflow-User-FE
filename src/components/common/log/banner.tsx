import React, { useEffect, useState } from "react";
import styled from "styled-components";
import banner1 from "../../../assets/imgs/bannerImg.svg";
import banner2 from "../../../assets/imgs/bannerImg.svg";
import banner3 from "../../../assets/imgs/fanflowbanner.svg";
import leftButton from "../../../assets/imgs/leftbutton.svg";
import rightButton from "../../../assets/imgs/rightbutton.svg";

interface BannerProps {}

const banners = [banner1, banner2, banner3];

export const Banner: React.FC<BannerProps> = () => {
    const [currentBanner, setCurrentBanner] = useState(1);
    const [autoSlide, setAutoSlide] = useState(true);

    const goToPreviousBanner = () => {
        setCurrentBanner((currentBanner - 1 + banners.length) % banners.length);
    };

    const goToNextBanner = () => {
        setCurrentBanner((currentBanner + 1) % banners.length);
    }

    const startAutoSlide = () => {
        setAutoSlide(true);
    };

    const stopAutoSlide = () => {
        setAutoSlide(false);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (autoSlide) {
            interval = setInterval(goToNextBanner, 3000);
        }
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [autoSlide, goToNextBanner]);

    return (
        <BannerWrap
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
        >
            <Button onClick={goToPreviousBanner} left src={leftButton} alt="Left Button" />
            <Button onClick={goToNextBanner} right src={rightButton} alt="Right Button" />
            <BannersContainer currentBanner={currentBanner}>
                {banners.map((banner, index) => (
                    <BannerImage
                        key={index}
                        src={banner}
                        alt={`Banner ${index + 1}`}
                    />
                ))}
            </BannersContainer>
        </BannerWrap>
    );
};

const BannerWrap = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    height: 190px;
`;

const BannersContainer = styled.div<{ currentBanner: number }>`
    display: flex;
    transition: transform 0.5s;
    transform: translateX(-${({ currentBanner }) => currentBanner * 100}%);
    width: 92%;
    gap: 10px;
`;

const BannerImage = styled.img`
    flex-shrink: 0;
    width: 100%;
    height: auto;
    cursor: pointer;
`;

const Button = styled.img<{ left?: boolean; right?: boolean }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 1;
    ${({ left }) => left && `left: 180px;`}
    ${({ right }) => right && `right: 180px;`}
`;

export default Banner;
