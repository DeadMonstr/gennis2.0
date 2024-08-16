import cls from "./capitalInsideProduct.module.sass"
import {Button} from "shared/ui/button";
import {memo} from "react";


export const CapitalInsideProduct = memo(({capitalData , addModal , setAddModal}) => {


    // const capitalDataRender = () => {
    //     return (
    //         <div className={cls.capitalBox}>
    //             <div className={cls.capitalBox_img}>
    //                 <img src={capitalData.capitalImg} alt=""/>
    //             </div>
    //
    //             <div className={cls.capitalBoxInfo}>
    //                 <ul>
    //                     <li>{capitalData.capitalProduct.name}</li>
    //                     <li>{capitalData.capitalProduct.number}</li>
    //                 </ul>
    //             </div>
    //         </div>
    //     )
    // }
    //
    // const render = capitalDataRender()


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
                        <Button onClick={() => setAddModal(!addModal)} extraClass={cls.btn} type={"editPlus"} children={<i className={"fa fa-plus"}/>}/>

                    </div>
                </div>
            </div>
            <div className={cls.product__wraper}>

                {/*{render}*/}

            </div>
        </div>
    );
})

