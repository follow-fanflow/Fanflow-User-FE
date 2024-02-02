import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import bts from "../../assets/imgs/idol/bts/bts.svg";

export const Bts = () => {
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
                groupImg={bts}
                memberImg={memberImg}
                debut=""
                detail=" "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
