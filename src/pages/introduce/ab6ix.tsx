import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import ab6ix from "../../assets/imgs/idol/ab6ix/ab6ix.svg";

export const AB6IX = () => {
  const member = ["전웅", "김동현", "박우진", "이대휘"];
  const memberImg = [
    "https://github.com/follow-fanflow/Fanflow-User-FE/blob/main/src/assets/imgs/idol/ab6ix/%EC%9B%85%EC%9B%85.png?raw=true",
    "https://github.com/follow-fanflow/Fanflow-User-FE/blob/main/src/assets/imgs/idol/ab6ix/%EB%8F%99%EB%8F%99.png?raw=true",
    "https://github.com/follow-fanflow/Fanflow-User-FE/blob/main/src/assets/imgs/idol/ab6ix/%EC%9A%B0%EC%A7%80%EB%8B%88%E2%9D%A4.png?raw=true",
    "https://github.com/follow-fanflow/Fanflow-User-FE/blob/main/src/assets/imgs/idol/ab6ix/%ED%9C%98%ED%9C%98.png?raw=true",
  ];
  const memberBirshday = [
    "1997.10.15",
    "1998.09.17",
    "1999.11.02",
    "2001.01.29",
  ];
  return (
    <>
      <IntroduceComp
        member={member}
        group="AB6IX"
        groupImg={ab6ix}
        memberImg={memberImg}
        debut="2019.05.22"
        detail="AB6IX는 ABSOLUTE SIX와 ABOVE BRANDNEW SIX의 약자이며 4명의 멤버와 팬덤이 합쳐져 비로소 완전해지는 
        브랜뉴보이즈의 절대적 완전체, 브랜뉴뮤직의 새로운 지평을 열어갈 4명의 멤버와 팬덤의 초월적 결합의 뜻을 담고 있다. 
        AB6IX의 팬덤명인 ‘ABNEW (에비뉴)’는 에이비식스와 하나가 되어 함께 새로운 길을 걸을 여섯번째 멤버라는 뜻이며, 
        AB6IX의 AB와 영단어 NEW의 결합, 그리고 영단어 avenue의 의미와 발음에서 차용해 만들어졌다. "
        memberBirthday={memberBirshday}
      />
    </>
  );
};
