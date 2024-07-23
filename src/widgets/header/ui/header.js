import React, {useContext, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import {fetchSearch} from "features/searchInput/model/searchThunk";
import {BreadCrumbs} from "features/breadCrumbs";
import {SearchPlatformInput} from "features/searchInput";
import GetLocation from "features/location/getLocation";
import {ThemeSwitcher} from "features/themeSwitcher";
import {SearchContext} from "shared/lib/context/searchContext";

import cls from "./header.module.sass";
import logo from "shared/assets/images/logo.svg";

export const Header = () => {

    const {setSearch} = useContext(SearchContext)

    const dispatch = useDispatch()
    const [selected, setSelected] = useState([])
    const [deletedId, setDeletedId] = useState(0)

    let [searchParams, setSearchParams] = useSearchParams()

    const onSubmitSearchStr = (searchStr) => {
        console.log(searchStr, "search")
        setSearch(searchStr)
        dispatch(fetchSearch(searchStr))
    }


    // try {
    //     addQueryParams({
    //         sort,
    //         order,
    //         search,
    //         type,
    //     });
    //     const response = await extra.api.get<Article[]>('/articles', {
    //         params: {
    //             _expand: 'user',
    //             _limit: limit,
    //             _page: page,
    //             _sort: sort,
    //             _order: order,
    //             q: search,
    //             type: type === ArticleType.ALL ? undefined : type,
    //         },
    //     });
    //
    //     if (!response.data) {
    //         throw new Error();
    //     }
    //
    //     return response.data;
    // } catch (e) {
    //     return rejectWithValue('error');
    // }


    // useEffect(() => {
    //     try {
    //         setSearchParams({
    //             sort: "createdAt",
    //             order: "asc",
    //             search: "it",
    //             type: "ALL"
    //         })
    //     } catch (e) {
    //         throw e
    //     }
    // }, [searchParams, setSearchParams])
    //
    // console.log(searchParams, "search")

    return (
        <header className={cls.header}>
            <div className={cls.header__top}>
                <img className={cls.header__logo} src={logo} alt=""/>
                <SearchPlatformInput
                    onSearch={setSearch}
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
    );
};