import {useDispatch, useSelector} from "react-redux";
import {CapitalOutside, CapitalOutsideHeader, createCapitalCategory, getCapitalData} from "entities/capital";

import cls from "./capitalPage.module.sass"
import React, {memo, useCallback, useEffect, useState} from "react";
import {Modal} from "shared/ui/modal";

import {useDropzone} from "react-dropzone";

// import imgAdd from "shared/assets/images/imgAdd.svg"
// import {API_URL, API_URL_DOC} from "shared/api/base";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Button} from "shared/ui/button";
import {useForm} from "react-hook-form";
import {getCapitalDataThunk} from "entities/capital";
import {getLoading} from "entities/capital/model/selector/capitalSelector";
import {DefaultLoader, DefaultPageLoader} from "shared/ui/defaultLoader";


const img = {
    display: 'block',
    width: "30rem",
    height: '30rem'
};


export const CapitalPage = memo(() => {

    const {register, setValue, handleSubmit} = useForm()


    const loading = useSelector(getLoading)
    const dispatch = useDispatch()
    const [activeModal, setActiveModal] = useState(false)


    const [changeItem, setChangeItem] = useState({})
    const [changedImages, setChangedImages] = useState([])


    const getCapital = useSelector(getCapitalData)
    useEffect(() => {
        dispatch(getCapitalDataThunk())
    }, [])


    const onClick = (data) => {

        console.log(data)
        setActiveModal(!activeModal)
        setValue("name", '')
        setValue("id_number", '')
        dispatch(createCapitalCategory({data, changedImages}))
    }
    const loadingCount = () => {
        if (loading === true) {
            return (
                <div className={cls.loader}>
                    <div className={cls.loader__circle}>
                        <div></div>
                    </div>
                </div>
            )
        } else {
            return <div>{getCapital.length}</div>
        }
    }


    return (
        <div className={cls.capitalMain}>
            <CapitalOutsideHeader caunt={loadingCount()} setActiveModal={setActiveModal} active={activeModal}/>
            {loading ? <DefaultPageLoader/> : <CapitalOutside capitalData={getCapital}/>}

            <Modal setActive={setActiveModal} active={activeModal}>
                <h1>Add</h1>
                <div style={{display: "flex", gap: "1rem", padding: "2rem"}}>
                    <ImageDrop
                        status={activeModal}
                        image={changeItem?.images}
                        setChangedImages={setChangedImages}

                    />
                    <Form extraClassname={cls.form} typeSubmit={""}>
                        <Input register={register} name={"name"}/>
                        <Input register={register} name={"id_number"}/>
                        <Button onClick={handleSubmit(onClick)} extraClass={cls.btn}>Add</Button>
                    </Form>
                </div>


            </Modal>

        </div>
    );
})


const ImageDrop = ({index, setChangedImages, image, status}) => {
    useEffect(() => {
        if (status) {
            setImg({})
        }
    }, [status])

    const [img, setImg] = useState({})
    const {getInputProps, getRootProps} = useDropzone({
        onDrop: (acceptedFiles) => {
            setImg(acceptedFiles[0])
            setChangedImages(acceptedFiles[0])
        }
    })

    const ImageRender = useCallback(({img, image}) => {
        return (
            img?.path ? <img src={URL.createObjectURL(img)} alt=""/>
                : status ? <>
                    <i className="far fa-image"/>
                    <input

                        type="file"
                        {...getInputProps()}
                    />
                </> : image?.url ? <img src={image.url} alt=""/> : <>
                    <i className="far fa-image"/>
                    <input

                        type="file"
                        {...getInputProps()}
                    />
                </>
        )
    }, [img, image])

    return (
        <div
            className={cls.items__item}
            {...getRootProps()}
        >
            <ImageRender
                img={img}
                image={image}
            />
        </div>
    )
}

