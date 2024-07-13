import cls from "./homeAbout.module.sass"
import ReactPlayer from "react-player";

export const HomeAbout = () => {
    return (
        <div className={cls.about}>
            <div className={cls.about__wrapper}>
                <div className={cls.about__info}>
                    <div className={cls.about__text}>
                        <h1>Siz GENNIS oilasimisiz?</h1>
                        <span>Vaqt o'tgani sari markazimiz faoliyati kengayib bormoqda. Va bu bizga yanada ko'p masuliyatni
                    kafolatlamoqda. 😊 Sevimli o'quv markazingiz sizni sifatli ta'lim bilan ta'minlash bilan bir qatorda,
                    markazimizda inoq, qiziqarli va ijtimoiy atmosferani yaratish bilan ovora. Tez kunda ajoyib va
                    noodatiy yangiliklarni guvohi bo'lasiz</span>
                    </div>
                </div>
                <div className={cls.about__aside}>
                    <div className={cls.square}>
                        <ReactPlayer

                            url={"https://youtu.be/MsTFRTeUAMs?si=bFUb660ImL682wPE"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

