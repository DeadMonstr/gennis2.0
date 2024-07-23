import React, {useEffect, useMemo, useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import {GroupsList} from "entities/groups/groups/ui/groupsList";
import {getGroupsListData} from "entities/groups/model/selectors/groupsList";
import {GroupsFilter} from "features/filters/groupsFilter";
import {Pagination} from "features/pagination";
import {Button} from "shared/ui/button";

import cls from "./groupsPage.module.sass";
import {DeletedGroups} from "entities/groups/deletedGroups/ui/deletedGroups";
import {getDeletedGroupsData} from "../../../entities/groups/model/selectors/deletedGroups";
// import {DeletedGroups} from "entities/groups/index";


export const GroupsPage = () => {

    const data = useSelector(getGroupsListData)
    const deletedGroupsData =useSelector(getDeletedGroupsData)

    const [deletedGroups , setDeletedGroups] = useState([])
    const [groupsData, setGroupsData] = useState([])
    console.log(data)

    useEffect(() => {
        setGroupsData(data)
    }, [data])


    useEffect(() =>{
        setDeletedGroups(deletedGroupsData)
    } , [deletedGroupsData])




    const [currentTableData, setCurrentTableData] = useState([])
    const [activeSwitch, setActiveSwitch] = useState(false)

    const [active, setActive] = useState(false);
    let PageSize = useMemo(() => 50, [])

    const [currentPage, setCurrentPage] = useState(1);

    const [search, setSearch] = useState("")

    return (
        <div className={cls.deletedGroups}>
            <div className={cls.mainContainer_filterPanelBox}>
                <Button
                    status={"filter"}
                    extraClass={cls.extraCutClassFilter}
                    onClick={() => setActive(!active)}
                    type={"filter"}
                >
                    Filter
                </Button>
                <Link to={"deletedGroups"}>
                    <Button
                        type={"login"}
                        status={"timeTable"}
                        extraClass={cls.extraCutClassFilter}
                        onClick={() => setActive(true)}
                    >
                        Time Table
                    </Button>
                </Link>
            </div>
            <div className={cls.table}>

                <h2>{activeSwitch ? "Deleted Groups" : "Groups"}</h2>
                {activeSwitch ? <DeletedGroups currentTableData={currentTableData} /> : <GroupsList
                    currentTableData={currentTableData}
                />}
            </div>
            {/*<Pagination*/}
            {/*    setCurrentTableData={setCurrentTableData}*/}
            {/*    users={activeSwitch ? deletedGroups : groupsData}*/}
            {/*    search={search}*/}
            {/*    setCurrentPage={setCurrentPage}*/}
            {/*    currentPage={currentPage}*/}
            {/*    pageSize={PageSize}*/}
            {/*    onPageChange={page => {*/}
            {/*        setCurrentPage(page)*/}
            {/*    }}*/}
            {/*    type={"custom"}*/}
            {/*/>*/}
            <GroupsFilter activeSwitch={activeSwitch} setActiveSwitch={setActiveSwitch} setActive={setActive}
                          active={active}/>
        </div>
    )
}
