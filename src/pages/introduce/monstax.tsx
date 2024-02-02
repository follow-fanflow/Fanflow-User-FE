import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import monstax from "../../assets/imgs/idol/monstax/monstax.svg";

export const MonstaX = () => {
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
                groupImg={monstax}
                memberImg={memberImg}
                debut=""
                detail=" "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
