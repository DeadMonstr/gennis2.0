import React, {useState} from 'react';
import {useDropzone} from "react-dropzone";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";

import {SchoolHomeMain} from "entities/schoolHome";
import {Input} from "shared/ui/input";
import {Textarea} from "shared/ui/textArea";
import {Button} from "shared/ui/button";
import {Modal} from "shared/ui/modal";

import cls from "./schoolHomeMainModal.module.sass";
import defImg from "shared/assets/images/Image Placeholder.svg";
import {onAdd} from "../../../../entities/schoolHome/model/slice/schoolHomeStudentProfileSlice";


export const SchoolHomeMainModal = () => {

    const [mainActive, setMainActive] = useState(false)
    const [programActive, setProgramActive] = useState(false)

    const [files, setFiles] = useState(null);

    const dispatch = useDispatch()
    const {
        register,
        setValue,
        handleSubmit
    } = useForm()
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
        setProgramActive(false)
    }
    
    const onDeleteItem = () => {
      
    }

    const onUpdateItem = () => {
      
    }

    return (
        <>


            <SchoolHomeMain
                setActive={setProgramActive}
                setMainActive={setMainActive}
            />

            <Modal active={programActive} setActive={setProgramActive}>
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

                    <Button onClick={handleSubmit(onDeleteItem)} extraClass={cls.modal__btn_delete}>Delete</Button>
                    <div className={cls.modal__btn_mini}>
                        <Button onClick={handleSubmit(onUpdateItem)} extraClass={cls.modal__btn_add}>Edit</Button>
                        <Button onClick={handleSubmit(() => setProgramActive(false))}
                                extraClass={cls.modal__btn_cancel}>Cancel</Button>
                    </div>
                </div>
            </Modal>

            <Modal active={mainActive} setActive={setMainActive}>
                <div className={cls.editModal}>
                    <Input title={"Our vision text"}/>
                    <Input title={"Programs text"}/>
                </div>
                <div className={cls.modal__btn}>
                    <Button onClick={handleSubmit(onClick)} extraClass={cls.modal__btn_add}>Edit</Button>
                    <Button onClick={handleSubmit(() => setMainActive(false))}
                            extraClass={cls.modal__btn_cancel}>Cancel</Button>
                </div>
            </Modal>
        </>

    );
}
