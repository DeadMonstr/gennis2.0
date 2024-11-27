import React, {useState} from "react";
import {SchoolHomeCurricular} from "../../../../entities/schoolHome";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurricularData,
    getExtraCurricularData
} from "../../../../entities/schoolHome/model/selector/schoolCurricularSelector";
import {Modal} from "../../../../shared/ui/modal";
import {Input} from "../../../../shared/ui/input";


import cls from "./schoolHomeCurriculamModal.module.sass"
import {Textarea} from "../../../../shared/ui/textArea";
import backImg from "../../../../shared/assets/icons/skew870.svg";
import {useDropzone} from "react-dropzone";
import defImg from "shared/assets/images/Image Placeholder.svg"
import {Button} from "../../../../shared/ui/button";
import {useForm} from "react-hook-form";

import {
    onAddCurricular,
    onDeleteCurricular,
    onEditCurricular, onExtraAddCurricular, onExtraDeleteCurricular, onExtraEditCurricular
} from "../../../../entities/schoolHome/model/slice/schoolCurricularSlice";
import {onAdd} from "../../../../entities/schoolHome/model/slice/SchoolHomeLatestNewSlice";
import {onDelete, onEdit} from "../../../../entities/schoolHome/model/slice/schoolHomeStudentProfileSlice";

export const SchoolHomeCurriculamModal = () => {

    const curricularData = useSelector(getCurricularData)
    const extraCurricularData = useSelector(getExtraCurricularData)


    const [activeAdd, setActiveAdd] = useState(false)
    const [activeEdit, setActiveEdit] = useState(false)

    const [deleteId, setDeleteId] = useState(null)
    const [deleteIdExtra, setDeleteIdExtra] = useState(null)
    const {register, setValue, handleSubmit} = useForm()


    const [extraCurricular, setActiveExtraCurricular] = useState(false)
    const [extraCurricularEdit, setActiveExtraCurricularEdit] = useState(false)


    return (
        <div>
            <SchoolHomeCurricular
                setValue={setValue}
                setActiveEdit={setActiveEdit}
                setDeleteId={setDeleteId}
                setActive={setActiveAdd}
                data={curricularData}
                setActiveExtraCurricular={setActiveExtraCurricular}
                extraCurricularData={extraCurricularData}
                setActiveExtraCurricularEdit={setActiveExtraCurricularEdit}
                setDeleteIdExtra={setDeleteIdExtra}
            />


            <SchoolCurriculumAdd
                active={activeAdd}
                setActive={setActiveAdd}
            />

            <SchoolCurriculumEdit
                handleSubmit={handleSubmit}
                register={register}
                setValue={setValue}
                idItem={deleteId}
                setActive={setActiveEdit}
                active={activeEdit}
            />


            <SchoolExtraCurriculumAdd
                active={extraCurricular}
                setActive={setActiveExtraCurricular}
            />


            <SchoolExtraCurriculumEdit register={register} setValue={setValue} idItem={deleteIdExtra}
                                       setActive={setActiveExtraCurricularEdit} active={extraCurricularEdit}
                                       handleSubmit={handleSubmit}/>

        </div>
    );
};


