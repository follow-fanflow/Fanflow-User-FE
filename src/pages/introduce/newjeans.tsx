import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import newjeans from "../../assets/imgs/idol/newjeans/newjeans.svg";

export const Newjeans = () => {
    const member = ["민지", "하니", "다니엘", "해린", "혜인"];
    const memberImg = [
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/newjeans/%EB%AF%BC%EC%A7%80.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/newjeans/%ED%95%98%EB%8B%88.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/newjeans/%EB%8B%A4%EB%8B%88%EC%97%98.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/newjeans/%ED%95%B4%EB%A6%B0.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/newjeans/%ED%98%9C%EC%9D%B8.svg"
    ];
    const memberBirshday = [
        "2004.05.07",
        "2004.10.06",
        "2005.04.11",
        "2006.05.15",
        "2008.04.21"
    ];
    return (
        <>
            <IntroduceComp
                member={member}
                group="NEW JEANS"
                groupImg={newjeans}
                memberImg={memberImg}
                debut="2022년 데뷔"
                detail=" 뉴진스라는 그룹명은 진스(jeans), 즉 청바지는 시대를 초월한 패션 아이템이라는 생각과 시대를 초월한 이미지를 스스로 개척하려는 그룹의 의도를 암시한다. 이 이름은 또한 새로운 세대(new generation)의 팝 음악을 선도하는 그룹을 가리키는 new genes라는 문구의 말장난이기도 하다.  뉴진스의 팬덤명은 버니즈이다."
                memberBirthday={memberBirshday}
            />
        </>
    );
};
