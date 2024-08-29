import React, {memo, useEffect, useMemo, useState} from "react";
import {getDeletedEmpSalary, getEmpSalary} from "../../../../entities/accounting/model/thunk/employerSalary";
import {useDispatch, useSelector} from "react-redux";
import {EmployeeSalary, getDeletedEmployer, getEmployerSalary, getLoading} from "entities/accounting";
import {DefaultPageLoader} from "../../../../shared/ui/defaultLoader";
import {getSearchValue} from "../../../../features/searchInput";
import {Pagination} from "../../../../features/pagination";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";
import {changePaymentType, onDeleteEmployerSalary} from "entities/accounting/model/slice/employerSalary";
import {Modal} from "../../../../shared/ui/modal";
import {Button} from "../../../../shared/ui/button";
import cls from "../accountingPageMain.module.sass"
import {Select} from "../../../../shared/ui/select";
import {getPaymentData} from "../../../../entities/profile/studentProfile";
import {getPaymentType} from "../../../../entities/capital/model/thunk/capitalThunk";
import {getCapitalTypes} from "../../../../entities/capital";
import {
    DeletedWorkerSalary
} from "../../../../entities/accounting/ui/acauntingTables/accountingTableWorkerSalary/deletedWorkerSalary";
import {onAddAlertOptions} from "../../../../features/alert/model/slice/alertSlice";
import {YesNo} from "../../../../shared/ui/yesNoModal";

export const EmployerSalaryPage = memo(({setPage}) => {
    const dispatch = useDispatch()
    const [changePayment, setChangePayment] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [archive, setArchive] = useState(false)
    const getSalary = useSelector(getEmployerSalary)
    const getDeletedEmployerSalary = useSelector(getDeletedEmployer)
    const loading = useSelector(getLoading)
    const {request} = useHttp()
    const [activeDelete, setActiveDelete] = useState(false)

    useEffect(() => {
        dispatch(getEmpSalary())
        dispatch(getPaymentType())
        dispatch(getDeletedEmpSalary())
    }, [deleted])
    const search = useSelector(getSearchValue)
    let PageSize = useMemo(() => 50, [])

    const [changingData, setChangingData] = useState({})
    const getCapitalType = useSelector(getCapitalTypes)

    const [currentTableData, setCurrentTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const sum1 = getDeletedEmployerSalary.reduce((a, c) => a + parseFloat(c.salary || 0), 0);
    const sum2 = getSalary.reduce((a, c) => a + parseFloat(c.salary || 0), 0);
    const formatSalary = (salary) => {
        return Number(salary).toLocaleString();
    };

    // const searchedUsers = useMemo(() => {
    //     const filteredHeroes = getSalary?.slice()
    //     setCurrentPage(1)
    //
    //
    //     if (!search) return filteredHeroes
    //
    //     return filteredHeroes.filter(item =>
    //         item.name?.toLowerCase().includes(search.toLowerCase())
    //     )
    //
    // }, [getSalary, getDeletedEmployerSalary, setCurrentPage, search])


    const onDelete = (data) => {
        const {id} = changingData
        request(`${API_URL}Users/salaries/delete/${id}/`, "DELETE", JSON.stringify(id), headers())
            .then(res => {
                console.log(res)
                setActiveDelete(!activeDelete)
                dispatch(onDeleteEmployerSalary({id: id}))
                dispatch(onAddAlertOptions({
                    status: true,
                    msg: res.msg,
                    type: "success"
                }))

            })
            .catch(err => {
                console.log(err)
            })


    }

    const onChange = (newPaymentType) => {
        const {id} = changingData;
        if (!newPaymentType) return;
        dispatch(changePaymentType({id: id, payment_types: newPaymentType}));
        // request(`${API_URL}Users/salaries/update/${id}/`, "PATCH", JSON.stringify({payment_types: newPaymentType}), headers())
        //     .then(res => {
        //         console.log(res);
        //
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });


    }


    return loading ? <DefaultPageLoader/> : (
        <div>
            <div style={{display: "flex"}}>
                <Button type={"danger"} onClick={() => setDeleted(!deleted)}>
                    Deleted
                </Button>
                <Button onClick={() => setArchive(!archive)} type={"simple__add"}>
                    Arxiv
                </Button>
            </div>

            {deleted ? <DeletedWorkerSalary
                    sum2={sum1}
                    filteredDeletedSalary={getDeletedEmployerSalary}
                    formatSalary={formatSalary}/> :
                <EmployeeSalary
                    changingData={changingData}
                    sum2={sum2}
                    formatSalary={formatSalary}
                    filteredSalary={getSalary}
                    setChangingData={setChangingData}
                    changePayment={changePayment}
                    activeDelete={activeDelete}
                    setActiveDelete={setActiveDelete}
                    setChangePayment={setChangePayment}
                    getCapitalType={getCapitalType}
                    onChange={onChange}

                />

            }
            <YesNo activeDelete={activeDelete} setActiveDelete={setActiveDelete} onDelete={onDelete} changingData={changingData}/>
            {/*<Pagination*/}
            {/*    setCurrentTableData={setCurrentTableData}*/}
            {/*    users={searchedUsers}*/}
            {/*    setCurrentPage={setCurrentPage}*/}
            {/*    currentPage={currentPage}*/}
            {/*    pageSize={PageSize}*/}
            {/*    onPageChange={page => {*/}
            {/*        setCurrentPage(page)*/}
            {/*    }}*/}
            {/*    type={"custom"}*/}
            {/*/>*/}
        </div>
    );
})
