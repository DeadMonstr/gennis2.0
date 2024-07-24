import cls from "./homeNews.module.sass"
import Slider from "react-slick";
import React, {useContext, useEffect, useRef, useState} from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from "shared/assets/images/login-page-4468581-3783954 1.svg"
import img1 from "shared/assets/images/Rectangle 869.svg"
import {Button} from "../../../../shared/ui/button";
import {Context} from "../../../../pages/homePage/ui/homePage";
import classNames from "classnames";

const newsData = [
    {
        id: 1,
        img: img,
        newsTitle: "weddede",
        newsSubTitle: "dasddas",
        newsParagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
    },
    {
        id: 2,
        img: img1,
        newsTitle: "weddede",
        newsSubTitle: "dasddas",
        newsParagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
    },
    {
        id: 3,
        img: img1,
        newsTitle: "weddede",
        newsSubTitle: "dasddas",
        newsParagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
    },
    {
        id: 4,
        img: img1,
        newsTitle: "weddede",
        newsSubTitle: "dasddas",
        newsParagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
    },
    {
        id: 5,
        img: img1,
        newsTitle: "weddede",
        newsSubTitle: "dasddas",
        newsParagraph: " since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
    }
]
export const HomeNews = () => {

    const {setSectionTop} = useContext(Context)

    const sectionRef = useRef()

    useEffect(() => {
        setSectionTop(cur => ({...cur, news: sectionRef?.current?.offsetTop}))
    }, [setSectionTop])
    const [moreRead, setReadMore] = useState(false)
    // const settings = {
    //     infinite: true,
    //     slidesToShow: 0,
    //     slidesToScroll: 0,
    //     speed: 500
    // };
    return (
        <div className={cls.news} ref={sectionRef}>
            <div className={cls.news__wrapper}>
                {newsData.map((item, i) => (

                    <div className={cls.news__box}>
                        <div className={cls.news__box_img}>
                            <img src={item.img} alt=""/>
                        </div>
                        <div className={cls.news__box_title}>
                            <div className={cls.news__box_info}>
                                {item.newsTitle} {item.newsSubTitle}
                            </div>
                            <div className={classNames(cls.news__box_subject , {
                                [cls.news__box_readMoreText]: moreRead === i
                            })}>
                                {item.newsParagraph}
                            </div>
                            <div className={cls.news__box_readMore}>
                                <Button onClick={() => {
                                    setReadMore(i)
                                }}>Read more ...</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <i className={classNames("fa fa-plus" , cls.plus)}></i>
        </div>
    )
}


