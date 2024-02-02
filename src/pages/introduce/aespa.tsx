import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import aespa from "../../assets/imgs/idol/aespa/aespa.svg";

export const Aespa = () => {
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
                groupImg={aespa}
                memberImg={memberImg}
                debut=""
                detail=" "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
