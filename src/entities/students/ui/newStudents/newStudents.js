import React, {memo, useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchOnlyNewStudentsData, getNewStudentsData, getStudentsWithBranch, getNewStudentsWithSubject} from "entities/students";
import {useNavigate} from "react-router";
import {Input} from "shared/ui/input";
import cls from "entities/students/ui/newStudents/newStudents.module.sass";
import {Table} from "shared/ui/table";
import {StudentsFilter} from "features/filters/studentsFilter";

export const NewStudents = memo(({currentTableData, setSelectStudents, theme}) => {

    const [active, setActive] = useState(false);
    const navigation = useNavigate()
    const dispatch =  useDispatch()
    const getNewSt = useSelector(getStudentsWithBranch)
    // const getNewStDef = useSelector(getNewStudentsData)
    // const getSubjNewSt = useSelector(getNewStudentsWithSubject)



    const renderStudents = () => {
        if (!getNewSt || getNewSt.length === 0) {
            console.log(false, currentTableData)
            return currentTableData?.map((item, i) => {
                return (
                    <tr
                        onClick={() => navigation(`profile/${item.id}`)}
                    >
                        <td>{i + 1}</td>
                        <td>{item.user?.surname} {item.user?.name}</td>
                        <td>{item.user?.age}</td>
                        <td>{item.user?.phone}</td>
                        <td>{item.user?.language?.name}</td>
                        <td>{
                            !item.group[0]?.name || item.group === 0 ? "Guruhi hali yo'q" : item.group[0]?.name
                        }</td>
                        <td>{item.user?.registered_date}</td>
                        {
                            theme ? <Input
                                type={"checkbox"}
                                onChange={() => setSelectStudents(prev => {
                                    if (prev.filter(i => i === item.id)[0]) {
                                        return prev.filter(i => i !== item.id)
                                    } else {
                                        return [...prev, item.id]
                                    }
                                })}
                            /> : null
                        }
                    </tr>
                )
            })
        } else {
            console.log(true)
            return getNewSt?.map((item, i) => {
                return (
                    <tr
                        onClick={() => navigation(`profile/${item.id}`)}
                    >
                        <td>{i + 1}</td>
                        <td>{item.user?.surname} {item.user?.name}</td>
                        <td>{item.user?.age}</td>
                        <td>{item.user?.phone}</td>
                        <td>{item.user?.language?.name}</td>
                        <td>{item.group}</td>
                        <td>{item.user?.registered_date}</td>
                        {
                            theme ? <Input
                                type={"checkbox"}
                                onChange={() => setSelectStudents(prev => {
                                    if (prev.filter(i => i === item.id)[0]) {
                                        return prev.filter(i => i !== item.id)
                                    } else {
                                        return [...prev, item.id]
                                    }
                                })}
                            /> : null
                        }
                    </tr>
                )
            });
        }

    }

    const render = renderStudents()

    return (
        <div className={cls.mainContainer}>
            <div className={cls.mainContainer_tablePanelBox}>
                <Table>
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Full name</th>
                        <th>Age</th>
                        <th>Telefon numer</th>
                        <th>Til</th>
                        <th>Guruh</th>
                        <th>Reg. sana</th>
                        {
                            theme ? <th/> : null
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {render}
                    </tbody>
                </Table>

            </div>

            <StudentsFilter
                active={active}
                setActive={setActive}
            />
        </div>
    );
})