import cls from "./aboutUs.module.sass"


import turonAbout from "shared/assets/images/about4.svg"

export const AboutUs = () => {
    return (
        <div>
            <AboutMain/>
        </div>
    );
};


export const AboutMain = () => {
    return (
        <div className={cls.about}>


            <div className={cls.about__box}>

                <div>
                    <div className={cls.about__title}>
                        About us
                    </div>


                    <div className={cls.about__descr}>
                        Turon International School is a premier educational institution offering a globally recognized
                        curriculum with a strong focus on STEM (Science, Technology, Engineering, and Mathematics)
                        education. Our programs are designed to nurture innovation, critical thinking, and academic
                        excellence, preparing students for success in a rapidly changing world. We prioritize student
                        well-being through a supportive and inclusive environment, ensuring their emotional, mental, and
                        physical development alongside academic growth. Turon International School is committed to
                        fostering future-ready learners and global citizens.
                    </div>
                </div>
                <div>
                    <img src={} alt=""/>
                </div>

            </div>


        </div>
    )
}