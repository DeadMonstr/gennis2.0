import {Table} from "shared/ui/table";
import {Input} from "shared/ui/input";
import {ClassModal} from "../classModal/classModal";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import cls from "./classTable.module.sass"
import {API_URL, headers, useHttp} from "../../../../shared/api/base";
import {useDispatch} from "react-redux";
import {onAddAlertOptions} from "../../../../features/alert/model/slice/alertSlice";

export const ClassType = [
    {className: "1-sinf", id: 1},
    {className: "2-sinf", id: 2},
    {className: "3-sinf", id: 3},
    {className: "4312-sinf", id: 4},
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


export const ClassTable = ({edit, classType, active}) => {
    const [editClass, setEditClass] = useState(false)
    const [clickedCheckbox, setClickedCheckbox] = useState([])
    const {register, handleSubmit, setValue} = useForm()
    const {request} = useHttp()
    const dispatch = useDispatch()


    const onChangeClass = () => {
        setEditClass(!editClass)
    }

    const onChange = (e) => {

        const res = {
            class_types: edit.id,
        }

        const {id} = e
        request(`${API_URL}Class/class_number_update/${id}/`, "PATCH", JSON.stringify(res), headers())
            .then(res => {
                console.log(res)

                dispatch(onAddAlertOptions({
                    type: "success",
                    status: true,
                    msg: res.msg
                }))

            })
            .catch(err => {
                console.log(err)
            })
    }
    const sortItemsByStatus = (items) => {
        return [...items].sort((a, b) => b.status - a.status);
    };

    const renderTable = () => {
        return sortItemsByStatus(classType).map((item, i) => (
            <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.number}</td>
                <td style={{width: "3rem"}}>
                    {item.status ?
                        (
                            <div className={cls.checkbox__checked}>
                                <i className={`fa fa-check ${cls.check}`}/>
                            </div>
                        )
                        : (<div className={cls.items}>
                            <div
                                onClick={() =>
                                    setClickedCheckbox((arr) => {
                                        if (clickedCheckbox.includes(item?.id)) {
                                            return [...arr.filter((id) => id !== item?.id)];
                                        } else return [...arr, item?.id];
                                    })
                                }
                                className={
                                    clickedCheckbox.includes(item?.id)
                                        ? cls.checkbox__checked
                                        : cls.checkbox__minus
                                }
                            >
                                {clickedCheckbox.includes(item?.id) ? (
                                    <i className={`fa fa-check ${cls.check}`}/>
                                ) : (
                                    <i
                                        className={`fa fa-minus ${cls.minus}`}
                                        onClick={() => onChange({id: item.id})}
                                    />
                                )}
                            </div>
                            <i
                                onClick={() => setEditClass(item.id)}
                                className={"fa fa-pen"}
                            />
                        </div>)
                    }
                </td>
            </tr>
        ));
    };
    const render = renderTable()


    return (
        <div>
            {active ?
                <Table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Sinf Raqami</th>
                        <th/>

                    </tr>
                    </thead>
                    <tbody>
                    {render}
                    </tbody>
                </Table> : null}


            <ClassModal changeInfo={onChangeClass} selectOptions={selectOptions} extraClassForm={cls.extraClassForm}
                        extraClassSelect={cls.select} extraClassBtn={cls.btn} editClass={editClass}
                        setEditClass={setEditClass} register={register} handleSubmit={handleSubmit}/>
        </div>
    )
}