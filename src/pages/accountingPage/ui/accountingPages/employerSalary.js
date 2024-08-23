import React, {memo, useEffect, useMemo, useState} from "react";
import {getDeletedEmpSalary, getEmpSalary} from "../../../../entities/accounting/model/thunk/employerSalary";
import {useDispatch, useSelector} from "react-redux";
import {EmployeeSalary, getDeletedEmployer, getEmployerSalary, getLoading} from "entities/accounting";
import {DefaultPageLoader} from "../../../../shared/ui/defaultLoader";
import {getSearchValue} from "../../../../features/searchInput";
import {Pagination} from "../../../../features/pagination";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";
import {onDeleteEmployerSalary} from "entities/accounting/model/slice/employerSalary";
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

export const EmployerSalaryPage = memo(({setPage}) => {
    const dispatch = useDispatch()
    const [changePayment, setChangePayment] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [archive, setArchive] = useState(false)
    const getSalary = useSelector(getEmployerSalary)
    const getDeletedEmployerSalary = useSelector(getDeletedEmployer)
    const loading = useSelector(getLoading)
    const {request} = useHttp()

    useEffect(() => {
        dispatch(getEmpSalary())
        dispatch(getDeletedEmpSalary())
    }, [])
    const search = useSelector(getSearchValue)
    let PageSize = useMemo(() => 50, [])
    const [currentTableData, setCurrentTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [changingData, setChangingData] = useState({})
    const [activeDelete ,setActiveDelete] = useState({})


    const getCapitalType = useSelector(getCapitalTypes)


    const sum1 = getDeletedEmployerSalary.reduce((a, c) => a + parseFloat(c.salary || 0), 0);
    const sum2 = getSalary.reduce((a, c) => a + parseFloat(c.salary || 0), 0);
    const formatSalary = (salary) => {
        return Number(salary).toLocaleString();
    };

    const searchedUsers = useMemo(() => {
        const filteredHeroes = getSalary?.slice()
        setCurrentPage(1)


        if (!search) return filteredHeroes

        return filteredHeroes.filter(item =>
            item.name?.toLowerCase().includes(search.toLowerCase())
        )

    }, [getSalary, getDeletedEmployerSalary, setCurrentPage, search])


    const onDelete = (data) => {
        // const {id} = data
        const newData ={
            id: activeDelete.id
        }
        console.log(newData , "newData")
        // console.log(id , "hello")
        // request(`${API_URL}Users/salaries/delete/${id}/`, "DELETE", JSON.stringify(id), headers())
        //     .then(res => {
        //         console.log(res)
        //         setActiveDelete(!activeDelete)
        //         dispatch(onDeleteEmployerSalary({id: id}))
        //
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })


    }

    const onChange = (id) => {
        console.log(id)
        setChangePayment(!changePayment)
        // console.log(changePayment)
    }

    const onDeleteModal = (id) => {
        console.log(id)
        setActiveDelete(!activeDelete)

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

                    sum2={sum2}
                    formatSalary={formatSalary}
                    filteredSalary={currentTableData}
                    setChangingData={setChangingData}
                    deleted={onDelete}
                    changePayment={changePayment}
                    setChangePayment={setChangePayment}
                    onChange={onChange}
                    activeDeleted={activeDelete}
                    onDeleteModal={onDeleteModal}/>}

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
            <Modal active={changePayment} setActive={setChangePayment}>
                <div className={cls.changeType}>
                    <Select title={changingData.payment_types}/>
                </div>
            </Modal>
            <Modal active={activeDelete} setActive={setActiveDelete}>
                <h2>Rostanham <br/> o'chirmoqchimisz</h2>
                <div style={{display: "flex" , paddingTop: "3rem"}}>
                    <Button type={"danger"} onClick={onDelete}>Delete</Button>
                    <Button onClick={() => setActiveDelete(!activeDelete)}>Cancel</Button>
                </div>
            </Modal>
        </div>
    );
})
