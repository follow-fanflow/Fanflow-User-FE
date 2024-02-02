import { IntroduceComp } from "../../components/introduceIdol/introduceComp";
import txt from "../../assets/imgs/idol/txt/txt.svg";

export const TxT = () => {
    const member = ["", ];
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
                groupImg={txt}
                memberImg={memberImg}
                debut=""
                detail=" "
                memberBirthday={memberBirshday}
            />
        </>
    );
};
