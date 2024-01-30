import React, { ReactNode, useState } from 'react';

// 사용방법:<Button to="/route" width={number} height={number} backgroundColor="" hoverColor="" content="Go to Route"/>
interface ButtonProps {
    to?: string;
    width?: number;
    height?: number;
    backgroundColor?: string;
    hoverColor?: string;
    onClick?: () => void;
    content?: string;
    buttonStyle?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
    to,
    width = 100,
    height = 40,
    backgroundColor = '#FFA495',
    hoverColor = '#FF7878',
    onClick,
    content,
    buttonStyle,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const defaultButtonStyle: React.CSSProperties = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: isHovered ? hoverColor : backgroundColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '4px',
        outline: 'none',
        transition: 'background-color 0.3s ease',
        color: 'white'
    };

    const mergedButtonStyle = {
        ...defaultButtonStyle,
        ...buttonStyle,
    };

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };

    if (to) {
        return (
            <a href={to} style={{ textDecoration: 'none' }}>
                <button
                    style={mergedButtonStyle}
                    onClick={onClick}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                >
                    {content}
                </button>
            </a>
        );
    }

    return (
        <button
            style={mergedButtonStyle}
            onClick={onClick}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
        >
            {content}
        </button>
    );
};

export default Button;
