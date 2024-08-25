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
        register,
        currentData
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
                        value={currentData?.name}
                        required
                    />
                    <Input
                        placeholder={"Familiya"}
                        name={"surname"}
                        register={register}
                        value={currentData?.surname}
                        required
                    />
                    <Input
                        placeholder={"Otasinig ismi"}
                        name={"father_name"}
                        register={register}
                        value={currentData?.father_name}
                        required
                    />
                    <Input
                        placeholder={"Telefon raqami"}
                        name={"phone"}
                        register={register}
                        value={currentData?.phone}
                        required
                    />
                    <Input
                        placeholder={"Yoshi"}
                        name={"age"}
                        register={register}
                        value={currentData?.age}
                        required
                        type={"number"}
                    />
                    <Input
                        placeholder={"Tug'ilgan sana"}
                        name={"birth_date"}
                        register={register}
                        value={currentData?.birth_date}
                        required
                        type={"date"}
                    />
                </Form>
            </div>
        </Modal>
    )
})
