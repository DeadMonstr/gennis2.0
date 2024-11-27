import {Modal} from "shared/ui/modal";
import {useDropzone} from "react-dropzone";
import React, {useEffect, useState} from "react";


import defImg from "shared/assets/images/Image Placeholder.svg"
import cls from "./SchoolHomeLatestNewModal.module.sass"
import {Input} from "shared/ui/input";
import {Textarea} from "shared/ui/textArea";
import {Button} from "shared/ui/button";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {onAdd, onDelete, onEdit} from "../../../../entities/schoolHome/model/slice/SchoolHomeLatestNewSlice";
import {getSchoolLatestSlice} from "../../../../entities/schoolHome/model/selector/schoolLatestSelector";
import {SchoolHomeLatestNew} from "../../../../entities/schoolHome";


export const SchoolHomeLatestNewModal = () => {
    const [addLatestNew, setAddLatestNew] = useState(false)
    const [editLatestNew, setEditLatestNew] = useState(false)

    const dispatch = useDispatch()


    const latestNew = useSelector(getSchoolLatestSlice)
    const [deleteId, setDeleteId] = useState(null)


    const {register, setValue, handleSubmit} = useForm()
    const [files, setFiles] = useState(null);
    const {getRootProps, getInputProps} = useDropzone({
        accept: {
            'image/*': [],
        },
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
    });


    const onClick = (data) => {

        const res = {
            img: files.map(item => item.preview),
            ...data,
            id: new Date().getTime()
        }

        setValue("name", "")
        setValue("text", "")
        setValue("date", "")
        setFiles(null)
        dispatch(onAdd(res))
        console.log(res)
        setAddLatestNew(false)
    }

    return (
        <div>

            <SchoolHomeLatestNew
                data={latestNew}
                setAdd={setAddLatestNew}
                add={addLatestNew}
                setEdit={setEditLatestNew}
                setValue={setValue}
                setDeleteId={setDeleteId}
            />


            <Modal active={addLatestNew} setActive={setAddLatestNew}>
                <div className={cls.modal}>
                    <div {...getRootProps({className: 'dropzone'})}>
                        <input  {...getInputProps()}/>
                        {!files ? <img src={defImg} alt=""/> :
                            <img style={{width: "31rem", height: "23rem "}} src={files?.map(item => item?.preview)}
                                 alt=""/>}
                    </div>
                    <Input required register={register} type={"date"} name={"date"} extraClassName={cls.modal__input}
                           placeholder={"Name"}/>
                    <Input required register={register} name={"name"} extraClassName={cls.modal__input}
                           placeholder={"Name"}/>
                    <Textarea required placeholder={"Text"} name={"text"} register={register}
                              extraClassName={cls.modal__input}/>
                </div>
                <div className={cls.modal__btn}>
                    <Button onClick={handleSubmit(onClick)} extraClass={cls.modal__btn_add}>Add</Button>
                    <Button onClick={handleSubmit(() => setAddLatestNew(false))}
                            extraClass={cls.modal__btn_cancel}>Cancel</Button>
                </div>
            </Modal>
            <SchoolHomeLatestEditModal setActive={setEditLatestNew} active={editLatestNew} register={register}
                                       handleSubmit={handleSubmit} deleteItemId={deleteId}/>
        </div>

    );
};

export const SchoolHomeLatestEditModal = ({active, setActive, register, handleSubmit, deleteItemId}) => {

    const dispatch = useDispatch()

    // const {register, setValue, handleSubmit} = useForm()
    const [files, setFiles] = useState(null);
    const {getRootProps, getInputProps} = useDropzone({
        accept: {
            'image/*': [],
        },
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
    });


    const onDeleteItem = (data) => {


        dispatch(onDelete(deleteItemId.id))

        setActive(false)
    }

    const onUpdateItem = (data) => {

        const res = {
            img: files ? files?.map(item => item?.preview) : deleteItemId?.img,
            ...data,

        }

        dispatch(onEdit({id: deleteItemId.id, data: res}))

        setFiles(null)
        setActive(false)
    }
    return (
        <Modal active={active} setActive={setActive}>
            <div className={cls.modal}>
                <div {...getRootProps({className: 'dropzone'})}>
                    <input  {...getInputProps()}/>
                    {!files ? <img style={{width: "31rem", height: "23rem "}} src={deleteItemId?.img} alt=""/> :
                        <img style={{width: "31rem", height: "23rem "}} src={files?.map(item => item?.preview)}
                             alt=""/>}
                </div>
                <Input required register={register} name={"date"} type={"date"} extraClassName={cls.modal__input}
                       placeholder={"Name"}/>
                <Input required register={register} name={"name"} extraClassName={cls.modal__input}
                       placeholder={"Name"}/>
                <Textarea required placeholder={"Text"} name={"text"} register={register}
                          extraClassName={cls.modal__input}/>
            </div>
            <div className={cls.modal__btnEdit}>
                <Button onClick={handleSubmit(onDeleteItem)} extraClass={cls.modal__btn_delete}>Delete</Button>
                <div className={cls.modal__btn_mini}>
                    <Button onClick={handleSubmit(onUpdateItem)} extraClass={cls.modal__btn_add}>Edit</Button>
                    <Button onClick={handleSubmit(() => setActive(false))}
                            extraClass={cls.modal__btn_cancel}>Cancel</Button>
                </div>
            </div>
        </Modal>
    );
};