import React, {memo, useEffect, useState} from 'react';
import {useNavigate} from "react-router";
import cls from "entities/students/ui/newStudents/newStudents.module.sass";
import {Table} from "shared/ui/table";
import {StudentsFilter} from "features/filters/studentsFilter";
import {StudiyngStudentDelModal, studiyngStudentDelThunk} from "../../../../features/studiyngStudentDelModal";
import {YesNo} from "shared/ui/yesNoModal";
import {onAddAlertOptions} from "features/alert/model/slice/alertSlice";
import {fetchOnlyNewStudentsData} from "entities/students/model/studentsThunk";
import {useDispatch} from "react-redux";

export const NewStudents = memo(({currentTableData, setSelectStudents, theme,branchId}) => {

    const [active, setActive] = useState(false);
    const [studentId, setStudentId] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const navigation = useNavigate()
    const userSystem = JSON.parse(localStorage.getItem("selectedSystem"))

    console.log(currentTableData)
    const renderStudents = () => {
        return currentTableData?.map((item, i) => (
            <tr key={item.id}>
                <td>{i + 1}</td>
                <td onClick={() => navigation(`profile/${item.id}`)}>
                    {

                        `${item.user?.surname} ${item.user?.name}`
                    }
                </td>
                <td>
                    {item.user?.age}

                </td>
                <td>
                    {item.user?.language?.name}
                </td>
                <td>
                    {item?.class_number?.number}
                </td>
                <td>{item.user?.registered_date}</td>

                <td onClick={() => {
                    setStudentId(item.id);
                    setIsOpen(!isOpen);
                }}>
                    <i style={{color: '#FF3737FF'}} className={`fa-solid fa-xmark ${cls.xmark}`}></i>
                </td>


            </tr>
        ));
    };


    const render = renderStudents()

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(studiyngStudentDelThunk(studentId)).then(() => {
            dispatch(onAddAlertOptions({
                type: "success",
                status: true,
                msg: "O'quvchi muvofaqqiyatli o'chirildi"
            }))

            dispatch(fetchOnlyNewStudentsData({id: branchId}));
        });
    };

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
            <YesNo  setActiveDelete={setIsOpen} activeDelete={isOpen}  onDelete={handleDelete}/>
            {/*<StudiyngStudentDelModal userId={studentId} onClose={setIsOpen} isOpen={isOpen}/>*/}

        </div>
    );
});
