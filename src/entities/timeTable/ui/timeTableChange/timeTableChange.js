import {memo, useEffect, useMemo} from 'react';
import {useForm} from "react-hook-form";

import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Button} from "shared/ui/button";
import {MiniLoader} from "shared/ui/miniLoader";

import cls from "./timeTableChange.module.sass";

export const TimeTableChange = memo((props) => {

    const {register, handleSubmit, setValue} = useForm()

    const {
        active,
        setActive,
        onSubmit,
        loading
    } = props

    let startTime = useMemo(() => active?.start_time, [active])
    let finishTime = useMemo(() => active?.end_time, [active])
    let order = useMemo(() => active?.order, [active])
    let name = useMemo(() => active?.name, [active])

    useEffect(() => {
        setValue("start_time", startTime)
        setValue("end_time", finishTime)
        setValue("order", order)
        setValue("name", name)
    }, [active])

    return (
        <Modal
            active={active}
            setActive={setActive}
        >
            <Form
                onSubmit={handleSubmit(onSubmit)}
                typeSubmit={""}
            >
                <div className={cls.change}>
                    <h1>Change time</h1>
                    <Input
                        extraClassName={cls.change__input}
                        placeholder={"Boshlanish vaqti"}
                        register={register}
                        name={"start_time"}
                        value={active ? startTime : null}
                        type={"time"}
                        required
                    />
                    <Input
                        extraClassName={cls.change__input}
                        placeholder={"Tugash vaqti"}
                        register={register}
                        name={"end_time"}
                        value={active ? finishTime : null}
                        type={"time"}
                        required
                    />
                    <Input
                        extraClassName={cls.change__input}
                        placeholder={"Order"}
                        register={register}
                        name={"order"}
                        value={active ? order : null}
                        type={"number"}
                        required
                    />
                    <Input
                        extraClassName={cls.change__input}
                        placeholder={"Name"}
                        register={register}
                        name={"name"}
                        value={name}
                        required
                    />
                    {
                        loading ? <MiniLoader/> :
                            <Button
                                extraClass={cls.change__btn}
                                type={"simple"}
                            >
                                O'zgartirish
                            </Button>
                    }

                </div>
            </Form>
        </Modal>
    )
})
