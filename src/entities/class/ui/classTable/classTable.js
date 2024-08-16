import {Table} from "shared/ui/table";
import {Input} from "shared/ui/input";
import {ClassModal} from "../classModal/classModal";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import cls from "./classTable.module.sass"

export const ClassType = [
    {className: "1-sinf" , id:1},
    {className: "2-sinf" , id:2},
    {className: "3-sinf" , id:3},
    {className: "4-sinf" , id:4},
]


const selectOptions = () => [
    {name: "dsad1", label: "dsads", id: 1},
    {name: "dsad2", label: "dsads", id: 2},
    {name: "dsad3", label: "dsads", id: 3},
    {name: "dsa423d4", label: "dsads", id: 4},
    {name: "dsa423d4", label: "dsads", id: 5},
    {name: "ds432ad4", label: "dsads", id: 6},
    {name: "dsad43213", label: "dsads", id: 7},
    {name: "dsad312321", label: "dsads", id: 8},
    {name: "dsa423423d4", label: "dsads", id: 9},
]


export const ClassTable = () => {
    const [editClass, setEditClass] = useState(false)
    const {register, handleSubmit, setValue} = useForm()



const onChangeClass = ()=> {
        setEditClass(!editClass)
}
    return (
        <div>
            <Table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Sinf Raqami</th>
                    <th/>

                </tr>
                </thead>
                <tbody>
                {ClassType.map((item, i) => (
                    <tr>
                        <td>{i + 1}</td>
                        <td>{item.className}</td>
                        <td style={{width: "3rem"}}>
                            <div style={{display: "flex"}}>
                                <Input type={"checkbox"}/>
                                <i onClick={() => setEditClass(item.id)} className={"fa fa-pen"}/>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>


            <ClassModal changeInfo={onChangeClass} selectOptions={selectOptions} extraClassForm={cls.extraClassForm}
                        extraClassSelect={cls.select} extraClassBtn={cls.btn} editClass={editClass}
                        setEditClass={setEditClass} register={register} handleSubmit={handleSubmit}/>
        </div>
    )
}