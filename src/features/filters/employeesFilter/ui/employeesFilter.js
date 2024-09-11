import React, {useEffect, useState} from 'react';

import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import {Switch} from "shared/ui/switch";

import cls from "../../filters.module.sass";
import {useDispatch, useSelector} from "react-redux";
import {fetchVacancyData, getVacancyJobs} from "../../../vacancyModals/vacancyPageAdd";
import {fetchEmployersDataWithFilter} from "entities/employer";
import {fetchLanguages, getLanguagesData} from "pages/registerPage";

export const EmployeesFilter = React.memo(({active, setActive, activeSwitch, setActiveSwitch, isFilter}) => {
    const dispatch = useDispatch();
    const [selectedAgeFrom, setSelectedAgeFrom] = useState('');
    const [selectedAgeTo, setSelectedAgeTo] = useState('');
    const [selectedJob, setSelectedJob] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const jobsData = useSelector(getVacancyJobs);
    const languages = useSelector(getLanguagesData);

    const jobOptions = jobsData?.map(job => ({
        id: job.group.id,
        name: job.group.name
    })) || [];

    useEffect(() => {
        if (selectedJob || selectedLanguage || selectedAgeTo || selectedAgeFrom) {
            dispatch(fetchEmployersDataWithFilter({
                jobId: selectedJob,
                langId: selectedLanguage,
                fromAgeId: selectedAgeFrom,
                untilageId: selectedAgeTo
            }));
            isFilter(true)
        }
    }, [selectedJob, selectedLanguage, selectedAgeTo, selectedAgeFrom])

    const onSelectJob = (value) => {
        setSelectedJob(value);
        // const selectedJobData = jobOptions.find(job => job.id === Number(value));
        // if (selectedJobData || value === "all") {
        //     const jobsId = value !== "all" ? selectedJobData.id : "all";
        //     dispatch(fetchEmployersDataWithFilter({
        //         jobId: jobsId
        //     }));
        //     isFilter(true)
        // }

    };

    const onSelectLanguage = (value) => {
        setSelectedLanguage(value);
        // const selectedLanguageData = languages.find(lang => lang.id === Number(value));
        // if (selectedLanguageData || value === "all") {
        //     const languageId = value !== "all" ? selectedLanguageData.id : "all";
        //     dispatch(fetchEmployersDataWithFilter({
        //         langId: languageId
        //     }));
        //     isFilter(true)
        //     setActive(false);
        // }
    };

    const handleAgeFromBlur = (e) => {
        const value = e.target.value;
        setSelectedAgeFrom(value);
        // dispatch(fetchEmployersDataWithFilter({
        //     fromAgeId: value,
        //     untilageId: selectedAgeTo,
        // }));
        // isFilter(true)
    };

    const handleAgeToBlur = (e) => {
        const value = e.target.value;
        setSelectedAgeTo(value);
        // dispatch(fetchEmployersDataWithFilter({
        //     fromAgeId: selectedAgeFrom,
        //     untilageId: value,
        // }));
        // isFilter(true)
    };

    useEffect(() => {
        dispatch(fetchVacancyData());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchLanguages());
    }, [dispatch]);

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
                        options={[{name: "Hamma", id: "all"}, ...jobOptions]}
                        extraClass={cls.filter__select}
                        onChangeOption={onSelectJob}
                        defaultValue={selectedJob}
                    />

                    <div className={cls.filter__age}>
                        <Input
                            type={"number"}
                            extraClassName={cls.filter__input}
                            placeholder={"Yosh (От)"}
                            value={selectedAgeFrom}
                            onChange={(e) => setSelectedAgeFrom(e.target.value)}
                            onBlur={handleAgeFromBlur}
                        />
                        <Input
                            type={"number"}
                            extraClassName={cls.filter__input}
                            placeholder={"Yosh (До)"}
                            value={selectedAgeTo}
                            onChange={(e) => setSelectedAgeTo(e.target.value)}
                            onBlur={handleAgeToBlur}
                        />
                    </div>

                    <Select
                        title={"Til"}
                        options={[{name: "Hamma", id: "all"}, ...languages]}
                        extraClass={cls.filter__select}
                        onChangeOption={onSelectLanguage}
                        defaultValue={selectedLanguage}
                    />

                    <div className={cls.filter__switch}>
                        <p>O’chirilgan</p>
                        <Switch activeSwitch={activeSwitch} onChangeSwitch={() => setActiveSwitch(prev => !prev)}/>
                    </div>

                </div>
            </div>
        </Modal>
    );
});
