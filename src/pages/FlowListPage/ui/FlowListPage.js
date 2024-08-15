import {FlowList} from "entities/flowList";
import {useSelector} from "react-redux";
import {getFlowList} from "entities/flows";
import cls from "./FlowListPage.module.sass";
import {Input} from "../../../shared/ui/input";
import {Pagination} from "../../../features/pagination";
import {getSearchValue} from "../../../features/searchInput";
import {useMemo, useState} from "react";

export const FlowListPage = () => {
    const flowList = useSelector(getFlowList)

    console.log(flowList, "flow")

    const search = useSelector(getSearchValue)
    let PageSize = useMemo(() => 8, [])
    const [currentTableData, setCurrentTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    const searchedUsers = useMemo(() => {
        const filteredHeroes = flowList?.slice()
        setCurrentPage(1)

        console.log(search, true)

        if (!search) return filteredHeroes

        return filteredHeroes.filter(item =>
            item.name?.toLowerCase().includes(search.toLowerCase())
        )
    }, [flowList, setCurrentPage, search])
    const renderFlowList = () => {
        return currentTableData.map((item, i) => (
            <FlowList key={i} flowList={item} number={i}/>
        ))
    }
    const render = renderFlowList()
    return (
        <div className={cls.flow}>
            <div className={cls.flowListHeader}>
                <div>
                    <span>No</span>
                    <span>Sinf Raqami</span>
                </div>
                <div>
                    <Input type={"checkbox"}/>
                </div>
            </div>
            <div className={cls.table}>
                {render}
                <Pagination
                    setCurrentTableData={setCurrentTableData}
                    users={searchedUsers}
                    currentPage={currentPage}
                    pageSize={PageSize}
                    onPageChange={page => {
                        setCurrentPage(page)
                    }}
                />
            </div>

        </div>
    )
}