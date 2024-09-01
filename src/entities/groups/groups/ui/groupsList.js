import {getUserBranchId} from "pages/profilePage";
import {getUserSystemId} from "entities/profile/userProfile/model/userProfileSelector";
import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";

import {Table} from "shared/ui/table";

import cls from "./groupsList.module.sass";

export const GroupsList = React.memo(({currentTableData}) => {

    const navigate = useNavigate()
    const userSystemId = useSelector(getUserSystemId)

    return (
        <>

            <Table extraClass={cls.table__head}>
                <thead>
                {
                    userSystemId === 1 ? <tr>
                        <th>No</th>
                        <th>Guruh Nomi</th>
                        <th>Full name</th>
                        <th>Fan</th>
                        <th>Kurs Turi</th>
                        <th>Guruh narxi</th>
                        <th>Status</th>
                    </tr> : <tr>
                        <th>No</th>
                        <th>Sinf nomi</th>
                        <th>O’qituvchi ism familiya</th>
                        <th>Studentlar soni</th>
                        <th>Sinf</th>
                        {/*<th>Guruh narxi</th>*/}
                        <th>Status</th>
                    </tr>
                }
                </thead>
                <tbody>
                {
                    currentTableData?.map((item, i) => {
                        return (
                            <tr onClick={() => navigate(`groupInfo/${item?.id}`)}>
                                <td>{i + 1}</td>
                                <td>{item?.name}</td>
                                {
                                    userSystemId === 1 ? <>
                                            <td>{item?.name} {item?.surname}</td>
                                            <td>{item?.subject?.name}</td>
                                            <td>{item?.course_types?.name}</td>
                                            <td>{item?.price}</td>
                                        </> :
                                        // null
                                        <>
                                            <td>{`${item?.teacher[0]?.user?.surname} ${item?.teacher[0]?.user?.name}`}</td>
                                            <td>{item?.students?.length}</td>
                                            <td>{`${item?.class_number?.number}-${item?.color?.name}`}</td>
                                        </>
                                }

                                {/*<td>{item?.status ? <div><div/></div> : null }</td>*/}

                                {/*<td>{item?.status ?<div><div/></div> : <div className={cls.red}><div className={cls.red__inner}/></div> }</td>*/}


                                <td>{item?.status ? <div>
                                    <div/>
                                </div> : <div className={cls.red}>
                                    <div className={cls.red__inner}/>
                                </div>}</td>

                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </>
    );
})