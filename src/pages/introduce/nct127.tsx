import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import nct127 from "../../assets/imgs/idol/nct127/nct127.svg";

export const Nct127 = () => {
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
                groupImg={nct127}
                memberImg={memberImg}
                debut=""
                detail=" "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
