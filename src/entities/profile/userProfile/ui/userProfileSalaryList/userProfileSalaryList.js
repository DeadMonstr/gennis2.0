import {memo} from 'react';

import {Table} from "shared/ui/table";

import cls from "./userProfileSalaryList.module.sass";
import classNames from "classnames";

export const UserProfileSalaryList = memo(({data}) => {

    const renderDataList = () => {
        return data.map(item =>
            <tr>
                <td/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        )
    }

    return (
        <div className={cls.salaryList}>
                <h1 className={cls.salaryList__title}>Salary</h1>
            <div className={cls.salaryList__container}>
                <Table>
                    <thead>
                    <tr>
                        <th/>
                        <th>Oylik</th>
                        <th>Qolgan</th>
                        <th>Olingan</th>
                        <th>Sana</th>
                    </tr>
                    </thead>
                    <tbody>
                    {}
                    </tbody>
                </Table>
            </div>
        </div>
    )
})
