import React, {memo, useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchOnlyNewStudentsData, getNewStudentsData, getStudentsWithBranch, getNewStudentsWithSubject} from "entities/students";
import {useNavigate} from "react-router";
import {Input} from "shared/ui/input";
import cls from "entities/students/ui/newStudents/newStudents.module.sass";
import {Table} from "shared/ui/table";
import {StudentsFilter} from "features/filters/studentsFilter";
import {DefaultPageLoader} from "../../../../shared/ui/defaultLoader";

export const NewStudents = memo(({currentTableData, setSelectStudents, theme}) => {

    const [active, setActive] = useState(false);
    const navigation = useNavigate()
    const dispatch =  useDispatch()
    const getNewSt = useSelector(getStudentsWithBranch)
    const userSystem = JSON.parse(localStorage.getItem("selectedSystem"))




    const renderStudents = () => {

        const studentToRender = getNewSt && getNewSt.length > 0 ? getNewSt : currentTableData
        if (!studentToRender || studentToRender.length === 0)
        {
            return (
                <DefaultPageLoader/>
            )
        }
           return studentToRender?.map((item,i) => {
               return (
                   <tr
                   >
                       <td>{i + 1}</td>
                       <td  onClick={() => navigation(`profile/${item.id}`)}>{item.user?.surname} {item.user?.name}</td>
                       <td>{item.user?.age}</td>
                       <td>{item.user?.language?.name}</td>
                       {
                           userSystem?.id === 2 ? <>
                               <td>{item?.group[0]?.name}</td>
                           </> : <>
                               <td>{item.user?.phone}</td>
                               <td>{
                                   !item.subject[0]?.name || item.subject === 0 ? "Fani hali tanlanmagan" : item.subject[0]?.name
                               }</td>
                           </>
                       }

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
                           />: null
                       }
                   </tr>
               )
           })
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
                        <th>Til</th>
                        {
                            userSystem?.id === 2 ? <th>Sinf</th> : <>
                                <th>Telefon numer</th>
                                <th>Fani</th>
                            </>
                        }

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
});
