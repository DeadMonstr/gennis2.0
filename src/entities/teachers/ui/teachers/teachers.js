import React, {memo, useCallback, useMemo, useState} from 'react';
import cls from "./teachers.module.sass"
import {Table} from "shared/ui/table";
import {Link} from "../../../../shared/ui/link";
import {getTeacherLoading} from "../../model/selector/teacherSelector";
import {useSelector} from "react-redux";
import {DefaultPageLoader} from "../../../../shared/ui/defaultLoader";


export const Teachers = memo(({data,loading}) => {
    const [checkbox, setCheckbox] = useState(false)
    const loadingDef = useSelector(getTeacherLoading)
    const checkBoxChange = (id) => {
        setCheckbox(id)
    }


    const renderTeacher = useCallback(() => {
        if(data && data.length) {
            return data?.map((item, i) => (
                <tr key={i} >
                    <td>{i + 1}</td>
                    <Link to={`teacherProfile/${item.id}`}>
                        <td>{item.user.name === "tok" || item.user.name === "tot" ? null : item.user.name} {item.user.surname}</td>
                    </Link>
        if (data && data.length) {
            return data?.map((item, i) => {
                // console.log(select.includes(item.id))
                return (
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <Link to={`teacherProfile/${item.id}`}>
                            <td>{item.user.name === "tok" || item.user.name === "tot" ? null : item.user.name} {item.user.surname}</td>
                        </Link>

                        <td>{item.user.username}</td>
                        <td>{item.user.phone}</td>
                        <td>{item.user.age}</td>
                        <td>
                            <div
                                className={item.subject.length ? cls.teacher__language : null}>{item.subject.name}</div>
                        </td>
                        <td>
                            {item?.extra_info?.status ? <div className={cls.teacher__inner}>
                                <div className={cls.status}>
                                    <div className={cls.status__inner}/>
                                </div>
                                <Input
                                    type={"radio"}
                                    name={"radio"}
                                    extraClassName={cls.teacher__input}
                                    onChange={() => setSelect(item.id)}
                                    value={select.includes(item.id)}
                                    checked={select.includes(item.id)}
                                />
                            </div> : null}
                        </td>
                    </tr>
                )
            })
                    <td>{item.user.username}</td>
                    <td>{item.user.phone}</td>
                    <td>{item.user.age}</td>
                    <td><div className={item.subject ? cls.teacher__language : null}>{item.subject.name}</div></td>


                </tr>
            ))
        }

    }, [data])



    const renderedData = renderTeacher()
    return (
        <div className={cls.teacher}>

            <div className={cls.table}>
                <Table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Full name</th>
                        <th>Username</th>
                        <th>Tel</th>
                        <th>Yosh</th>
                        <th>Fan</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    {
                        loadingDef ? <DefaultPageLoader/>
                            :
                            <tbody>
                            {renderedData}
                            </tbody>
                    }

                </Table>
            </div>


        </div>
    )
})
