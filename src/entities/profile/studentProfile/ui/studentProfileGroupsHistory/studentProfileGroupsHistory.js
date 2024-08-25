import {memo, useCallback, useEffect} from 'react';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {EditableCard} from "shared/ui/editableCard";
import {Table} from "shared/ui/table";
import {useParams} from "react-router-dom";
import cls from "./studentProfileGroupsHistory.module.sass";
import {studentGroupHistoryThunk} from "../../../../../features/studentPayment";
import {getGroupHistory} from "../../../../../features/studentPayment";

const list = [
    {
        groupName: "Eb19103",
        addedDate: "2024-04-16",
        exitedDate: "2024-04-16",
        reason: "",
        studentFullName: "ShoxistaYusupova"
    },
    {
        groupName: "Eb19103",
        addedDate: "2024-04-16",
        exitedDate: "2024-04-16",
        reason: "",
        studentFullName: "ShoxistaYusupova"
    },
    {
        groupName: "Eb19103",
        addedDate: "2024-04-16",
        exitedDate: "2024-04-16",
        reason: "",
        studentFullName: "ShoxistaYusupova"
    },
    {
        groupName: "Eb19103",
        addedDate: "2024-04-16",
        exitedDate: "2024-04-16",
        reason: "",
        studentFullName: "ShoxistaYusupova"
    }
]

export const StudentProfileGroupsHistory = memo(({active, setActive, selectedSubject}) => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const getGroupHistories = useSelector(getGroupHistory)
    const getHistorys = getGroupHistories.studenthistorygroup

    useEffect(() => {
        dispatch(studentGroupHistoryThunk(selectedSubject))
    }, [selectedSubject, dispatch])

    const renderGroupsHistory = useCallback(() => {
        if (!Array.isArray(getHistorys)) {
            return null;
        }

        return getHistorys.map(history => (
            <tr key={history.id}>
                <td/>
                <td>{history.group.name}</td>
                <td>{history.joined_day}</td>
                <td>{history.left_day}</td>
                <td>{history.reason}</td>
                <td>{history.student.user?.surname} - {history.student.user?.name}</td>
            </tr>
        ));
    }, [getHistorys]);

    const render = renderGroupsHistory();

    return (
        <EditableCard
            extraClass={classNames(cls.history, {
                [cls.active]: active === "groupsHistory"
            })}
            titleType={"cross"}
            onClick={() => setActive("")}
        >
            <div className={cls.history__container}>
                <h1>Guruhlar tarixi</h1>
                <div>
                    <Table>
                        <thead>
                        <tr>
                            <th/>
                            <th>Gruppa nomi</th>
                            <th>Qo’shilgan kunni</th>
                            <th>Chiqib ketgan kuni</th>
                            <th>Sabab</th>
                            <th>O'qituvchi ism familiyasi</th>
                        </tr>
                        </thead>
                        <tbody>
                        {render}
                        </tbody>
                    </Table>
                </div>
            </div>
        </EditableCard>
    )
})
