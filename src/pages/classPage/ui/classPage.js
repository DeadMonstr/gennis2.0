import {ClassTable} from "entities/class";
import {ClassHeader} from "entities/class";
import cls from "./classPage.module.sass"
import {ClassFilter} from "entities/class"
export const ClassPage = () => {
    return (
        <div className={cls.class}>
            <ClassHeader/>
            <ClassFilter/>
            <ClassTable/>

        </div>
    )
}