import {getUserBranchId} from "pages/profilePage";
import React, {useEffect, useMemo, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {GroupsList} from "entities/groups/groups/ui/groupsList";
import {
    getGroupsListData,
    fetchGroupsData,
    getDeletedGroupsData,
    DeletedGroups,
    getGroupsLoading
} from "entities/groups";
import {getSearchValue} from "features/searchInput";
import {GroupsFilter} from "features/filters/groupsFilter";
import {Pagination} from "features/pagination";
import {Button} from "shared/ui/button";
import {DefaultPageLoader} from "shared/ui/defaultLoader";

import cls from "./groupsPage.module.sass";
// import {DeletedGroups} from "entities/groups/index";


export const GroupsPage = () => {

    const dispatch = useDispatch()
    const data = useSelector(getGroupsListData)
    const deletedGroupsData = useSelector(getDeletedGroupsData)
    const loading = useSelector(getGroupsLoading)
    const userBranchId = useSelector(getUserBranchId)

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

    useEffect(() => {
        if (userBranchId)
            dispatch(fetchGroupsData({userBranchId}))
    }, [userBranchId])

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
            {
                loading ? <DefaultPageLoader/> :
                    <>
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
                    </>
            }
            <GroupsFilter
                // activeSwitch={activeSwitch}
                // setActiveSwitch={setActiveSwitch}
                setActive={setActive}
                active={active}
            />
        </div>
    )
}
