import {useEffect, useState} from "react";

import {Table} from "shared/ui/table";
import {Select} from "shared/ui/select";
import {value} from "lodash/seq";
import {getAll} from "../../model/thunk/otchotAccountingThunk";
import {useDispatch, useSelector} from "react-redux";
import {getBranch} from "../../../../features/branchSwitcher";
import {useHttp, API_URL, headers} from "../../../../shared/api/base";
import {getFilteredAll} from "../../model/slice/otchotAccountingSlice";
import cls from "./allTable.module.sass";


export const AllTable = ({allTable}) => {

    console.log(allTable, "allTable")

    const {request} = useHttp()
    const dispatch = useDispatch()
    const branchId = useSelector(getBranch)

    const option = allTable?.payment_results?.map(item => ({
        name: item.payment_type
    }))
    const [selected, setSelected] = useState(null)
    const [selectedYear, setSelectedYear] = useState(null)
    const [selectedMonth, setSelectedMonth] = useState(null)
    const renderPayment = () => {
        switch (selected) {
            // case "cash" :
            //     return <h1>hello</h1>
            //
            case "click" :
                return <TableClick alltable={allTable}/>
            case "bank" :
                return <TableBank alltable={allTable}/>
            default:
                return <TableCash alltable={allTable}/>
        }
    }

    useEffect(() => {
        if (selectedMonth && selectedYear) {
            const res = {
                year: selectedYear,
                month: selectedMonth
            }
            request(`${API_URL}Encashment/encashment_school/`, "POST", JSON.stringify({branch : branchId.id, ...res}), headers())
                .then(res => {
                    dispatch(getFilteredAll(res))
                    console.log(res)
                })
        }
    }, [branchId.id, selectedYear, selectedMonth])

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
            }}
        >
            <div
                style={{
                    display: "flex",
                    gap: "2rem"
                }}
            >
                <Select options={option} onChangeOption={setSelected} defaultValue={"cash"}/>
                <Select
                    options={allTable?.dates?.map(item => ({
                        name: item?.year,
                        id: item?.year,
                    }))}
                    onChangeOption={setSelectedYear}
                    defaultValue={allTable?.dates?.map(item => ({
                        name: item?.year,
                        id: item?.year,
                    }))[0]?.id}
                />
                {selectedYear && <Select
                    options={
                        allTable?.dates
                            ?.filter(item => item.year === +selectedYear)[0]?.months
                    }
                    onChangeOption={setSelectedMonth}
                    defaultValue={allTable?.dates
                        ?.filter(item => item.year === +selectedYear)[0]?.months[0]}
                />}
            </div>
            {renderPayment()}
        </div>
    );
};


