import cls from "./contact.module.sass"
import {useContext, useEffect, useRef, useState} from "react";
import classNames from "classnames";
import headerImg from "shared/assets/images/gennisHome.svg"
import {Input} from "shared/ui/input";
import {Textarea} from "shared/ui/textArea";
import {Button} from "shared/ui/button";
import {Context} from "pages/homePage/ui/homePage";

const branches = [

    {name: "xo'jakent"},
    {name: "gazalkent"},
    {name: "chirchiq"},
    {name: "sergili"},
    {name: "nurafshon"},
]
export const Contact = () => {

    const {setSectionTop} = useContext(Context)

    const sectionRef = useRef()

    useEffect(() => {
        setSectionTop(cur => ({...cur, contact: sectionRef?.current?.offsetTop}))
    }, [setSectionTop])

    const [active, setActive] = useState(branches[0]?.name)
    const [activeHamburger  ,setActiveHamburger] = useState(false)


    const renderInfo = () => {
        switch (active) {
            case "chirchiq" :
                return (
                    <>
                        <div className={cls.contact__locations__box_info}>
                            <h2>Chirchiq</h2>
                            <div><i className={"fa-solid fa-phone "}/> <span>+998999999999</span></div>
                        </div>
                        <div className={cls.contact__locations__box_locations}>
                            <h2>Manzil</h2>
                            <span> улица Рудаки, Chirchiq, </span>
                        </div>
                    </>
                )
                break
            case "gazalkent" :
                return (
                    <>
                        <div className={cls.contact__locations__box_info}>
                            <h2>Gazalkent</h2>
                            <div className={cls.contact__locations__box_info_item}><i className={"fa-solid fa-phone "}/>
                                <span>+998999999999</span></div>
                        </div>
                        <div className={cls.contact__locations__box_locations}>
                            <h2>Manzil</h2>
                            <span>Bo'stonliq ko'chasi, G‘azalkent, Toshkent Viloyati, </span>
                        </div>
                    </>
                )
                break
            case "xo'jakent" :
                return (
                    <>
                        <div className={cls.contact__locations__box_info}>
                            <h2>xo'jakent</h2>
                            <div><i className={"fa-solid fa-phone "}/> <span>+998999999999</span></div>
                        </div>
                        <div className={cls.contact__locations__box_locations}>
                            <h2>Manzil</h2>
                            <span>Bo'stonliq tumani, Nurchilar MFY,  </span>
                        </div>
                    </>
                )
                break
            case "sergili" :
                return (
                    <>
                        <div className={cls.contact__locations__box_info}>
                            <h2>sergili</h2>
                            <div><i className={"fa-solid fa-phone "}/> <span>+998999999999</span></div>
                        </div>
                        <div className={cls.contact__locations__box_locations}>
                            <h2>Manzil</h2>
                            <span>Amir Temur ko'chasi</span>
                        </div>
                    </>
                )
                break
            case "nurafshon" :
                return (
                    <>
                        <div className={cls.contact__locations__box_info}>
                            <h2>nurafshon</h2>
                            <div><i className={"fa-solid fa-phone "}/> <span>+998999999999</span></div>
                        </div>
                        <div className={cls.contact__locations__box_locations}>
                            <h2>Manzil</h2>
                            <span>Amir Temur ko'chasi</span>
                        </div>
                    </>
                )
                break
        }
    }
    const renderMaps = () => {
        switch (active) {
            case "gazalkent" :
                return <iframe
                    src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.3254498242686!2d69.76749861197915!3d41.56220048501333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38af1ba601d62bc3%3A0xecd7bb024bc3192b!2sGennis%20Campus!5e0!3m2!1sru!2s!4v1721050256490!5m2!1sru!2s"}
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"/>
                break
            case "xo'jakent" :
                return <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.0651548587853!2d69.93543831198187!3d41.63272308062137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38af1764720a4969%3A0x5bffca52f4445fc0!2sGennis%20Campus!5e0!3m2!1sru!2s!4v1721052569434!5m2!1sru!2s"
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"/>
                break
            case "chirchiq" :
                return <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.2761672928013!2d69.57225835382543!3d41.47661211666293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aefd412457f5ef%3A0xb416448af4b439fb!2sGennis!5e0!3m2!1sru!2s!4v1721052656468!5m2!1sru!2s"
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"/>
                break
            case "nurafshon" :
                return <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.2761672928013!2d69.57225835382543!3d41.47661211666293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aefd412457f5ef%3A0xb416448af4b439fb!2sGennis!5e0!3m2!1sru!2s!4v1721052656468!5m2!1sru!2s"
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"/>
                break
            case "sergili" :
                return <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.2761672928013!2d69.57225835382543!3d41.47661211666293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aefd412457f5ef%3A0xb416448af4b439fb!2sGennis!5e0!3m2!1sru!2s!4v1721052656468!5m2!1sru!2s"
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"/>
                break
        }
    }




    return (
        <div className={cls.contact} ref={sectionRef}>
            <div className={cls.contact__wrapper}>

                <div className={classNames(cls.contact__branches , {
                    [cls.branches_active] : activeHamburger
                })}>
                    <h2>Filiallar</h2>
                    <div className={cls.contact__branches_name}>
                        <ul>
                            {branches.map((item) => {
                                return (
                                    <li onClick={() => {
                                        setActive(item.name)
                                        setActiveHamburger(false)
                                    }}
                                        className={classNames(cls.contact__branches_list, {
                                            [cls.active]: active === item.name
                                        })}>

                                        {item.name}

                                        <i className={classNames("fa fa-pen" , cls.icon)}></i>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <div className={cls.contact__locations}>
                    <div onClick={() => setActiveHamburger(true)} className={cls.hamburger}>
                        <i className={"fa fa-bars"}/>
                    </div>


                        <div className={cls.contact__locations_title}>
                            Biz bilan bog'laning !
                        </div>

                    <div className={cls.contact__locations_netWorks}>
                        <div>
                            <i className={"fa-brands fa-youtube"}/>
                            You Tube
                        </div>
                        <div>
                            <i className={"fa-brands fa-telegram"}/>
                            telegram
                        </div>
                        <div>
                            <i className={"fa-brands fa-instagram"}/>
                            instagram
                        </div>
                        <div>
                            <i className={"fa-brands fa-facebook"}/>
                            facebook
                        </div>
                    </div>
                    <div className={cls.contact__locations_maps}>
                        <div className={cls.contact__locations_info}>
                            {renderInfo()}
                        </div>
                        {renderMaps()}
                    </div>

                </div>

                <div className={cls.contact__register}>
                    <div className={cls.contact__register_header}>
                        <img src={headerImg} alt=""/>
                    </div>
                    <div className={cls.contact__register_form}>
                        <form action="">
                            <Input placeholder={"Enter your name"} type={"text"}/>
                            <Input placeholder={"Enter your number"} type={"number"}/>
                            <Textarea placeholder={"Enter your message"}/>
                            <Button extraClass={cls.homeRegisterBtn}>Register</Button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}