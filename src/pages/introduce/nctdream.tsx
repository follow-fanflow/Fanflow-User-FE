import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import nctdream from "../../assets/imgs/idol/nctdream/nctdream.svg";

export const NctDream = () => {
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
                groupImg={nctdream}
                memberImg={memberImg}
                debut=""
                detail=" "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
