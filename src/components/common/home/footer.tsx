import { styled } from "styled-components";
import TextLogo from "../../../assets/imgs/textLogo.svg";
import FooterIcon from "../../../assets/imgs/footerIcons.svg";

export const Footer = () => {
    return (
        <Wrapper>
            <LayoutOne>
                <img src={TextLogo} style={{ width: "130px" }}></img>
                <Line></Line>
                <EmailWrapper>
                    <Email>aghpt04@gmail.com</Email>
                    <Email>phyuna_0525@dsm.hs.kr</Email>
                    <Email>meltapplee@gmail.com</Email>
                </EmailWrapper>
            </LayoutOne>
            <LayoutTwo>
                <img src={FooterIcon}></img>
                <Text>copyright © 2023.fanflow.All rights reserved.</Text>
            </LayoutTwo>
        </Wrapper>
    );
};

const Text = styled.div`
    font-size: 11px;
    color: ${({ theme }) => theme.color.white};
    margin-top: 7px;
`;

const LayoutTwo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    align-items: center;
    text-align: center;
    margin-right: 47px;
`;

const EmailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Email = styled.div`
    font-size: 11px;
    padding: 5px;
    color: ${({ theme }) => theme.color.white};
`;

const Line = styled.div`
    width: 2px;
    height: 72px;
    background-color: ${({ theme }) => theme.color.white};
`;

const Wrapper = styled.div`
    width: 100%;
    height: 102px;
    background-color: ${({ theme }) => theme.color.zero};
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const LayoutOne = styled.div`
    display: flex;
    justify-content: space-between;
    width: 350px;
    height: 72px;
    margin-left: 47px;
`;