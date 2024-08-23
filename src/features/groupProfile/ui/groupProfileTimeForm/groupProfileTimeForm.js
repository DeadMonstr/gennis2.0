import classNames from "classnames";
import React, {memo, useState} from 'react';
import {useForm} from "react-hook-form";

import {EditableCard} from "shared/ui/editableCard";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Select} from "shared/ui/select";
import {Input} from "shared/ui/input";
import {Button} from "shared/ui/button";
import {Table} from "shared/ui/table";

import cls from "./groupProfileTimeForm.module.sass";

const data = [
    {
        name: "Madina",
        surname: "Abdurahmonova",
        days: ["14:00", "14:00", "14:00"]
    },
    {
        name: "Madina",
        surname: "Abdurahmonova",
        days: ["14:00", "14:00", "14:00"]
    },
    {
        name: "Madina",
        surname: "Abdurahmonova",
        days: ["14:00", "14:00", "14:00"]
    },
    {
        name: "Madina",
        surname: "Abdurahmonova",
        days: ["14:00", "14:00", "14:00"]
    }

]

export const GroupProfileTimeForm = memo(() => {

    const {
        register,
        handleSubmit
    } = useForm()

    const [active, setActive] = useState(false)
    const [counter, setCounter] = useState([1])

    const onSubmit = (data) => {

    }

    const renderSubjectList = () => {
        return data.map(item =>
            <tr>
                <td/>
                <td>{item.name} {item.surname}</td>
                {
                    item.days.map(i =>
                        <td>{i}</td>
                    )
                }
            </tr>
        )
    }

    const render = renderSubjectList()

    return (
        <>
            <EditableCard
                extraClass={cls.subjectList}
                title={<i className="fas fa-edit"/>}
                onClick={() => setActive(true)}
            >
                <h1>Dars jadvali</h1>
                <div className={cls.subjectList__contauner}>
                    <Table>
                        <thead>
                        <tr>
                            <th/>
                            <th>Hona</th>
                            <th>
                                <div className={cls.days}>
                                    <h2>01</h2>
                                    <p>Dushanba</p>
                                </div>
                            </th>
                            <th>
                                <div className={cls.days}>
                                    <h2>03</h2>
                                    <p>Dushanba</p>
                                </div>
                            </th>
                            <th>
                                <div className={cls.days}>
                                    <h2>05</h2>
                                    <p>Dushanba</p>
                                </div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {render}
                        </tbody>
                    </Table>
                </div>
            </EditableCard>
            <Modal
                extraClass={cls.timeForm}
                active={active}
                setActive={setActive}
            >
                <h1>Ma’lumot o’zgartirish</h1>
                <Form
                    extraClassname={cls.form}
                    onSubmit={handleSubmit(onSubmit)}
                    typeSubmit={""}
                >
                    <div className={cls.form__container}>
                        {
                            counter.map(item => {

                                const dayName = `week${item}`
                                const roomName = `room${item}`
                                const StartName = `start_time${item}`
                                const endName = `end_time${item}`

                                return (
                                    <div className={cls.form__item}>
                                        <Select
                                            title={"Kunlar"}
                                            register={register}
                                            name={dayName}
                                        />
                                        <Select
                                            title={"Xonalar"}
                                            register={register}
                                            name={roomName}
                                        />
                                        <Input
                                            extraClassName={cls.form__input}
                                            placeholder={"Boshlanish vaqti"}
                                            type={"time"}
                                            register={register}
                                            name={StartName}
                                        />
                                        <Input
                                            extraClassName={cls.form__input}
                                            placeholder={"Tugash vaqti"}
                                            type={"time"}
                                            register={register}
                                            name={endName}
                                        />
                                        <div className={cls.form__icons}>
                                            <i
                                                className="fas fa-minus"
                                                onClick={() => setCounter(counter.filter(i => i !== item))}
                                            />
                                            <i className={classNames("fas fa-times", cls.form__icon)}/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <i
                        className={classNames("fas fa-plus", cls.timeForm__plus)}
                        onClick={() => setCounter(prev => {
                            const newCounter = prev[prev.length - 1] + 1
                            return [...prev, newCounter]
                        })}
                    />
                    <Button extraClass={cls.form__btn}>Change</Button>
                </Form>
            </Modal>
        </>
    )
})
