import cls from "../otchot.module.sass";
import {Select} from "../../../../../shared/ui/select";
import {PaymentTable} from "../../../../../entities/accounting";
import {useState} from "react";

export const TeacherSalary = () => {


    const [month, setMonths] = useState(null)

    const [year, setYear] = useState(null)

    return (
        <div>
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
                {/*<PaymentTable extraClass={cls.tableHeader} extraClassTable={cls.table} classes={classes}/>*/}
            </div>
        </div>
    );
};

