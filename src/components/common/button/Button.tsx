import React, { FC, useState, CSSProperties } from 'react';

interface ButtonProps {
    width?: number;
    height?: number;
    content: string;
    buttonStyle?: CSSProperties;
    hoverColor?: string;
}
// 사용법: <Button width={weight} height={height} content="버튼 내용" buttonStyle={{ backgroundColor: '배경 색상', color: '텍스트 색상' }} hoverColor="hover시 색상"/>
const Button: FC<ButtonProps> = ({ width, height, content, buttonStyle, hoverColor }) => {
    const [isHovered, setIsHovered] = useState(false);

    const defaultButtonStyle: CSSProperties = {
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto',
        backgroundColor: isHovered ? (hoverColor || `#FFA495`) : (buttonStyle?.backgroundColor || `#FFC6C6`),
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease-in-out',
        color: buttonStyle?.color || '#ffffff',
    };

    return (
        <button
            style={{ ...defaultButtonStyle, ...buttonStyle }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {content}
        </button>
    );
};

export default Button;
