import {memo} from 'react';
import {useForm} from "react-hook-form";

import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Button} from "shared/ui/button";

import cls from "./timeTableCreate.module.sass";

export const TimeTableCreate = memo((props) => {

    const {register, handleSubmit} = useForm()

    const {
        active,
        setActive,
        onSubmit
    } = props

    return (
        <Modal
            active={active}
            setActive={setActive}
        >
            <Form
                onSubmit={handleSubmit(onSubmit)}
                typeSubmit={""}
            >
                <div className={cls.create}>
                    <h1>Add time</h1>
                    <Input
                        extraClassName={cls.create__input}
                        placeholder={"Boshlanish vaqti"}
                        register={register}
                        name={"startTime"}
                    />
                    <Input
                        extraClassName={cls.create__input}
                        placeholder={"Tugash vaqti"}
                        register={register}
                        name={"finishTime"}
                    />
                    <Input
                        extraClassName={cls.create__input}
                        placeholder={"Order"}
                        register={register}
                        name={"order"}
                    />
                    <Input
                        extraClassName={cls.create__input}
                        placeholder={"Name"}
                        register={register}
                        name={"name"}
                    />
                    <Button
                        extraClass={cls.create__btn}
                        type={"simple"}
                    >
                        Create
                    </Button>
                </div>
            </Form>
        </Modal>
    )
})
