import {memo} from "react";

import cls from "./capitalInsideSecond.module.sass"
import {Button} from "shared/ui/button";
import defaultImg from "shared/assets/images/defaultImg.svg"
export const CapitalInsideSecond = memo(({capitalData, editModal, setEditModal, onDelete}) => {


    const capitalDataRender = () => {
        return (
            <div className={cls.capitalBox}>
                <div className={cls.capitalBox_img}>
                    {capitalData.img ? <img src={capitalData.img} alt=""/> : <img src={defaultImg} alt=""/>}
                </div>
                <div className={cls.capitalBoxInfo}>
                    <div>
                        {capitalData?.name}
                    </div>
                    <span>Kategoriya raqami: {capitalData?.id_number}</span>
                    <div className={cls.capitalInfo__btn}>
                        <Button onClick={setEditModal}>O’zgartirish</Button>
                        <Button>
                            <i className="fas fa-download"/>
                            Download File
                        </Button>

                        <Button onClick={onDelete} type={"danger"}>O’chirish</Button>
                    </div>
                </div>
            </div>
        )
    }

    function compareById(a, b) {
        return a.id - b.id;
    }

    const render = capitalDataRender()

    return (
        <div className={cls.capitalInfo}>
            <div className={cls.capitalInfo__wrapper}>
                {render}
            </div>
        </div>
    );
})

