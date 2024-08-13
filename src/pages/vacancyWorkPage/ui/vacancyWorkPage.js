import React, { useMemo, useState, useEffect } from "react";
import { Pagination } from "features/pagination";
import { GroupsFilter } from "features/filters/groupsFilter";
import { Button } from "shared/ui/button";
import cls from "./vacancyWorkPage.module.sass";
import { vacancyWorkList, vacancyWorkerList } from "entities/vacancy/model";
import { VacancyPageEdit } from "features/vacancyModals/vacancyPageEdit";
import { VacancyWorkList } from "entities/vacancy/ui/vacancyWorkList";
import { Switch } from "../../../shared/ui/switch";
import { VacancyWorkerList } from "entities/vacancy/ui/vacancyWorkerList";
import { VacancyWorkerPermission } from "../../../features/vacancyModals/vacancyWorkerPermission";
import {useSelector, useDispatch} from "react-redux";
import {getWorkerId} from "../../../features/vacancyModals/vacancyWorkPage/model";
import {fetchWorkerWithId} from "../../../features/vacancyModals/vacancyWorkPage/model";

export const VacancyWorkPage = () => {
    const [active, setActive] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [activeSwitch, setActiveSwitch] = useState(false);
    const [modal, setModal] = useState(false);
    const [modalOn, setModalOn] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [currentTableData, setCurrentTableData] = useState([]);
    const [currentEditingVacancy, setCurrentEditingVacancy] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);
    const dispatch = useDispatch()
    const getWorkerID = useSelector(getWorkerId)
    const PageSize = useMemo(() => 20, []);


    console.log(getWorkerID)
    useEffect(() => {
        setCurrentTableData(!activeSwitch ? vacancyWorkList : vacancyWorkerList);
    }, [activeSwitch]);

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

    const handleDelete = () => {
        setCurrentTableData(prevData =>
            prevData.filter(vacancy => !selectedItems.includes(vacancy.id))
        );
        setSelectedItems([]);
    };

    const handleSwitchChange = () => {
        setActiveSwitch(!activeSwitch);
    };

    const handleAddVacancy = (newVacancy) => {
        setCurrentTableData(prevData => [...prevData, newVacancy]);
    };

    return (
        <div className={cls.deletedGroups}>
            <div className={cls.mainContainer_filterPanelBox}>
            </div>
            <div className={cls.mainContainer_buttonPanelBox}>
                <div className={cls.mainContainer_buttonPanelBox_leftCreateButtons}>
                    <Switch activeSwitch={activeSwitch} onChangeSwitch={handleSwitchChange} />
                </div>

                <div className={cls.mainContainer_buttonPanelBox_leftCreateButton}>
                    {!activeSwitch ? (
                        <>
                            <Button
                                extraClass={cls.buttonHelper}
                                children={<i className={"fas fa-plus"}></i>}
                                onClick={() => setActive(!active)}
                            />
                            <Button
                                extraClass={cls.buttonHelper}
                                children={<i className={"fas fa-pencil"}></i>}
                                onClick={() => setEditMode(!editMode)}
                            />
                        </>

                    )
                    :

                            null

                    }


                    {!editMode && selectedItems.length > 0 && (
                        <Button
                            extraClass={cls.buttonHelpers}
                            children={<i className={"fas fa-trash"}></i>}
                            onClick={handleDelete}
                        />
                    )}
                </div>
            </div>
            <div className={cls.mainContainer_tablePanelBox}>
                {!activeSwitch ? (
                    <VacancyWorkList
                        currentTableData={currentTableData}
                        currentPage={currentPage}
                        PageSize={PageSize}
                        editMode={editMode}
                        onEditClick={handleEditClick}
                        selectedItems={selectedItems}
                        setSelectedItems={setSelectedItems}
                    />
                ) : (
                    <VacancyWorkerList
                        currentTableData={currentTableData}
                        currentPage={currentPage}
                        PageSize={PageSize}
                    />
                )}
            </div>
            <Pagination
                setCurrentTableData={setCurrentTableData}
                users={!activeSwitch ? vacancyWorkList : vacancyWorkerList}
                search={search}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
            <VacancyPageEdit
                setModal={setModal}
                modal={modal}
                vacancy={currentEditingVacancy}
                onSave={handleVacancyChange}
            />
            <VacancyWorkerPermission
                setActive={setActive}
                active={active}
                onAddVacancy={handleAddVacancy}
            />
        </div>
    );
};
