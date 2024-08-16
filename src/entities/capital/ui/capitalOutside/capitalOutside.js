import cls from "./capitalOutside.module.sass"
import {memo} from "react";
import {useNavigate} from "react-router";
import defaultImg from "shared/assets/images/defaultImg.svg"
import {API_URL, API_URL_DOC} from "../../../../shared/api/base";

export const CapitalOutside = memo(({capitalData}) => {

    const navigation = useNavigate()

    return (
        <div className={cls.capital}>
            <div className={cls.capital__wrapper}>
                {/*{capitalData.name}*/}

                {capitalData?.map((item, i) => (
                    <div onClick={() => navigation(`capitalBoxProfile/${item.id}`)} className={cls.capital__box}>
                        <div className={cls.capital__img}>
                            <img src={API_URL_DOC + item?.img } alt=""/>
                        </div>
                        <div className={cls.capital__descr}>
                            <h3 className={cls.capital__title}>
                                {item?.name}
                            </h3>
                            <h2>
                                {item?.id_number}
                            </h2>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
});

