import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import lucy from "../../assets/imgs/idol/lucy/Lucy.svg";

export const Lucy = () => {
    const member = ["신예찬", "조원상", "신광일", "최상엽"];
    const memberImg = [
        "",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/lucy/%EC%A1%B0%EC%9B%90%EC%83%81.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/lucy/%EC%8B%A0%EA%B4%91%EC%9D%BC.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/lucy/%EC%B5%9C%EC%83%81%EC%97%BD.svg"
    ];
    const memberBirshday = [
        "1992.06.13",
        "1994.02.27",
        "1996.08.15",
        "1997.05.25"
    ];
    return (
        <>
            <IntroduceComp
                member={member}
                group="LUCY"
                groupImg={lucy}
                memberImg={memberImg}
                debut="2020년 데뷔"
                detail="LUCY는 미스틱스토리에서 선보이는 첫 밴드이자 4인조 밴드로 2019년 밴드 오디션 프로그램 JTBC 슈퍼밴드에서 처음 결성되어 준우승을 차지하였다. 팀명은 슈퍼밴드 시절 작업실에서 키우던 강아지 이름에서 따왔으며 라틴어로 '빛'을 의미한다. 폭넓은 다양한 장르의 음악들을 선보이며 활동하고 있는데, 중성적인 느낌의 팀명처럼 편견 없는 음악을 하고 싶다며 장르를 정의하지 않고 LUCY 자체가 장르가 됐으면 한다는 포부를 밝혔다. LUCY의 팬덤명은 왈왈이다.
                "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
