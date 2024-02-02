import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import itzy from "../../assets/imgs/idol/itzy/itzy.svg";

export const Itzy = () => {
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
                groupImg={itzy}
                memberImg={memberImg}
                debut=""
                detail=" "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
