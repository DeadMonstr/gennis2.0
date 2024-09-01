import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation, useNavigate} from 'react-router';
import {SearchPlatformInput, getSearchStr} from 'features/searchInput';
import {getLocations, getSelectedLocations, Location} from 'features/locations';
import {getSystem, ThemeSwitcher} from 'features/themeSwitcher';
import {useDebounce} from 'shared/lib/hooks/useDebounce';
import {Button} from 'shared/ui/button';
import {selectBranch, selectLocations} from "entities/vacancy/ui/vacancyWorkerList";


import {Select} from "shared/ui/select";
import {
    fetchOnlyNewStudentsData,
    fetchOnlyStudyingStudentsData,
    fetchNewStudentsDataWithBranch,
    getStudentsWithBranch, fetchStudyingStudentsDataWithBranch
} from "entities/students";




import cls from './header.module.sass';
import logo from 'shared/assets/images/logo.svg';
import {deleteSelectedLocations} from "features/locations";
import {BranchSwitcher,onDeleteBranch} from "features/branchSwitcher";




export const Header = () => {


    const dispatch = useDispatch();

    const {pathname, search} = useLocation();

    const navigate = useNavigate();

    const [locationHistory, setLocationHistory] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
    const [valueData, setValueData] = useState(null);
    const debouncedFetchData = useDebounce(fetchSearchData, 500);

    const selectedLocations = useSelector(getSelectedLocations)
    const locations = useSelector(getLocations)
    const system = useSelector(getSystem)


    useEffect(() => {
        if (searchParams.get('search')) {
            setValueData(searchParams.get('search'));
        }
    }, []);


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
            if (valueData) {
                debouncedFetchData();
            } else {
                setSearchParams({});
            }
        }, [valueData]);



    useEffect(() => {
        console.log(searchParams.get("type"))
        if (!searchParams.get('search') && !searchParams.get('type') ) {
            setSearchParams({});
            setValueData(null);
            dispatch(getSearchStr(''));
        }
    }, [pathname, search]);


    function fetchSearchData() {
        const checkedValue = typeof valueData === 'string' ? valueData : searchParams.get('search');
        setSearchParams({
            search: checkedValue
        });
        dispatch(getSearchStr(checkedValue));
    }

    const onDelete = (id) => {
        dispatch(deleteSelectedLocations(id))
    }

    // useEffect(() => {
    //     if (selectedLocations.length < 1) {
    //         dispatch(onDeleteBranch())
    //     }
    // },[selectedLocations])


    return (
        <header className={cls.header}>
            <div className={cls.header__top}>
                <img className={cls.header__logo} src={logo} alt=""/>
                <SearchPlatformInput
                    defaultSearch={valueData ?? searchParams.get('search')}
                    onSearch={setValueData}
                />
                <div className={cls.inner}>
                    <ThemeSwitcher/>
                    <Location systemId={system.id}/>
                    {
                        selectedLocations.length  < 2 ?
                        <BranchSwitcher location={selectedLocations[0]}/> : null
                    }
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
                    <i className="fas fa-arrow-left-long"/>
                    Orqaga
                </Button>

                <div className={cls.header__selected}>
                    {locations.length > 1 && selectedLocations.map(item => (
                        <div className={cls.header__item} key={item.id}>
                            <i
                                onClick={() => onDelete(item.id)}
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
