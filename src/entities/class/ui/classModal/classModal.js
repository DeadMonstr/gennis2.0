import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Button} from "shared/ui/button";
import {Form} from "shared/ui/form";
import {useForm} from "react-hook-form";
import {Select} from "shared/ui/select";
import cls from "../classTable/classTable.module.sass"
import {useEffect, useState} from "react";
import {HexColorPicker} from "react-colorful";
import {AnimatedMulti} from "features/workerSelect";
import {value} from "lodash/seq";

import {classItem, getClassNewNumberList, updateClassItem} from "entities/class/model/thunk/classThunk";

import {API_URL, headers, useHttp} from "shared/api/base";
import {useDispatch} from "react-redux";
import {ConfirmModal} from "../../../../shared/ui/confirmModal";

export const ClassModal = ({

                               selectOptions,
                               activeEdit,
                               setActiveEdit,
                               onClick,
                               setAddClass,
                               addClass,
                               createClass,
                               editClass,
                               setEditClass,
                               edit,
                               changedItem,
                               onDelete,

                           }) => {


    const [selectedSubject, setSelectedSubject] = useState([])


    const {register, handleSubmit, setValue} = useForm()
    const {request} = useHttp()
    const dispatch = useDispatch()


    const changeInfo = (data) => {


        const res = {
            subjects: selectedSubject,
            ...data
        }

        const idClass = editClass

        setValue("curriculum_hours", "")
        setValue("price", "")
        dispatch(updateClassItem({idClass, res}))
        // dispatch(getClassNewNumberList(idClass))
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


    useEffect(() => {
        if (editClass) {
            request(`${API_URL}Class/class_subjects?id=${editClass}`, "GET", null, headers())
                .then(res => {

                    setSelectedSubject(res.hours.map(item => ({
                        value: item.id,
                        label: item.name,
                        hours: item.hours
                    })))
                })
        }
    }, [editClass])


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

    console.log(selectedSubject)

    return (
        <>
            <Modal active={activeEdit} setActive={setActiveEdit}>
                <div className={cls.modalHeader}> {edit?.name} <span>ni o'zgartirish</span></div>
                <div>
                    <Form typeSubmit={""} extraClassname={cls.extraClassForm}>
                        <Input name={"name"} register={register}/>
                        <div className={cls.modalBtn}>
                            <Button onClick={handleSubmit(onClick)}>
                                Tastiqlash
                            </Button>
                            <Button onClick={handleSubmit(onDelete)} type={"danger"}>
                                O'chirish
                                <i className={"fa fa-trash"}/>
                            </Button>
                        </div>
                    </Form>
                </div>
            </Modal>


            <Modal active={addClass} setActive={setAddClass}>
                <h2>Sinf turi yaratish </h2>
                <div>
                    <Form extraClassname={cls.extraClassForm} onSubmit={handleSubmit(createClass)}>
                        <Input placeholder={"sinf nomi"} name={"name"} register={register}/>
                    </Form>
                </div>
            </Modal>

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
                        <div>
                            {
                                selectedSubject.map(item => {
                                    return (
                                        <Input
                                            value={item.hours}
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


export const ColorModal = ({
                               createColor,
                               setCreateColor,
                               handleSubmit,
                               addColor,
                               register,
                               color,
                               setColor,
                               setActive,
                               active,
                               changeName,
                               setChangeName,
                               changeColor,
                               setColorChange,
                               colorChange,
                               deleteColor,
                               edit
                           }) => {


    return (
        <>
            <Modal active={createColor} setActive={setCreateColor}>
                <h2>Rang qo'shish</h2>
                <div>
                    <Form extraClassname={cls.extraClassForm} onSubmit={handleSubmit(addColor)}>
                        <Input name={"name"} register={register}/>
                        <div className={cls.changeColorItem}>

                            <div className={cls.color}>
                                <h2>Tanlangan rang : </h2>
                                <div style={{fontSize: "2rem"}}>{color}</div>
                            </div>
                            <HexColorPicker style={{width: "30rem", height: "15rem"}} color={color}
                                            onChange={setColor}/>


                        </div>
                    </Form>
                </div>
            </Modal>


            <Modal active={changeName} setActive={setChangeName}>
                <h2>Rangni oz'gartirish yoki O'chirish</h2>
                <div>

                    <Form extraClassname={cls.extraClassForm} typeSubmit={""}>
                        <Input name={"name"} register={register}/>
                        <div className={cls.changeColorItem}>

                            <div className={cls.color}>
                                <h2>Tanlangan rang :</h2>
                                <div style={{fontSize: "2rem"}}>{colorChange ? colorChange : edit?.value}</div>
                            </div>
                            <HexColorPicker style={{width: "30rem", height: "15rem"}} color={edit?.value}
                                            onChange={setColorChange}/>

                        </div>
                        <div style={{display: "flex", gap: "2rem"}}>
                            <Button onClick={handleSubmit(changeColor)}>Rangni o'zgartirish</Button>
                            {edit?.status ? <Button onClick={handleSubmit(() => setActive(!active))} type={"danger"}>Rangni
                                O'chirish</Button> : null}
                        </div>
                        <ConfirmModal setActive={setActive} active={active} onClick={handleSubmit(deleteColor)}
                                      type={"danger"}/>
                    </Form>


                </div>
            </Modal>
        </>
    )
}