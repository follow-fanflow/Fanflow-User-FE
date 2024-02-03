import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import ive from "../../assets/imgs/idol/ive/ive.svg";

export const Ive = () => {
    const member = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];
    const memberImg = [
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/ive/%EC%95%88%EC%9C%A0%EC%A7%84.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/ive/%EA%B0%80%EC%9D%84.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/ive/%EB%A0%88%EC%9D%B4.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/ive/%EC%9E%A5%EC%9B%90%EC%98%81.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/ive/%EB%A6%AC%EC%A6%88.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/ive/%EC%9D%B4%EC%84%9C.svg"
    ];
    const memberBirshday = [
        "2003.09.01",
        "2002.09.24",
        "2004.02.03",
        "2004.08.31",
        "2004.11.21",
        "2007.02.21"
    ];
    return (
        <>
            <IntroduceComp
                member={member}
                group="IVE"
                groupImg={ive}
                memberImg={memberImg}
                debut="2021년 데뷔"
                detail="아이브 팀명은 '아이 헤브 = 아이브(I HAVE = IVE)'의 약자다. 그룹명 속에 본인들이 가진 것들을 아이브스러운 매력으로 보여주겠다는 포부를 담았다. 아이브의 팬덤명인 다이브는 아이브가 공식 인사 전 항상 외치는 구호 'DIVE IN TO IVE'에서 비롯되었다. "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
