import React, {useEffect, useState} from 'react';

import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import {Switch} from "shared/ui/switch";

import cls from "../../filters.module.sass";
import {fetchNewStudentsDataWithBranch, fetchStudyingStudentsDataWithBranch} from "entities/students";
import {useDispatch, useSelector} from "react-redux";
import {fetchSubjects, fetchLanguages, getLanguagesData, getSubjectsData} from "pages/registerPage";
import {fetchTeachersDataWithFilter} from "entities/teachers/model/teacherThunk";

export const TeacherFilter = React.memo(({active, setActive, setActiveSwitch, activeSwitch, isFilter}) => {

    const branch = localStorage.getItem("selectedBranch")
    const dispatch = useDispatch()
    const [selectedAgeFrom, setSelectedAgeFrom] = useState()
    const [selectedAgeTo, setSelectedAgeTo] = useState()
    const [selectedSubject, setSelectedSubject] = useState()
    const [selectedLanguage, setSelectedLanguage] = useState()
    const languages = useSelector(getLanguagesData)
    const subjects = useSelector(getSubjectsData)

    useEffect(() => {
        if (selectedSubject || selectedLanguage || selectedAgeTo || selectedAgeFrom) {
            dispatch(fetchTeachersDataWithFilter({
                subjId: selectedSubject,
                langId: selectedLanguage,
                untilAge: selectedAgeTo,
                fromAge: selectedAgeFrom,
                userBranchId: branch
            }))
            isFilter(true)
        }
    }, [selectedSubject, selectedLanguage, selectedAgeTo, selectedAgeFrom])

    const onSelectSubject = (value) => {
        setSelectedSubject(value);
        // const selectedSubjectData = subjects.find(subj => subj.id === Number(value));
        // const subjectId = value !== "all" ? selectedSubjectData.id : "all";
        // dispatch(fetchTeachersDataWithFilter({subjId: subjectId}))
        //
        // isFilter(true)
        // setActive(false)

    }
    // console.log(subjects, "fan")

    const onSelectLanguage = (value) => {
        setSelectedLanguage(value);
        // const selectedLanguageData = languages.find(lang => lang.id === Number(value));
        // const languageId = value !== "all" ? selectedLanguageData.id : "all"
        // dispatch(fetchTeachersDataWithFilter({langId: languageId}))
        // isFilter(true)
        // setActive(false)

    }

    const handleAgeFromBlur = (e) => {
        setSelectedAgeFrom(e.target.value);
        // dispatch(fetchTeachersDataWithFilter({fromAge: e.target.value, untilAge: selectedAgeTo}))
        //
        // isFilter(true)
    }

    const handleAgeToBlur = (e) => {
        setSelectedAgeTo(e.target.value);
        // dispatch(fetchTeachersDataWithFilter({fromAge: selectedAgeFrom, untilAge: e.target.value}))
        // isFilter(true)
    }

    const onChangeSwitch = () => {
        setActiveSwitch(!activeSwitch)
    }

    useEffect(() => {
        dispatch(fetchLanguages());
    }, []);

    useEffect(() => {
        dispatch(fetchSubjects())
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
                        options={[{name: "Hamma", id: "all"}, ...subjects]}
                        extraClass={cls.filter__select}
                        onChangeOption={(value) => onSelectSubject(value)}
                        defaultValue={"all"}
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
                        options={[{name: "Hamma", id: "all"}, ...languages]}
                        extraClass={cls.filter__select}
                        onChangeOption={(value) => onSelectLanguage(value)}
                        defaultValue={"all"}
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