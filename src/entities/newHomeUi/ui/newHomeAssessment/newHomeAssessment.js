import cls from "./newHomeAssessment.module.sass"
import {HomeBtnUi} from "shared/ui/homeBtnUi/homeBtnUi";
import {useState} from "react";


const boxes = [
    {
        id: 1,
        title: "🟦 1-chorak",
        date: "📅 Sanasi: 10–15 oktabr",
        list: ["🧪 Test", "✍️ Yozma ish", "📈 Loyiha"],
        btnText: "Baholash taqvimi (PDF)",

    },
    {
        id: 2,
        title: "🟦 2-chorak",
        date: "📅 Sanasi: 20–25 dekabr",
        list: ["🧪 Test", "✍️ Yozma ish", "📈 Loyiha"],
        btnText: "PDF-ni yuklab olish",

    },
    {
        id: 3,
        title: "🟦 3-chorak",
        date: "📅 Sanasi: 15–20 mart",
        list: ["🧪 Test", "✍️ Yozma ish", "📈 Loyiha"],
        btnText: "Calendar yuklab olish",

    },
    {
        id: 4,
        title: "🟥 Yakuniy baholash",
        date: "📅 Sanasi: 25–31 may",
        list: ["🧪 Test", "✍️ Yozma ish", "📈 Loyiha"],
        btnText: "Baholash jadvalini ko‘rish",

    },
]

export const NewHomeAssessment = () => {

    const [active, setActive] = useState(boxes[1])

    console.log(active)
    const renderItem = () => {
        return boxes.map(item => (

            <div style={{background: active?.id === item.id ? "rgba(7, 46, 146, 1)" : ""}} onClick={() => setActive(item?.id === active?.id ? null : item)} className={cls.assessment__wrapper_box}>
                <div style={{color: active?.id === item.id ? "white" : ""}} className={cls.assessment__wrapper_box_title}>
                    {item.title}
                </div>
                <div style={{color: active?.id === item.id ? "white" : ""}} className={cls.assessment__wrapper_box_date}>
                    {item.date}
                </div>
                <ul>
                    {item.list.map(itemList => <li style={{color: item.id === active?.id ? "#fff" : "rgba(69, 69, 69, 1)"}}>{itemList}</li>)}
                </ul>
                <HomeBtnUi type={item.id === active?.id ? "downloadWhite" : "download"} children={item.btnText}/>
            </div>

        ))
    }

    return (
        <div className={cls.assessment} id={"exams"}>

            <div className={cls.assessment__header}>
                <div className={cls.assessment__header_left}>
                    <span>O‘quvchilarni baholash</span>bosqichlari
                </div>
                <div className={cls.assessment__header_right}>Har bir chorak oxirida test, yozma ish va loyiha asosida
                    oraliq baholash o‘tkaziladi. Yillik yakuniy baho o‘quvchining chorak davomida to‘plagan natijalari
                    asosida shakllanadi. Yuqori sinflarda esa xalqaro baholashlar — IELTS, STEAM loyihalari va fan
                    olimpiadalari orqali bilim va ko‘nikmalar baholanadi.
                </div>
            </div>

            <div className={cls.assessment__wrapper}>
                {renderItem()}
            </div>


        </div>
    );
};

