import {memo} from 'react';
import {useForm} from "react-hook-form";

import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Button} from "shared/ui/button";
import {MiniLoader} from "shared/ui/miniLoader";

import cls from "./timeTableCreate.module.sass";

export const TimeTableCreate = memo((props) => {

    const {register, handleSubmit} = useForm()

    const {
        active,
        setActive,
        onSubmit,
        loading
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
                    <h1>Soat yaratish</h1>
                    <Input
                        extraClassName={cls.create__input}
                        placeholder={"Boshlanish vaqti"}
                        register={register}
                        name={"start_time"}
                        type={"time"}
                        required
                    />
                    <Input
                        extraClassName={cls.create__input}
                        placeholder={"Tugash vaqti"}
                        register={register}
                        name={"end_time"}
                        type={"time"}
                        required
                    />
                    <Input
                        extraClassName={cls.create__input}
                        placeholder={"Soati"}
                        register={register}
                        name={"order"}
                        type={"number"}
                        required
                    />
                    <Input
                        extraClassName={cls.create__input}
                        placeholder={"Name"}
                        register={register}
                        name={"name"}
                        required
                    />
                    {
                        loading ? <MiniLoader/> :
                            <Button
                                extraClass={cls.create__btn}
                                type={"simple"}
                            >
                                Yaratish
                            </Button>
                    }
                </div>
            </Form>
        </Modal>
    )
})
