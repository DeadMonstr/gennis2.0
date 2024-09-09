import {Table} from "shared/ui/table";
import {ClassModal} from "../classModal/classModal";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import cls from "./classTable.module.sass"
import {API_URL, headers, useHttp} from "shared/api/base";
import {useDispatch, useSelector} from "react-redux";
import {onAddAlertOptions} from "features/alert/model/slice/alertSlice";
import {fetchClassSubjects} from "../../model/thunk/classThunk";
import {classSubjects} from "../../model/selector/classSelector";


export const ClassTable = ({edit, classType, active, id}) => {
    const [editClass, setEditClass] = useState(false)
    const [clickedCheckbox, setClickedCheckbox] = useState([])

    const [changedItem,setChangedItem] = useState({})

    const subjects = useSelector(classSubjects)

    const {request} = useHttp()
    const dispatch = useDispatch()


    const onChange = (e) => {

        const res = {
            class_types: edit.id,
        }
        const {id} = e
        request(`${API_URL}Class/class_number_update/${id}/`, "PATCH", JSON.stringify(res), headers())
            .then(res => {
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
        return sortItemsByStatus(classType)?.map((item, i) => {

            return <tr>
                <td>{i + 1}</td>
                <td>{item?.number}</td>
                <td>
                    <div className={cls.subject__main}>
                        {item?.subjects.map(itemSubject => (
                            <span className={cls.subject}> {itemSubject.name}</span>
                        ))}
                    </div>
                </td>
                <td>{item.price}</td>
                <td>{item?.curriculum_hours}</td>
                <td style={{width: "3rem"}}>
                    {item?.status ?
                        (
                            <div className={cls.items}>
                                <div className={cls.checkbox__checked}>
                                    <i  onClick={() => onChange({id: item.id})} className={`fa fa-check ${cls.check}`}/>

                                </div>
                                <i
                                    onClick={() => {
                                        setEditClass(item.id)
                                        setChangedItem(item)

                                    }}
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
                                    <i  onClick={() => onChange({id: item.id})} className={`fa fa-check ${cls.check}`}/>
                                ) : (
                                    <i
                                        className={`fa fa-minus ${cls.minus}`}
                                        onClick={() => onChange({id: item.id})}
                                    />
                                )}
                            </div>
                            <i
                                onClick={() => {
                                    setEditClass(item.id)
                                    setChangedItem(item)
                                }}
                                className={"fa fa-pen"}
                            />
                        </div>)
                    }
                </td>
            </tr>
        })
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
                        <th>Fanlari</th>
                        <th>Narxi</th>
                        <th>Dars soati</th>
                        <th/>

                    </tr>
                    </thead>
                    <tbody>
                    {render}
                    </tbody>
                </Table> : null}


            <ClassModal
                changedItem={changedItem}
                selectOptions={subjects}
                extraClassForm={cls.extraClassForm}
                extraClassSelect={cls.select}
                extraClassBtn={cls.btn}
                editClass={editClass}
                setEditClass={setEditClass}
            />
        </div>
    )
}