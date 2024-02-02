import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import lesserafim from "../../assets/imgs/idol/lesserafim/lesserafim.svg";

export const Lesserafim = () => {
    const member = ["사쿠라", "김채원", "허윤진", "카즈하", "홍은채"];
    const memberImg = [
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/lesserafim/%EC%82%AC%EC%BF%A0%EB%9D%BC.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/lesserafim/%EA%B9%80%EC%B1%84%EC%9B%90.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/lesserafim/%ED%97%88%EC%9C%A4%EC%A7%84.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/lesserafim/%EC%B9%B4%EC%A6%88%ED%95%98.svg",
        "https://raw.githubusercontent.com/follow-fanflow/Fanflow-User-FE/2735f64b2ad961d50de1b2b5428f28b51291785c/src/assets/imgs/idol/lesserafim/%ED%99%8D%EC%9D%80%EC%B1%84.svg"
    ];
    const memberBirshday = [
        "1998.03.19",
        "2000.08.01",
        "2001.10.08",
        "2003.08.09",
        "2006.11.10"
    ];
    return (
        <>
            <IntroduceComp
                member={member}
                group="LE SSERAFIM"
                groupImg={lesserafim}
                memberImg={memberImg}
                debut="2022년 데뷔"
                detail="LE SSERAFIM'이라는 그룹명은 HYBE의 방시혁이 애너그램으로 만들어 보자며 직접 작명했다. ‘IM FEARLESS’를 애너그램 방식으로 만든 이름으로, '세상의 시선에 흔들리지 않고 두려움 없이 앞으로 나아가겠다는 자기 확신과 강한 의지'를 내포한다. 르세라핌의 팬덤명인 피어나는 먼더 두려움 없이 앞으로 나아가는 르세라핌, 이들을 향해 두려움이 없는 응원과 사랑을 보여주는 팬들, 이들이 함께 새롭게 피어난다라는 중의적인 의미를 담고 있다. "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
