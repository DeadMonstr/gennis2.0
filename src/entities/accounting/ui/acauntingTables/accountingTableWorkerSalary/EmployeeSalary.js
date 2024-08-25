import {Table} from "../../../../../shared/ui/table";
import {Button} from "../../../../../shared/ui/button";
import cls from "./empSalary.module.sass"
import {Modal} from "../../../../../shared/ui/modal";
import React, {useMemo, useState} from "react";

import {Select} from "shared/ui/select";
import {useNavigate} from "react-router";
import {Pagination} from "../../../../../features/pagination";
import {useSelector} from "react-redux";
import {getSearchValue} from "../../../../../features/searchInput";

export const EmployeeSalary = ({
                                   changingData,
                                   filteredSalary,
                                   sum2,
                                   formatSalary,
                                   onChange,
                                   changePayment,
                                   setChangePayment,
                                   setChangingData,
                                   setActiveDelete,
                                   activeDelete,
                                   getCapitalType,
                                   onDelete
                               }) => {
    const navigate = useNavigate()
    const search = useSelector(getSearchValue)
    let PageSize = useMemo(() => 50, [])
    const [currentTableData, setCurrentTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    const searchedUsers = useMemo(() => {
        const filteredHeroes = filteredSalary?.slice()
        setCurrentPage(1)


        if (!search) return filteredHeroes

        return filteredHeroes.filter(item =>
            item.name?.toLowerCase().includes(search.toLowerCase())
        )
    }, [filteredSalary, setCurrentPage, search])
    const onDeleteModal = (data) => {
        setActiveDelete(true)
        console.log(data)
        console.log(changingData, "changing")

    }

    const changePaymentType = (data) => {
        setChangePayment(true)
        console.log(data, 'data')
    }

    const renderFilteredSalary = () => {
        return currentTableData.map((item, i) => (
            <>
                <tbody>
                <tr>
                    <td onClick={() => navigate(`./profile/${item.id}`)}>{i + 1}</td>
                    <td>{item?.user?.name} {item.user.surname}</td>
                    <td>{item?.salary}</td>
                    <td>{item?.date}</td>
                    <td>{item?.user?.job?.length ? item?.user?.job : "ish turi mavjud emas"}</td>
                    <td>
                        <div onClick={() => {
                            setChangingData({
                                id: item.id,
                                name: item.user.name,
                                surname: item.user.surname,
                                payment_types: item.payment_types.name,
                            });
                            changePaymentType({
                                id: item.id,
                                name: item.user.name,
                                surname: item.user.surname,
                                payment_types: item.payment_types.name,
                            })
                        }} className={cls.cash}>
                            {item?.payment_types?.name}
                        </div>
                    </td>
                    <td>
                        <div>
                            <Button
                                onClick={() => {
                                    onDeleteModal({
                                        id: item.id,
                                        name: item.user.name,
                                        surname: item.user.surname,
                                        payment_types: item.payment_types.name,
                                    })
                                    setChangingData({
                                        id: item.id,
                                        name: item.user.name,
                                        surname: item.user.surname,
                                        payment_types: item.payment_types.name,
                                    })


                                }}
                                type={"delete"}
                                children={
                                    <i className={"fa fa-times"} style={{color: "white"}}
                                    />
                                }
                            />
                        </div>
                    </td>
                </tr>
                </tbody>

            </>
        ))
    }
    const render2 = renderFilteredSalary()
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
                    }}>Total : {formatSalary(sum2)} sum
                    </div>
                </div>
                <Table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Ism Familiya</th>
                        <th>Oylik</th>
                        <th>Sana</th>
                        <th>Kasb</th>
                        <th>To'lov turi</th>
                        <th>O'chirish</th>
                    </tr>
                    </thead>
                    {render2}
                </Table>

                <Modal active={activeDelete} setActive={setActiveDelete}>
                    <div className={cls.modalHeader}> {changingData.name} {changingData.surname}'ning <br/> oyligini
                        o'chirmoqchimisz
                    </div>
                    <div className={cls.deletemodal}>
                        <Button type={"danger"} onClick={onDelete}>Xa</Button>
                        <Button onClick={() => setActiveDelete(!activeDelete)}>Yo'q</Button>
                    </div>
                </Modal>
                <Modal active={changePayment} setActive={setChangePayment}>

                    <h2>To'lov turini uzgartirish</h2>
                    <div className={cls.changeType}>
                        <Select title={changingData.payment_types} options={getCapitalType}
                                onChangeOption={(value) => onChange(value)}/>
                        {/*<Button onClick={onChange}>Tastiqlash</Button>*/}
                    </div>
                </Modal>
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

