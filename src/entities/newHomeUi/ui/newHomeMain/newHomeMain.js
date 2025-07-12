import cls from "./newHomeMain.module.sass";
import { HomeBtnUi } from "shared/ui/homeBtnUi/homeBtnUi";
import CountUp from "react-countup";
import student from "shared/assets/images/homePeople.png";
import { Input } from "shared/ui/input";
import { Form } from "shared/ui/form";
import { Textarea } from "shared/ui/textArea";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const NewHomeMain = () => {
    const container = useRef(null);
    const footerRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const btnRef = useRef(null);

    useGSAP(() => {
        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            x: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
        });

        gsap.from(descRef.current, {
            scrollTrigger: {
                trigger: descRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            x: -100,
            opacity: 0,
            duration: 1.4,
            ease: "power3.out",
        });

        gsap.from(btnRef.current, {
            scrollTrigger: {
                trigger: btnRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            x: -100,
            opacity: 0,
            duration: 1.4,
            ease: "power3.out",
        });


        gsap.from(".main__left_footer_number", {
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            x: -100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power2.out",
        });
    }, { scope: container });

    const number = [800, 500, 400];

    return (
        <div ref={container} id="homepage" className={cls.main}>
            <div className={cls.main__left}>
                <div ref={titleRef} className={cls.main__left_title}>
                    Farzandingiz kelajagi {window.innerWidth > 1050 ? <br /> : null} uchun to‘g‘ri tanlov <br />
                    <span>Turon Xalqaro Maktabi</span>
                </div>
                <div ref={descRef} className={cls.main__left_desc}>
                    Dunyo standardlariga mos keladigan STEAM ta'lim dasturi bilan o'quvchilarni tanqidiy fikrlashga,
                    ijodiy harakat qilishga va o'rganilgan mavzularni amaliyotda qo'llay olishga tayyorlaydi.
                </div>
                <div ref={btnRef} className={cls.main__left_link}>
                    <HomeBtnUi icon={<i className="fa-solid fa-arrow-right" />}>
                        O’qishga ariza topshiring
                    </HomeBtnUi>
                    <div className={cls.main__left_link_info}>Batafsil ma’lumot</div>
                </div>
                <div
                    ref={footerRef}
                    className={`${cls.main__left_footer} ${cls.main__left_disappear}`}
                >
                    {number.map((item, idx) => (
                        <div key={idx} className={`${cls.main__left_footer_number} main__left_footer_number`}>
                            <h1>
                                +<CountUp start={0} end={item} duration={4} />
                            </h1>
                            <span>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className={cls.main__right}>
                <div className={cls.main__right_header}>
                    <div className={cls.main__right_header_img}>
                        <img src={student} alt="" />
                    </div>
                </div>
                <div className={cls.main__right_form}>
                    <div className={cls.main__right_form_title}>Ariza qoldirish</div>
                    <Form extraClassname={cls.main__right_form_form} typeSubmit>
                        <div className={cls.main__right_wrapper}>
                            <Input extraClassName={cls.main__right_form_input} placeholder={"Full name"} />
                            <Input extraClassName={cls.main__right_form_input} placeholder={"Telephone number"} />
                        </div>
                        <Textarea
                            style={{ width: window.innerWidth > 1050 ? "transparent" : "100%" }}
                            placeholder={"Message"}
                            extraClassName={cls.main__right_form_textarea}
                        />
                    </Form>
                    <HomeBtnUi type={"submit"}>Yuborish</HomeBtnUi>
                </div>

                <div className={`${cls.main__left_footer} ${cls.main__right_disappear}`}>
                    {number.map((item, idx) => (
                        <div key={idx} className={`${cls.main__left_footer_number} main__left_footer_number`}>
                            <h1>
                                +<CountUp start={0} end={item} duration={4} />
                            </h1>
                            <span>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
