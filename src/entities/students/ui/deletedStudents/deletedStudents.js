import {fetchReasons} from "entities/profile/groupProfile";
import {getReasons} from "entities/profile/groupProfile/model/groupProfileSelector";
import React, {useEffect, useMemo, useState} from "react";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";

import {Table} from "shared/ui/table";

import cls from "./deletedStudents.module.sass";


export const DeletedStudents = ({currentTableData}) => {

    const dispatch = useDispatch()

    const reasons = useSelector(getReasons)
    const [activeMenu, setActiveMenu] = useState("all")
    const [currentReasons , setCurrentReasons] = useState([])
    const [deletedStudentsData , setDeletedStudents] = useState([])
    const navigation = useNavigate()

    useEffect(() =>{
        dispatch(fetchReasons())
    },[])


    const renderDeletedStudents = () => {

        // if (!currentTableData || currentTableData.length === 0)
        // {
        //     return (
        //         <DefaultLoader/>
        //     )
        // }

        return currentTableData.map((item,  i) =>{
            if (activeMenu === "all") {
                return (
                    <tr  onClick={() => navigation(`profile/${item.id}`)}>
                        <td>{i + 1}</td>
                        <td>{item?.user?.name} {item?.user?.surname}</td>
                        <td>{item?.user?.age}</td>
                        <td>{item?.user?.phone}</td>
                        <td>{item?.group?.map(item => item.name)}</td>
                        <td>{item?.user?.registered_date}</td>
                        <td>{item?.deleted_date}</td>
                        <td>{item?.group_reason?.name}</td>
                    </tr>
                )
            } else {
                if (item?.group_reason?.id === activeMenu) {
                    return (
                        <tr  onClick={() => navigation(`profile/${item.id}`)}>
                            <td>{i + 1}</td>
                            <td>{item?.student?.user?.name} {item?.student?.user?.surname}</td>
                            <td>{item?.student?.user?.age}</td>
                            <td>{item?.student?.user?.phone}</td>
                            <td>{item?.group?.name}</td>
                            <td>{item?.student?.user?.registered_date}</td>
                            <td>{item?.deleted_date}</td>
                            <td>{item?.group_reason?.name}</td>
                        </tr>
                    )
                } else return null
            }
        })


    }

    return (
        <div className={cls.deletedStudents}>

            <ul className={cls.deletedStudents__menu}>
                <li
                    key={6}
                    className={classNames(cls.other__item, {
                        [cls.active]: activeMenu === "all"
                    })}
                    onClick={() => {
                        setActiveMenu("all")
                    }}
                >
                    Hammasi
                </li>
                {reasons?.map((item, i) => <li
                    key={i}
                    className={classNames(cls.other__item, {
                        [cls.active]: activeMenu === item.id
                    })}
                    onClick={() => {
                        setActiveMenu(item.id)
                    }}
                >
                    {item.name}
                </li>)}
            </ul>
            <div className={cls.table}>
                <Table extraClass={cls.table__head}>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Full name</th>
                        <th>Yosh</th>
                        <th>Telefon nome</th>
                        <th>Guruh</th>
                        <th>Reg.sana</th>
                        <th>O'chir.sana</th>
                        <th>Sabab</th>
                    </tr>
                    </thead>
                    <tbody>

                    {renderDeletedStudents()}
                    </tbody>
                </Table>
            </div>

        </div>

    );
};
