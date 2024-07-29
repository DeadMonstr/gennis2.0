import {memo, useState} from 'react';
import {useDropzone} from "react-dropzone";
import {ReactCrop} from "react-image-crop";

import {Modal} from "shared/ui/modal";

import cls from "./studentProfileChangeImage.module.sass";
import user from "shared/assets/images/user_image.png";

export const StudentProfileChangeImage = memo((props) => {

    const {
        setActive,
        active
    } = props

    const [crop, setCrop] = useState()

    const [newImage, setNewImage] = useState({})

    const {getRootProps, getInputProps} = useDropzone({
        onDrop: acceptedFiles => {
            console.log(acceptedFiles[0])
            setNewImage(acceptedFiles[0])
        }
    })

    console.log(crop, "crop")

    return (
        <Modal
            setActive={setActive}
            active={active}
        >
            <div
                className={cls.changeImage}
            >
                <h1>Rasm o'zgartirish</h1>
                <div
                    // {...getRootProps()}
                    className={cls.changeImage__inner}
                >
                    {/*<input {...getInputProps()} type="file"/>*/}
                    <ReactCrop crop={crop} onChange={c => setCrop(c)}>
                        {
                            newImage.path ?
                                <img src={URL.createObjectURL(newImage)} alt=""/>
                                :
                                <img src={user} alt=""/>
                        }
                    </ReactCrop>


                </div>
            </div>
        </Modal>
    )
})
