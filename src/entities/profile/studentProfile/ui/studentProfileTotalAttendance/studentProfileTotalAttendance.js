import {memo, useEffect} from 'react';
import classNames from "classnames";

import {Select} from "shared/ui/select";
import {Table} from "shared/ui/table";
import {EditableCard} from "shared/ui/editableCard";

import cls from "./studentProfileTotalAttendance.module.sass";
import {useDispatch, useSelector} from "react-redux";
import {studentTotalAddendanceThunk} from "features/studentPayment";
import {getTotalAttendance} from "features/studentPayment";

export const StudentProfileTotalAttendance = memo(({active, setActive, selectedGroup, selectedGroupName}) => {

    const dispatch = useDispatch();
    const attendanceData = useSelector(getTotalAttendance);

    // useEffect(() => {
    //     dispatch(studentTotalAddendanceThunk(selectedGroup));
    // }, [selectedGroup, dispatch]);
    //
    // const renderAttendance = () => {
    //     return Object.keys(attendanceData.students).map((date) => (
    //         <>
    //             {
    //                 attendanceData.students[date].map((student, index) => (
    //                     <td key={index}>
    //                         {student.status ? (
    //                             <i className={classNames("fas fa-check", cls.icon, cls.active)}/>
    //                         ) : (
    //                             <i className={classNames("fas fa-times", cls.icon)}/>
    //                         )}
    //                     </td>
    //                 ))
    //             }
    //         </>
    //     ));
    // };
    //
    // const renderDates = () => {
    //     return Object.keys(attendanceData.students).map((date) => (
    //         <th>{date}</th>
    //     ))
    // }
    //
    // const render = renderAttendance();
    // const renderDate = renderDates()
    return (
        <EditableCard
            extraClass={classNames(cls.totalAttendance, {
                [cls.active]: active === "totalAttendance"
            })}
            titleType={"cross"}
            onClick={() => setActive("")}
        >
            <div className={cls.totalAttendance__container}>
                <h1>Student Davomatlari</h1>
                <div className={cls.totalAttendance__selectors}>
                    <Select
                        title={"Yil"}
                    />
                    <Select
                        title={"Oy"}
                    />
                </div>
                <div className={cls.totalAttendance__table}>
                    <Table>
                        <thead>
                        <tr>
                            <th>Gruppa fani</th>
                            {/*{renderDate}*/}
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{selectedGroupName}</td>
                            {/*{render}*/}
                        </tr>

                        </tbody>
                    </Table>
                </div>
            </div>
        </EditableCard>
    )
});
