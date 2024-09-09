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

import {classItem, updateClassItem} from "entities/class/model/thunk/classThunk";

import {useHttp} from "shared/api/base";
import {useDispatch} from "react-redux";

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
                               changedItem

                           }) => {


    const [selectedSubject, setSelectedSubject] = useState([])


    const {register, handleSubmit, setValue} = useForm()
    const {request} = useHttp()
    const dispatch = useDispatch()

    const changeInfo = (data) => {


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
        dispatch(classItem(1))

    }


    const [optionsSubject, setOptionsSubject] = useState([])


    useEffect(() => {
        if (changedItem?.id) {
            console.log(changedItem)
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


    // useEffect(() => {
    //     setSubject(selectOptions)
    // }, [])

    // useEffect(() => {
    //     if (deletedId !== 0) {
    //         setSubject(subject => {
    //             return subject.map(item => {
    //                 if (item.id === +deletedId) {
    //                     return {...item, disabled: false}
    //                 }
    //                 return item
    //             })
    //         })
    //
    //         setSelectedSubject(selectedSubject.filter(item => item.id !== +deletedId))
    //         setSelected(selectedSubject.filter(item => item.id !== +deletedId))
    //     }
    // }, [deletedId])
    //
    // console.log(subject, "subject")
    // console.log(selectedSubject, "selectedSubject")
    // console.log(deletedId , "deletedId")
    // console.log(selected , "selected")

    // const onChangeSelect = (id) => {
    //     const filteredSubjects = subject.filter(item => item.id === +id)
    //     setSubject(
    //         subject.map(item => {
    //             if (item.id === +id) {
    //                 return {...item, disabled: true}
    //             }
    //             return item
    //         })
    //     )
    //     setSelectedSubject(arr => [...arr, ...filteredSubjects])
    //     setSelected(arr => [...arr, ...filteredSubjects])
    //
    // }


    return (
        <>
            <Modal active={activeEdit} setActive={setActiveEdit}>

                <div className={cls.modalHeader}> {edit?.name} <span>ni o'zgartirish</span></div>
                <div>
                    <Form extraClassname={cls.extraClassForm} onSubmit={handleSubmit(onClick)}>
                        <Input name={"name"} register={register} placeholder={"nomi"}/>
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
                <div>
                    <Form extraClassname={cls.extraClassForm} typeSubmit={""} onSubmit={handleSubmit(changeInfo)}>
                        <Input name={"curriculum_hours"} register={register} type={"number"}
                               placeholder={"darslar soati"}/>
                        <Input name={"price"} register={register} type={"number"} placeholder={"narxi"}/>
                        {/*<Select onChangeOption={onChangeSelect} options={subject}/>*/}

                        <div className={cls.selectBox}>
                            <AnimatedMulti extraClass={cls.select} value={selectedSubject} options={optionsSubject}
                                           onChange={setSelectedSubject}/>
                        </div>
                        {/*{options?.map(item => (*/}
                        {/*    item.subjects.map(itemSubject => (*/}
                        {/*        itemSubject.name*/}
                        {/*    ))*/}
                        {/*))}*/}
                        <Button>
                            Tastiqlash
                        </Button>
                    </Form>

                </div>
            </Modal>

            {/*<Modal active={editClass} setActive={setEditClass}>*/}
            {/*    <h2>Ma’lumotlarni o’zgartirish</h2>*/}
            {/*    <div>*/}
            {/*        <Form extraClassname={cls.extraClassForm} typeSubmit={""} onSubmit={handleSubmit(changeInfo)}>*/}
            {/*            <Input name={"curriculum_hours"} register={register} type={"number"}/>*/}

            {/*            <div className={cls.extraClassSelect}>*/}
            {/*                <AnimatedMulti options={option} onChange={setSelectedSubject}/>*/}
            {/*            </div>*/}

            {/*            <div className={cls.extraClassForm}>*/}
            {/*                /!* Selected subjects list *!/*/}
            {/*                /!*{*!/*/}
            {/*                /!*    selectedSubject.map((subject, index) => (*!/*/}
            {/*                /!*        <div key={index}>*!/*/}
            {/*                /!*            <span>{subject.label}</span>*!/*/}
            {/*                /!*        </div>*!/*/}
            {/*                /!*    ))*!/*/}
            {/*                /!*}*!/*/}
            {/*            </div>*/}

            {/*            <Button>*/}
            {/*                Tastiqlash*/}
            {/*            </Button>*/}
            {/*        </Form>*/}
            {/*    </div>*/}
            {/*</Modal>*/}

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
                               active,
                               setActive,
                               changeName,
                               setChangeName,
                               changeColor,
                               setColorChange,
                               colorChange,
                               deleteColor
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
                                <h2>Tanlangan rang :</h2>
                                <div className={cls.modalBox} style={{background: color}}></div>
                            </div>
                            <HexColorPicker style={{width: "22rem", height: "15rem"}} color={color}
                                            onChange={setColor}/>
                            {/*<div style={{display: "flex" , flexWrap: "wrap",width: "30rem"}}>*/}
                            {/*    /!*<Button onClick={() => setColor("#c6ad23")}>Choose gold</Button>*!/*/}
                            {/*    <Button onClick={() => setColor("#22C55E")}>Choose green</Button>*/}
                            {/*    <Button onClick={() => setColor("#2563EB")}>Choose blue</Button>*/}
                            {/*</div>*/}

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
                                <div className={cls.modalBox} style={{background: colorChange}}></div>
                            </div>
                            <HexColorPicker style={{width: "22rem", height: "15rem"}} color={colorChange}
                                            onChange={setColorChange}/>
                            {/*<div style={{display: "flex" , flexWrap: "wrap",width: "30rem"}}>*/}
                            {/*    /!*<Button onClick={() => setColor("#c6ad23")}>Choose gold</Button>*!/*/}
                            {/*    <Button onClick={() => setColor("#22C55E")}>Choose green</Button>*/}
                            {/*    <Button onClick={() => setColor("#2563EB")}>Choose blue</Button>*/}
                            {/*</div>*/}
                        </div>
                        <div style={{display: "flex", gap: "2rem"}}>
                            <Button onClick={handleSubmit(changeColor)}>Rangni o'zgartirish</Button>
                            <Button onClick={handleSubmit(deleteColor)} type={"danger"}>Rangni O'chirish</Button>
                        </div>
                    </Form>

                </div>
            </Modal>
        </>
    )
}