export const SchoolCurriculumAdd = ({active, setActive}) => {

    const dispatch = useDispatch()
    const {register, handleSubmit, setValue} = useForm()
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
    const myStyle = {
        backgroundImage: `url(${backImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }


    const onAddItem = (data) => {

        const res = {
            img: files?.map(item => item?.preview),
            ...data,
            id: new Date().getTime()
        }

        setValue("name", "")
        setValue("text", "")
        setFiles(null)

        dispatch(onAddCurricular(res))

        setFiles(null)
        setActive(false)
    }

    return (
        <Modal typeIcon setActive={setActive} active={active}>
            <div className={cls.curriculam}>
                <div className={cls.curriculam__input}>
                    <Input placeholder={"Text"} register={register} name={"name"}/>
                    <Textarea placeholder={"Text"} register={register} name={"text"}/>
                </div>
                <div style={myStyle} className={cls.curriculam__aside}>

                    <div {...getRootProps({className: 'dropzone'})}>
                        <input  {...getInputProps()}/>
                        {!files ? <img style={{width: "31rem", height: "23rem "}} src={defImg} alt=""/> :
                            <img style={{width: "31rem", height: "23rem "}} src={files?.map(item => item?.preview)}
                                 alt=""/>}
                    </div>
                </div>
            </div>
            <div className={cls.modal__btn}>

                <Button onClick={handleSubmit(onAddItem)} extraClass={cls.modal__btn_add}>Add</Button>
                <Button onClick={handleSubmit(() => setActive(false))}
                        extraClass={cls.modal__btn_cancel}>Cancel</Button>

            </div>
        </Modal>
    )
}


export const SchoolCurriculumEdit = ({active, setActive, handleSubmit, setValue, register, idItem}) => {

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
    const myStyle = {
        backgroundImage: `url(${backImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }


    const onDeleteItem = (data) => {


        dispatch(onDeleteCurricular(idItem.id))

        setActive(false)
    }


    const onUpdateItem = (data) => {

        const res = {
            img: files ? files?.map(item => item?.preview) : idItem?.img?.map(item => item?.img),
            ...data,

        }
        dispatch(onEditCurricular({id: idItem.id, data: res}))

        setFiles(null)
        setActive(false)
    }

    return (
        <Modal typeIcon setActive={setActive} active={active}>
            <div className={cls.curriculam}>
                <div className={cls.curriculam__input}>
                    <Input placeholder={"Text"} register={register} name={"name"}/>
                    <Textarea placeholder={"Text"} register={register} name={"text"}/>
                </div>
                <div style={myStyle} className={cls.curriculam__aside}>

                    <div {...getRootProps({className: 'dropzone'})}>
                        <input  {...getInputProps()}/>
                        {!files ? <img style={{width: "31rem", height: "23rem "}} src={defImg} alt=""/> :
                            <img style={{width: "31rem", height: "23rem "}} src={files?.map(item => item?.preview)}
                                 alt=""/>}
                    </div>
                </div>
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
    )
}


export const SchoolExtraCurriculumAdd = ({setActive, active}) => {


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
        setValue("date", "")
        setFiles(null)
        dispatch(onExtraAddCurricular(res))
        console.log(res)
        setActive(false)
    }

    return (
        <Modal active={active} setActive={setActive}>
            <div className={cls.modalExtra}>
                <div {...getRootProps({className: 'dropzone'})}>
                    <input  {...getInputProps()}/>
                    {!files ? <img src={defImg} alt=""/> :
                        <img style={{width: "31rem", height: "23rem "}} src={files?.map(item => item?.preview)}
                             alt=""/>}
                </div>
                <Input required register={register} name={"subject_name"} extraClassName={cls.modalExtra__input}
                       placeholder={"Name"}/>
                <Textarea required placeholder={"Text"} name={"descr"} register={register}
                          extraClassName={cls.modalExtra__input}/>
            </div>
            <div className={cls.modal__btn}>
                <Button onClick={handleSubmit(onClick)} extraClass={cls.modal__btn_add}>Add</Button>
                <Button onClick={handleSubmit(() => setActive(false))}
                        extraClass={cls.modal__btn_cancel}>Cancel</Button>
            </div>
        </Modal>
    )
}


export const SchoolExtraCurriculumEdit = ({active, setActive, handleSubmit, setValue, register, idItem}) => {
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


        dispatch(onExtraDeleteCurricular(idItem.id))

        setActive(false)
    }

    const onUpdateItem = (data) => {

        const res = {
            img: files ? files?.map(item => item?.preview) : idItem?.img,
            ...data,

        }

        dispatch(onExtraEditCurricular({id: idItem.id, data: res}))

        setFiles(null)
        setActive(false)
    }
    return (
        <Modal typeIcon setActive={setActive} active={active}>
            <div className={cls.modalExtra}>
                <div {...getRootProps({className: 'dropzone'})}>
                    <input  {...getInputProps()}/>
                    {!files ? <img src={defImg} alt=""/> :
                        <img style={{width: "31rem", height: "23rem "}} src={files?.map(item => item?.preview)}
                             alt=""/>}
                </div>
                <Input required register={register} name={"subject_name"} extraClassName={cls.modalExtra__input}
                       placeholder={"Name"}/>
                <Textarea required placeholder={"Text"} name={"descr"} register={register}
                          extraClassName={cls.modalExtra__input}/>
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
}