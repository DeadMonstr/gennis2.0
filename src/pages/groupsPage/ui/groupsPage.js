import React, {useEffect, useMemo, useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import GroupsList from "entities/groups";
import {getGroupsListData} from "entities/groups/model/selectors/groupsList";
import {GroupsFilter} from "features/filters/groupsFilter";
import {Pagination} from "features/pagination";
import {Button} from "shared/ui/button";

import cls from "./groupsPage.module.sass";


export const GroupsPage = () => {

    const data = useSelector(getGroupsListData)

    const [groupsData, setGroupsData] = useState([])

    useEffect(() => {
        setGroupsData(data)
    }, [data])

    const [currentTableData, setCurrentTableData] = useState([])


    const [active, setActive] = useState(false);
    let PageSize = useMemo(() => 50, [])

    const [currentPage, setCurrentPage] = useState(1);

    const [search, setSearch] = useState("")


    return (
        <div className={cls.deletedGroups}>
            <div className={cls.mainContainer_filterPanelBox}>
                <Button
                    type={"filter"}
                    extraClass={cls.extraCutClassFilter}
                    onClick={() => setActive(true)}
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
                <GroupsList
                    currentTableData={currentTableData}
                />
                <Pagination
                    setCurrentTableData={setCurrentTableData}
                    users={groupsData}
                    search={search}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    pageSize={PageSize}
                    onPageChange={page => {
                        setCurrentPage(page)
                    }}
                    type={"custom"}
                />
            </div>

            <GroupsFilter setActive={setActive} active={active}/>
        </div>
    )
}
