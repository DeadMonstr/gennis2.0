import {Modal} from "shared/ui/modal";
import {useDropzone} from "react-dropzone";
import React, {useEffect, useState} from "react";


import defImg from "shared/assets/images/Image Placeholder.svg"
import cls from "./schoolHomeStudentProfileModal.module.sass"
import {Input} from "shared/ui/input";
import {Textarea} from "shared/ui/textArea";
import {Button} from "shared/ui/button";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {onAdd, onDelete, onEdit} from "../../../../entities/schoolHome/model/slice/schoolHomeStudentProfileSlice";
import {getSchoolProfileData, SchoolHomeStudentProfile} from "../../../../entities/schoolHome";

export const SchoolHomeStudentProfileModal = ({active, setActive}) => {
    const [add, setAdd] = useState(false)
    const [edit, setEdit] = useState(false)
    const profileData = useSelector(getSchoolProfileData)
    const [deleteId, setDeleteId] = useState(null)


    const dispatch = useDispatch()


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
        setFiles(null)
        dispatch(onAdd(res))
        console.log(res)
        setAdd(false)
    }

    return (


        <>

            <SchoolHomeStudentProfile
                setDeleteId={setDeleteId}
                setEdit={setEdit}
                add={add}
                setAdd={setAdd}
                setValue={setValue}
                data={profileData}
            />

            <Modal active={add} setActive={setAdd}>
                <div className={cls.modal}>
                    <div {...getRootProps({className: 'dropzone'})}>
                        <input  {...getInputProps()}/>
                        {!files ? <img src={defImg} alt=""/> :
                            <img style={{width: "31rem", height: "23rem "}} src={files?.map(item => item?.preview)}
                                 alt=""/>}
                    </div>
                    <Input required register={register} name={"name"} extraClassName={cls.modal__input}
                           placeholder={"Name"}/>
                    <Textarea required placeholder={"Text"} name={"text"} register={register}
                              extraClassName={cls.modal__input}/>
                </div>
                <div className={cls.modal__btn}>
                    <Button onClick={handleSubmit(onClick)} extraClass={cls.modal__btn_add}>Add</Button>
                    <Button onClick={handleSubmit(() => setAdd(false))}
                            extraClass={cls.modal__btn_cancel}>Cancel</Button>
                </div>
            </Modal>

            <SchoolHomeStudentEditModal
                deleteItemId={deleteId}
                handleSubmit={handleSubmit}
                register={register}
                setActive={setEdit}
                active={edit}
            />

        </>
    );
};



export const SchoolHomeStudentEditModal = ({active , setActive , deleteItemId , handleSubmit , register}) => {

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
                    {!files ? <img style={{width: "31rem", height: "23rem "}} src={defImg} alt=""/> :
                        <img style={{width: "31rem", height: "23rem "}} src={files?.map(item => item?.preview)}
                             alt=""/>}
                </div>
                <Input required register={register} name={"name"} extraClassName={cls.modal__input}
                       placeholder={"Name"}/>
                <Textarea required placeholder={"Text"} name={"text"} register={register}
                          extraClassName={cls.modal__input}/>
            </div>
            <div className={cls.modal__btn}>
                <Button onClick={handleSubmit(onDeleteItem)} extraClass={cls.modal__btn_delete}>Delete</Button>
                <div className={cls.modal__btn_mini}>
                    <Button onClick={handleSubmit(onUpdateItem)} extraClass={cls.modal__btn_add}>Edit</Button>
                    <Button onClick={handleSubmit(() =>setActive(false))}
                            extraClass={cls.modal__btn_cancel}>Cancel</Button>
                </div>
            </div>
        </Modal>

    );
};

