import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import rize from "../../assets/imgs/idol/rize/rize.svg";

export const Rize = () => {
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
                groupImg={rize}
                memberImg={memberImg}
                debut=""
                detail=" "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
