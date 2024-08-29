import React, {useEffect, useState} from 'react';

import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import {Switch} from "shared/ui/switch";

import cls from "../../filters.module.sass";
import {fetchNewStudentsDataWithBranch, fetchStudyingStudentsDataWithBranch} from "../../../../entities/students";
import {useDispatch, useSelector} from "react-redux";
import {fetchSubjectsAndLanguages, getLanguagesData, getSubjectsData} from "../../../../pages/registerPage";
import {fetchTeachersDataWithFilter} from "../../../../entities/teachers/model/teacherThunk";

export const TeacherFilter = React.memo(({active, setActive, activePage , setActiveSwitch , activeSwitch}) => {
    const dispatch = useDispatch()
    const [selectedAgeFrom, setSelectedAgeFrom] = useState()
    const [selectedAgeTo, setSelectedAgeTo] = useState()
    const [selectedSubject, setSelectedSubject] = useState()
    const [selectedLanguage, setSelectedLanguage] = useState()
    const languages = useSelector(getLanguagesData)
    const subjects = useSelector(getSubjectsData)

    const onSelectSubject = (value) => {
        setSelectedSubject(value);
        const selectedSubjectData = subjects.find(subj => subj.id === Number(value));
        const subjectId = selectedSubjectData.id;
        dispatch(fetchTeachersDataWithFilter({subjId: subjectId}))

        setActive(false)

    }
    console.log(subjects, "fan")

    const onSelectLanguage = (value) => {
        setSelectedLanguage(value);
        const selectedLanguageData = languages.find(lang => lang.id === Number(value));
        const languageId = selectedLanguageData.id
        dispatch(fetchTeachersDataWithFilter({langId: languageId}))
        setActive(false)

    }

    const handleAgeFromBlur = (e) => {
        setSelectedAgeFrom(e.target.value);
        dispatch(fetchTeachersDataWithFilter({ fromAge: e.target.value, untilAge: selectedAgeTo }))


    }

    const handleAgeToBlur = (e) => {
        setSelectedAgeTo(e.target.value);
        dispatch(fetchTeachersDataWithFilter({ fromAge: selectedAgeFrom, untilAge: e.target.value }))
    }

    const onChangeSwitch =() =>{
        setActiveSwitch(!activeSwitch)
    }

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
                        title={"Fan"}
                        options={subjects}
                        extraClass={cls.filter__select}
                        onChangeOption={(value) => onSelectSubject(value)}
                    />

                    <div className={cls.filter__age}>
                        <Input
                            type={"number"}
                            extraClassName={cls.filter__input}
                            placeholder={"Yosh (От)"}
                            onChange={(e) => setSelectedAgeFrom(e.target.value)}
                            onBlur={handleAgeFromBlur}
                            defaultValue={selectedAgeFrom}
                        />
                        <Input
                            type={"number"}
                            extraClassName={cls.filter__input}
                            placeholder={"Yosh (До)"}
                            onChange={(e) => setSelectedAgeTo(e.target.value)}
                            onBlur={handleAgeToBlur}
                            defaultValue={selectedAgeTo}
                        />
                    </div>

                    <Select
                        title={"Til"}
                        options={languages}
                        extraClass={cls.filter__select}
                        onChangeOption={(value) => onSelectLanguage(value)}
                    />



                    <div className={cls.filter__switch}>
                        <p>O’chirilgan</p>
                        <Switch onChangeSwitch={() => onChangeSwitch()} activeSwitch={activeSwitch}/>
                    </div>

                </div>
            </div>
        </Modal>
    );
})