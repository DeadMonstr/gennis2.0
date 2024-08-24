import {TeachersSalary} from "entities/accounting";
import {useDispatch, useSelector} from "react-redux";
import { getTeacherSalaryData} from "entities/accounting/model/selector/teacher";
import {onDeleteTeacherSalary , onChangePayment} from "entities/accounting/model/slice/teacher";
import React, {useEffect, useMemo, useState} from "react";
import {Button} from "shared/ui/button";
import {Pagination} from "features/pagination";
import {getSearchValue} from "features/searchInput";
import cls from "../accountingPageMain.module.sass";
import {Select} from "shared/ui/select";
import {Modal} from "shared/ui/modal";
import {getCapitalTypes} from "entities/capital";
import {getPaymentType} from "entities/capital/model/thunk/capitalThunk";
import {getTeacherSalary} from "../../../../entities/accounting/model/thunk/teacherSalarythunk";


export const TeacherSalaryPage = () => {

    const dispatch = useDispatch()
    const teacherSalary = useSelector(getTeacherSalaryData)
    console.log(teacherSalary)
    const [changingData, setChangingData] = useState({})
    const [changePayment, setChangePayment] = useState(false)
    const search = useSelector(getSearchValue)
    let PageSize = useMemo(() => 50, [])
    const [currentTableData, setCurrentTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    const getPaymentTypes = useSelector(getCapitalTypes)

    useEffect(() => {
        dispatch(getPaymentType())
        dispatch(getTeacherSalary())
    }, [])

    const searchedUsers = useMemo(() => {
        const filteredHeroes = teacherSalary?.slice()
        setCurrentPage(1)


        if (!search) return filteredHeroes

        return filteredHeroes.filter(item =>
            item.name?.toLowerCase().includes(search.toLowerCase())
        )
    }, [teacherSalary, setCurrentPage, search])

    const [deleted , setDeleted] = useState(false)
    const onDelete = (id) => {
        dispatch(onDeleteTeacherSalary({id : id}))
    }
    // const onChangeType = (id) =>{
    //     console.log(id)
    //     dispatch(onChangePayment({id : id}))
    // }


    const onChangeType = (selectedValue) => {
        dispatch(onChangePayment({
            id: changingData.id,
            payment_types: selectedValue
        }));
        setChangePayment(false);
    };
    const currentPaymentType = getPaymentTypes.find(type => type.value === changingData.payment_types);
    return (
        <div>
            <div style={{display: "flex" , gap: "2rem"}}>
                <Button type={"simple__add"}>
                    Archive
                </Button>
                <Button type={"danger"} onClick={() => setDeleted(!deleted)}>
                    Deleted
                </Button>
            </div>

            <TeachersSalary setChangingData={setChangingData} changePayment={changePayment} setChangePayment={setChangePayment} onDelete={onDelete} deleted={deleted} teacherSalary={currentTableData}/>
            <Pagination
                setCurrentTableData={setCurrentTableData}
                users={searchedUsers}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageSize={PageSize}
                onPageChange={page => {
                    setCurrentPage(page)
                }}
                type={"custom"}
            />
            {/*<Modal active={changePayment} setActive={setChangePayment}>*/}
            {/*    <div className={cls.changeType}>*/}
            {/*        <Select options={getPaymentTypes} onChangeOption={onChangeType} title={changingData.payment_types}/>*/}
            {/*    </div>*/}
            {/*</Modal>*/}

            <Modal active={changePayment} setActive={setChangePayment}>
                <div className={cls.changeType}>
                    <Select
                        options={getPaymentTypes}
                        onChangeOption={onChangeType}
                        // value={currentPaymentType ? currentPaymentType.value : ""}
                        title="Select payment type"
                    />
                </div>
            </Modal>
        </div>
    );
};

