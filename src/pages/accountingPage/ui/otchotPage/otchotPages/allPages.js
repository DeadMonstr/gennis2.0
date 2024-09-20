import cls from "../otchot.module.sass";
import {Select} from "../../../../../shared/ui/select";
import {useEffect, useState} from "react";
import {AllTable} from "../../../../../entities/accounting/ui/accountingOtchot/allTable";
import {useDispatch, useSelector} from "react-redux";
import {getAll} from "../../../../../entities/accounting/model/thunk/otchotAccountingThunk";
import {getBranch} from "../../../../../features/branchSwitcher";

export const AllPages = () => {

    const dispatch = useDispatch()
    const branchId = useSelector(getBranch)
    useEffect(() => {
        dispatch(getAll({branchId : branchId.id}))
    }, [])

    const [month, setMonths] = useState(null)

    const [year, setYear] = useState(null)
    return (
        <div>
            {/*<div className={cls.paymentType}>*/}
            {/*    <Select extraClass={cls.select} options={classes?.dates?.map(item => item.year)}*/}
            {/*            onChangeOption={setYear}/>*/}
            {/*    {*/}
            {/*        year ?*/}
            {/*            <Select*/}
            {/*                extraClass={cls.select}*/}
            {/*                options={classes.dates.filter(item => item.year === +year)[0].months}*/}
            {/*                onChangeOption={setMonths}/>*/}
            {/*            : null*/}
            {/*    }*/}
            {/*</div>*/}

            {/*<AllTable/>*/}
        </div>
    );
};

