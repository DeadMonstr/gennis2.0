import cls from "./accountingHeader.module.sass"
import {Button} from "shared/ui/button";
import {Select} from "shared/ui/select";
import {memo} from "react";

import {Radio} from "shared/ui/radio";


export const AccountingHeader = memo(({setPage ,options, handleChange, number, typeExpenses , setSelectedRadio , selectedRadio}) => {
    console.log(options , "opr")
    return (
        <div className={cls.accounting}>
            <div className={cls.accounting__wrapper}>
                <div className={cls.wrapper__filter}>
                    <Button type={"filter"} status={"filter"}>Filter</Button>
                    <Select options={options} onChangeOption={setPage}/>
                </div>
                <div className={cls.wrapper__middle}>
                    <div className={cls.middle__box}>
                        {number.map(item => (
                            <div>{item.name}: {item.number}</div>
                        ))}
                    </div>
                    <div className={cls.typeExpenses}>
                        {typeExpenses.map(item => (
                            <div>
                                <Radio
                                    onChange={() => handleChange(item.name)}
                                    checked={selectedRadio === item.name}
                                    type={"radio"}/>
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});