const TableCash = ({alltable}) => {
    const allTable = alltable?.payment_results

    if (!allTable) return null
    return (
        <>
            <div className={cls.list}>
                <h2 className={cls.list__title}>O'quvchilar</h2>
                <div className={cls.list__container}>
                    <div className={cls.otchot}>
                        Umumiy qarz <br/> {allTable[0]?.students?.total_debt}
                    </div>
                    <div className={cls.otchot}>
                        Qolgan qarz <br/> {allTable[0]?.students?.remaining_debt}
                    </div>
                    <div className={cls.otchot}>
                        To'langan qarz <br/> {allTable[0]?.students?.student_total_payment}
                    </div>
                </div>
            </div>
            <div className={cls.list}>
                <h2 className={cls.list__title}>O'qituvchilar</h2>
                <div className={cls.list__container}>
                    <div className={cls.otchot}>
                        Umumiy oylik <br/> {allTable[0]?.teachers?.total_salary}
                    </div>
                    <div className={cls.otchot}>
                        Qolgan oylik <br/> {allTable[0]?.teachers?.remaining_salary}
                    </div>
                    <div className={cls.otchot}>
                        To'langan oylik <br/> {allTable[0]?.teachers?.taken}
                    </div>
                </div>
            </div>
            <div className={cls.list}>
                <h2 className={cls.list__title}>Ishchilar</h2>
                <div className={cls.list__container}>
                    <div className={cls.otchot}>
                        Umumiy oylik <br/> {allTable[0]?.workers?.total_salary}
                    </div>
                    <div className={cls.otchot}>
                        Qolgan oylik <br/> {allTable[0]?.workers?.remaining_salary}
                    </div>
                    <div className={cls.otchot}>
                        To'langan oylik <br/> {allTable[0]?.workers?.taken}
                    </div>
                </div>
            </div>
            <div className={cls.list}>
                <h2 className={cls.list__title}>Qo'shimcha to'lovlar</h2>
                <div className={cls.list__container}>
                    {
                        Object.entries(allTable[0]?.overheads).map(([key, value]) => (
                            <div className={cls.otchot}>
                                {
                                    key?.includes("total") ?
                                        "Umumiy to'lovlar" :
                                    key?.replace('_', " ")
                                } <br/> {value}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={cls.list}>
                <h2 className={cls.list__title}>Kapital</h2>
                <div className={cls.list__container}>
                    <div className={cls.otchot}>
                        {/*Kapital <br/> */}
                        {allTable[0]?.capitals?.total_capital}
                    </div>
                </div>
            </div>
            <div className={cls.list}>
                <h2 className={cls.list__title}>Umumiy foyda</h2>
                <div className={cls.list__container}>
                    <div className={cls.otchot}>
                        {allTable[0]?.payment_total}
                    </div>
                </div>
            </div>
        </>
    )
}

const TableClick = ({alltable}) => {

    const allTable = alltable?.payment_results

    return (
        <>
            <div className={cls.list}>
                <h2 className={cls.list__title}>O'quvchilar</h2>
                <div className={cls.list__container}>
                    <div className={cls.otchot}>
                        Umumiy qarz <br/> {allTable[1]?.students?.total_debt}
                    </div>
                    <div className={cls.otchot}>
                        Qolgan qarz <br/> {allTable[1]?.students?.remaining_debt}
                    </div>
                    <div className={cls.otchot}>
                        To'langan qarz <br/> {allTable[1]?.students?.student_total_payment}
                    </div>
                </div>
            </div>
            <div className={cls.list}>
                <h2 className={cls.list__title}>O'qituvchilar</h2>
                <div className={cls.list__container}>
                    <div className={cls.otchot}>
                        Umumiy oylik <br/> {allTable[1]?.teachers?.total_salary}
                    </div>
                    <div className={cls.otchot}>
                        Qolgan oylik <br/> {allTable[1]?.teachers?.remaining_salary}
                    </div>
                    <div className={cls.otchot}>
                        To'langan oylik <br/> {allTable[1]?.teachers?.taken}
                    </div>
                </div>
            </div>
            <div className={cls.list}>
                <h2 className={cls.list__title}>Ishchilar</h2>
                <div className={cls.list__container}>
                    <div className={cls.otchot}>
                        Umumiy oylik <br/> {allTable[1]?.workers?.total_salary}
                    </div>
                    <div className={cls.otchot}>
                        Qolgan oylik <br/> {allTable[1]?.workers?.remaining_salary}
                    </div>
                    <div className={cls.otchot}>
                        To'langan oylik <br/> {allTable[1]?.workers?.taken}
                    </div>
                </div>
            </div>
            <div className={cls.list}>
                <h2 className={cls.list__title}>Qo'shimcha to'lovlar</h2>
                <div className={cls.list__container}>
                    {
                        Object.entries(allTable[1]?.overheads).map(([key, value]) => (
                            <div className={cls.otchot}>
                                {
                                    key?.includes("total") ?
                                        "Umumiy to'lovlar" :
                                        key?.replace('_', " ")
                                } <br/> {value}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={cls.list}>
                <h2 className={cls.list__title}>Kapital</h2>
                <div className={cls.list__container}>
                    <div className={cls.otchot}>
                        {allTable[1]?.capitals?.total_capital}
                    </div>
                </div>
            </div>
            <div className={cls.list}>
                <h2 className={cls.list__title}>Umumiy foyda</h2>
                <div className={cls.list__container}>
                    <div className={cls.otchot}>
                        {allTable[1]?.payment_total}
                    </div>
                </div>
            </div>
        </>
    )
}


const TableBank = ({alltable}) => {

    const allTable = alltable?.payment_results

    return (
        <>
            <div className={cls.list}>
                <h2 className={cls.list__title}>O'quvchilar</h2>
                <div className={cls.list__container}>
                    <div className={cls.otchot}>
                        Umumiy qarz <br/> {allTable[2]?.students?.total_debt}
                    </div>
                    <div className={cls.otchot}>
                        Qolgan qarz <br/> {allTable[2]?.students?.remaining_debt}
                    </div>
                    <div className={cls.otchot}>
                        To'langan qarz <br/> {allTable[2]?.students?.student_total_payment}
                    </div>
                </div>
            </div>
            <div className={cls.list}>
                <h2 className={cls.list__title}>O'qituvchilar</h2>
                <div className={cls.list__container}>
                    <div className={cls.otchot}>
                        Umumiy oylik <br/> {allTable[2]?.teachers?.total_salary}
                    </div>
                    <div className={cls.otchot}>
                        Qolgan oylik <br/> {allTable[2]?.teachers?.remaining_salary}
                    </div>
                    <div className={cls.otchot}>
                        To'langan oylik <br/> {allTable[2]?.teachers?.taken}
                    </div>
                </div>
            </div>
            <div className={cls.list}>
                <h2 className={cls.list__title}>Ishchilar</h2>
                <div className={cls.list__container}>
                    <div className={cls.otchot}>
                        Umumiy oylik <br/> {allTable[2]?.workers?.total_salary}
                    </div>
                    <div className={cls.otchot}>
                        Qolgan oylik <br/> {allTable[2]?.workers?.remaining_salary}
                    </div>
                    <div className={cls.otchot}>
                        To'langan oylik <br/> {allTable[2]?.workers?.taken}
                    </div>
                </div>
            </div>
            <div className={cls.list}>
                <h2 className={cls.list__title}>Qo'shimcha to'lovlar</h2>
                <div className={cls.list__container}>
                    {
                        Object.entries(allTable[2]?.overheads).map(([key, value]) => (
                            <div className={cls.otchot}>
                                {
                                    key?.includes("total") ?
                                        "Umumiy to'lovlar" :
                                        key?.replace('_', " ")
                                } <br/> {value}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={cls.list}>
                <h2 className={cls.list__title}>Kapital</h2>
                <div className={cls.list__container}>
                    <div className={cls.otchot}>
                        {allTable[2]?.capitals?.total_capital}
                    </div>
                </div>
            </div>
            <div className={cls.list}>
                <h2 className={cls.list__title}>Umumiy foyda</h2>
                <div className={cls.list__container}>
                    <div className={cls.otchot}>
                        {allTable[2]?.payment_total}
                    </div>
                </div>
            </div>
        </>
    )
}

