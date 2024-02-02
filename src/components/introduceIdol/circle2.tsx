import React from "react";
import { styled } from "styled-components";
import Seventeen from "../../assets/imgs/idol/seventeen/seventeen.svg";
import Lucy from "../../assets/imgs/idol/lucy/Lucy.svg";
import txt from "../../assets/imgs/idol/txt/txt.svg";
import ab6ix from "../../assets/imgs/idol/ab6ix/ab6ix.svg";
import rize from "../../assets/imgs/idol/rize/rize.svg";
import itzy from "../../assets/imgs/idol/itzy/itzy.svg";
import nct127 from "../../assets/imgs/idol/nct127/nct127.svg";
import nctdream from "../../assets/imgs/idol/nctdream/nctdream.svg";
import monstax from "../../assets/imgs/idol/monstax/monstax.svg";
import ive from "../../assets/imgs/idol/ive/ive.svg";
import lesserafim from "../../assets/imgs/idol/lesserafim/lesserafim.svg";
import newjeans from "../../assets/imgs/idol/newjeans/newjeans.svg";
import bts from "../../assets/imgs/idol/bts/bts.svg";
import theboyz from "../../assets/imgs/idol/theboyz/theboyz.svg";
import idle from "../../assets/imgs/idol/idle/idle.svg";
import aespa from "../../assets/imgs/idol/aespa/aespa.svg";


import { Link } from "react-router-dom";

export const Circles: React.FC = () => {
    return (
        <CircleWrapper>
            <CircleContainer>
                <Circle to='/introduce/group'>
                    <Img src={Seventeen}></Img>
                    <Overlay>
                        <Text>SEVENTEEN</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={txt}></Img>
                    <Overlay>
                        <Text>TOMORROW X TOGETHER</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={ab6ix}></Img>
                    <Overlay>
                        <Text>AB6IX</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={Lucy}></Img>
                    <Overlay>
                        <Text>LUCY</Text>
                    </Overlay>
                </Circle>
            </CircleContainer>
            <CircleContainer>
                <Circle to='/introduce/group'>
                    <Img src={rize}></Img>
                    <Overlay>
                        <Text>RIZE</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={itzy}></Img>
                    <Overlay>
                        <Text>ITZY</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={nct127}></Img>
                    <Overlay>
                        <Text>NCT 127</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={nctdream}></Img>
                    <Overlay>
                        <Text>NCT DREAM</Text>
                    </Overlay>
                </Circle>
            </CircleContainer>
            <CircleContainer>
                <Circle to='/introduce/group'>
                    <Img src={monstax}></Img>
                    <Overlay>
                        <Text>MONSTA X</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={ive}></Img>
                    <Overlay>
                        <Text>IVE</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={lesserafim}></Img>
                    <Overlay>
                        <Text>LE SSERAFIM</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={newjeans}></Img>
                    <Overlay>
                        <Text>NEWJEANS</Text>
                    </Overlay>
                </Circle>
            </CircleContainer>
            <CircleContainer>
                <Circle to='/introduce/group'>
                    <Img src={bts}></Img>
                    <Overlay>
                        <Text>BTS</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={theboyz}></Img>
                    <Overlay>
                        <Text>THE BOYZ</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={idle}></Img>
                    <Overlay>
                        <Text>IDLE</Text>
                    </Overlay>
                </Circle>
                <Circle to='/introduce/group'>
                    <Img src={aespa}></Img>
                    <Overlay>
                        <Text>AESPA</Text>
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
  width: 950px;
  margin: 20px;
`;

const Circle = styled(Link)`
  position: relative;
  &:hover {
    opacity: 1;
  }
`;

const Img = styled.img`
  display: block;
  width: 190px;
  height: 190px;
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