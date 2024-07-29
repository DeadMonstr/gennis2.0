import {memo, useEffect, useRef, useState, DependencyList} from 'react';
import {useDropzone} from "react-dropzone";
import {
    ReactCrop,
    centerCrop,
    makeAspectCrop,
    convertToPixelCrop
} from "react-image-crop";

import {Modal} from "shared/ui/modal";
import {useDebounceEffect} from "shared/lib/hooks/useDebounceEffect";

import cls from "./studentProfileChangeImage.module.sass";
import 'react-image-crop/dist/ReactCrop.css'
import user from "shared/assets/images/user_image.png";
import {Input} from "shared/ui/input";




export const StudentProfileChangeImage = memo((props) => {

    const {
        setActive,
        active
    } = props


    function centerAspectCrop(
        mediaWidth,
        mediaHeight,
        aspect,
    ) {
        return centerCrop(
            makeAspectCrop(
                {
                    unit: '%',
                    width: 90,
                },
                aspect,
                mediaWidth,
                mediaHeight,
            ),
            mediaWidth,
            mediaHeight,
        )
    }


    const [completedCrop, setCompletedCrop] = useState()
    const [aspect, setAspect] = useState(16 / 9)
    const [scale, setScale] = useState(1)
    const [rotate, setRotate] = useState(0)
    const [imgSrc, setImgSrc] = useState("https://mir-s3-cdn-cf.behance.net/projects/404/6190e982365125.Y3JvcCwxMTE5LDg3Niw1Miww.jpg")
    const imgRef = useRef(null)
    const previewCanvasRef = useRef(null)


    function onImageLoad(e) {
        if (aspect) {
            const {width, height} = e.currentTarget
            setCrop(centerAspectCrop(width, height, aspect))
        }
    }


    useDebounceEffect(
        async () => {
            if (
                completedCrop?.width &&
                completedCrop?.height &&
                imgRef.current &&
                previewCanvasRef.current
            ) {
                // We use canvasPreview as it's much faster than imgPreview.
                await canvasPreview(
                    imgRef.current,
                    previewCanvasRef.current,
                    completedCrop,
                    scale,
                    rotate,
                )
            }
        },
        100,
        [completedCrop, scale, rotate],
    )

    useEffect(() => {
        if (aspect) {
            if (imgRef.current) {
                const {width, height} = imgRef.current
                const newCrop = centerAspectCrop(width, height, 16 / 9)
                setCrop(newCrop)
                // Updates the preview
                setCompletedCrop(convertToPixelCrop(newCrop, width, height))
            }
        }
    }, [aspect])


    const [crop, setCrop] = useState()

    const [newImage, setNewImage] = useState({})

    const {getRootProps, getInputProps} = useDropzone({
        onDrop: acceptedFiles => {
            setImgSrc(URL.createObjectURL(acceptedFiles[0]))
        }
    })

    console.log(imgRef, "imgRef")
    console.log(previewCanvasRef.current, "previewCanvasRef")


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
                    {/*<div className={cls.settings}>*/}
                    {/*    <div className={cls.settings__inner}>*/}
                    {/*        /!*<label htmlFor="scale-input">Scale: </label>*!/*/}
                    {/*        <Input*/}
                    {/*            title={"Scale"}*/}
                    {/*            name={"scale-input"}*/}
                    {/*            type={"number"}*/}
                    {/*            extraClassName={cls.settings__input}*/}
                    {/*            defaultValue={scale}*/}
                    {/*            onChange={setScale}*/}
                    {/*            extraValues={{step: "0.1"}}*/}
                    {/*            required*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<input {...getInputProps()} type="file"/>*/}
                    {/*<ReactCrop crop={crop} onChange={c => setCrop(c)}>*/}
                    {/*    {*/}
                    {/*        newImage.path ?*/}
                    {/*            <img src={URL.createObjectURL(newImage)} alt=""/>*/}
                    {/*            :*/}
                    {/*            <img src={user} alt=""/>*/}
                    {/*    }*/}
                    {/*</ReactCrop>*/}


                    {!!imgSrc && (
                        <ReactCrop
                            crop={crop}
                            onChange={(_, percentCrop) => setCrop(percentCrop)}
                            onComplete={(c) => setCompletedCrop(c)}
                            aspect={aspect}
                            // minWidth={400}
                            minHeight={100}
                            // circularCrop
                        >
                            <img
                                className={cls.changeImage__img}
                                ref={imgRef}
                                alt="Crop me"
                                src={imgSrc}
                                style={{transform: `scale(${scale}) rotate(${rotate}deg)`}}
                                onLoad={onImageLoad}
                            />
                        </ReactCrop>
                    )}
                    {!!completedCrop && (
                        <canvas
                            ref={previewCanvasRef}
                            style={{
                                border: '1px solid black',
                                objectFit: 'contain',
                                width: completedCrop?.width,
                                height: completedCrop?.height,
                            }}
                        />
                    )}


                </div>
            </div>
        </Modal>
    )
})

const TO_RADIANS = Math.PI / 180

export async function canvasPreview(
    image,
    canvas,
    crop,
    scale = 1,
    rotate = 0,
) {

    console.log(image, "image")
    console.log(canvas, "canvas")
    // console.log(canvas.getContext(), "canvas.getContext()")

    const ctx = canvas.getContext('2d')

    console.log(ctx, "ctx")

    if (!ctx) {
        throw new Error('No 2d context')
    }

    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    // devicePixelRatio slightly increases sharpness on retina devices
    // at the expense of slightly slower render times and needing to
    // size the image back down if you want to download/upload and be
    // true to the images natural size.
    const pixelRatio = window.devicePixelRatio
    // const pixelRatio = 1

    canvas.width = Math.floor(crop.width * scaleX * pixelRatio)
    canvas.height = Math.floor(crop.height * scaleY * pixelRatio)

    ctx.scale(pixelRatio, pixelRatio)
    ctx.imageSmoothingQuality = 'high'

    const cropX = crop.x * scaleX
    const cropY = crop.y * scaleY

    const rotateRads = rotate * TO_RADIANS
    const centerX = image.naturalWidth / 2
    const centerY = image.naturalHeight / 2

    ctx.save()

    // 5) Move the crop origin to the canvas origin (0,0)
    ctx.translate(-cropX, -cropY)
    // 4) Move the origin to the center of the original position
    ctx.translate(centerX, centerY)
    // 3) Rotate around the origin
    ctx.rotate(rotateRads)
    // 2) Scale the image
    ctx.scale(scale, scale)
    // 1) Move the center of the image to the origin (0,0)
    ctx.translate(-centerX, -centerY)
    ctx.drawImage(
        image,
        0,
        0,
        image.naturalWidth,
        image.naturalHeight,
        0,
        0,
        image.naturalWidth,
        image.naturalHeight,
    )

    ctx.restore()
}



