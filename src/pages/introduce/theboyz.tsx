import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import theboyz from "../../assets/imgs/idol/theboyz/theboyz.svg";

export const TheBoyz = () => {
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
                groupImg={theboyz}
                memberImg={memberImg}
                debut=""
                detail=" "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
