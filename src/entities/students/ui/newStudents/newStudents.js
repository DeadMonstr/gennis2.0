import React, {memo, useEffect, useState} from 'react';
import {useNavigate} from "react-router";
import cls from "entities/students/ui/newStudents/newStudents.module.sass";
import {Table} from "shared/ui/table";
import {StudentsFilter} from "features/filters/studentsFilter";
import {StudiyngStudentDelModal} from "../../../../features/studiyngStudentDelModal";

export const NewStudents = memo(({currentTableData, setSelectStudents, theme}) => {

    const [active, setActive] = useState(false);
    const [studentId, setStudentId] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const navigation = useNavigate()
    const userSystem = JSON.parse(localStorage.getItem("selectedSystem"))



    const renderStudents = () => {
            return currentTableData?.map((item, i) => (
                <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td onClick={() => navigation(`profile/${item.id}`)}>
                        {
                            item.student ? `${item.student.user.surname}  ${item.student.user.name}` :
                                `${item.user?.surname} ${item.user?.name}`
                        }
                    </td>
                    <td>
                        {
                            item.student ? item.student.user.age :
                                item.user?.age
                        }

                    </td>
                    <td>
                        {
                            item.student ? item.student.user.language?.name :
                            item.user?.language?.name
                        }
                    </td>
                    <td>{
                        item.student ? item.class_number?.number :
                        item?.class_number?.number


                    }</td>
                    <td>{

                        item.student ? item.student.user.registered_date :
                        item.user?.registered_date
                    }</td>
                    {
                        !item.student ? <td onClick={() => {
                            setStudentId(item.id);
                            setIsOpen(!isOpen);
                        }}>
                            <i style={{color: '#FF3737FF'}} className={`fa-solid fa-xmark ${cls.xmark}`}></i>
                        </td> : null
                    }

                </tr>
            ));
    };



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
                            userSystem?.name === "school" ? <th>Sinf</th> : <>
                                <th>Telefon numer</th>
                                <th>Fani</th>
                            </>
                        }

                        <th>Reg. sana</th>

                        <th>O'chirish</th>

                    </tr>
                    </thead>
                    <tbody>
                    {render}
                    </tbody>
                </Table>

            </div>
            <StudiyngStudentDelModal userId={studentId} onClose={setIsOpen} isOpen={isOpen}/>
            <StudentsFilter
                active={active}
                setActive={setActive}
            />
        </div>
    );
});
