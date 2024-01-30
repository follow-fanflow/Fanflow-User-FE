import { useState } from 'react';
import styled from 'styled-components';
import TagInput from '../input/tagInput';
import Close from "../../../assets/imgs/close.svg";

export const SearchTag = () => {
    const [tags, setTags] = useState<string[]>([]);

    const removeTags = (indexToRemove: number) => {
        const filter = tags.filter((el, index) => index !== indexToRemove);
        setTags(filter);
    };

    const addTags = (value: string) => {
        if (value && !tags.includes(value)) {
            setTags([...tags, value]);
        }
    };

    return (
        <>
            <TagsInputContainer>
                <TagsInputFocused>
                    <TagList>
                        {tags.map((tag, index) => (
                            <TagItem key={index}>
                                <span className="tag-title">{tag}</span>
                                <CloseIcon src={Close} onClick={() => removeTags(index)}></CloseIcon>
                            </TagItem>
                        ))}
                    </TagList>
                    <Div>스캐줄이 궁금한 아이돌</Div>
                    <TagInput
                        onEnter={addTags}
                        placeholder={tags.length === 0 ? '검색하세요' : ''}
                        tags={tags}
                    />
                </TagsInputFocused>
            </TagsInputContainer>
        </>
    );
};

const Div = styled.div`
    font-size: 14px;
    margin-top: 15px;
    color: ${({ theme }) => theme.color.gray__1};
    margin-bottom: 3px;
`;

const TagsInputContainer = styled.div`
    margin: 2rem auto 8rem;
    display: flex;
    flex-direction: wrap;
    align-items: flex-start;
    width: 409px;
`;

const TagList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;
`;

const TagItem = styled.li`
    width: auto;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 0 8px;
    font-size: 14px;
    list-style: none;
    border-radius: 6px;
    margin: 0 8px 8px 0;
    background: ${({ theme }) => theme.color.one};
    border-radius: 15px;
`;

const CloseIcon = styled.img`
    text-align: center;
    width: 9px;
    cursor: pointer;
    margin-left: 10px;
`;

const TagsInputFocused = styled.div`
    `;
