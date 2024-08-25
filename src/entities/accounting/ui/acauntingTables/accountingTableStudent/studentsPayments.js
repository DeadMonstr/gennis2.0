import {Table} from "shared/ui/table";
import {Button} from "shared/ui/button";
import {Modal} from "../../../../../shared/ui/modal";
import React, {useMemo, useState} from "react";
import cls from "../accountingTableWorkerSalary/empSalary.module.sass";
import {Select} from "../../../../../shared/ui/select";
import {Pagination} from "../../../../../features/pagination";
import {useSelector} from "react-redux";
import {getSearchValue} from "../../../../../features/searchInput";


export const StudentsPayments = ({
                                     studentData,
                                     changingData,
                                     setChangingData,
                                     onDelete,
                                     deleted,
                                     activeDelete,
                                     setActiveDelete
                                 }) => {

    const search = useSelector(getSearchValue)
    let PageSize = useMemo(() => 50, [])
    const [currentTableData, setCurrentTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const searchedUsers = useMemo(() => {
        const filteredHeroes = studentData?.slice()
        setCurrentPage(1)


        if (!search) return filteredHeroes

        return filteredHeroes.filter(item =>
            item.name?.toLowerCase().includes(search.toLowerCase())
        )
    }, [studentData, setCurrentPage, search])
    const formatSalary = (payment_sum) => {
        return Number(payment_sum).toLocaleString();
    };
    const sum2 = studentData.reduce((a, c) => a + parseFloat(c.payment_sum || 0), 0);



    const onDeleteModal = (data) => {
        setActiveDelete(true)
    }
    const renderStudents = () => {
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
                <td>
                    <div>
                        <Button
                            onClick={() => {
                                onDeleteModal({
                                    id: item.id,
                                    name: item?.student?.user?.name,
                                    surname: item?.student?.user?.surname
                                })
                                setChangingData({
                                    id: item.id,
                                    name: item?.student?.user?.name,
                                    surname: item?.student?.user?.surname
                                })
                            }
                            }
                            type={"delete"}
                            children={<i className={"fa fa-times"} style={{color: "white"}}/>}
                        />
                    </div>
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
                        <th>Ochirich</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderStudents()}
                    {/*{deleted ? renderDeletedStudents() : renderStudents()}*/}
                    </tbody>
                </Table>
                <Modal active={activeDelete} setActive={setActiveDelete}>
                    <div className={cls.modalHeader}>{changingData.name} {changingData.surname}'ning <br/> to'lovlarini
                        o'chirmoqchimisz
                    </div>
                    <div className={cls.deletemodal}>
                        <Button type={"danger"} onClick={onDelete}>Xa</Button>
                        <Button onClick={() => setActiveDelete(!activeDelete)}>Yo'q</Button>
                    </div>
                </Modal>
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

// onDelete(item.id)