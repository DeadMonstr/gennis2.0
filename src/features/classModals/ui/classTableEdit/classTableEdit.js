import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Button} from "shared/ui/button";
import {Form} from "shared/ui/form";
import {useForm} from "react-hook-form";

import cls from "../classModal.module.sass"
import {useEffect, useState} from "react";

import {AnimatedMulti} from "features/workerSelect";


import {updateClassItem} from "entities/class/model/thunk/classThunk";


import {useDispatch} from "react-redux";



export const ClassTableEdit = ({

                               selectOptions,
                               editClass,
                               setEditClass,
                               edit,
                               changedItem,


                           }) => {


    const [selectedSubject, setSelectedSubject] = useState([])


    const {register, handleSubmit, setValue} = useForm()
    const dispatch = useDispatch()

    const changeInfo = (data) => {

        const id = edit.id

        const res = {
            subjects: selectedSubject.map(item => (
                // name: item.label,
                item.value
            )),
            ...data
        }
        const idClass = editClass

        setValue("curriculum_hours", "")
        setValue("price", "")
        dispatch(updateClassItem({idClass, res}))
        setEditClass(!editClass)
    }


    const [optionsSubject, setOptionsSubject] = useState([])


    useEffect(() => {
        if (changedItem?.id) {

            setSelectedSubject(changedItem.subjects.map(item => ({
                value: item.id,
                label: item.name
            })))
            setValue("curriculum_hours", changedItem.curriculum_hours)
            setValue("price", changedItem.price)

        }
    }, [changedItem?.id])

    useEffect(() => {
        if (selectOptions?.length)
            setOptionsSubject(selectOptions?.map(item => ({
                value: item.id,
                label: item.name
            })))

    }, [selectOptions])

    const onChangeSubjectPrice = (id, hours) => {
        // console.log(hours)
        setSelectedSubject(subjects => subjects.map(item => {
            if (item.value === id && hours !== item?.hours) {
                return {
                    ...item,
                    hours
                }
            }
            return item
        }))
    }

    return (
        <>
            <Modal active={editClass} setActive={setEditClass}>
                <h2>Ma’lumotlarni o’zgartirish </h2>
                <Form extraClassname={cls.extraClassForm} typeSubmit={""} onSubmit={handleSubmit(changeInfo)}>

                    <div className={cls.container}>
                        <div>

                            <Input
                                name={"price"}
                                register={register}
                                type={"number"}
                                placeholder={"narxi"}
                            />

                            <div className={cls.selectBox}>
                                <AnimatedMulti
                                    extraClass={cls.select}
                                    value={selectedSubject}
                                    options={optionsSubject}
                                    onChange={setSelectedSubject}
                                />
                            </div>
                        </div>
                        <div className={cls.input}>
                            {
                                selectedSubject.map(item => {
                                    return (
                                        <Input
                                            defaultValue={item.hours}
                                            type={"number"}
                                            title={item.label}
                                            onChange={
                                                (e) => onChangeSubjectPrice(item.value, e.target.value)
                                            }
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>


                    <Button>
                        Tastiqlash
                    </Button>
                </Form>

            </Modal>


        </>
    )
}

