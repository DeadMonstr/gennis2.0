import cls from "./flowsPage.module.sass"
import {Select} from "shared/ui/select";
import {Button} from "shared/ui/button";
import {Radio} from "shared/ui/radio";
import {useMemo, useState} from "react";
import {Table} from "shared/ui/table";
import {FlowFilter} from "../../../features/filters/flowFilter";
import {Pagination} from "../../../features/pagination";


const radioFilter = [
    {name: "class", label: 'class'},
    {name: "flow", label: "flow"}
]
const renderFlow = [
    {name: "sasdas", class: "sdasadas"},
    {name: "sasdas", class: "sdasadas"},
    {name: "sasdas", class: "sdasadas"},
]
export const FlowsPage = () => {
    let PageSize = useMemo(() => 50, [])
    const [currentTableData, setCurrentTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("")
    const [activeFlow, setActiveFlow] = useState(false)

    const handleChange = (value) => {
        setRadioChange(value);
    };
    const [radioChange, setRadioChange] = useState(false)

    return (
        <div className={cls.flow}>
            <div className={cls.flow__header}>

                <div className={cls.flow__location}>
                    <Select/>
                </div>
                <div className={cls.flow__filter}>
                    <Button onClick={() => setActiveFlow(!activeFlow)} status={"filter"} type={"filter"}>Filter</Button>
                    <Button type={"login"} status={"timeTable"}>Time Table</Button>
                </div>
                <div className={cls.flow__radioFilter}>
                    {radioFilter.map((item, i) => {
                        return (
                            <div>
                                <Radio children={item.label} checked={radioChange === item.name}
                                       onChange={() => handleChange(item.name)}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={cls.table}>
                <h2>Flows</h2>
                <div className={cls.table__wrapper}>
                    <Table>
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Nomi</th>
                            <th>Sinf</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentTableData.map((item, i) => {
                            return (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <div className={item.class ? cls.flow__itemClass : null}>{item.class}</div>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                </div>
            </div>
            <Pagination
                setCurrentTableData={setCurrentTableData}
                users={renderFlow}
                search={search}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageSize={PageSize}
                onPageChange={page => {
                    setCurrentPage(page)
                }}
                type={"custom"}/>
            <FlowFilter setActive={setActiveFlow} active={activeFlow}/>

        </div>
    )
}