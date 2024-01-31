import React from "react";
import { styled } from "styled-components";
import ExampleImg from "../../assets/imgs/Lucy.svg";
import { Link } from "react-router-dom";

export const Circles: React.FC = () => {
    return (
        <CircleWrapper>
            <CircleContainer>
                <Circle to='/introduce/group'>
                    <Img src={ExampleImg}></Img>
                    <Overlay>
                        <Text>LUCY</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={ExampleImg}></Img>
                    <Overlay>
                        <Text>LUCY</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={ExampleImg}></Img>
                    <Overlay>
                        <Text>LUCY</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={ExampleImg}></Img>
                    <Overlay>
                        <Text>LUCY</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={ExampleImg}></Img>
                    <Overlay>
                        <Text>LUCY</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={ExampleImg}></Img>
                    <Overlay>
                        <Text>LUCY</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={ExampleImg}></Img>
                    <Overlay>
                        <Text>LUCY</Text>
                    </Overlay>
                </Circle>
            </CircleContainer>
            <CircleContainer>
                <Circle to='/introduce/group'>
                    <Img src={ExampleImg}></Img>
                    <Overlay>
                        <Text>LUCY</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={ExampleImg}></Img>
                    <Overlay>
                        <Text>LUCY</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={ExampleImg}></Img>
                    <Overlay>
                        <Text>LUCY</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={ExampleImg}></Img>
                    <Overlay>
                        <Text>LUCY</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={ExampleImg}></Img>
                    <Overlay>
                        <Text>LUCY</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={ExampleImg}></Img>
                    <Overlay>
                        <Text>LUCY</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={ExampleImg}></Img>
                    <Overlay>
                        <Text>LUCY</Text>
                    </Overlay>
                </Circle>
            </CircleContainer>
        </CircleWrapper>
    );
};

const CircleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const CircleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1321px;
  margin: 15px;
`;

const Circle = styled(Link)`
  position: relative;
  &:hover {
    opacity: 1;
  }
`;

const Img = styled.img`
  display: block;
  width: 150px;
  height: 150px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .2s ease;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  ${Circle}:hover & {
    opacity: 1;
  }
`;

const Text = styled.div`
  color: white;
  font-size: 20px;
  text-align: center;
`;