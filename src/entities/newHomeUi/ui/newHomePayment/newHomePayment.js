import React from 'react';

import cls from "./newHomePayment.module.sass";
import {HomeBtnUi} from "shared/ui/homeBtnUi/homeBtnUi";
import classNames from "classnames";

const list = [
    {
        title: "Boshlang‘ich sinflar",
        subTitle: "1-4"
    },{
        title: "O‘rta sinflar",
        subTitle: "5-9",
        cost: "1 400 000",
        month: "3 500 000",
        desc: "IELTS tayyorgarlik kursi",
        color: "#072E92"
    },{
        title: "Yuqori sinflar",
        subTitle: "10-11",
        payment: "16mln"
    }
]

export const NewHomePayment = () => {

    const render = () => {
        return list.map(item => (
            <div
                className={cls.card}
                style={{
                    background: item.color,
                    gap: !!item.color ? "4rem" : "",
                    color: !!item.color ? "#FFF" : ""
                }}
            >
                <div className={cls.title}>
                    <h2 className={cls.title__sub} style={{color: !!item.color ? "#FFF" : ""}}>{item.title}</h2>
                    <h1 className={cls.title__main} style={{color: !!item.color ? "#FFF" : ""}}>
                        {item.payment ?? "14mln"}
                        <span className={cls.inner} style={{color: !!item.color ? "#FFF" : ""}}> / {item.subTitle} sinf</span>
                    </h1>
                </div>
                <ol className={classNames(cls.list, {
                    [cls.active]: !!item.color
                })}>
                    <li >Oyiga {item.cost ?? "1 600 000"} so‘m</li>
                    <li >Har chorakda {item.month ?? "4 000 000"} so‘m</li>
                    <li >{item.desc ?? "IT, robototexnika"}</li>
                    <li >Ovqatlanish (3 mahal)</li>
                </ol>

                <HomeBtnUi
                    // onClick={() => setActive(!active)}
                    extraClass={cls.btn}
                    children={" To‘lov haqida batafsil"}
                    type={!!item.color ? "request" : "contact"}
                />
            </div>
        ))
    }

    return (
        <div className={cls.payment} id={"payment"}>
            <div className={cls.payment__header}>
                <h1 className={cls.title}>
                    <span className={cls.title__inner}>To‘lov tafsilotlarini</span>
                    ko‘rib chiqing
                </h1>
                <p className={cls.subTitle}>
                    Farzandingiz sifatli ta’lim olishini istaysizmi? Bizning maktabda to‘lov tizimi shaffof, <br/>
                    tushunarli va qulay shakllantirilgan. Quyida yillik va oylik to‘lovlar, chegirmalar hamda <br/>
                    qo‘shimcha xizmatlar narxlari haqida to‘liq ma’lumot olishingiz mumkin.
                </p>
            </div>
            <div className={cls.payment__container}>
                {render()}
            </div>
        </div>
    );
};
