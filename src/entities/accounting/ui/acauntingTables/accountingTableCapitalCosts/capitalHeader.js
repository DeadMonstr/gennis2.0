import {Button} from "shared/ui/button";
import cls from "./accountingCapitalCosts.module.sass"
export const CapitalHeader = ({setActive , deleted , setDeleted}) => {
    return (
        <div className={cls.headerBtn}>
            <Button onClick={() => setActive(true)}>Qo'shish</Button>
            <Button onClick={() => setDeleted(!deleted)} type={"danger"}>O'chirilgan</Button>
            <Button type={"filter"}>Archive</Button>
        </div>
    );
};

