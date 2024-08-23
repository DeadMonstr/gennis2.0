import {Table} from "../../../../../shared/ui/table";
import {Button} from "../../../../../shared/ui/button";
import cls from "./empSalary.module.sass"
import {Modal} from "../../../../../shared/ui/modal";
import React, {useState} from "react";

export const EmployeeSalary = ({ filteredSalary, sum2 , activeDeleted  , formatSalary , onChange, changePayment, setChangePayment, deleted ,setChangingData, onDeleteModal}) => {


    // const changeModal = (name, id) => {
    //     console.log(name)
    //
    // }

    // const getConfirmDelete = (data) => {
    //     const newData = {
    //         id: changingData.id,
    //         userId: changingData.userId,
    //         type: changingData.type,
    //         ...data
    //     }
    //     funcSlice?.onDelete(newData)
    //     setActiveChangeModal(false)
    //
    // }


    const newData = {
        id: activeDeleted.id
    }

    console.log(newData , 'log')
    const renderFilteredSalary = () => {
        return filteredSalary.map((item, i) => (
            <>
                <tbody>
                <tr>
                    <td>{i + 1}</td>
                    <td>{item?.user?.name}</td>
                    <td>{item?.salary}</td>
                    <td>{item?.date}</td>
                    <td>{item?.user?.job?.length ? item?.user?.job : "ish turi mavjud emas"}</td>
                    <td onClick={() => {
                        setChangingData({
                            id: item.id,
                            payment_types: item.payment_types.name,
                            userId: item.user.id,
                        })
                        setChangePayment(!changePayment)

                    }}>
                        <div className={cls.cash}>{item?.payment_types?.name}</div>
                    </td>
                    <td>
                        <div>
                            <Button
                                onClick={() => {
                                    onDeleteModal({
                                        id: item.id,
                                        userId: item.user.id,

                                    })
                                    // deleted(item.id)
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
        </div>
    );
};

