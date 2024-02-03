import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import nctdream from "../../assets/imgs/idol/nctdream/nctdream.svg";

export const NctDream = () => {
    const member = ["마크", "런쥔", "제노", "해찬", "재민", "천러", "지성"];
    const memberImg = [
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/nctdream/%EB%A7%88%ED%81%AC.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/nctdream/%EB%9F%B0%EC%A5%94.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/nctdream/%EC%A0%9C%EB%85%B8.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/nctdream/%ED%95%B4%EC%B0%AC.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/nctdream/%EC%9E%AC%EB%AF%BC.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/nctdream/%EC%B2%9C%EB%9F%AC.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/nctdream/%EC%A7%80%EC%84%B1.svg"
    ];
    const memberBirshday = [
        "1999.08.02",
        "2000.03.23",
        "2000.04.23",
        "2000.06.06",
        "2000.08.13",
        "2001.11.22",
        "2002.02.05"
    ];
    return (
        <>
            <IntroduceComp
                member={member}
                group="NCT DREAM"
                groupImg={nctdream}
                memberImg={memberImg}
                debut="2016년 데뷔"
                detail="NCT DREAM은 말 그대로 청소년 연합팀이라는 명목 아래 멤버들 모두 미성년자일 때 데뷔했기에 전부 아주 어렸을 때부터 연습생 생활을 했다. 초등학교, 중학교 등 데뷔 이전의 학창 시절부터 함께해서인지 정말 어렸을 때부터 같은 동네에서 함께 자라 마음 맞는 친구들끼리 꿈을 이루기 위해 모인 팀 같다. NCT의 팬덤명은 NCTzen으로 NCT와 영어로 시민을 뜻하는 citizen의 합성어이다. 2017년 6월 12일 V LIVE NCT 127 COMEBACK SHOWCASE CHERRY BOMB 에서 NCTzen의 애칭이 시즈니로 확정되었다. "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
