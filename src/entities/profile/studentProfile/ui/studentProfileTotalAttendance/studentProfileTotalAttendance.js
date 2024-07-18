import React, {memo, useContext} from 'react';
import classNames from "classnames";

import {Select} from "shared/ui/select";
import {Table} from "shared/ui/table";
import {EditableCard} from "shared/ui/editableCard";
import {ContextStuPro} from "pages/profilePage";

import cls from "./studentProfileTotalAttendance.module.sass";

const list = [
    {
        groupName: "Ec17701",
        dates: ["01", "03", "05", "08", "11", "13", "16", "18", "20"],
        statuses: [true, false, true, true, false, true, true, false, true]
    }
]

export const StudentProfileTotalAttendance = memo(() => {

    const {active, setActive} = useContext(ContextStuPro)

    const renderAttendance = () => {
        return list.map(item =>
            <tr>
                <td/>
                <td>{item.groupName}</td>
                {
                    item.statuses.map(status =>
                        <td>
                            {
                                status ?
                                    <i
                                        className={classNames("fas fa-check", cls.icon, cls.active)}
                                    />
                                    :
                                    <i className={classNames("fas fa-times", cls.icon)}/>
                            }
                        </td>
                    )
                }
            </tr>
        )
    }

    const render = renderAttendance()

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
                            <th/>
                            <th>Gruppa fani</th>
                            {
                                list[0].dates.map(item =>
                                    <th>{item}</th>
                                )
                            }
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
