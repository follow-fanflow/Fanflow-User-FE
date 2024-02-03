import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import txt from "../../assets/imgs/idol/txt/txt.svg";

export const TxT = () => {
    const member = ["연준", "수빈", "범규", "태현", "휴닝카이"];
    const memberImg = [
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/txt/%EC%97%B0%EC%A4%80.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/txt/%EC%88%98%EB%B9%88.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/txt/%EB%B2%94%EA%B7%9C.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/txt/%ED%83%9C%ED%98%84.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/txt/%ED%9C%B4%EB%8B%9D%EC%B9%B4%EC%9D%B4.svg"
    ];
    const memberBirshday = [
        "1999.09.13",
        "2000.12.05",
        "2001.03.13",
        "2002.02.05",
        "2002.08.14"
    ];
    return (
        <>
            <IntroduceComp
                member={member}
                group="TOMORROW X TOGETHER"
                groupImg={txt}
                memberImg={memberImg}
                debut="2019년 데뷔"
                detail="투모로우바이투게더는 2019년 3월 4일에 데뷔한 빅히트 뮤직 소속의 5인조 보이 그룹이다. 그룹명에 대해서는 서로 다른 너와 내가 하나의 꿈으로 모여 함께 내일을 만들어간다는 의미를 가지고 있다. 투모로우바이투게더의 팬덤은 2019년 8월 22일 모스부호 모아로 확정되었다. 모아는 Moments Of Alwaysness의 준말이자 서로의 꿈 조각들을 모아 하나의 꿈을 완성하는 투모로우바이투게더와 팬이라는 의미와 언제나 항상 영원히 투모로우바이투게더와 팬이 함께 하는 순간이라는 의미를 가지고 있다.
                "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
