import {getUserBranchId} from "entities/profile/userProfile";
import {getUserSystemId} from "entities/profile/userProfile/model/userProfileSelector";
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";

import {Table} from "shared/ui/table";
import {getGroupListWithFilter} from "../../model/selectors/groupsList";
import cls from "./groupsList.module.sass";
import {DefaultPageLoader} from "../../../../shared/ui/defaultLoader";

export const GroupsList = React.memo(({currentTableData}) => {
    const getFilteredGroups = useSelector(getGroupListWithFilter)
    const navigate = useNavigate()

    const renderGroups = () => {
        const groupsToRender = getFilteredGroups && getFilteredGroups.length > 0 ? getFilteredGroups : currentTableData
        if (!groupsToRender || groupsToRender.length === 0)
        {
            return (
                <DefaultPageLoader/>
            )
        }
        return groupsToRender?.map((item, i) => {
            return (
                <tr onClick={() => navigate(`groupInfo/${item?.id}`)}>
                    <td>{i + 1}</td>
                    <td>{item?.name}</td>
                    <td>{item?.name} {item?.surname}</td>
                    <td>{item?.subject?.name}</td>
                    <td>{item?.course_types?.name}</td>
                    <td>{item?.price}</td>

                    {/*<td>{item?.status ? <div><div/></div> : null }</td>*/}

                    {/*<td>{item?.status ?<div><div/></div> : <div className={cls.red}><div className={cls.red__inner}/></div> }</td>*/}


                    <td>{item?.status ?<div><div/></div> : <div className={cls.red}><div className={cls.red__inner}/></div> }</td>

                </tr>
            )
        })
    }

    const render = renderGroups()

    return (
        <>

            <Table extraClass={cls.table__head}>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Guruh Nomi</th>
                    <th>Full name</th>
                    <th>Fan</th>
                    <th>Kurs Turi</th>
                    <th>Guruh narxi</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {render}
                </tbody>
            </Table>
        </>
    );
})