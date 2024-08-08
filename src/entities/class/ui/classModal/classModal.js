import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Button} from "shared/ui/button";
import {Form} from "shared/ui/form";
import {useForm} from "react-hook-form";
import {Select} from "shared/ui/select";
import cls from "../classTable/classTable.module.sass"
import {useEffect, useState} from "react";


export const ClassModal = ({

                               selectOptions,
                               activeEdit,
                               setActiveEdit,
                               onClick,
                               setAddClass,
                               addClass,
                               createClass,
                               register,
                               handleSubmit,
                               editClass,
                               setEditClass,
                               changeInfo
                           }) => {


    const [subject, setSubject] = useState([])
    const [selectedSubject, setSelectedSubject] = useState([])
    const [selected, setSelected] = useState([])
    const [deletedId, setDeletedId] = useState(0)

    useEffect(() => {
        setSubject(selectOptions)
    }, [])

    useEffect(() => {
        if (deletedId !== 0) {
            setSubject(subject => {
                return subject.map(item => {
                    if (item.id === +deletedId) {
                        return {...item, disabled: false}
                    }
                    return item
                })
            })

            setSelectedSubject(selectedSubject.filter(item => item.id !== +deletedId))
            setSelected(selectedSubject.filter(item => item.id !== +deletedId))
        }
    })


    const onChangeSelect = (id) => {
        const filteredSubjects = subject.filter(item => item.id === +id)
        setSubject(
            subject.map(item => {
                if (item.id === +id) {
                    return {...item, disabled: true}
                }
                return item
            })
        )
        setSelectedSubject(arr => [...arr, ...filteredSubjects])
        setSelected(arr => [...arr, ...filteredSubjects])

    }


    return (
        <>
            <Modal active={activeEdit} setActive={setActiveEdit}>
                <h2>Oz’gartirish </h2>
                <div>
                    <Form extraClassname={cls.extraClassForm} typeSubmit={""} onSubmit={handleSubmit(onClick)}>
                        <Input name={"editClassName"} register={register}/>
                        <Button extraClass={cls.btn}>Add</Button>
                    </Form>
                </div>
            </Modal>


            <Modal active={addClass} setActive={setAddClass}>
                <h2>Sinf turi yaratish </h2>
                <div>
                    <Form extraClassname={cls.extraClassForm} typeSubmit={""} onSubmit={handleSubmit(createClass)}>
                        <Input placeholder={"sinf nomi"} name={"addClass"} register={register}/>
                        <Button extraClass={cls.btn}>Create</Button>
                    </Form>
                </div>
            </Modal>

            <Modal active={editClass} setActive={setEditClass}>
                <h2>Ma’lumotlarni o’zgartirish</h2>
                <div>
                    <Form extraClassname={cls.extraClassForm} typeSubmit={""} onSubmit={handleSubmit(changeInfo)}>
                        <Select extraClass={cls.select}/>
                        <Select onChangeOption={onChangeSelect} options={subject}/>

                        <div className={cls.selectBox}>
                            {selected.map(item => {
                                return (
                                    <div className={cls.subjectSelect}>
                                        <i onClick={() => setDeletedId(item.id)} className={"fa fa-times"}/>
                                        <p>{item.name}</p>
                                    </div>
                                )
                            })}
                        </div>

                        <Button extraClass={cls.btn}>O'zgartirish</Button>
                    </Form>
                </div>
            </Modal>

        </>
    )
}