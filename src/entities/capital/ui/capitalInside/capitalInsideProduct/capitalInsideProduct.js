import cls from "./capitalInsideProduct.module.sass"
import {Button} from "shared/ui/button";
import {memo} from "react";
import {API_URL_IMG} from "../../../../../shared/api/base";


export const CapitalInsideProduct = memo(({capitalData, addModal, setAddModal}) => {


    const capitalDataRender = () => {
        return capitalData.map((item, i) => (
            <div>
                <img src={API_URL_IMG + item.img} alt=""/>
                <h2>{item.name}</h2>
            </div>
        ))
    }

    const render = capitalDataRender()


    return (
        <div className={cls.product}>

            <div className={cls.product__header}>
                <div className={cls.product__header_title}>
                    Kategoriya mahsulotlari:
                </div>

                <div className={cls.product__header_right}>
                    <span>
                        Jami (Down Cost): 278
                    </span>
                    <div>
                        <Button type={"danger"} children={"O’chirilganlar"}/>
                        <Button onClick={() => setAddModal(!addModal)} extraClass={cls.btn} type={"editPlus"}
                                children={<i className={"fa fa-plus"}/>}/>

                    </div>
                </div>
            </div>
            <div className={cls.product__wraper}>

                {render}

            </div>
        </div>
    );
})

