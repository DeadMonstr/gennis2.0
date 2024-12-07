import cls from "./aboutUs.module.sass"


import turonAbout from "shared/assets/images/logoturon1 2.svg"
import turonAbout2 from "shared/assets/images/about4.svg"
import turonAbout3 from "shared/assets/images/about5.svg"


import coreValue from "shared/assets/images/about12.svg"
import coreValue2 from "shared/assets/images/corevalue.svg"
import coreValue3 from "shared/assets/images/corevalue2.svg"
import coreValue4 from "shared/assets/images/corevalue4svg.svg"
import coreValue6 from "shared/assets/images/corevalue5svg.svg"
import coreValue7 from "shared/assets/images/corevalue7.svg"
import coreValue8 from "shared/assets/images/corevalue8.svg"
import coreValue9 from "shared/assets/images/corevalue10.svg"


const data = [
    {
        name: "Inclusivity",
        label: "- We foster an environment where every individual is respected and valued for their unique contributions.",
        img: coreValue
    },
    {
        name: "Resilience",
        label: "- We teach our students to overcome challenges with perseverance and grit.",
        img: coreValue2
    },
    {
        name: "Integrity",
        label: " - We act with honesty, transparency, and fairness in all endeavors.",
        img: coreValue3
    },
    {
        name: "Innovation",
        label: "- We encourage creativity and forward-thinking to solve challenges and seize opportunities.",
        img: coreValue4
    },
    {
        name: "Excellence",
        label: "- We pursue excellence through dedication, persistence, and continuous improvement.",
        img: coreValue6
    },
    {
        name: "Well-being",
        label: "- We nurture the mental, emotional, and physical health of our students and staff.",
        img: coreValue7
    },
    {
        name: "Lifelong Learning",
        label: "- We cultivate a love for learning that extends beyond the classroom and throughout life.",
        img: coreValue8
    },
    {
        name: "Collaboration",
        label: "- We promote teamwork and mutual support to achieve shared goals.",
        img: coreValue9
    },
]


const location = [
    "chirchiq",
    "sergeli",
    "xujakent"
]
export const AboutUs = () => {
    return (
        <div className={cls.aboutMain}>
            <AboutMain/>
            <CoreValues/>
            <SchoolLeadershipTeam/>
        </div>
    );
};


export const AboutMain = () => {
    return (
        <div className={cls.about}>


            <div className={cls.about__wrapper}>
                <div className={`${cls.about__box} ${cls.about__box_last}`}>
                    <div>
                        <div className={cls.about__title}>
                            About us
                        </div>


                        <div className={cls.about__descr}>
                            Turon International School is a premier educational institution offering a globally
                            recognized
                            curriculum with a strong focus on STEM (Science, Technology, Engineering, and Mathematics)
                            education. Our programs are designed to nurture innovation, critical thinking, and academic
                            excellence, preparing students for success in a rapidly changing world. We prioritize
                            student
                            well-being through a supportive and inclusive environment, ensuring their emotional, mental,
                            and
                            physical development alongside academic growth. Turon International School is committed to
                            fostering future-ready learners and global citizens.
                        </div>
                    </div>
                    <div>
                        <img src={turonAbout} alt=""/>
                    </div>
                </div>
                <div className={cls.about__box}>
                    <div>
                        <img src={turonAbout2} style={{width: "950px"}} alt=""/>
                    </div>

                    <div>
                        <div className={cls.about__title}>
                            Our vision
                        </div>


                        <div className={cls.about__descr}>
                            Our vision at Turon International School is to be a pioneering institution in Uzbekistan,
                            renowned for excellence in STEM and IT education. We aim to foster a community of innovative
                            thinkers and global leaders, equipped with the knowledge and skills to shape the future. Our
                            commitment is to provide an inspiring and technologically advanced learning environment
                            where students are empowered to discover their passions, pursue excellence, and make
                            meaningful contributions to the world.
                        </div>
                    </div>
                </div>
                <div className={`${cls.about__box} ${cls.about__box_last}`}>


                    <div>
                        <div className={cls.about__title}>
                            MISSION
                        </div>


                        <div className={cls.about__descr}>
                            The mission of Turon International School is to provide an exceptional education in science,
                            technology, engineering, and mathematics, integrated with information technology, to
                            students in Uzbekistan. We are dedicated to nurturing critical thinking, creativity, and a
                            love for learning in our students. Our approach combines rigorous academic standards with
                            practical, hands-on experience, ensuring our students are prepared for higher education and
                            careers in a rapidly evolving global landscape. We commit to cultivating a diverse and
                            inclusive community that respects individual differences and fosters collaboration,
                            innovation, and ethical responsibility.
                        </div>
                    </div>

                    <div>
                        <img src={turonAbout3} style={{width: "950px"}} alt=""/>
                    </div>

                </div>


            </div>

        </div>
    )
}


export const CoreValues = () => {
    return (
        <div className={cls.coreValue}>
            <div className={cls.coreValue__title}>
                Core Values
            </div>


            <div className={cls.coreValue__wrapper}>

                {data.map(item => (
                    <div className={cls.coreValue__box}>
                        <img src={item.img} alt=""/>


                        <div className={cls.coreValue__box_descr}>
                            <h2>{item.name}</h2>
                            <span>{item.label}</span>
                        </div>
                    </div>
                ))}


            </div>


        </div>
    )
}


export const SchoolLeadershipTeam = () => {

    const renderDate = () => {
        // return data.map(item => (
        //     <div className={cls.leaderShip__wrapper_box}>
        //         <img src={item.img} alt=""/>
        //
        //         <div className={cls.leaderShip__wrapper_box_info}>
        //             <div className={cls.leaderShip__wrapper_box_info_name}>
        //                 {item.name}
        //             </div>
        //             <div className={cls.leaderShip__wrapper_box_info_job}>
        //                 {item.job}
        //             </div>
        //             <div className={cls.leaderShip__wrapper_box_info_descr}>
        //                 {item.descr}
        //             </div>
        //         </div>
        //
        //     </div>
        // ))
    }


    const locationRender = () => {
        return location.map(item => (
            <div>
                {item}
            </div>
        ))
    }

    const render = renderDate()

    return (
        <div className={cls.leaderShip}>
            <div className={cls.leaderShip__header}>
                <div className={cls.leaderShip__header_span}>
                    OUR TEAM
                </div>
                <div className={cls.leaderShip__header_title}>
                    Teaching staff
                </div>
                <div className={cls.leaderShip__header_descr}>
                    Our teaching staff are dedicated professionals committed to supporting every student. They strive to
                    create an inclusive and inspiring learning environment that nurtures innovation, creativity, and
                    leadership. By fostering critical thinking and encouraging intellectual curiosity, they aim to
                    empower students to become future leaders in their chosen fields, equipped with the skills and
                    confidence to excel in a dynamic world
                </div>
            </div>
            <div>
                <div>
                    Teaching staff
                </div>
                {locationRender()}
            </div>
            <div className={cls.leaderShip__wrapper}>
                {render}
            </div>

        </div>
    );
};