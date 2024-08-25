import {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router";

import {getLocations} from "pages/studentsPage";
import {BreadCrumbs} from "features/breadCrumbs";
import {SearchPlatformInput, getSearchStr} from "features/searchInput";
import GetLocation from "features/location/getLocation";
import {ThemeSwitcher} from "features/themeSwitcher";
import {useDebounce} from "shared/lib/hooks/useDebounce";
import {Button} from "shared/ui/button";

import cls from "./header.module.sass";
import logo from "shared/assets/images/logo.svg";

export const Header = () => {

    const dispatch = useDispatch()
    const {pathname, search} = useLocation()
    const navigate = useNavigate()

    const [locationHistory, setLocationHistory] = useState([])



    useEffect(() => {
        // console.log(`pathname - ${pathname}`)

        if (locationHistory.length >= 5) {
            // console.log(`locationHistory max ${locationHistory}`)
            setLocationHistory(arr => {
                arr.pop()
                return [pathname, ...arr]
            })
        } else {
            // console.log(`locationHistory-1 : ${locationHistory[0]}`)
            // console.log(`locationHistory length : ${locationHistory.length}`)
            setLocationHistory(arr => [pathname, ...arr])
        }


    }, [pathname])


    const [selected, setSelected] = useState([])
    const [deletedId, setDeletedId] = useState(0)

    useEffect(() => {
        dispatch(getLocations(selected))
    }, [selected])

    const [searchParams, setSearchParams] = useSearchParams()
    const [valueData, setValueData] = useState(null)
    const debouncedFetchData = useDebounce(fetchSearchData, 500)

    useEffect(() => {
        if (searchParams.get("search")) {
            setValueData(searchParams.get("search"))
        }
    }, [])

    useEffect(() => {
        if (valueData) {
            debouncedFetchData()
        } else {
            setSearchParams({})
        }
    }, [valueData])

    useEffect(() => {
        if (!searchParams.get("search")) {
            setSearchParams({})
            setValueData(null)
            dispatch(getSearchStr(""))
        }
    }, [pathname, search])

    function fetchSearchData() {
        const checkedValue =
            typeof valueData === "string" ? valueData : searchParams.get("search")
        setSearchParams({
            search: checkedValue
        })
        dispatch(getSearchStr(checkedValue))
    }

    return (
        <header className={cls.header}>
            <div className={cls.header__top}>
                <img className={cls.header__logo} src={logo} alt=""/>
                <SearchPlatformInput
                    defaultSearch={valueData ?? searchParams.get("search")}
                    onSearch={setValueData}
                />
                <div className={cls.inner}>
                    <ThemeSwitcher/>
                    <GetLocation
                        getItem={setSelected}
                        deletedId={deletedId}
                    />
                </div>
            </div>
            <div className={cls.header__bottom}>
                {/*<BreadCrumbs*/}
                {/*    defaultLink={"platform"}*/}
                {/*/>*/}
                <Button
                    onClick={() => {
                        if (locationHistory.length) {
                            // console.log(` navigate list : ${locationHistory};  navigate list length : ${locationHistory.length}`)
                            locationHistory.shift()
                            // console.log(`navigate - ${locationHistory[0]}`)
                            navigate(locationHistory[0])
                            locationHistory.shift()
                        }
                        // navigate(-1)
                        setSearchParams({})
                        setValueData(null)
                    }}
                    extraClass={cls.header__back}
                    type={"simple-add"}
                >
                    <i className="fas fa-arrow-left-long"/>
                    Orqaga
                </Button>
                <div className={cls.header__selected}>
                    {
                        selected.map(item => {
                            return (
                                <div
                                    className={cls.header__item}
                                >
                                    <i
                                        onClick={() => setDeletedId(item.id)}
                                        className="fa fa-times"
                                    />
                                    <p>{item.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </header>
    )
}