import cls from "../accountingTableWorkerSalary/empSalary.module.sass";
import {Table} from "../../../../../shared/ui/table";
import {Modal} from "../../../../../shared/ui/modal";
import {Button} from "../../../../../shared/ui/button";
import {Pagination} from "../../../../../features/pagination";
import React, {useMemo, useState} from "react";
import {useSelector} from "react-redux";
import {getSearchValue} from "../../../../../features/searchInput";

export const DeletedStudentPayment = ({deletedStudent  , }) => {
    const search = useSelector(getSearchValue)
    let PageSize = useMemo(() => 50, [])
    const [currentTableData, setCurrentTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const searchedUsers = useMemo(() => {
        const filteredHeroes = deletedStudent?.slice()
        setCurrentPage(1)


        if (!search) return filteredHeroes

        return filteredHeroes.filter(item =>
            item.name?.toLowerCase().includes(search.toLowerCase())
        )
    }, [deletedStudent, setCurrentPage, search])

    const formatSalary = (payment_sum) => {
        return Number(payment_sum).toLocaleString();
    };
    const sum2 = deletedStudent.reduce((a, c) => a + parseFloat(c.payment_sum || 0), 0);
    const renderDeletedStudents = () => {
        return currentTableData.map((item, i) => (
            <tr>
                <td>{i + 1}</td>
                <td>{item?.student?.user?.name} {item?.student?.user?.surname}</td>
                <td>{formatSalary(item.payment_sum)}</td>
                <td>{item.added_data}</td>
                <td>
                    <div style={{
                        border: "1px solid",
                        width: "fit-content",
                        padding: "5px 10px",
                        borderRadius: "15px",
                        textTransform: "capitalize",
                        cursor: "pointer"
                    }}>{item?.payment_type?.name}</div>
                </td>
            </tr>
        ))
    }
    return (
        <>
            <div className={cls.empSalary}>
                <div style={{
                    // textAlign: "right",
                    display: "flex",
                    justifyContent: "flex-end"
                }}>

                    <div style={{
                        alignSelf: "flex-end",
                        fontSize: "2rem",
                        color: "#22C55E",
                        padding: "1rem 2rem 1rem 1rem",
                        borderRadius: "5px",
                        marginBottom: "10px"
                    }}>
                        {/*Total : {deleted ? formatSalary(sum1) : formatSalary(sum2)} sum*/}
                        Total : {formatSalary(sum2)} sum
                    </div>
                </div>
                <Table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Ism Familiya</th>
                        <th>To'lov</th>
                        <th>Sana</th>
                        <th>To'lov turi</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderDeletedStudents()}
                    {/*{deleted ? renderDeletedStudents() : renderStudents()}*/}
                    </tbody>
                </Table>

                {/*<Modal active={changePayment} setActive={setChangePayment}>*/}
                {/*    <h2>To'lov turini uzgartirish</h2>*/}
                {/*    <div className={cls.changeType}>*/}
                {/*        <Select title={changingData.payment_types} options={getCapitalType}*/}
                {/*                onChangeOption={(value) => onChange(value)}/>*/}
                {/*        /!*<Button onClick={onChange}>Tastiqlash</Button>*!/*/}
                {/*    </div>*/}
                {/*</Modal>*/}


            </div>

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
        </>
    );
};

