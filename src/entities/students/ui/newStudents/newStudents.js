import React, {memo, useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchOnlyNewStudentsData, getNewStudentsData, getStudentsWithBranch, getNewStudentsWithSubject} from "entities/students";
import {useNavigate} from "react-router";
import {Input} from "shared/ui/input";
import cls from "entities/students/ui/newStudents/newStudents.module.sass";
import {Table} from "shared/ui/table";
import {getDeletedNewStudents, StudentsFilter} from "features/filters/studentsFilter";
import {DefaultPageLoader} from "shared/ui/defaultLoader";
import {StudiyngStudentDelModal} from "../../../../features/studiyngStudentDelModal";

export const NewStudents = memo(({currentTableData, setSelectStudents, theme}) => {

    const [active, setActive] = useState(false);
    const [studentId, setStudentId] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const navigation = useNavigate()
    const dispatch =  useDispatch()
    const getNewSt = useSelector(getStudentsWithBranch)
    const userSystem = JSON.parse(localStorage.getItem("selectedSystem")) // changed
    const getDeleted = useSelector(getDeletedNewStudents)
    console.log(getDeleted, 'eefe')



    const renderStudents = () => {
        if (getDeleted && getDeleted.length > 0) {
            return getDeleted?.map((item, i) => (
                <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td onClick={() => navigation(`profile/${item.id}`)}>{item.student.user.surname} {item.student.user.name}</td>
                    <td>{item.student?.user?.age}</td>
                    <td>{item.student?.user?.language?.name}</td>
                    <td>{item.student?.class_number}</td>
                    <td>{item.user?.registered_date}</td>
                </tr>
            ));
        } else {
            return currentTableData?.map((item, i) => (
                <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td onClick={() => navigation(`profile/${item.id}`)}>{item.user?.surname} {item.user?.name}</td>
                    <td>{item.user?.age}</td>
                    <td>{item.user?.language?.name}</td>
                    <td>{item?.class_number?.number}</td>
                    <td>{item.user?.registered_date}</td>
                    <td onClick={() => {
                        setStudentId(item.id);
                        setIsOpen(!isOpen);
                    }}>
                        <i style={{color: '#FF3737FF'}} className={`fa-solid fa-xmark ${cls.xmark}`}></i>
                    </td>
                </tr>
            ));
        }
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
                        {
                            getDeleted && getDeleted.length > 0 ?
                                null :  <th>O'chirish</th>

                        }
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
