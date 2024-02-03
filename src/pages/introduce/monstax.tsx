import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import monstax from "../../assets/imgs/idol/monstax/monstax.svg";

export const MonstaX = () => {
    const member = ["셔누", "민혁", "기현", "형원", "주헌", "아이엠"];
    const memberImg = [
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/monstax/%EC%85%94%EB%88%84.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/monstax/%EB%AF%BC%ED%98%81.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/monstax/%EA%B8%B0%ED%98%84.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/monstax/%ED%98%95%EC%9B%90.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/monstax/%EC%A3%BC%ED%97%8C.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/monstax/%EC%B0%BD%EA%B7%A0.svg"
    ];
    const memberBirshday = [
        "1992.06.18",
        "1993.11.03",
        "1993.11.22",
        "1994.01.15",
        "1994.10.06",
        "1996.01.26"
    ];
    return (
        <>
            <IntroduceComp
                member={member}
                group="MONSTA X"
                groupImg={monstax}
                memberImg={memberImg}
                debut="2015년 데뷔"
                detail="몬스타엑스(MONSTA X)는 K POP씬을 평정할 괴물 이라는 뜻과 나의 스타 (불어로 MON이 '나의' 라는 의미)라는 두 가지 의미를 함축하고 있으며, X는 미지의 존재를 상징한다. 몬스타엑스의 팬덤명인 몬베베는 MONSTA X의 BEBE라는 뜻과, 프랑스어로 mon(나의) bebe(연인)이라는 뜻을 모두 가진 이름이다.  "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
