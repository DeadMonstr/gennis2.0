import {memo} from 'react';
import classNames from "classnames";

import {Table} from "shared/ui/table";
import {Input} from "shared/ui/input";

import cls from "./classProfileStudentsList.module.sass";
import defaultUser from "shared/assets/images/user_image.png";

const list = [
    {
        img: defaultUser,
        fullName: "Mahmud Yo`Ldoshev",
        parentTel: "+998909773176",
        tel: "+998909773176",
        money: "-10000",
        checked: true,
        deleted: true
    },
    {
        img: defaultUser,
        fullName: "Mahmud Yo`Ldoshev",
        parentTel: "+998909773176",
        tel: "+998909773176",
        money: "50000",
        checked: true,
        deleted: true
    },
    {
        img: defaultUser,
        fullName: "Mahmud Yo`Ldoshev",
        parentTel: "+998909773176",
        tel: "+998909773176",
        money: "295 000",
        checked: true,
        deleted: true
    },
    {
        img: defaultUser,
        fullName: "Mahmud Yo`Ldoshev",
        parentTel: "+998909773176",
        tel: "+998909773176",
        money: "295 000",
        checked: true,
        deleted: true
    },
    {
        img: defaultUser,
        fullName: "Mahmud Yo`Ldoshev",
        parentTel: "+998909773176",
        tel: "+998909773176",
        money: "295 000",
        checked: true,
        deleted: true
    },
    {
        img: defaultUser,
        fullName: "Mahmud Yo`Ldoshev",
        parentTel: "+998909773176",
        tel: "+998909773176",
        money: "295 000",
        checked: true,
        deleted: true
    }


]

export const ClassProfileStudentsList = memo(() => {

    const renderStudentsList = () => {
        return list.map(item =>
            <tr>
                <td>
                    <img src={item.img} alt=""/>
                </td>
                <td>{item.fullName}</td>
                <td>{item.tel}</td>
                <td>{item.parentTel}</td>
                <td>
                    <div
                        className={classNames(cls.studentsList__status, {
                            [cls.red]: Number(item.money) < 0,
                            [cls.yellow]: Number(item.money) > 0 && Number(item.money) < 100000,
                        })}
                    >
                        {item.money}
                    </div>
                </td>
                <td>
                    <Input
                        extraClassName={cls.studentsList__input}
                        type={"checkbox"}
                        defaultValue={item.checked}
                    />
                </td>
                <td>
                    <Input
                        extraClassName={cls.studentsList__input}
                        type={"checkbox"}
                        defaultValue={item.deleted}
                    />
                </td>
            </tr>
        )
    }

    const render = renderStudentsList()

    return (
        <div className={cls.studentsList}>
            <h1>O’quvchilar ro’yxati</h1>
            <div className={cls.studentsList__container}>
                <Table>
                    <thead>
                    <tr>
                        <th/>
                        <th>Ism Familya</th>
                        <th>Tel</th>
                        <th>Tel Ota-ona</th>
                        <th>Balans</th>
                        <th>check</th>
                        <th>del</th>
                    </tr>
                    </thead>
                    <tbody>
                    {render}
                    </tbody>
                </Table>
            </div>
        </div>
    )
})