import React, {useContext, useMemo, useState} from 'react';
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";

import {SearchContext} from "shared/lib/context/searchContext";
import { Select } from "shared/ui/select";
import { Button } from "shared/ui/button";
import { Radio } from "shared/ui/radio";
import { StudentsFilter } from "features/filters/studentsFilter";
import { Pagination } from "features/pagination";
import {getSearchValue} from "features/searchInput";
import { NewStudentsList } from "entities/newStudents/ui";
import { users } from "entities/newStudents/model";
import {peoples} from "entities/newStudents/model";
import {branches} from "entities/newStudents/model";

import cls from "./newStudents.module.sass";

export const NewStudents = () => {

    // const {search} = useContext(SearchContext)

    const search = useSelector(getSearchValue)

    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState("");
    const PageSize = useMemo(() => 20, []);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentTableData, setCurrentTableData] = useState([]);

    const handleChange = (value) => {
        setSelected(value);
    };

    const onChangeOption = (value) => {
        setSelected(value)
    }

    console.log(search, "search")

    const searchedUsers = useMemo(() => {
        const filteredHeroes = users.slice()
        setCurrentPage(1)
        return filteredHeroes.filter(item => {
            return (
                item.name?.toLowerCase().includes(search.toLowerCase()) ||
                item.surname?.toLowerCase().includes(search.toLowerCase()) ||
                item.username?.toLowerCase().includes(search.toLowerCase()) ||
                item.fullName?.toLowerCase().includes(search.toLowerCase()) ||
                item.sitterNumber?.toLowerCase().includes(search.toLowerCase()) ||
                item.allSalary?.toLowerCase().includes(search.toLowerCase())
            )
        })
    }, [setCurrentPage, search])

    return (
        <div className={cls.mainContainer}>
            <div className={cls.mainContainer_buttonPanelBox}>
                <div className={cls.mainContainer_buttonPanelBox_leftCreateButton}>
                    <Link to={"createGroup"}>
                        <Button extraClass={cls.extraCutClass}>Create group</Button>
                    </Link>
                    <Button extraClass={cls.noneBackground}>Add group</Button>
                </div>
                <Select
                    onChangeOption={() => onChangeOption}
                    options={branches}
                />
            </div>
            <div className={cls.mainContainer_filterPanelBox}>
                <Button
                    extraClass={cls.extraCutClassFilter}
                    onClick={() => setActive(true)}
                    type={"filter"}
                >
                    Filter
                </Button>
                <div className={cls.mainContainer_filterPanelBox_rightFilterRadioGroupBox}>
                    {peoples.map((item, id) => (
                        <Radio
                            key={id}
                            onChange={() => handleChange(item)}
                            checked={selected === item}
                        >
                            <div className={selected === item ? cls.radioText : cls.radioTextDef}>{item}</div>
                        </Radio>
                    ))}
                </div>
            </div>
            <div className={cls.mainContainer_tablePanelBox}>
                <NewStudentsList
                    currentTableData={currentTableData}
                    currentPage={currentPage}
                    PageSize={PageSize}
                />
            </div>
            <Pagination
                setCurrentTableData={setCurrentTableData}
                users={searchedUsers}
                search={search}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
            <StudentsFilter
                active={active}
                setActive={setActive}
            />
        </div>
    );
};
