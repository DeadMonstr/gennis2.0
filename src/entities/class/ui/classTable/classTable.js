import {Table} from "shared/ui/table";
import React, {useEffect, useState} from "react";
import cls from "./classTable.module.sass"
import {API_URL, headers, useHttp} from "shared/api/base";
import {useDispatch, useSelector} from "react-redux";
import {onAddAlertOptions} from "features/alert/model/slice/alertSlice";
import {classSubjects} from "../../model/selector/classSelector";

import {onChangeClassStatus} from "../../model/slice/classSlice";
import classNames from "classnames";
import {ClassTableEdit} from "../../../../features/classModals/ui";


export const ClassTable = ({edit, classType}) => {
    const [editClass, setEditClass] = useState(false)
    const [changedItem, setChangedItem] = useState({})
    const subjects = useSelector(classSubjects)
    const {request} = useHttp()
    const dispatch = useDispatch()
    const [selectedClass, setSelectedClass] = useState(null);
    useEffect(() => {
        if (editClass) {
            const selected = classType.find(item => item.id === editClass);
            setSelectedClass(selected);
        }
    }, [editClass, classType]);



    const onChange = ({id , type}) => {

        const res = {
            class_types: !type ? edit.id : null,
        }

        request(`${API_URL}Class/class_number_update/${id}/`, "PATCH", JSON.stringify(res), headers())
            .then(res => {
                dispatch(onChangeClassStatus({id}))
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




    const renderTable = () => {
        return classType.map((item, i) => {

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
                    <div className={cls.items}>

                        <div
                            onClick={() => onChange({id: item.id, type: item.status})}
                            className={classNames(cls.checkbox__minus , {
                                [cls.active] : item.status
                            })}
                        >
                            {item.status ?
                                <i className={`fa fa-check `}/> :
                                <i className={`fa fa-minus`}/>

                            }
                        </div>

                        <i
                            onClick={() => {
                                setEditClass(item.id)
                                setChangedItem(item)
                            }}
                            className={"fa fa-pen"}
                        />
                    </div>
                </td>
            </tr>
        })
    };
    const render = renderTable()


    return (
        <div>

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
                </Table>

            <ClassTableEdit

                // register={register}
                setEditClass={setEditClass}
                selectOptions={subjects}
                editClass={editClass}
                changedItem={changedItem}
                edit={edit}


            />
        </div>
    )
}