import {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import {BreadCrumbs} from "features/breadCrumbs";
import {SearchPlatformInput, getSearchStr} from "features/searchInput";
import GetLocation from "features/location/getLocation";
import {ThemeSwitcher} from "features/themeSwitcher";
import {useDebounce} from "shared/lib/hooks/useDebounce";

import cls from "./header.module.sass";
import logo from "shared/assets/images/logo.svg";

export const Header = () => {

    const [searchParams, setSearchParams] = useSearchParams({search: ""})
    const [valueData, setValueData] = useState(null)
    const debouncedFetchData = useDebounce(fetchSearchData, 500)

    useEffect(() => {
        debouncedFetchData()
    }, [valueData])

    const dispatch = useDispatch()
    const [selected, setSelected] = useState([])
    const [deletedId, setDeletedId] = useState(0)

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
                    defaultSearch={searchParams.get("search")}
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
                <BreadCrumbs
                    defaultLink={"platform"}
                />
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