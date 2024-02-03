import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import idle from "../../assets/imgs/idol/idle/idle.svg";

export const Idle = () => {
    const member = ["미연", "민니", "소연", "우기", "슈화"];
    const memberImg = [
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/idle/%EB%AF%B8%EC%97%B0.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/idle/%EB%AF%BC%EB%8B%88.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/idle/%EC%86%8C%EC%97%B0.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/idle/%EC%9A%B0%EA%B8%B0.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/idle/%EC%8A%88%ED%99%94.svg"
    ];
    const memberBirshday = [
        "1997.01.31",
        "1997.10.23",
        "1998.08.26",
        "1999.09.23",
        "2000.01.06"
    ];
    return (
        <>
            <IntroduceComp
                member={member}
                group="IDLE"
                groupImg={idle}
                memberImg={memberImg}
                debut="2018년 데뷔"
                detail="아이들은 각각의 개인을 아이(I)로 놓고 -를을 붙여 다섯명의 개성이 모인 팀이라는 뜻이다. 아이들의 팬덤명인 네버랜드는 피터팬 속 상상의 공간 네버랜드에 사는 사람들은 변하지 않고 영원히 아이로 살 수 있는데, 아티스트는 팬들 속에서 함께 살아가듯이 아이들도 네버랜드 속에서 영원히 아이들로 살며 팬들과 함께 변하지 않고 오래오래 함께하자는 의미를 지니고 있다. "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
