import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import theboyz from "../../assets/imgs/idol/theboyz/theboyz.svg";

export const TheBoyz = () => {
    const member = ["상연", "제이콥", "영훈", "현재", "주연", "케빈", "뉴", "큐", "주학년", "선우", "에릭"];
    const memberImg = [
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/theboyz/%EC%83%81%EC%97%B0.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/theboyz/%EC%A0%9C%EC%9D%B4%EC%BD%A5.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/theboyz/%EC%98%81%ED%9B%88.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/theboyz/%ED%98%84%EC%9E%AC.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/theboyz/%EC%A3%BC%EC%97%B0.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/theboyz/%EC%BC%80%EB%B9%88.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/theboyz/%EB%89%B4.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/theboyz/%ED%81%90.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/theboyz/%EC%A3%BC%ED%95%99%EB%85%84.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/theboyz/%EC%84%A0%EC%9A%B0.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/theboyz/%EC%97%90%EB%A6%AD.svg"
    ];
    const memberBirshday = [
        "1996.11.04",
        "1997.05.30",
        "1997.08.08",
        "1997.09.13",
        "1998.01.15",
        "1998.02.23",
        "1998.04.26",
        "1998.11.05",
        "1999.03.09",
        "2000.04.12",
        "2000.12.22"
    ];
    return (
        <>
            <IntroduceComp
                member={member}
                group="THE BOYZ"
                groupImg={theboyz}
                memberImg={memberImg}
                debut="2017년 데뷔"
                detail="더보이즈는 아이에스티 엔터테인먼트 소속의 11인조 보이 그룹이다. 더보이즈라는 그룹명은 소년들을 일컫는 BOYZ에 THE를 붙여 대중들의 마음을 사로잡을 단 하나의 특별한 소년들로 자리잡겠다는 포부를 담았다. 더보이즈의 팬덤명인 THE B(더비)는 THE BOYZ의 비타민 + THE BEST 라는 뜻으로, THE BOYZ의 비타민이 되겠다는 의미를 담고 있다. "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
