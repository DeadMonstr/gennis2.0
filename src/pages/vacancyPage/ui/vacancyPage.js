import React, { useMemo, useState } from "react";
import { Pagination } from "features/pagination";
import { GroupsFilter } from "features/filters/groupsFilter";
import { Button } from "shared/ui/button";
import cls from "./vacancyPage.module.sass";
import { VacancyList } from "../../../entities/vacancy/ui/vacancyList";
import { vacancyPageList } from "../../../entities/vacancy/model";
import { VacancyEdit } from "../../../entities/vacancy/ui/vacnacyEdit";

export const VacancyPage = () => {
    const [active, setActive] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [currentTableData, setCurrentTableData] = useState([]);
    const [modal, setModal] = useState(false);
    const [currentEditingVacancy, setCurrentEditingVacancy] = useState(null);

    const PageSize = useMemo(() => 20, []);

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
                        children={<i className={"fas fa-plus"}></i>}
                        onClick={() => setModalActive(true)}
                    />
                    <Button
                        extraClass={cls.buttonHelper}
                        children={<i className={"fas fa-pencil"}></i>}
                        onClick={() => setEditMode(!editMode)}
                    />
                </div>
            </div>
            <div className={cls.mainContainer_tablePanelBox}>
                <VacancyList
                    currentTableData={currentTableData}
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
            <GroupsFilter setActive={setActive} active={active} />
            <VacancyEdit
                setModal={setModal}
                modal={modal}
                vacancy={currentEditingVacancy}
                onSave={handleVacancyChange}
            />
        </div>
    );
};
