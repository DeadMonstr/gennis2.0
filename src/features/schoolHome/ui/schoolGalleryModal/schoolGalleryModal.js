import React, {useEffect, useState} from 'react';

import {SchoolHomeGallery} from "entities/schoolHome";
import {Button} from "shared/ui/button";
import {Modal} from "shared/ui/modal";

import cls from "./schoolGalleryModal.module.sass";
import defImg from "../../../../shared/assets/images/Image Placeholder.svg";
import {useDropzone} from "react-dropzone";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {
    fetchAddGallery,
    fetchHomeGalleryData
} from "../../../../entities/schoolHome/model/thunk/schoolHomeGalleryThunk";

export const SchoolGalleryModal = ({types}) => {

    const formData = new FormData()
    const dispatch = useDispatch()
    const {
        register,
        setValue,
        handleSubmit
    } = useForm()
    const [active, setActive] = useState(false)
    const [files, setFiles] = useState(null)
    const [activeEditItem, setActiveEditItem] = useState(null)

    useEffect(() => {
        if (types) {
            dispatch(fetchHomeGalleryData({id: types[0]?.id}))
        }
    }, [types])

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

    const onDeleteImage = () => {

    }


    const onAddImage = () => {
        if (files) {
            formData.append("image", files[0])
            formData.append("type", types[0]?.id)
            dispatch(fetchAddGallery({data: formData}))
        }
    }

    const onChange = () => {

    }

    return (
        <>


            <SchoolHomeGallery
                setActiveEditItem={setActiveEditItem}
                setActive={setActive}
            />

            <Modal
                active={active === "edit"}
                setActive={setActive}
                extraClass={cls.imageEdit}
            >
                <h1>Edit box</h1>
                <div className={cls.image}>
                    <div {...getRootProps({className: 'dropzone'})}>
                        <input  {...getInputProps()}/>
                        {!files ? <img src={defImg} alt=""/> :
                            <img style={{width: "31rem", height: "23rem "}} src={files?.map(item => item?.preview)}
                                 alt=""/>}
                    </div>
                </div>
                <div className={cls.imageEdit__btns}>
                    <Button extraClass={cls.imageEdit__btn_delete}>Delete</Button>
                    <div className={cls.imageEdit__btn_mini}>
                        <Button id={"toggle"} extraClass={cls.imageEdit__btn_add}>Edit</Button>
                        <Button onClick={handleSubmit(() => setActive(false))}
                                extraClass={cls.imageEdit__btn_cancel}>Cancel</Button>
                    </div>
                </div>
            </Modal>

            <Modal
                active={active === "add"}
                setActive={setActive}
                extraClass={cls.imageEdit}
            >
                <h1>Edit box</h1>
                <div className={cls.image}>
                    <div {...getRootProps({className: 'dropzone'})}>
                        <input  {...getInputProps()}/>
                        {!files ? <img src={activeEditItem?.images[0]?.image ?? defImg} alt=""/> :
                            <img style={{width: "31rem", height: "23rem "}} src={files?.map(item => item?.preview)}
                                 alt=""/>}
                    </div>
                </div>
                <div className={cls.imageEdit__btns}>
                    <Button onClick={onAddImage} extraClass={cls.imageEdit__btn_add}>Edit</Button>
                    <Button onClick={handleSubmit(() => setActive(false))}
                            extraClass={cls.imageEdit__btn_cancel}>Cancel</Button>
                </div>
            </Modal>

        </>
    );
}
