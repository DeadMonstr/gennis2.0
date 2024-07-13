import cls from "./homeNews.module.sass"
import Slider from "react-slick";
import React from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from "shared/assets/images/login-page-4468581-3783954 1.svg"
import img1 from "shared/assets/images/Rectangle 869.svg"

const newsData = [
    {
        img: img,
        newsTitle: "weddede",
        newsSubTitle: "dasddas",
        newsParagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
    },
    {
        img: img1,
        newsTitle: "weddede",
        newsSubTitle: "dasddas",
        newsParagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
    },
    {
        img: img1,
        newsTitle: "weddede",
        newsSubTitle: "dasddas",
        newsParagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
    },
    {
        img: img1,
        newsTitle: "weddede",
        newsSubTitle: "dasddas",
        newsParagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
    },
    {
        img: img1,
        newsTitle: "weddede",
        newsSubTitle: "dasddas",
        newsParagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
    }
]
export const HomeNews = () => {
    // const settings = {
    //     infinite: true,
    //     slidesToShow: 0,
    //     slidesToScroll: 0,
    //     speed: 500
    // };
    return (
        <div className={cls.news}>
            <div className={cls.news__wrapper}>

                    {newsData.map((item) => {
                        return (
                            <div className={cls.news__box}>
                                <div className={cls.news__box_img}>
                                    <img src={item.img} alt=""/>
                                </div>
                                <div className={cls.news__box_title}>
                                    <div className={cls.news__box_info}>
                                        {item.newsTitle} {item.newsSubTitle}
                                    </div>
                                    <div className={cls.news__box_subject}>
                                        {item.newsParagraph}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
