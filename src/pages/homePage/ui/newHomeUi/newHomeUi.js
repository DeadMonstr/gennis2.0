import cls from "./newHomeUi.module.sass"
import {NewHomeFileDownload, NewHomeHeader} from "entities/newHomeUi";


export const NewHomeUi = () => {
    return (
        <div className={cls.wrapper}>

            <NewHomeHeader/>
            <div style={{padding: "10rem 0" }}>
                <NewHomeFileDownload/>
            </div>

        </div>
    );
};

