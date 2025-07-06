import {
    NewHomeCurriculum,
    NewHomeDailyLife,
    NewHomeFileDownload,
    NewHomeHeader,
    NewHomePrincipal
} from "entities/newHomeUi";

import cls from "./newHomeUi.module.sass"


export const NewHomeUi = () => {
    return (
        <div className={cls.wrapper}>

            <NewHomeHeader/>
            <div style={{padding: "10rem 0" }}>
                {/*<NewHomePrincipal/>*/}
                {/*<NewHomeDailyLife/>*/}
                {/*<NewHomeFileDownload/>*/}
                <NewHomeCurriculum/>
            </div>

        </div>
    );
};

