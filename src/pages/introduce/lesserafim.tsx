import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import lesserafim from "../../assets/imgs/idol/lesserafim/lesserafim.svg";

export const Lesserafim = () => {
    const member = ["",];
    const memberImg = [
        "",
    ];
    const memberBirshday = [
        "",
    ];
    return (
        <>
            <IntroduceComp
                member={member}
                group=""
                groupImg={lesserafim}
                memberImg={memberImg}
                debut=""
                detail=" "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
