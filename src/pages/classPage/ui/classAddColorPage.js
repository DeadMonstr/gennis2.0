import {ClassColorAdd, ClassColorAddFilter, ClassColorAddTable} from "entities/class";
import cls from "./classPage.module.sass"
export const ClassAddColorPage = () => {
    return (
        <div className={cls.class}>
            <ClassColorAdd/>
            <ClassColorAddFilter/>
            <ClassColorAddTable/>
        </div>
    );
};

