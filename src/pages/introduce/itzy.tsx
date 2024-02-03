import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import itzy from "../../assets/imgs/idol/itzy/itzy.svg";

export const Itzy = () => {
    const member = ["예지", "리아", "류진", "채령", "유나"];
    const memberImg = [
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/itzy/%EC%98%88%EC%A7%80.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/itzy/%EB%A6%AC%EC%95%84.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/itzy/%EB%A5%98%EC%A7%84.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/itzy/%EC%B1%84%EB%A0%B9.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/itzy/%EC%9C%A0%EB%82%98.svg"
    ];
    const memberBirshday = [
        "2000.05.26",
        "2000.07.21",
        "2001.04.17",
        "2001.06.05",
        "2003.12.09"
    ];
    return (
        <>
            <IntroduceComp
                member={member}
                group="ITZY"
                groupImg={itzy}
                memberImg={memberImg}
                debut="2019년"
                detail="ITZY는 '너희가 원하는 거 전부 있지? 있지!' 라는 뜻을 가지고 있다. 있지의 팬덤명은 MIDZY로 믿어와 있지, 이 두 단어를 합쳐 ITZY는 팬들을 믿고 팬들도 ITZY를 믿는다는 의미를 함축해서 지은 것이다. 
                "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
