import React, { useEffect, useState } from 'react';

import { Modal } from "shared/ui/modal";
import { Input } from "shared/ui/input";
import { Select } from "shared/ui/select";
import { Switch } from "shared/ui/switch";

import cls from "../../filters.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { fetchVacancyData, getVacancyJobs } from "../../../vacancyModals/vacancyPageAdd";
import {fetchEmployersDataWithFilter} from "entities/employer";
import {fetchSubjectsAndLanguages, getLanguagesData} from "pages/registerPage";
import {fetchTeachersDataWithFilter} from "../../../../entities/teachers/model/teacherThunk";

export const EmployeesFilter = React.memo(({ active, setActive, activePage, activeSwitch, setActiveSwitch }) => {
    const dispatch = useDispatch();
    const [selectedAgeFrom, setSelectedAgeFrom] = useState();
    const [selectedAgeTo, setSelectedAgeTo] = useState();
    const [selectedJob, setSelectedJob] = useState();
    const [selectedLanguage, setSelectedLanguage] = useState();
    const jobsData = useSelector(getVacancyJobs);
    const languages = useSelector(getLanguagesData)

    const jobOptions = jobsData?.jobs?.map(job => ({
        id: job.group.id,
        name: job.group.name
    }));


    const onSelectJob = (value) => {
        setSelectedJob(value);
        const selectedJobData = jobOptions.find(job => job.id === Number(value));
        const jobsId = selectedJobData.id
        dispatch(fetchEmployersDataWithFilter({jobId: jobsId}))
    };

    const onSelectLanguage = (value) => {
        setSelectedLanguage(value);
        const selectedLanguageData = languages.find(lang => lang.id === Number(value));
        const languageId = selectedLanguageData.id
        dispatch(fetchEmployersDataWithFilter({langId: languageId}))
        setActive(false)

    }

    const handleAgeFromBlur = (e) => {
        setSelectedAgeFrom(e.target.value);
        dispatch(fetchEmployersDataWithFilter({ fromAgeId: e.target.value, untilageId: selectedAgeTo }))


    }

    const handleAgeToBlur = (e) => {
        setSelectedAgeTo(e.target.value);
        dispatch(fetchEmployersDataWithFilter({ fromAgeId: selectedAgeFrom, untilageId: e.target.value }))
    }

    useEffect(() => {
        dispatch(fetchVacancyData());
    }, []);

    useEffect(() => {
        dispatch(fetchSubjectsAndLanguages());
    }, []);

    return (
        <Modal
            active={active}
            setActive={setActive}
        >
            <div className={cls.filter}>
                <h1>Filter</h1>
                <div className={cls.filter__container}>

                    <Select
                        title={"Ish"}
                        options={jobOptions}
                        extraClass={cls.filter__select}
                        onChangeOption={onSelectJob}
                    />

                    <div className={cls.filter__age}>
                        <Input
                            type={"number"}
                            extraClassName={cls.filter__input}
                            placeholder={"Yosh (От)"}
                            onChange={(e) => setSelectedAgeFrom(e.target.value)}
                            defaultValue={selectedAgeFrom}
                            onBlur={handleAgeFromBlur}
                        />
                        <Input
                            type={"number"}
                            extraClassName={cls.filter__input}
                            placeholder={"Yosh (До)"}
                            onChange={(e) => setSelectedAgeTo(e.target.value)}
                            defaultValue={selectedAgeTo}
                            onBlur={handleAgeToBlur}
                        />
                    </div>

                    <Select
                        title={"Til"}
                        options={languages}
                        extraClass={cls.filter__select}
                        onChangeOption={onSelectLanguage}
                    />

                    <div className={cls.filter__switch}>
                        <p>O’chirilgan</p>
                        <Switch activeSwitch={activeSwitch} onChangeSwitch={setActiveSwitch} />
                    </div>

                </div>
            </div>
        </Modal>
    );
});
