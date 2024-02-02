import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import bts from "../../assets/imgs/idol/bts/bts.svg";

export const Bts = () => {
    const member = ["진", "슈가", "제이홉", "RM", "지민", "뷔", "정국"];
    const memberImg = [
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/e5871135109d7f8504860c34aa6890bee1a3b53f/src/assets/imgs/idol/bts/%EC%A7%84.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/bts/%EC%8A%88%EA%B0%80.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/bts/%EC%A0%9C%EC%9D%B4%ED%99%89.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/bts/%EC%95%8C%EC%97%A0.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/bts/%EC%A7%80%EB%AF%BC.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/bts/%EB%B7%94.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/bts/%EC%A0%95%EA%B5%AD.svg"
    ];
    const memberBirshday = [
        "1992.12.04",
        "1993.03.09",
        "1994.02.18",
        "1994.09.12",
        "1995.10.13",
        "1995.12.30",
        "1997.09.01"
    ];
    return (
        <>
            <IntroduceComp
                member={member}
                group="BTS"
                groupImg={bts}
                memberImg={memberImg}
                debut="2013년 데뷔"
                detail="방탄소년단은 방탄복이 총알을 막아내는 것처럼, 살아가는 동안 힘든 일을 겪는 10대, 20대가 겪는 힘든 일과 편견을 막아내고 자신들의 음악적 가치를 당당히 지켜내겠다는 의미를 담고 있다. 방탄소년단을 지칭하는 'BTS'는 본래 이름인 'BangTan Sonyeundan' 또는 'Bulletproof Boys'의 준말이다. 방탄소년단의 팬덤명인 아미는 영어로 군대를 뜻하는 'ARMY'에서 유래하였고, 군대와 방탄복처럼 방탄소년단과 팬이 항상 같이 있는다를 뜻한다.  "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
