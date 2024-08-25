import cls from "./accountingHeader.module.sass"
import {Input} from "shared/ui/input";
import {Radio} from "shared/ui/radio";


export const AccountingHeader = ({paymentType , onChange , setSelectedRadio }) => {

    return (
        <div className={cls.accounting}>
            <div className={cls.accounting__header}>
                <Input type={"date"}/>
                <Input type={"date"}/>
            </div>
            <div className={cls.accounting__payment}>
                {paymentType.map(item => (
                    <Radio  children={item.name} checked={setSelectedRadio === item.name}  onChange={() => onChange(item.name)}/>
                ))}
            </div>
        </div>
    );
};

