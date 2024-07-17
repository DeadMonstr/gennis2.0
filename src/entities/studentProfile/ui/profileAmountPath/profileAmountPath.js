import React, {memo, useContext, useState} from 'react';
import classNames from "classnames";
import {useSelector} from "react-redux";

import {Context} from "pages/profilePage";
import {EditableCard} from "shared/ui/editableCard";
import {Table} from "shared/ui/table";
import {getPaymentData} from "entities/studentProfile";

import cls from "./profileAmountPath.module.sass";
import inTo from "shared/assets/images/inTo.png";
import outTo from "shared/assets/images/out.png";
import {Select} from "../../../../shared/ui/select";

export const ProfileAmountPath = memo(() => {

    const {active, setActive} = useContext(Context)
    const paymentList = useSelector(getPaymentData)

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

    const renderIn = renderInData()

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
                            [cls.active]: activeState !== "balanceIn"
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
                            [cls.active]: activeState !== "balanceIn"
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
                                    </Table> : null
                                }
                            </div>
                        </div>
                        : null
                }
            </div>
        </EditableCard>
    )
})
