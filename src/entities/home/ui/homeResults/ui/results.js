// import React from "react";
// import Slider from "react-slick";
// import Slick from "slick-carousel"
//
//
import cls from "./results.module.sass"
import resultsImg from "shared/assets/images/2024-07-09_225505.png"
import profileImg from "shared/assets/images/best-shirts-men 1.svg"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//
//
const resultsData = [
    {
        resultsInfo: "html",
        resultsImg: resultsImg,
        profileImg: profileImg,
        teacherName: "begzod",
        teacherSurname: "jumaniyozov",
        studentName: "sardor1",
        studentSurname: "ikromov"
    },
    {
        resultsInfo: "html",
        resultsImg: resultsImg,
        profileImg: profileImg,
        teacherName: "begzod",
        teacherSurname: "jumaniyozov",
        studentName: "sardor2",
        studentSurname: "ikromov"
    },
    {
        resultsInfo: "html",
        resultsImg: resultsImg,
        profileImg: profileImg,
        teacherName: "begzod",
        teacherSurname: "jumaniyozov",
        studentName: "sardor3",
        studentSurname: "ikromov"
    },
    {
        resultsInfo: "html",
        resultsImg: resultsImg,
        profileImg: profileImg,
        teacherName: "begzod",
        teacherSurname: "jumaniyozov",
        studentName: "sardor4",
        studentSurname: "ikromov"
    },
    {
        resultsInfo: "html",
        resultsImg: resultsImg,
        profileImg: profileImg,
        teacherName: "begzod",
        teacherSurname: "jumaniyozov",
        studentName: "sardor5",
        studentSurname: "ikromov"
    },
    {
        resultsInfo: "html",
        resultsImg: resultsImg,
        profileImg: profileImg,
        teacherName: "begzod",
        teacherSurname: "jumaniyozov",
        studentName: "sardor6",
        studentSurname: "ikromov"
    },

]





export function Results() {
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500
    };

    return (
        <div className={cls.results}>
            <div className={cls.results__wrapper}>
                <Slider {...settings}>
                    {resultsData.map(item => {
                        return (
                            <div className={cls.results__box}>
                                <div className={cls.results__box_header}>
                                    <div className={cls.results__box_info}>{item.resultsInfo}</div>
                                </div>
                                <div className={cls.results__box_images}>
                                    <div className={cls.results__box_images_profile}>
                                        <img src={item.profileImg} alt=""/>
                                    </div>
                                    <div className={cls.results__box_images_results}>
                                        <img src={item.resultsImg} alt=""/>
                                    </div>
                                </div>
                                <div className={cls.results__box_studentsInfo}>
                                    <div className={cls.results__box_studentsInfo_teacher}>
                                        <i className={"fa fa-user"}></i>
                                        {item.teacherName} {item.teacherSurname}
                                    </div>
                                    <div className={cls.results__box_studentsInfo_student}>
                                        <i className={"fa fa-user-tie"}/>
                                        {item.studentName} {item.studentSurname}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    );
}


// // export const Results = () => {
// //
// //     const settings = {
// //         speed: 500,
// //         slidesToShow: 3,
// //         slidesToScroll: 3
// //     };
// //
// //     return (
// //         <div className={cls.results}>
// //
// //
// //         </div>
// //     );
// //
// // };
// //
//
//
// export const Results = () => {
//     const settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         initialSlide: 0,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };
//     return (
//         <div className={cls.results}>
//             <div className={"slider-container"}>
//                 <Slider {...settings}>

//                 </Slider>
//             </div>
//         </div>
//     );
// }



