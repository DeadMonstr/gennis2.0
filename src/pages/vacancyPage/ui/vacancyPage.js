import React, {useEffect, useMemo, useState} from "react";
import { Pagination } from "features/pagination";
import { GroupsFilter } from "features/filters/groupsFilter";
import { Button } from "shared/ui/button";
import cls from "./vacancyPage.module.sass";
import { VacancyList } from "entities/vacancy/ui/vacancyList";
import { vacancyPageList } from "entities/vacancy/model";
import { VacancyPageEdit } from "features/vacancyModals/vacancyPageEdit";
import { VacancyAdd } from "entities/vacancy/ui/vacancyAdd";
import {useDispatch, useSelector} from "react-redux";
import {getVacancyJobs, fetchVacancyData} from "features/vacancyModals/vacancyPageAdd";


export const VacancyPage = () => {
    const [active, setActive] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [currentTableData, setCurrentTableData] = useState([]);
    const [modal, setModal] = useState(false);
    const [currentEditingVacancy, setCurrentEditingVacancy] = useState(null);
    const dispatch = useDispatch()
    const getVacancyData = useSelector(getVacancyJobs)

    const PageSize = useMemo(() => 20, []);


    useEffect(() => {
        dispatch(fetchVacancyData())
    }, [dispatch])

    const handleEditClick = (vacancy) => {
        setCurrentEditingVacancy(vacancy);
        setModal(true);
    };

    const handleVacancyChange = (updatedVacancy) => {
        setCurrentTableData(prevData =>
            prevData.map(vacancy =>
                vacancy.id === updatedVacancy.id ? updatedVacancy : vacancy
            )
        );
        setModal(false);
    };

    const addVacancy = (newVacancy) => {
        setCurrentTableData(prevData => [...prevData, { id: Date.now(), ...newVacancy }]);
    };

    return (
        <div className={cls.deletedGroups}>
            <div className={cls.mainContainer_filterPanelBox}>
                <Button
                    type={"filter"}
                    extraClass={cls.extraCutClassFilter}
                    onClick={() => setActive(true)}
                >
                    Filter

                </Button>
            </div>
            <div className={cls.mainContainer_buttonPanelBox}>
                <div></div>
                <div className={cls.mainContainer_buttonPanelBox_leftCreateButton}>
                    <Button
                        extraClass={cls.buttonHelper}
                        onClick={() => setModalActive(true)}
                    >
                        <i className={"fas fa-plus"}></i>
                    </Button>
                    <Button
                        extraClass={cls.buttonHelper}
                        onClick={() => setEditMode(!editMode)}
                    >
                        <i className={"fas fa-pencil"}></i>
                    </Button>
                </div>
            </div>
            <div className={cls.mainContainer_tablePanelBox}>
                <VacancyList
                    currentTableData={getVacancyData}
                    currentPage={currentPage}
                    PageSize={PageSize}
                    editMode={!editMode}
                    onEditClick={handleEditClick}
                />
            </div>
            <Pagination
                setCurrentTableData={setCurrentTableData}
                users={vacancyPageList}
                search={search}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
            {/*<GroupsFilter setActive={setActive} active={active} />*/}
            <VacancyPageEdit
                setModal={setModal}
                modal={modal}
                vacancy={currentEditingVacancy}
                onSave={handleVacancyChange}
            />
            <VacancyAdd
                setActive={setModalActive}
                active={modalActive}
                addVacancy={addVacancy}
            />
        </div>
    );
};
