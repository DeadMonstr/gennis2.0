import cls from "./flowsPage.module.sass"
import {Select} from "shared/ui/select";
import {Button} from "shared/ui/button";
import {Radio} from "shared/ui/radio";
import {useEffect, useMemo, useState} from "react";

import {Flows} from "entities/flows";
import {useDispatch, useSelector} from "react-redux";
import {fetchFlows} from "entities/flows";
import {getFlows} from "entities/flows";
import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";

const radioFilter = [
    {name: "class", label: 'class'},
    {name: "flow", label: "flow"}
]

export const FlowsPage = () => {
    let PageSize = useMemo(() => 50, [])
    const [currentTableData, setCurrentTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("")

    const [radioFilterItem, setRadioFilterItem] = useState(radioFilter[0].name)

    const flows = useSelector(getFlows)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchFlows())
    }, [])

    const handleChange = (value) => {
        setRadioFilterItem(value);
    };

    const renderFlow = () => {
        switch (radioFilterItem) {
            case ("flow"):
                return <Flows currentTableData={flows}/>
        }
    }


    return (
        <div className={cls.flow}>
            <div className={cls.flow__header}>

                <div className={cls.flow__location}>
                    <Select/>
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
            {/*<Pagination*/}
            {/*    setCurrentTableData={setCurrentTableData}*/}
            {/*    users={flows}*/}
            {/*    search={search}*/}
            {/*    setCurrentPage={setCurrentPage}*/}
            {/*    currentPage={currentPage}*/}
            {/*    pageSize={PageSize}*/}
            {/*    onPageChange={page => {*/}
            {/*        setCurrentPage(page)*/}
            {/*    }}*/}
            {/*    type={"custom"}/>*/}

        </div>
    )
}