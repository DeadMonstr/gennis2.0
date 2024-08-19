import {memo} from 'react';
import {useForm} from "react-hook-form";

import {Select} from "shared/ui/select";
import {Button} from "shared/ui/button";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";

import cls from "./groupAddForm.module.sass";

export const GroupAddForm = memo((props) => {

    const {
        setActive,
        active
    } = props

    const {
        register,
        handleSubmit
    } = useForm()

    const onSubmit = (data) => {

    }

    return (
        <Modal
            setActive={setActive}
            active={active}
        >
            <Form
                typeSubmit={""}
                extraClassname={cls.addModal}
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2>Add Group</h2>
                <Select
                    title={"Groups"}
                    register={register}
                    name={"group"}
                />
                <Button>Tekshirmoq</Button>
            </Form>
        </Modal>
    )
})
