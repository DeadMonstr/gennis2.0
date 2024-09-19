import {Select} from "shared/ui/select";
import cls from "../otchot.module.sass"
import {useCallback, useEffect, useState} from "react";
import {value} from "lodash/seq";
import {PaymentTable} from "../../../../../entities/accounting";
import {useDispatch, useSelector} from "react-redux";
import {getClasses} from "../../../../../entities/accounting/model/selector/otchotAccountingSelector";
import {getStudentPayment} from "../../../../../entities/accounting/model/thunk/otchotAccountingThunk";
import {getBranch} from "../../../../../features/branchSwitcher";


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


    const dispatch = useDispatch()

    const branchID = useSelector(getBranch)
    useEffect(() => {
        dispatch(getStudentPayment(branchID.id))
    }, [])


    const [month, setMonths] = useState(null)

    const [year, setYear] = useState(null)

    console.log(year , month , "hello")
    return (
        <div>
            <div className={cls.paymentType}>
                <Select extraClass={cls.select} options={classes?.dates?.map(item => item.year)}
                        onChangeOption={setYear}/>
                {
                    year ?
                        <Select
                            extraClass={cls.select}
                            options={classes.dates.filter(item => item.year === +year)[0].months}
                            onChangeOption={setMonths}/>
                        : null
                }

            </div>
            <PaymentTable extraClass={cls.tableHeader} extraClassTable={cls.table} classes={classes}/>
        </div>
    );
};

