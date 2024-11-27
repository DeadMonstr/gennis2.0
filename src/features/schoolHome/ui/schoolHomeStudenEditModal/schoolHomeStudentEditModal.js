import {Modal} from "shared/ui/modal";
import {useDropzone} from "react-dropzone";
import React, {useEffect, useState} from "react";


import defImg from "shared/assets/images/Image Placeholder.svg"
import cls from "./schoolHomeStudentEditModal.module.sass"
import {Input} from "shared/ui/input";
import {Textarea} from "shared/ui/textArea";

import {useDispatch, useSelector} from "react-redux";
import {onAdd, onDelete, onEdit} from "../../../../entities/schoolHome/model/slice/schoolHomeStudentProfileSlice";
import {Button} from "../../../../shared/ui/button";
import {getSchoolProfileData, SchoolHomeStudentProfile} from "../../../../entities/schoolHome";
import {useForm} from "react-hook-form";

export const SchoolHomeStudentEditModal = () => {
    const [add, setAdd] = useState(false)
    const [edit, setEdit] = useState(false)
    const profileData = useSelector(getSchoolProfileData)
    const [deleteId, setDeleteId] = useState(null)

    const {register, setValue, handleSubmit} = useForm()

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


        // dispatch(onDelete(deleteItemId.id))

        // setActive(false)
    }

    const onUpdateItem = (data) => {

        const res = {
            // img: files ? files?.map(item => item?.preview) : deleteItemId?.img,
            ...data,

        }

        // dispatch(onEdit({id: deleteItemId.id, data: res}))

        setFiles(null)
        // setActive(false)
    }
    return (




            <Modal active={add} setActive={setAdd}>
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
                        <Button onClick={handleSubmit(() => setAdd(false))}
                                extraClass={cls.modal__btn_cancel}>Cancel</Button>
                    </div>
                </div>
            </Modal>

    );
};

