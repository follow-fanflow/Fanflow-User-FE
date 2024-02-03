import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const fetchItemsFromApi = async (): Promise<string[]> => {
  // 나중에 api 연동 ㄱㄱ
  return ['LUCY', 'SEVENTEEN', 'AB6IX', 'AESPA', 'NEWJEANS'];
};

export const SelectTag: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('iDOL');
  const [itemsFromApi, setItemsFromApi] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchItemsFromApi();
        setItemsFromApi(result);
      } catch (error: any) {
        console.error('error: ', error);
      }
    };
    fetchData();
  }, []);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleListItemClick = (item: any) => {
    setSelectedItem(item);
    setIsOpen(false);
  }

  return (
    <ContSelect className={isOpen ? 'on' : ''}>
      <BtnSelect onClick={handleButtonClick}>{selectedItem}</BtnSelect>
      <ListMember>
        {itemsFromApi.map((item, index) => (
          <ListItem key={index}>
            <ButtonInListItem type="button" onClick={() => handleListItemClick(item)}>{item}</ButtonInListItem>
          </ListItem>
        ))}
      </ListMember>
    </ContSelect>
  );
};

const ContSelect = styled.article`
  position: relative;
  width: 194px;
`;

const BtnSelect = styled.button`
  width: 100%;
  padding: 0 13px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.color.zero};
  box-sizing: border-box;
  border-radius: 50px;
  cursor: pointer;
  text-align: left;
  overflow: hidden;
  height: 30px;
  color: white;
  font-size: 15px;
`;

const ListMember = styled.ul`
  list-style-type: none;
  display: none;
  position: absolute;
  width: 100%;
  top: 39px;
  left: 0;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.color.gray__1};
  box-sizing: border-box;
  border-radius: 5px;
  background-color: white;

  ${ContSelect}.on & {
    display: block;
  }
`;

const ListItem = styled.li`
  width: 100%;
  height: 40px;
  padding: 5px 4px; // 디자인 상으로는 없는데 있는게 더 나을듯??
  box-sizing: border-box;
`;

const ButtonInListItem = styled.button`
  width: 100%;
  padding: 7px 10px;
  border: none;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.zero};
  }
`;