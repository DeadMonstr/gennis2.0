import cls from "./home.module.sass"
import {Input} from "shared/ui/input";
import {Button} from "shared/ui/button";
import {Select} from "shared/ui/select";
import {useContext, useEffect, useRef, useState} from "react";
import {Context} from "pages/homePage/ui/homePage";
import {HomeHeader} from "../../homeHeader";

const branches = [
    {name: "chirchiq"},
    {name: "xo'jakent"},
    {name: "gazalkent"},
    {name: "sergili"},
    {name: "nurafshon"},
]

export const Home = () => {
    const [mobileMenuStatus, setMobileMenuStatus] = useState(false)
    const {setSectionTop} = useContext(Context)

    const sectionRef = useRef()

    useEffect(() => {
        setSectionTop(cur => ({...cur, home: sectionRef?.current?.offsetTop}))
    }, [setSectionTop])

    return (
        <div className={cls.home} ref={sectionRef}>
            <HomeHeader
                status={mobileMenuStatus}
                setStatus={setMobileMenuStatus}
            />
            <div className={cls.homeWrapper}>
                <div className={cls.homeTexts}>
                    <div className={cls.homeTitle}>
                        GENNIS - "Muvaffaqiyatni  istaganlar uchun"
                    </div>
                    <div className={cls.homeParagraph}>
                        <p>GENNIS ta'lim markazi sifatida bizning missiyamiz – har bir talabamizning intellektual va shaxsiy
                            o'sishini qo'llab-quvvatlashdir. Biz yuqori sifatli ta'lim, innovatsion o'quv dasturlari va iliq,
                            qo'llab-quvvatlovchi muhit yaratish orqali talabalarning muvaffaqiyatga erishishlariga yordam
                            beramiz. Bizning maqsadimiz – o'quvchilarimizning bilim va ko'nikmalarini rivojlantirish, ularni
                            global raqobatga tayyorlash va ularga o'zlarining intilishlariga erishishlari uchun barcha zarur
                            vositalarni taqdim etishdir. "Muvaffaqiyatni istaganlar uchun" GENNIS sizning ishonchli
                            hamkoringizdir.</p>
                    </div>
                </div>
                <div className={cls.homeAside}>
                    <div className={cls.homeAside__title}>
                        Ro’yxatdan o’tish
                    </div>
                    <form action="">
                        <Input extraClassName={cls.home__input} placeholder={"name"} type={"text"}/>
                        <Input extraClassName={cls.home__input} placeholder="+998 (__) ___ __ __" type={"number"}/>
                        <Select extraClass={cls.select} options={branches}/>
                        <Button extraClass={cls.buttonExtra}>Registratsiya</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

