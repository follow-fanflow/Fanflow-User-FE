import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import rize from "../../assets/imgs/idol/rize/rize.svg";

export const Rize = () => {
    const member = ["쇼타로", "은석", "성찬", "원빈", "승한", "소희", "엔톤"];
    const memberImg = [
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/rize/%EC%87%BC%ED%83%80%EB%A1%9C.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/rize/%EC%9D%80%EC%84%9D.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/rize/%EC%84%B1%EC%B0%AC.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/rize/%EC%9B%90%EB%B9%88.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/rize/%EC%8A%B9%ED%95%9C.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/rize/%EC%86%8C%ED%9D%AC.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/rize/%EC%97%94%ED%86%A4.svg"
    ];
    const memberBirshday = [
        "2000.11.25",
        "2001.03.19",
        "2001.09.13",
        "2002.03.02",
        "2003.10.02",
        "2003.11.21",
        "2004.03.21"
    ];
    return (
        <>
            <IntroduceComp
                member={member}
                group="RIZE"
                groupImg={rize}
                memberImg={memberImg}
                debut="2023년 데뷔"
                detail="RIIZE는 '성장하다'라는 뜻의 'Rise'와 '실현하다'라는 뜻을 가진 'Realize'를 결합해 만든 이름으로, '함께 성장하고 꿈을 실현해 나아가는 팀'이라는 의미이다. 각자의 개성과 강점을 지닌 멤버들이 하나의 팀으로서 이뤄가는 '리얼타임 오디세이(성장사)'를 기반으로 한다. 일상의 모든 경험에서 얻은 영감을 음악에 담아내는 '이모셔널 팝 루키'가 세상 모든 이들의 공감을 자아내는 '이모셔널 팝 아티스트'로 성장해 꿈을 실현해 나가는 그룹이다. 라이즈의 팬덤명은 브리즈이다.
                "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
