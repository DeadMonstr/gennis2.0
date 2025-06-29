import cls from "./taskManager.module.sass"

import completedIcon from "shared/assets/icons/completed.svg"
import progressIcon from "shared/assets/icons/progres.svg"

import yellowCard from "shared/assets/images/yelloCard.svg"
import pinkCard from "shared/assets/images/pinkCard.svg"
import greenCard from "shared/assets/images/greenCard.svg"

import {createContext, useContext, useEffect, useMemo, useRef, useState} from "react"
import unknownUser from "shared/assets/images/circleImg.svg"

import {motion, useMotionValue, useDragControls} from "framer-motion"
import {Modal} from "shared/ui/modal";
import {Select} from "shared/ui/select";
import {Textarea} from "shared/ui/textArea";
import {Button} from "shared/ui/button";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {
    getTaskManager, getTaskManagerBranchs,
    getTaskManagerCompletedCount,
    getTaskManagerProgressCount
} from "features/taskManager/modal/taskManagerSelector";
import {API_URL, headers, useHttp} from "shared/api/base";
import {
    onCountCompleted,
    onCountPercentage,
    onCountProgress,
    onRemoveTask
} from "features/taskManager/modal/taskManagerSlice";
import {formatDate} from "shared/ui/formDate/formDate";
import {Table} from "shared/ui/table";

const FuncContext = createContext(null)


// const card = Array.from({length: 12}, (_, i) => ({
//     id: i,
//     name: "Ali",
//     surname: "Valiyev",
//     number: `+99890${i}001122`,
//     status: i < 4 ? "pink" : i < 8 ? "green" : "yellow"
// }))

const status = ["Tel ko'tardi", "Tel ko'tarmadi"]


