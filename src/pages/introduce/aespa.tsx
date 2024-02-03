import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import aespa from "../../assets/imgs/idol/aespa/aespa.svg";

export const Aespa = () => {
    const member = ["카리나", "지젤", "윈터", "닝닝"];
    const memberImg = [
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/aespa/%EC%B9%B4%EB%A6%AC%EB%82%98.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/aespa/%EC%A7%80%EC%A0%A4.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/aespa/%EC%9C%88%ED%84%B0.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/aespa/%EB%8B%9D%EB%8B%9D.svg"
    ];
    const memberBirshday = [
        "2000.04.11",
        "2000.10.30",
        "2001.01.01",
        "2002.10.23"
    ];
    return (
        <>
            <IntroduceComp
                member={member}
                group="AESPA"
                groupImg={aespa}
                memberImg={memberImg}
                debut="2020년 데뷔"
                detail="에스파는 아바타 X 익스피리언스 (Avatar X Experience)를 표현한 ‘æ’와 양면이라는 뜻의 영단어 ‘aspect’를 결합해 만든 이름이다. 그룹명을 æspa로 표기할 때도 있다. 에스파의 팬덤명인 MY(마이)는 aespa의 아바타 æ(아이)가 살고 있는 광야(KWANGYA)에서 '가장 소중한 친구'라는 의미로, aespa에게 팬들은 가장 소중한 존재이기에 『MY』로 결정되었다. "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
