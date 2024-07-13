import cls from "./home.module.sass"
import {Input} from "shared/ui/input";
import {Button} from "shared/ui/button";
import {Select} from "shared/ui/select";
const branches = [
    {name: "chirchiq"},
    {name: "xo'jakent"},
    {name: "gazalkent"},
    {name: "sergili"},
    {name: "nurafshon"},
]
export const Home = () => {
    return (
        <div className={cls.home}>
            <div className={cls.homeWrapper}>
                <div className={cls.homeTexts}>
                    <div className={cls.homeTitle}>
                        GENNIS - "Muvaffaqiyatni <br/> istaganlar uchun"
                    </div>
                    <div className={cls.homeParagraph}>
                        GENNIS ta'lim markazi sifatida bizning missiyamiz – har bir talabamizning intellektual va shaxsiy
                        o'sishini qo'llab-quvvatlashdir. Biz yuqori sifatli ta'lim, innovatsion o'quv dasturlari va iliq,
                        qo'llab-quvvatlovchi muhit yaratish orqali talabalarning muvaffaqiyatga erishishlariga yordam
                        beramiz. Bizning maqsadimiz – o'quvchilarimizning bilim va ko'nikmalarini rivojlantirish, ularni
                        global raqobatga tayyorlash va ularga o'zlarining intilishlariga erishishlari uchun barcha zarur
                        vositalarni taqdim etishdir. "Muvaffaqiyatni istaganlar uchun" GENNIS sizning ishonchli
                        hamkoringizdir.
                    </div>
                </div>
                <div className={cls.homeAside}>
                    <div className={cls.homeAside__title}>
                        Ro’yxatdan o’tish
                    </div>
                    <form action="">
                        <Input placeholder={"name"} type={"text"}/>
                        <Input placeholder="+998 (__) ___ __ __" type={"number"}/>
                        <Select extraClass={cls.select} options={branches}/>
                        <Button extraClass={cls.buttonExtra}>Registratsiya</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

