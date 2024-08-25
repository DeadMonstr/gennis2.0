import {getGroupProfileData} from "entities/profile/groupProfile";
import React, {memo, useState} from 'react';
import classNames from "classnames";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {API_URL_DOC} from "shared/api/base";
import {Button} from "shared/ui/button";
import {Form} from "shared/ui/form";
import {Modal} from "shared/ui/modal";
import {Select} from "shared/ui/select";

import {Table} from "shared/ui/table";
import {Input} from "shared/ui/input";

import cls from "./classProfileStudentsForm.module.sass";
import defaultUser from "shared/assets/images/user_image.png";

export const ClassProfileStudentsForm = memo(() => {

    const {
        register,
        handleSubmit
    } = useForm()
    const data = useSelector(getGroupProfileData)

    const [active, setActive] = useState(false)
    const [activeModal, setActiveModal] = useState("")

    const onSubmitMove = (data) => {
        console.log(data, "data")
    }

    const renderStudentsList = () => {
        return data?.students?.map(item =>
            <tr>
                <td>
                    <img src={item?.user?.profile_img ? API_URL_DOC + item?.user?.profile_img : defaultUser} alt=""/>
                </td>
                <td>{item?.user?.name} {item?.user?.surname}</td>
                <td>{item?.user?.phone}</td>
                <td>{item?.parents_number}</td>
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
                {
                    active ? <>
                        <td>
                            <Input
                                extraClassName={cls.studentsList__input}
                                type={"checkbox"}
                                defaultValue={item.checked}
                            />
                        </td>
                        <td>
                            {/*<Input*/}
                            {/*    extraClassName={cls.studentsList__input}*/}
                            {/*    type={"checkbox"}*/}
                            {/*    defaultValue={item.deleted}*/}
                            {/*/>*/}
                            <i
                                className={classNames("fas fa-trash", cls.studentsList__delete)}
                                onClick={() => setActiveModal("delete")}
                            />
                        </td>
                    </> : null
                }
            </tr>
        )
    }

    const render = renderStudentsList()

    return (
        <>
            <div className={cls.studentsList}>
                <div className={cls.btns}>
                    <h1>O’quvchilar ro’yxati</h1>
                    <div className={cls.btns__inner}>
                        <Button
                            onClick={() => setActiveModal("change")}
                        >
                            Move
                        </Button>
                        <Button>Add</Button>
                        <i
                            className={classNames("fas fa-edit", cls.studentsList__icon)}
                            onClick={() => setActive(!active)}
                        />
                    </div>
                </div>
                <div className={cls.studentsList__container}>
                    <Table>
                        <thead>
                        <tr>
                            <th/>
                            <th>Ism Familya</th>
                            <th>Tel</th>
                            <th>Tel Ota-ona</th>
                            <th>Balans</th>
                            {
                                active ? <>
                                    <th>check</th>
                                    <th>del</th>
                                </> : null
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {render}
                        </tbody>
                    </Table>
                </div>
            </div>
            <Modal
                extraClass={cls.deleteForm}
                active={activeModal === "change"}
                setActive={setActiveModal}
            >
                <h1>Boshqa sinfga qo’shish</h1>
                <Form
                    extraClassname={cls.deleteForm__form}
                    onSubmit={handleSubmit(onSubmitMove)}
                    typeSubmit={""}
                >
                    <Select
                        extraClass={cls.deleteForm__select}
                        // options={teachers}
                        title={"Color"}
                        // onChangeOption={onFilterGroups}
                        // register={register}
                        // name={"teacher"}
                    />
                    <Select
                        extraClass={cls.deleteForm__select}
                        // options={groups}
                        title={"Class"}
                        // register={register}
                        // name={"to_group_id"}
                    />
                    {/*<Input*/}
                    {/*    extraClassName={cls.deleteForm__input}*/}
                    {/*    placeholder={"Sabab"}*/}
                    {/*    register={register}*/}
                    {/*    name={"reason"}*/}
                    {/*/>*/}
                    <Button extraClass={cls.deleteForm__btn}>Add</Button>
                </Form>
            </Modal>
        </>
    )
})