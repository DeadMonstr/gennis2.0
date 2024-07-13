import cls from "./homeTeachers.module.sass"
import profileTeacher from "shared/assets/images/login-page-4468581-3783954 1.svg"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const teachersData = [
    {name: "sardor" , surname: 'ikromov' , teacherSubject: "english" , teacherStatus:  profileTeacher},
    {name: "sardor" , surname: 'ikromov' , teacherSubject: "english" , teacherStatus:  profileTeacher},
    {name: "sardor" , surname: 'ikromov' , teacherSubject: "english" , teacherStatus:  profileTeacher},
    {name: "sardor" , surname: 'ikromov' , teacherSubject: "english" , teacherStatus:  profileTeacher},
]

export function HomeTeachers() {

    const settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500
    };
  return(
      <div className={cls.teachers}>
        <div className={cls.teachers__wrapper}>
            <Slider {...settings}>
                {teachersData.map((item) =>{
                    return(
                        <div className={cls.teachers__box}>
                            <div className={cls.teachers__box_img}>
                                <img src={item.teacherStatus} alt=""/>
                            </div>
                            <div className={cls.teachers__box_title}>
                                <div className={cls.teachers__box_info}>
                                    {item.name} {item.surname}
                                </div>
                                <div className={cls.teachers__box_subject}>
                                    {item.teacherSubject}
                                </div>
                                <div className={cls.teachers__box_socialNetworks}>
                                    <i className="fa-brands fa-telegram"/>
                                    <i className={"fa-brands fa-instagram"}/>
                                    <i className={"fa-brands fa-facebook"}/>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </Slider>
        </div>
      </div>
  )
}

