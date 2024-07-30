import {memo} from 'react';

import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Button} from "shared/ui/button";

import cls from "./studentProfileChangeInfo.module.sass";

export const StudentProfileChangeInfo = memo((props) => {

    const {
        setActive,
        active,
        onSubmit,
        register
    } = props

    return (
        <Modal
            setActive={setActive}
            active={active}
        >
            <div className={cls.changeInfo}>
                <h1>Malumotni o'zgartirish</h1>
                <Form onSubmit={onSubmit}>
                    <Input
                        placeholder={"Ism"}
                        name={"name"}
                        register={register}
                    />
                    <Input
                        placeholder={"Familiya"}
                        name={"surname"}
                        register={register}
                    />
                    <Input
                        placeholder={"Otasinig ismi"}
                        name={"father_name"}
                        register={register}
                    />
                    <Input
                        placeholder={"Telefon raqami"}
                        name={"phone"}
                        register={register}
                    />
                    <Input
                        placeholder={"Yoshi"}
                        name={"age"}
                        register={register}
                    />
                    <Input
                        placeholder={"Tug'ilgan sana"}
                        name={"birth_date"}
                        register={register}
                    />
                </Form>
            </div>
        </Modal>
    )
})
