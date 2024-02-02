import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import nct127 from "../../assets/imgs/idol/nct127/nct127.svg";

export const Nct127 = () => {
    const member = ["태일", "쟈니", "태용", "유타", "도영", "재현", "윈윈", "정우", "마크", "해찬"];
    const memberImg = [
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/nct127/%ED%83%9C%EC%9D%BC.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/nct127/%EC%9F%88%EB%8B%88.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/nct127/%ED%83%9C%EC%9A%A9.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/nct127/%EC%9C%A0%ED%83%80.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/nct127/%EB%8F%84%EC%98%81.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/nct127/%EC%9E%AC%ED%98%84.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/nct127/%EC%9C%88%EC%9C%88.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/nct127/%EC%A0%95%EC%9A%B0.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/nct127/%EB%A7%88%ED%81%AC.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/nct127/%ED%95%B4%EC%B0%AC.svg"
    ];
    const memberBirshday = [
        "1994.06.14",
        "1995.02.09",
        "1995.07.01",
        "1995.10.26",
        "1996.02.01",
        "1997.02.14",
        "1997.10.28",
        "1998.02.19",
        "1999.08.02",
        "2000.06.06"
    ];
    return (
        <>
            <IntroduceComp
                member={member}
                group="NCT 127"
                groupImg={nct127}
                memberImg={memberImg}
                debut="2016년 데뷔"
                detail="NCT 127의 127은 서울의 경도를 의미하며, 대한민국을 중심으로 활동한다. 즉, K-POP의 본거지인 서울을 중심으로 활동하기 때문에 K-POP을 전세계에 알리겠다는 포부를 담은 뜻이다. NCT의 팬덤명은 NCTzen으로 NCT와 영어로 시민을 뜻하는 citizen의 합성어이다. 2017년 6월 12일 V LIVE NCT 127 COMEBACK SHOWCASE CHERRY BOMB 에서 NCTzen의 애칭이 시즈니로 확정되었다. "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
