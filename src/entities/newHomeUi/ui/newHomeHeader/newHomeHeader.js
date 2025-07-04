import newLogo from "shared/assets/logo/turonNew.svg"
import cls from "./newHomeUi.module.sass"
import {GiHamburgerMenu} from "react-icons/gi";


const headerList = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "About Us",
        url: "/about"
    },
    {
        id: 3,
        title: "Admissions",
        url: "/contact"
    },
    {
        id: 4,
        title: "Academics",
        url: "/contact"
    },
    {
        id: 5,
        title: "FACULTY & STAFF",
        url: "/contact"
    },
    {
        id: 6,
        title: "STUDENT LIFE",
        url: "/contact"
    },
    {
        id: 7,
        title: "GALLERY",
        url: "/contact"
    },
    {
        id: 8,
        title: "CONTACT US",
        url: "/contact"
    }
]

export const NewHomeHeader = () => {

    const renderList = () => {
        return headerList.map(item => (
            <li>{item.title}</li>
        ))
    }
    return (
        <div className={cls.header}>

            <div className={cls.header__logo}>
                <img src={newLogo} alt=""/>
            </div>

            <ul>
                {renderList()}
            </ul>

            <div className={}>
                <GiHamburgerMenu />
            </div>


        </div>
    );
};

