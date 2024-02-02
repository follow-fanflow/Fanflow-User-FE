import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import ab6ix from "../../assets/imgs/idol/ab6ix/ab6ix.svg";
import seventeen from "../../assets/imgs/idol/seventeen/seventeen.svg";
import { Header } from "../../components/header";

export const Seventeen = () => {
    const member = ["에스쿱스", "정한", "조슈아", "준", "호시", "원우", "우지", "디에잇", "민규", "도겸", "승관", "버논", "디노"];
    const memberImg = [
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/seventeen/%EC%97%90%EC%8A%A4%EC%BF%B1%EC%8A%A4.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/seventeen/%EC%A0%95%ED%95%9C.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/seventeen/%EC%A1%B0%EC%8A%88%EC%95%84.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/seventeen/%EC%A4%80.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/seventeen/%ED%98%B8%EC%8B%9C.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/seventeen/%EC%9B%90%EC%9A%B0.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/seventeen/%EC%9A%B0%EC%A7%80.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/seventeen/%EB%94%94%EC%97%90%EC%9E%87.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/seventeen/%EB%AF%BC%EA%B7%9C.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/seventeen/%EB%8F%84%EA%B2%B8.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/seventeen/%EC%8A%B9%EA%B4%80.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/seventeen/%EB%B2%84%EB%85%BC.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/seventeen/%EB%94%94%EB%85%B8.svg",
    ];
    const memberBirshday = [
        "1995.08.08",
        "1995.10.04",
        "1995.12.30",
        "1996.06.10",
        "1996.06.15",
        "1996.07.17",
        "1996.11.22",
        "1997.11.07",
        "1997.04.06",
        "1997.02.18",
        "1997.01.16",
        "1998.02.18",
        "1999.02.11",
    ];
    return (
        <>
            <Header />
            <IntroduceComp
                member={member}
                group="SEVENTEEN"
                groupImg={seventeen}
                memberImg={memberImg}
                debut="2015년 데뷔"
                detail="세븐틴은 플레디스 소속으로 2015년 5월 26일에 데뷔한 13인조 보이 그룹이다. 그룹 내에는 퍼포먼스, 보컬, 힙합팀이 존재한다. '세븐틴'이라는 팀명은 팀 인원 13 + 3개의 유닛, 하나의 팀 +1로, 13+3+1=17 이란 뜻이다. 세븐틴의 팬덤명인 CARAT(캐럿)은 보석의 질량 단위로 숫자가 커질수록 보석의 가치도 높아지는데, 이것을 팬덤에 비유하여 세븐틴이라는 다이아몬드를 빛내주는 존재이자, 사랑해주는 팬이 많아질수록 팀의 가치고 높아진다는 의미를 함께 담았다. "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
