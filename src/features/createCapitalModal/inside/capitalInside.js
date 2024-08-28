import React, {memo, useCallback, useEffect, useState} from "react";
import {Modal} from "../../../shared/ui/modal";
import {Form} from "../../../shared/ui/form";
import cls from "../../../pages/capitalPage/ui/capitalInside/capitalInside.module.sass";
import {Input} from "../../../shared/ui/input";
import {Select} from "../../../shared/ui/select";
import {useDropzone} from "react-dropzone";

export const AddCategoryModal = memo(({
                                          setActiveModal,
                                          activeModal,
                                          register,
                                          handleSubmit,
                                          onClick,
                                          changeItem,
                                          setChangedImages,
                                          options,
                                          setSelectPayment,
                                          capital,
                                          setSelectedCapital,
                                          branches,
                                          setSelectedBranches
                                      }) => {


    return (
        <Modal setActive={setActiveModal} active={activeModal}>
            <h1>Add</h1>
            <div style={{display: "flex", gap: "1rem", padding: "2rem", alignItems: "center"}}>
                <ImageDrop2
                    status={activeModal}
                    image={changeItem?.images}
                    setChangedImages={setChangedImages}

                />
                <Form extraClassname={cls.form} onSubmit={handleSubmit(onClick)}>
                    <Input register={register} name={"name"}/>
                    <Select options={capital} onChangeOption={setSelectedCapital}/>
                    <Select options={branches} onChangeOption={setSelectedBranches}/>
                    <Input register={register} name={"id_number"} type={"number"}/>
                    <Input register={register} name={"price"} type={"number"}/>
                    <Input register={register} name={"total_down_cost"} type={"number"}/>
                    <Input register={register} name={"term"} type={"number"}/>
                    <Input register={register} name={"curriculum_hours"}/>
                    <Select options={options} onChangeOption={setSelectPayment}/>
                </Form>
            </div>


        </Modal>
    )
})

const ImageDrop2 = ({index, setChangedImages, image, status}) => {
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


export const EditModal = memo(({
                                   register,
                                   handleSubmit,
                                   onClick,
                                   editModal,
                                   setEditModal,
                                   changeItem,
                                   setChangedImages
                               }) => {

    return (
        <Modal setActive={setEditModal} active={editModal}>
            <h1>Change</h1>
            <div style={{display: "flex", gap: "1rem", padding: "2rem"}}>
                <ImageDrop2
                    status={editModal}
                    image={changeItem?.images}
                    setChangedImages={setChangedImages}

                />
                <Form extraClassname={cls.form} onSubmit={handleSubmit(onClick)}>
                    <Input register={register} name={"name"}/>
                    <Input register={register} name={"id_number"}/>
                </Form>
            </div>
        </Modal>
    )
})

