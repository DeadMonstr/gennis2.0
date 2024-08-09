import {memo, useEffect, useMemo} from 'react';

import {Form} from "shared/ui/form";
import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";

import cls from "./userProfileChange.module.sass";

export const UserProfileChange = memo((props) => {

    const {
        active,
        setActive,
        onSubmit,
        register,
        setValue,
        data
    } = props

    let name = useMemo(() => data?.name, [data])
    let surname = useMemo(() => data?.surname, [data])
    let fatherName = useMemo(() => data?.father_name, [data])
    let birthDate = useMemo(() => data?.birth_date, [data])
    let phone = useMemo(() => data?.phone, [data])

    useEffect(() => {
        setValue("name", name)
        setValue("surname", surname)
        setValue("father_name", fatherName)
        setValue("birth_date", birthDate)
        setValue("phone", phone)
    }, [data])

    return (
        <Modal
            active={active}
            setActive={setActive}
        >
            <div className={cls.change}>
                <h1>Change</h1>
                <Form
                    onSubmit={onSubmit}
                    // typeSubmit={""}
                >
                    <Input
                        register={register}
                        name={"name"}
                        placeholder={"Ism"}
                        required
                    />
                    <Input
                        register={register}
                        name={"surname"}
                        placeholder={"Familiya"}
                        required
                    />
                    <Input
                        register={register}
                        name={"father_name"}
                        placeholder={"Otasining ismi"}
                        required
                    />
                    <Input
                        register={register}
                        name={"birth_date"}
                        placeholder={"Tug'ilgan sana"}
                        type={"date"}
                        required
                    />
                    <Input
                        register={register}
                        name={"phone"}
                        placeholder={"Telefon raqami"}
                        type={"number"}
                        required
                    />
                </Form>
            </div>
        </Modal>
    )
})
