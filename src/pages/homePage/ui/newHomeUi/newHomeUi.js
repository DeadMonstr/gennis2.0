import cls from "./newHomeUi.module.sass"
import {NewHomeFileDownload, NewHomeHeader} from "entities/newHomeUi";


export const NewHomeUi = () => {
    return (
        <div className={cls.wrapper}>

            <NewHomeFileDownload/>
        </div>
    );
};

