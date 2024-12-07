import React, {useEffect, useState} from 'react';

import {SchoolHomeCertificats} from "entities/schoolHome";
import {Input} from "shared/ui/input";
import {Textarea} from "shared/ui/textArea";
import {Button} from "shared/ui/button";
import {Modal} from "shared/ui/modal";

import cls from "./schoolHomeCertificatsModal.module.sass";
import defImg from "shared/assets/images/Image Placeholder.svg";
import {useDropzone} from "react-dropzone";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {Form} from "../../../../shared/ui/form";
import {
    fetchAddCertificat,
    fetchCertificatData
} from "entities/schoolHome/model/thunk/schoolHomeCertificatsThunk";
import {API_URL, header, useHttp} from "../../../../shared/api/base";
import {onDeleteCertificate} from "../../../../entities/schoolHome/model/slice/schoolHomeCertificatsSlice";
import {getHomePageType} from "../../../../entities/schoolHome/model/selector/getHomePageSelector";
import {fetchHomePage} from "../../../../entities/schoolHome/model/thunk/getHomePageSelector";


export const SchoolHomeCertificatsModal = () => {

    const [active, setActive] = useState("")
    const [activeEditItem, setActiveEditItem] = useState(null)
    const [files, setFiles] = useState(null);
    const [currentFiles, setCurrentFiles] = useState(null);

    const {request} = useHttp()

    const job = localStorage.getItem("job")

    const types = useSelector(getHomePageType)



    useEffect(() => {
        dispatch(fetchHomePage())

    },[])

    useEffect(() => {
        if (types) {
            dispatch(fetchCertificatData({id: types[8]?.id}))
        }

    }, [types])



    const formData = new FormData()
    const {
        register,
        setValue,
        handleSubmit
    } = useForm()
    const dispatch = useDispatch()
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
        request(`${API_URL}Ui/fronted-pages/${activeEditItem.id}/`, "DELETE", null, header())
            .then(res => {
                dispatch(onDeleteCertificate(activeEditItem.id))
            })
            .catch(err => {
                console.log(err)
            })


        // dispatch(onDelete(deleteItemId.id))


        setActive(false)
    }

    useEffect(() => {
        if (activeEditItem) {
            console.log(activeEditItem)
            console.log(activeEditItem?.images[0]?.image)
            setValue("editName", activeEditItem?.name)
            setValue("editDescription", activeEditItem?.description)
            setCurrentFiles(activeEditItem?.images[0]?.image)
        }
    }, [activeEditItem])

    const onAdd = (data) => {
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("type", types[8]?.id)
        formData.append("image", files[0])
        setActive(false)
        setFiles(null)
        setValue("name", "")
        setValue("description", "")
        dispatch(fetchAddCertificat({data: formData}))
    }

    const onEdit = (data) => {

    }

    return (
        <>


            <SchoolHomeCertificats
                setActive={setActive}
                setActiveEditItem={setActiveEditItem}
                job={job === "smm"}
            />


            <Modal active={active === "add"} setActive={setActive}>
                <Form typeSubmit={""} onSubmit={handleSubmit(onAdd)}>
                    <div className={cls.modal}>
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input  {...getInputProps()}/>
                            {!files ?
                                <img style={{width: "31rem", height: "23rem "}} src={defImg}
                                     alt=""/> :
                                <img style={{width: "31rem", height: "23rem "}} src={files?.map(item => item?.preview)}
                                     alt=""/>}
                        </div>
                        <Input required register={register} name={"name"} extraClassName={cls.modal__input}
                               placeholder={"Name"}/>
                        <Textarea required placeholder={"Text"} name={"description"} register={register}
                                  extraClassName={cls.modal__input}/>
                    </div>
                    <div className={cls.modal__btn}>
                        <Button extraClass={cls.modal__btn_add}>Add</Button>
                        <Button onClick={handleSubmit(() => setActive(false))}
                                extraClass={cls.modal__btn_cancel}>Cancel</Button>
                    </div>
                </Form>
            </Modal>

            <Modal active={active === "edit"} setActive={setActive}>
                <Form typeSubmit={""} onSubmit={handleSubmit(onEdit)}>
                    <div className={cls.modal}>
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input  {...getInputProps()}/>
                            {!files ? <img style={{width: "31rem", height: "23rem "}} src={currentFiles} alt=""/> :
                                <img style={{width: "31rem", height: "23rem "}} src={files?.map(item => item?.preview)}
                                     alt=""/>}
                        </div>
                        <Input required register={register} name={"editName"} extraClassName={cls.modal__input}
                               placeholder={"Name"}/>
                        <Textarea required placeholder={"Text"} name={"editDescription"} register={register}
                                  extraClassName={cls.modal__input}/>
                    </div>
                    <div className={cls.modal__btn}>
                        <Button onClick={handleSubmit(onDeleteItem)} extraClass={cls.modal__btn_delete}>Delete</Button>
                        <div className={cls.modal__btn_mini}>
                            <Button extraClass={cls.modal__btn_add}>Edit</Button>
                            <Button onClick={handleSubmit(() => setActive(false))}
                                    extraClass={cls.modal__btn_cancel}>Cancel</Button>
                        </div>
                    </div>
                </Form>
            </Modal>


        </>
    );
}