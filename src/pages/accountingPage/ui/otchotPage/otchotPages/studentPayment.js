import {Select} from "shared/ui/select";
import cls from "../otchot.module.sass"
import {useCallback, useEffect, useState} from "react";
import {value} from "lodash/seq";
import {PaymentTable} from "../../../../../entities/accounting";
import {useDispatch, useSelector} from "react-redux";
import {getClasses} from "../../../../../entities/accounting/model/selector/otchotAccountingSelector";
import {getAll, getStudentPayment} from "../../../../../entities/accounting/model/thunk/otchotAccountingThunk";
import {getBranch} from "../../../../../features/branchSwitcher";
import {API_URL, headers, useHttp} from "../../../../../shared/api/base";
import {useForm} from "react-hook-form";
import {Form} from "../../../../../shared/ui/form";


export const StudentPayment = () => {

    const classes = useSelector(getClasses)

    const [month, setMonths] = useState(null)

    const [year, setYear] = useState(null)

    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const {request} = useHttp()
    const branchID = useSelector(getBranch)
    useEffect(() => {
        dispatch(getStudentPayment(branchID.id))
        if (year && month) {
            request(`${API_URL}Encashment/student_payments/?branch=${branchID.id}`, "POST", JSON.stringify({
                year: year,
                month: month
            }), headers())
                .then(res => {
                    dispatch(getStudentPayment(branchID.id))
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [month , year])



    return (
        <div>
            <div className={cls.paymentType}>

                    <Select
                        register={register}
                        extraClass={cls.select}
                        name={"year"}
                        options={classes?.dates?.map(item => item?.year)}
                        onChangeOption={setYear}
                    />

                    {year ? <Select
                        register={register}
                        name={"month"}
                        extraClass={cls.select}
                        options={classes?.dates?.filter(item => item.year === +year)[0]?.months}
                        onChangeOption={setMonths}
                    /> : null}


            </div>
            <PaymentTable extraClass={cls.tableHeader} extraClassTable={cls.table} classes={classes}/>
        </div>
    );
};

