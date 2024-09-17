import {Select} from "shared/ui/select";
import cls from "../otchot.module.sass"
import {useCallback, useState} from "react";
import {value} from "lodash/seq";
import {PaymentTable} from "../../../../../entities/accounting";
import {useSelector} from "react-redux";
import {getClasses} from "../../../../../entities/accounting/model/selector/otchotAccountingSelector";


const months = [
    {num: 1, id: 1},
    {num: 2, id: 2},
]
const days = [
    {num: 1, id: 1},
    {num: 2, id: 2},
]
export const StudentPayment = () => {

    const classes = useSelector(getClasses)



    const [month, setMonths] = useState(null)

    const [day, setDays] = useState(null)
    return (
        <div>
            <div className={cls.paymentType}>
                <Select extraClass={cls.select} options={months} onChangeOption={setMonths}/>
                <Select extraClass={cls.select} options={days} onChangeOption={setDays}/>
            </div>


            <PaymentTable extraClass={cls.tableHeader} extraClassTable={cls.table} classes={classes}/>
        </div>
    );
};

