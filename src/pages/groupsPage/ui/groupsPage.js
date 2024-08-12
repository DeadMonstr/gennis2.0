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
import {getSearchValue} from "../../../features/searchInput";
// import {DeletedGroups} from "entities/groups/index";


export const GroupsPage = () => {

    const data = useSelector(getGroupsListData)
    const deletedGroupsData = useSelector(getDeletedGroupsData)

    const [deletedGroups, setDeletedGroups] = useState([])

    const [active, setActive] = useState(false);
    const [activeSwitch, setActiveSwitch] = useState(false)




    const search = useSelector(getSearchValue)
    let PageSize = useMemo(() => 50, [])
    const [currentTableData, setCurrentTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    console.log(data, "data")

    const searchedUsers = useMemo(() => {
        const filteredHeroes = data?.slice()
        setCurrentPage(1)

        console.log(search, true)

        if (!search) return filteredHeroes

        return filteredHeroes.filter(item =>
            item.name?.toLowerCase().includes(search.toLowerCase())
        )
    }, [data, setCurrentPage, search])

    useEffect(() => {
        setDeletedGroups(deletedGroupsData)
    }, [deletedGroupsData])
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
                {activeSwitch ? <DeletedGroups currentTableData={currentTableData}/> : <GroupsList
                    currentTableData={currentTableData}
                />}
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
            <GroupsFilter activeSwitch={activeSwitch} setActiveSwitch={setActiveSwitch} setActive={setActive}
                          active={active}/>
        </div>
    )
}
