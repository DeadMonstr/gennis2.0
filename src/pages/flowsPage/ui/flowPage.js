import cls from "./flowsPage.module.sass"
import {Select} from "shared/ui/select";
import {Button} from "shared/ui/button";
import {Radio} from "shared/ui/radio";
import {useMemo, useState} from "react";
import {Table} from "shared/ui/table";
import {FlowFilter} from "../../../features/filters/flowFilter";
import {Pagination} from "../../../features/pagination";
import {Flows} from "../../../entities/flows";


const radioFilter = [
    {name: "class", label: 'class'},
    {name: "flow", label: "flow"}
]
const renderFlowData = [
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


    const [radioFilterItem , setRadioFilterItem] =useState(radioFilter[0].name)


    console.log(radioFilter)

    const handleChange = (value) => {

        setRadioFilterItem(value);
    };

    const renderFlow = () =>{
        switch (radioFilterItem){
            case ("flow"):
                return <Flows currentTableData={currentTableData}/>
        }
    }


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
                                <Radio children={item.label} checked={radioFilterItem === item.name}
                                       onChange={() => handleChange(item.name)}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            {renderFlow()}
            <Pagination
                setCurrentTableData={setCurrentTableData}
                users={renderFlowData}
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