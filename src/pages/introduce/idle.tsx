import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import idle from "../../assets/imgs/idol/idle/idle.svg";

export const Idle = () => {
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
                groupImg={idle}
                memberImg={memberImg}
                debut=""
                detail=" "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
