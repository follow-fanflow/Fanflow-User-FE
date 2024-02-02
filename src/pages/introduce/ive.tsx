import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import ive from "../../assets/imgs/idol/ive/ive.svg";

export const Ive = () => {
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
                groupImg={ive}
                memberImg={memberImg}
                debut=""
                detail=" "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
