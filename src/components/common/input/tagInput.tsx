import React, { useState } from 'react';
import styled from 'styled-components';

interface TagInputProps {
    onEnter: (value: string) => void;
    placeholder?: string;
    tags: string[];
}

const TagInput: React.FC<TagInputProps> = ({ onEnter, placeholder, tags }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && tags.length === 0) {
            const trimmedValue = inputValue.trim();

            if (trimmedValue) {
                onEnter(trimmedValue);
                setInputValue('');
            }
        }
    };

    return (
        <StyledInput
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyUp={handleKeyUp}
            placeholder={placeholder}
        />
    );
};

const StyledInput = styled.input`
    width: 409px;
    flex: 1;
    border: none;
    height: 40px;
    font-size: 15px;
    padding: 0 10px 0 10px;
    border: 1px solid ${({ theme }) => theme.color.gray__1};
    border-radius: 5px;
    :focus {
        outline: transparent;
    }
`;

export default TagInput;
