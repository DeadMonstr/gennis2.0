import React, { memo } from 'react';

import { EditableCard } from "shared/ui/editableCard";
import {groups} from "entities/profile/teacherProfile";

import cls from "./schoolTeacherGroups.module.sass";
import cardBg from 'shared/assets/icons/card-bg.svg';
import groupImage from 'shared/assets/images/group-img.svg';
import {Table} from "../../../../../shared/ui/table";
import {useSelector} from "react-redux";
import {getTeacherId} from "../../../../teachers";

export const SchoolTeacherGroups = memo(() => {
    const teacherData = useSelector(getTeacherId)
    const schoolTeacherGroups = teacherData?.group
    return (
        <div className={cls.groupsContainer}>
            {
                schoolTeacherGroups.length === 0 ?
                    <EditableCard>
                        <h1>O'qituvchida guruhi yo'q</h1>
                    </EditableCard>
                    :
                schoolTeacherGroups?.map((item, index) => (
                    <EditableCard extraClass={cls.classProfile} titleType="">
                        <h1>Sinfi</h1>

                        <div className={cls.classColor}></div>

                        <h1>{item?.name}</h1>

                        <h2 className={cls.info__role}>Green</h2>
                    </EditableCard>
                ))
            }


            <EditableCard extraClass={cls.classList}>
                <h1>O'quvchilar ro'yxati</h1>
                <Table>
                    <thead className={cls.theadBody}>
                    <tr>
                        <th>№</th>
                        <th>Ism familiya</th>
                        <th>Tel</th>
                        <th>Tel (ota-ona)</th>
                        <th>Qarz</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Sardor Eshonov</td>
                        <td>98565468</td>
                        <td>88759848</td>
                        <td>690000</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Sardor Eshonov</td>
                        <td>98565468</td>
                        <td>88759848</td>
                        <td>690000</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Sardor Eshonov</td>
                        <td>98565468</td>
                        <td>88759848</td>
                        <td>690000</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Sardor Eshonov</td>
                        <td>98565468</td>
                        <td>88759848</td>
                        <td>690000</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Sardor Eshonov</td>
                        <td>98565468</td>
                        <td>88759848</td>
                        <td>690000</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Sardor Eshonov</td>
                        <td>98565468</td>
                        <td>88759848</td>
                        <td>690000</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Sardor Eshonov</td>
                        <td>98565468</td>
                        <td>88759848</td>
                        <td>690000</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Sardor Eshonov</td>
                        <td>98565468</td>
                        <td>88759848</td>
                        <td>690000</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Sardor Eshonov</td>
                        <td>98565468</td>
                        <td>88759848</td>
                        <td>690000</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Sardor Eshonov</td>
                        <td>98565468</td>
                        <td>88759848</td>
                        <td>690000</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Sardor Eshonov</td>
                        <td>98565468</td>
                        <td>88759848</td>
                        <td>690000</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Sardor Eshonov</td>
                        <td>98565468</td>
                        <td>88759848</td>
                        <td>690000</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Sardor Eshonov</td>
                        <td>98565468</td>
                        <td>88759848</td>
                        <td>690000</td>
                    </tr>
                    </tbody>
                </Table>
            </EditableCard>
        </div>
    );
});
