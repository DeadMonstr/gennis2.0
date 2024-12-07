import {memo, useCallback, useEffect, useState} from 'react';
import classNames from "classnames";
import {useForm} from "react-hook-form";

import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Textarea} from "shared/ui/textArea";
import {Form} from "shared/ui/form";
import {Button} from "shared/ui/button";

import cls from "./schoolVisionMission.module.sass";
import image from "shared/assets/images/Rectangle 1.png";
import {API_URL, header, useHttp} from "../../../../shared/api/base";

const list = [
    {
        id: 1,
        title: "Har bir bola uchun imkoniyat",
        text: "Har bir o‘quvchiga o‘z salohiyatini to‘liq ochish imkonini beruvchi ilhomlantiruvchi va xavfsiz muhit yaratish."
    },
    {
        id: 2,
        title: "Texnologiyalar bilan integratsiya",
        text: "Ta’lim jarayoniga sun’iy intellekt, raqamli ta’lim platformalari va boshqa zamonaviy texnologiyalarni muvaffaqiyatli tatbiq etish."
    },
    {
        id: 3,
        title: "Global fikrlash",
        text: "O‘quvchilarga nafaqat milliy, balki global muammolarni hal qilish uchun zarur bo‘lgan bilim va qobiliyatlarni o‘rgatish."
    },
    {
        id: 4,
        title: "Kelajakka yo‘naltirilgan ta’lim",
        text: "Maktabni faqatgina ta’lim maskani sifatida emas, balki o‘quvchilarning kelajakka yo‘lini ko‘rsatuvchi bir markaz sifatida shakllantirish."
    },
]

export const SchoolVisionMission = memo(() => {

    const {
        register,
        setValue,
        handleSubmit
    } = useForm()

    const [active, setActive] = useState()
    const [activeTextEdit, setActiveTextEdit] = useState(false)
    const [activeEditItem, setActiveEditItem] = useState(null)
    const [activeEditImage, setActiveEditImage] = useState(false)

    const {request} = useHttp()

    const job = localStorage.getItem("job")

    const renderListItem = useCallback(() => {
        return list.map(item => {
            return (
                <div
                    key={item?.title}
                    onClick={() => {
                        setActive(item?.id)
                        setActiveEditItem(item)
                    }}
                    className={classNames(cls.container__item, {
                        [cls.active]: item?.id === active
                    })}
                >
                    <h3>{item?.title}</h3>
                    <p>{item?.text}</p>
                </div>
            )
        })
    }, [list, active])

    useEffect(() => {
        setValue("name", activeEditItem?.title)
        setValue("text", activeEditItem?.text)

    }, [activeEditItem])

    const onDeleteText = (id) => {
        console.log(id, "id")

    }

    const onChangeText = (data) => {

        const res = {
            ...data,
            // type:
        }


        request(`${API_URL}Ui/fronted-pages/${activeEditItem.id}/`, "PATCH", JSON.stringify(res), header())
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <div className={cls.visionMission}>
                <div className={cls.visionMission__info}>
                    <h1 className={cls.visionMission__title}>Vision mission</h1>
                    <div className={cls.container}>
                        {renderListItem()}
                    </div>
                    {job && <div
                        onClick={() => setActiveTextEdit(!activeTextEdit)}
                        className={cls.visionMission__change}
                        style={{right: "2.8rem", left: "none"}}
                    >
                        <i className={classNames("fas fa-edit")}/>
                    </div>}
                </div>
                <div
                    className={cls.visionMission__image}
                >
                    <div className={cls.visionMission__imageFilter}>
                        {job && <div
                            onClick={() => setActiveEditImage(!activeEditImage)}
                            className={cls.visionMission__change}
                            style={{left: "5rem"}}
                        >
                            <i className={classNames("fas fa-edit")}/>
                        </div>}
                        {job && <div className={cls.visionMission__add}>
                            <i
                                className={classNames(
                                    "fas fa-plus",
                                    cls.visionMission__icon
                                )}
                            />
                        </div>}
                    </div>
                    <img
                        src={image}
                        alt=""
                    />
                </div>
            </div>

            <Modal
                setActive={setActiveTextEdit}
                active={activeTextEdit}
            >
                <Form
                    onSubmit={handleSubmit(onChangeText)}
                    typeSubmit={""}
                    extraClassname={cls.textEdit}
                >
                    <h1>Edit box</h1>
                    <div>
                        <Input
                            register={register}
                            name={"name"}
                            placeholder={"Name"}
                        />
                        <Textarea
                            register={register}
                            name={"text"}
                            placeholder={"Text"}
                        />
                    </div>
                    <div className={cls.textEdit__btns}>
                        <Button
                            type={"danger"}
                            onClick={() => onDeleteText(activeEditItem?.id)}
                        >
                            Delete
                        </Button>
                        <Button>Add</Button>
                    </div>
                </Form>
            </Modal>

            <Modal
                active={activeEditImage}
                setActive={setActiveEditImage}
                extraClass={cls.imageEdit}
            >
                <h1>Edit box</h1>
                <div className={cls.image}>
                    <div className={cls.image__container}>
                        <i className="far fa-image"/>
                    </div>
                </div>
                <div className={cls.imageEdit__btns}>
                    <Button
                        type={"danger"}
                        onClick={() => onDeleteText(activeEditItem?.id)}
                    >
                        Delete
                    </Button>
                    <Button>Add</Button>
                </div>
            </Modal>
        </>
    );
})