export const TaskManagerLeft = ({formatted}) => {
    const complateCount = useSelector(getTaskManagerCompletedCount)
    const progressCount = useSelector(getTaskManagerProgressCount)
    const [selectedStatus, setSelectedStatus] = useState(null)

    const [resComment, setResComment] = useState(null)

    const date = new Date()


    const formatedDate = formatDate(date)

    const [activeModal, setActiveModal] = useState(false)
    const [activeModalItem, setActiveModalItem] = useState(null)
    const {register, handleSubmit, setValue} = useForm()
    const card = useSelector(getTaskManager)
    const branchs = useSelector(getTaskManagerBranchs)
    const {request} = useHttp()

    const dispatch = useDispatch()


    const groupedCards = {
        red: [],
        yellow: [],
        green: []
    }
    card?.forEach((item) => {
        if (groupedCards[item?.color]) {
            groupedCards[item?.color].push(item)
        }
    })


    console.log(activeModalItem)
    const onPost = (data) => {


        const res = {
            ...data,
            lead: activeModalItem?.id,
            name: activeModalItem.name,
            phone: activeModalItem.phone,
            status: selectedStatus === "Tel ko'tardi" ? true : false
        }

        request(`${API_URL}Lead/lead_call_create/`, "POST", JSON.stringify(res), headers())
            .then(res => {
                console.log(res)
                setActiveModal(false)
                dispatch(onRemoveTask(activeModalItem.id))
                dispatch(onCountPercentage(res.accepted_percentage))
                dispatch(onCountCompleted(res.completed))
                dispatch(onCountProgress(res.progressing))
                setValue("comment", "")


            })


    }

    useEffect(() => {
        setSelectedStatus(status[0])
    }, [status])


    const onClick = (item) => {

        setActiveModal(true)
        setActiveModalItem(item)
        request(`${API_URL}Lead/lead_call/${item.status ? item.lead?.id : item.id}`, "GET", null, headers())
            .then(res => {
                setResComment(res)
            })
            .catch(err => {
                console.log(err)
            })


    }

    const contextObj = useMemo(() => ({
        activeModal,
        setActiveModal: onClick,
        activeModalItem,
        setActiveModalItem
    }), [])
    return (
        <div className={cls.taskLeft}>
            <div className={cls.taskLeft__header}>

                {formatedDate === formatted && <div

                    className={cls.taskLeft__header_box}
                    style={{background: `rgba(249, 145, 75, 1)`}}
                >
                    <div className={cls.taskLeft__header_box_top}>
                        <img src={progressIcon} alt=""/>
                        <h2 style={{whiteSpace: "pre-line"}}>Task <br/>in Progress</h2>
                    </div>
                    <div className={cls.taskLeft__header_box_count}>{progressCount}</div>
                </div>}

                <div

                    className={cls.taskLeft__header_box}
                    style={{background: `rgba(26, 174, 204, 1)`}}
                >
                    <div className={cls.taskLeft__header_box_top}>
                        <img src={completedIcon} alt=""/>
                        <h2 style={{whiteSpace: "pre-line"}}>Project<br/>Completed</h2>
                    </div>
                    <div className={cls.taskLeft__header_box_count}>{complateCount}</div>
                </div>


            </div>

            <FuncContext.Provider value={contextObj}>

                <div className={cls.taskLeft__body}>
                    <h1 className={cls.taskLeft__body_title}>My Tasks</h1>

                    {formatted === formatedDate ? <>
                        <div className={cls.taskLeft__body_main}>
                            <div className={cls.taskLeft__body_card}>
                                {Object.entries(groupedCards).map(([color, items]) => (
                                    <DraggableRow
                                        key={color}
                                        items={items}
                                        className={cls.taskLeft__body_card_cotainer}
                                    />
                                ))}
                            </div>
                        </div>
                    </> : <>

                        <div className={cls.taskLeft__body_table}>
                            <Table>
                                <thead>
                                <tr>
                                    <th/>
                                    <th>Ism</th>
                                    <th>Familiya</th>
                                    <th>Kament</th>
                                    <th>Tel raqami</th>
                                    <th>Tel statusi</th>
                                    <th>Tel qilingan sana</th>
                                </tr>
                                </thead>
                                <tbody>
                                {card?.map((item, i) => (
                                    <tr
                                        key={i}
                                        onClick={() => {
                                            onClick(item)
                                        }}
                                    >
                                        <td>{i + 1}</td>
                                        <td>{item?.lead?.name}</td>
                                        <td>{item?.lead?.surname}</td>
                                        <td>{item?.comment}</td>
                                        <td>{item?.lead?.phone}</td>
                                        <td>{item.status === true ? "Tel ko'tardi" : "Tel ko'tarilmadi"}</td>
                                        <td>{item?.lead?.created}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </div>
                    </>}

                </div>
            </FuncContext.Provider>

            <Modal typeIcon extraClass={cls.modal} active={activeModal} setActive={setActiveModal}>
                {formatted === formatedDate && <div className={cls.modal__left}>
                    <Select defaultValue={selectedStatus} onChangeOption={setSelectedStatus} options={status}/>

                    {selectedStatus === "Tel ko'tardi" ? <>


                        <h2>Branch</h2>
                        <Select defaultValue={branchs[0]?.id} options={branchs} name={"branch"} register={register}/>
                        <Textarea name={"comment"} register={register}/>

                    </> : <Textarea name={"comment"} register={register}/>}
                    <Button extraClass={cls.modal__add} onClick={handleSubmit(onPost)}>Add</Button>
                </div>}
                {resComment?.length >= 1 && <div className={cls.modal__right}>
                    {/*<Select defaultValue={selectedStatus} onChangeOption={setSelectedStatus} options={status}/>*/}

                    {/*{selectedStatus === "Tel ko'tardi" ? <>*/}


                    {/*    <h2>Branch</h2>*/}
                    {/*    <Select defaultValue={branchs[0]?.id} options={branchs} name={"branch"} register={register}/>*/}
                    {/*    <Textarea name={"comment"} register={register}/>*/}

                    {/*</> : <Textarea name={"comment"} register={register}/>}*/}
                    {/*<Button extraClass={cls.modal__add} onClick={handleSubmit(onPost)}>Add</Button>*/}
                    { resComment.map(item => (
                        <div className={cls.modal__right_box}>
                            <div className={cls.modal__right_header}>
                                <span>Telefon qilingan sana :</span>  <h2>{item.created}</h2>
                            </div>
                            <div className={cls.modal__right_info}>
                                <span>Comment :</span> <h2 style={{width: "20rem"}}>{item.comment}</h2>
                            </div>
                        </div>
                    ))}

                </div>}
            </Modal>

        </div>
    )
}

export const DraggableRow = ({items = [], className = ""}) => {
    const x = useMotionValue(0)
    const controls = useDragControls()
    const wrapperRef = useRef(null)
    const [scrollWidth, setScrollWidth] = useState(0)

    useEffect(() => {
        if (wrapperRef.current) {
            const fullWidth = wrapperRef.current.scrollWidth
            const visibleWidth = wrapperRef.current.offsetWidth
            setScrollWidth(fullWidth - visibleWidth)
        }
    }, [items.length])

    return (
        <div className={`${cls.scroll} ${className}`} ref={wrapperRef}>
            <motion.div
                drag="x"
                dragElastic={0.25}
                dragMomentum={true}
                dragConstraints={{left: -scrollWidth, right: 0}}
                dragControls={controls}
                style={{
                    x,
                    display: "flex",
                    gap: "2rem",
                    cursor: "w-resize",
                    userSelect: "none",
                }}
            >
                {items.map((item, idx) => (
                    <TaskCard key={idx} item={item}/>
                ))}
            </motion.div>
        </div>
    )
}

const TaskCard = ({item}) => {
    const [style, setStyle] = useState({})

    const {setActiveModal, setActiveModalItem} = useContext(FuncContext)

    const renderBgImage = (color) => {
        switch (color) {
            case "red":
                return `url(${pinkCard})`
            case "yellow":
                return `url(${yellowCard})`
            case "green":
                return `url(${greenCard})`
            default:
                return ""
        }
    }

    useEffect(() => {
        setStyle({
            backImage: renderBgImage(item?.color),
            color:
                item?.color === "green"
                    ? "rgba(220, 252, 231, 1)"
                    : item.color === "yellow"
                        ? "rgba(254, 249, 195, 1)"
                        : "rgba(255, 228, 230, 1)"
        })
    }, [item?.color])

    return (
        <div
            style={{background: style.color}}
            className={cls.taskLeft__body_card_item}
        >
            <div className={cls.taskLeft__body_card_item_left}>
                <h2 className={cls.taskLeft__body_card_item_left_header}>
                    {item.name} {item.surname}
                </h2>
                <div className={cls.taskLeft__body_card_item_left_number}>
                    Number: <span>{item.phone}</span>
                </div>
            </div>

            <div
                className={cls.item__image}
                style={{
                    backgroundImage: style.backImage,
                    backgroundRepeat: "no-repeat"
                }}
                onClick={() => {
                    setActiveModalItem(item)
                    {
                        setActiveModal(item)
                    }
                }}
            >
                <div className={cls.circle}>
                    <img src={unknownUser} alt=""/>
                </div>
            </div>
        </div>
    )
}
