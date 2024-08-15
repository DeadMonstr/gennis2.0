import {useParams} from "react-router";
import React, {memo, useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CapitalInsideHeader, CapitalInsideProduct, CapitalInsideSecond, getCapitalData} from "entities/capital";

import cls from "./capitalInside.module.sass"
import {getCapitalInsideInfo} from "entities/capital";
import {getCapitalInfo} from "entities/capital";
import {getLoading} from "../../../../entities/capital/model/selector/capitalSelector";
import {DefaultPageLoader} from "../../../../shared/ui/defaultLoader";
import {Modal} from "../../../../shared/ui/modal";
import {Form} from "../../../../shared/ui/form";
import {Input} from "../../../../shared/ui/input";
import {Button} from "../../../../shared/ui/button";
import {useDropzone} from "react-dropzone";
import {useForm} from "react-hook-form";


const capitalType = [
    {name: "category", label: "Category"},
    {name: "subCategory", label: "Sub Category"},
]


export const CapitalInside = memo(() => {

    const {register, setValue, handleSubmit} = useForm()


    useEffect
    (() => {
        dispatch(getCapitalInfo(id))
    }, [])
    const {id} = useParams()

    const dispatch = useDispatch()

    const getCapitalInsideData = useSelector(getCapitalInsideInfo)

    const loading = useSelector(getLoading)


    const [activeMenu, setActiveMenu] = useState(capitalType[0].name)




    const [changeItem, setChangeItem] = useState({})
    const [changedImages, setChangedImages] = useState([])
    const [activeModal, setActiveModal] = useState(false)

    const capitalItem = () => {
        return loading ? <DefaultPageLoader/> : (
            <>
                <CapitalInsideSecond capitalData={getCapitalInsideData}/>
                <CapitalInsideProduct addModal={activeModal} setAddModal={setActiveModal} capitalData={getCapitalInsideData}/>
            </>
        )
    }


    const onClick = (data) => {
        console.log(data , "data")
        console.log(setChangedImages)
        setActiveModal(!activeModal)
    }

    const capitalItemRender = capitalItem()

    return (
        <div className={cls.capitalInside}>
            <CapitalInsideHeader
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                categoryMenu={capitalType}
            />
            {capitalItemRender}


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
                        <Input register={register} name={"number"}/>
                        <Input register={register} name={"price"}/>
                        <Input register={register} name={"deadline"}/>
                        <Input register={register} name={"payment_type"}/>
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


