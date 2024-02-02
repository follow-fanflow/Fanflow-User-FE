import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import newjeans from "../../assets/imgs/idol/newjeans/newjeans.svg";

export const Newjeans = () => {
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
                groupImg={newjeans}
                memberImg={memberImg}
                debut=""
                detail=" "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
