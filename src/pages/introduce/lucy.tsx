import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import lucy from "../../assets/imgs/idol/lucy/Lucy.svg";

export const Lucy = () => {
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
                groupImg={lucy}
                memberImg={memberImg}
                debut=""
                detail=" "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
