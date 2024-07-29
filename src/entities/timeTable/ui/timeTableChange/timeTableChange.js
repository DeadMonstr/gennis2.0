import {memo} from 'react';
import {useForm} from "react-hook-form";

import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Button} from "shared/ui/button";

import cls from "./timeTableChange.module.sass";

export const TimeTableChange = memo((props) => {

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
                <div className={cls.change}>
                    <h1>Change time</h1>
                    <Input
                        extraClassName={cls.change__input}
                        placeholder={"Boshlanish vaqti"}
                        register={register}
                        name={"startTime"}
                        value={active?.startTime}
                    />
                    <Input
                        extraClassName={cls.change__input}
                        placeholder={"Tugash vaqti"}
                        register={register}
                        name={"finishTime"}
                        value={active?.finishTime}
                    />
                    <Input
                        extraClassName={cls.change__input}
                        placeholder={"Order"}
                        register={register}
                        name={"order"}
                        value={active?.timeList}
                    />
                    <Input
                        extraClassName={cls.change__input}
                        placeholder={"Name"}
                        register={register}
                        name={"name"}
                        value={active?.name}
                    />
                    <Button
                        extraClass={cls.change__btn}
                        type={"simple"}
                    >
                        Create
                    </Button>
                </div>
            </Form>
        </Modal>
    )
})
