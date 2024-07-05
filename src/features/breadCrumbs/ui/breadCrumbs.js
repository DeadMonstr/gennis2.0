import {useLocation} from "react-router";
import {useEffect, useState} from "react";

import {Link} from "shared/ui/link";

import cls from "./breadCrumbs.module.sass";

export const BreadCrumbs = ({defaultLink}) => {

    const location = useLocation()

    const [crumbsData, setCrumbsData] = useState([])

    useEffect(() => {
        setCrumbsData(
            location.pathname.split('/')
                .filter(crumb => crumb !== "")
        )
    }, [location])

    let currentLink = ''

    const renderCrumbs = () => {
        return crumbsData.map((crumb, index) => {

            currentLink += `/${crumb}`

            if (crumb === defaultLink) return null
            return (
                <div className={cls.breadCrumbs__item}>
                    <Link
                        to={currentLink}
                        extraClass={cls.breadCrumbs__item}
                    >
                        {crumb}
                    </Link>
                    {crumbsData.length - 1 === index ? null : <span>/</span>}
                </div>
            )
        })
    }

    const crumbs = renderCrumbs()

    return (
        <div className={cls.breadCrumbs}>
            {crumbs}
        </div>
    );
};