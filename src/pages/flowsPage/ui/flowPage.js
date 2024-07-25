import cls from "./flowsPage.module.sass"
import {Select} from "shared/ui/select";
import {Button} from "shared/ui/button";
import {Radio} from "shared/ui/radio";
import {useState} from "react";
import {Table} from "shared/ui/table";


export const radioFilter = [
    {name: "class"},
    {name: "flow"}
]
const renderFlow = [
    {name: "sasdas", class: "sdasadas"},
    {name: "sasdas", class: "sdasadas"},
    {name: "sasdas", class: "sdasadas"},
]
export const FlowsPage = () => {

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
                    <Button status={"filter"} type={"filter"}>Filter</Button>
                    <Button type={"login"} status={"timeTable"}>Time Table</Button>
                </div>
                <div className={cls.flow__radioFilter}>
                    {radioFilter.map((item, i) => {
                        return (
                            <div>
                                <Radio children={item.name} checked={radioChange === item.name}
                                       onChange={() => handleChange(item.name)}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={cls.table}>
                <Table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Nomi</th>
                        <th>Sinf</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderFlow.map((item, i) => {
                        return (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{item.name}</td>
                                <td><div className={item.class ? cls.flow__itemClass : null}>{item.class}</div></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>


        </div>
    )
}