import {Table} from "shared/ui/table";
import {Input} from "shared/ui/input";
import {ClassModal} from "../classModal/classModal";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import cls from "./classTable.module.sass"
import {API_URL, headers, useHttp} from "../../../../shared/api/base";
import {useDispatch} from "react-redux";
import {onAddAlertOptions} from "../../../../features/alert/model/slice/alertSlice";






export const ClassTable = ({edit, classType, active , selectOptions}) => {
    const [editClass, setEditClass] = useState(false)
    const [clickedCheckbox, setClickedCheckbox] = useState([])
    const {register, handleSubmit, setValue} = useForm()
    const {request} = useHttp()
    const dispatch = useDispatch()
    const [selectedSubject, setSelectedSubject] = useState([])



    const onChangeClass = (data) => {


        const res = {
            subject: selectedSubject.name,
            ...data
        }
        const id = editClass
        console.log(res, id, "hello")

        // request(`${API_URL}Class/class_number_update/${id}/`, "PATCH", JSON.stringify(data), headers())
        //     .then(res => {
        //         console.log(res)
        //         setValue("curriculum_hours" , "")
        //         setEditClass(!editClass)
        //     })
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
                            <div className={cls.items}>
                                <div className={cls.checkbox__checked}>
                                    <i className={`fa fa-check ${cls.check}`}/>

                                </div>
                                <i
                                    onClick={() => setEditClass(item.id)}
                                    className={"fa fa-pen"}
                                />
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


            <ClassModal selectedSubject={selectedSubject} setSelectedSubject={setSelectedSubject}
                        changeInfo={onChangeClass} selectOptions={selectOptions} extraClassForm={cls.extraClassForm}
                        extraClassSelect={cls.select} extraClassBtn={cls.btn} editClass={editClass}
                        setEditClass={setEditClass} register={register} handleSubmit={handleSubmit}/>
        </div>
    )
}