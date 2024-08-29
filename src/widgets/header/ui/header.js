import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { getLocations } from 'pages/studentsPage';
import { BreadCrumbs } from 'features/breadCrumbs';
import { SearchPlatformInput, getSearchStr } from 'features/searchInput';
import GetLocation from 'features/location/getLocation';
import { ThemeSwitcher } from 'features/themeSwitcher';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
import { Button } from 'shared/ui/button';
import {selectBranch, selectLocations} from "../../../entities/vacancy/ui/vacancyWorkerList";

import cls from './header.module.sass';
import logo from 'shared/assets/images/logo.svg';
import {Select} from "../../../shared/ui/select";
import {
    fetchOnlyNewStudentsData,
    fetchOnlyStudyingStudentsData,
    fetchNewStudentsDataWithBranch,
    getStudentsWithBranch, fetchStudyingStudentsDataWithBranch
} from "../../../entities/students";

export const Header = () => {
    const dispatch = useDispatch();
    const { pathname, search } = useLocation();
    const navigate = useNavigate();
    const [locationHistory, setLocationHistory] = useState([]);
    const locations = useSelector(selectLocations);
    const branches = useSelector(selectBranch)
    const students = useSelector(getStudentsWithBranch)
    const isBranch = Array.isArray(branches) ? branches : [branches]
    const [branchId, setBranchId] = useState("")
    const [selected, setSelected] = useState([]);
    const [deletedId, setDeletedId] = useState(0);
    localStorage.setItem("lenght", selected.length)


    useEffect(() => {
        if (locationHistory.length >= 5) {
            setLocationHistory(arr => {
                arr.pop();
                return [pathname, ...arr];
            });
        } else {
            setLocationHistory(arr => [pathname, ...arr]);
        }
    }, [pathname]);



    useEffect(() => {
        dispatch(getLocations(selected));
    }, [selected]);

    const [searchParams, setSearchParams] = useSearchParams();
    const [valueData, setValueData] = useState(null);
    const debouncedFetchData = useDebounce(fetchSearchData, 500);

    useEffect(() => {
        if (searchParams.get('search')) {
            setValueData(searchParams.get('search'));
        }
    }, []);


    useEffect(() => {
        if (valueData) {
            debouncedFetchData();
        } else {
            setSearchParams({});
        }
    }, [valueData]);

    useEffect(() => {
        if (!searchParams.get('search')) {
            setSearchParams({});
            setValueData(null);
            dispatch(getSearchStr(''));
        }
    }, [pathname, search]);

    useEffect(() => {
        if (branchId) {
            dispatch(fetchNewStudentsDataWithBranch({id: branchId}));
            dispatch(fetchStudyingStudentsDataWithBranch({id: branchId}))
        }
    }, [branchId]);

    function fetchSearchData() {
        const checkedValue =
            typeof valueData === 'string' ? valueData : searchParams.get('search');
        setSearchParams({
            search: checkedValue
        });
        dispatch(getSearchStr(checkedValue));
    }

    return (
        <header className={cls.header}>
            <div className={cls.header__top}>
                <img className={cls.header__logo} src={logo} alt="" />
                <SearchPlatformInput
                    defaultSearch={valueData ?? searchParams.get('search')}
                    onSearch={setValueData}
                />
                <div className={cls.inner}>
                    <ThemeSwitcher />
                    <GetLocation
                        getItem={setSelected}
                        deletedId={deletedId}
                        locations={locations}
                    />
                    <Select onChangeOption={() => setBranchId}
                            options={isBranch} setValue={setBranchId}/>
                </div>
            </div>
            <div className={cls.header__bottom}>
                <Button
                    onClick={() => {
                        if (locationHistory.length) {
                            locationHistory.shift();
                            navigate(locationHistory[0]);
                            locationHistory.shift();
                        }
                        setSearchParams({});
                        setValueData(null);
                    }}
                    extraClass={cls.header__back}
                    type={"simple-add"}
                >
                    <i className="fas fa-arrow-left-long" />
                    Orqaga
                </Button>
                <div className={cls.header__selected}>
                    {selected.map(item => (
                        <div className={cls.header__item} key={item.id}>
                            <i
                                onClick={() => setDeletedId(item.id)}
                                className="fa fa-times"
                            />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
};
