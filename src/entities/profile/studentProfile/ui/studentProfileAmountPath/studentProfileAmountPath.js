import React, {memo, useState} from 'react';
import classNames from "classnames";
import {useSelector} from "react-redux";

import {EditableCard} from "shared/ui/editableCard";
import {Select} from "shared/ui/select";
import {Table} from "shared/ui/table";
import {getPaymentData, getBooksData} from "entities/profile/studentProfile";

import cls from "./studentProfileAmountPath.module.sass";
import inTo from "shared/assets/images/inTo.png";
import outTo from "shared/assets/images/out.png";

export const StudentProfileAmountPath = memo(({active, setActive}) => {

    const paymentList = useSelector(getPaymentData)
    const booksList = useSelector(getBooksData)

    const [activeState, setActiveState] = useState("")

    const renderInData = () => {
        return paymentList?.map(item =>
            <tr>
                <td>{item.type}</td>
                <td>{item.payment}</td>
                <td>{item.date}</td>
                <td>
                    <div
                        className={classNames(cls.inner, {
                            [cls.active]: item?.paymentType
                        })}
                    >
                        {item?.paymentType}
                    </div>
                </td>
                <td></td>
            </tr>
        )
    }

    const renderOutData = () => {
        return booksList?.map(item =>
            <tr>
                <td>{item.type}</td>
                <td>{item.payment}</td>
                <td>{item.date}</td>
            </tr>
        )
    }

    const renderIn = renderInData()
    const renderOut = renderOutData()

    return (
        <EditableCard
            extraClass={classNames(cls.path, {
                [cls.active]: active === "balance"
            })}
            titleType={"cross"}
            onClick={() => setActive("")}
        >
            <div
                className={classNames(cls.path__container, {
                    [cls.active]: activeState
                })}
            >
                <h1>Umumiy Hisob</h1>
                <div className={cls.items}>
                    <div
                        className={classNames(cls.items__inner, {
                            [cls.active]: activeState !== "balanceIn" && activeState
                        })}
                        onClick={() => setActiveState("balanceIn")}
                    >
                        <div className={cls.pathItem}>
                            <img src={inTo} alt=""/>
                            <h2>In</h2>
                        </div>
                        <p>To’lov va Chegirmalar</p>
                    </div>
                    <div
                        className={classNames(cls.items__inner, {
                            [cls.active]: activeState !== "balanceOut" && activeState
                        })}
                        onClick={() => setActiveState("balanceOut")}
                        style={{background: "#FFE4E6", border: ".1rem solid #F43F5E"}}
                    >
                        <div className={cls.pathItem}>
                            <h2>Out</h2>
                            <img src={outTo} alt=""/>
                        </div>
                        <p>Kitoblar</p>
                    </div>
                </div>
                {
                    activeState ?
                        <div className={cls.table}>
                            <div className={cls.table__header}>
                                <Select
                                    title={"Yil"}
                                />
                                <Select
                                    title={"Oy"}
                                />
                            </div>
                            <div className={cls.table__content}>
                                {
                                    activeState === "balanceIn" ? <Table>
                                        <thead>
                                        <tr>
                                            <th>Turi</th>
                                            <th>To’lov</th>
                                            <th>Sana</th>
                                            <th>To’lov turi</th>
                                            <th>O’chirish</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {renderIn}
                                        </tbody>
                                    </Table> : <Table>
                                        <thead>
                                        <tr>
                                            <th>Turi</th>
                                            <th>To’lov</th>
                                            <th>Sana</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {renderOut}
                                        </tbody>
                                    </Table>
                                }
                            </div>
                        </div>
                        : null
                }
            </div>
        </EditableCard>
    )
})
