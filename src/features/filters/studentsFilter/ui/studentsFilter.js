import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import { Modal } from "shared/ui/modal";
import { Input } from "shared/ui/input";
import { Select } from "shared/ui/select";
import { Radio } from "shared/ui/radio";
import { Switch } from "shared/ui/switch";
import { getLanguagesData, getSubjectsData } from "pages/registerPage";
import cls from "../../filters.module.sass";
import { fetchLanguages, fetchSubjects } from "pages/registerPage";
import { useDispatch, useSelector } from "react-redux";
import {fetchNewStudentsDataWithBranch, fetchStudyingStudentsDataWithBranch} from "entities/students";
import {getStudyingStudentsWithBranch} from "entities/students";

const statusList = [
    {
        name: "green",
        label: "Yashil",
        extra: ""
    },
    {
        name: "yellow",
        label: "Sariq",
        extra: cls.yellow
    },
    {
        name: "red",
        label: "Qizil",
        extra: cls.red
    }
]

export const StudentsFilter = React.memo(({ active, setActive, activePage, setData }) => {

    const [selectedAgeFrom, setSelectedAgeFrom] = useState("")
    const [selectedAgeTo, setSelectedAgeTo] = useState("")
    const [selectedSubject, setSelectedSubject] = useState("")
    const [selectedLang, setSelectedLanguage] = useState("")
    const [selectedClass, setSelectedClass] = useState("")
    const [selectedStatus, setSelectedStatus] = useState("")
    const dispatch = useDispatch()
    const languages = useSelector(getLanguagesData)
    const subjects = useSelector(getSubjectsData)

    const onSelectSubject = (value) => {
        setSelectedSubject(value);
        const selectedSubjectData = subjects.find(subj => subj.id === Number(value));
        const subjectId = selectedSubjectData.id;
        {
            activePage === "studying_students"
                ?
                dispatch(fetchStudyingStudentsDataWithBranch({subjId: subjectId}))
                :
                dispatch(fetchNewStudentsDataWithBranch({ subjId: subjectId }));
        }
        setActive(false)
    }

    const onSelectLanguage = (value) => {
        setSelectedLanguage(value);
        const selectedLanguageData = languages.find(lang => lang.id === Number(value));
        const languageId = selectedLanguageData.id
        {
            activePage === "studying_students"
            ?
                dispatch(fetchStudyingStudentsDataWithBranch({langId: languageId}))
                :
                dispatch(fetchNewStudentsDataWithBranch({langId: languageId}))
        }
        setActive(false)

    }

    const handleAgeFromBlur = (e) => {
        setSelectedAgeFrom(e.target.value);
        {
            activePage === "studying_students"
            ?
                dispatch(fetchStudyingStudentsDataWithBranch({ fromAge: e.target.value, untilAge: selectedAgeTo }))
                :
                dispatch(fetchNewStudentsDataWithBranch({ fromAge: e.target.value, untilAge: selectedAgeTo }))
        }

    }

    const handleAgeToBlur = (e) => {
        setSelectedAgeTo(e.target.value);
        {
            activePage === "studying_students"
            ?
                dispatch(fetchStudyingStudentsDataWithBranch({ fromAge: selectedAgeFrom, untilAge: e.target.value }))
            :
            dispatch(fetchNewStudentsDataWithBranch({ fromAge: selectedAgeFrom, untilAge: e.target.value }));
        }

    }

    useEffect(() => {
        dispatch(fetchSubjects());
    }, [dispatch]);
    useEffect(() => {
        dispatch(fetchLanguages())
    }, [dispatch])

    return (
        <Modal
            active={active}
            setActive={setActive}
        >
            <div className={cls.filter}>
                <h1>Filter</h1>
                <div className={cls.filter__container}>
                    {
                        activePage !== "deleted" ? <Select
                            title={"Fan"}
                            options={subjects}
                            extraClass={cls.filter__select}
                            onChangeOption={(value) => onSelectSubject(value)}
                        /> : null
                    }

                    {
                        activePage === "deleted" ? <Select
                            title={"Sinf"}
                            extraClass={cls.filter__select}
                            onChangeOption={setSelectedClass}
                        /> : null
                    }

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
                        <Switch disabled />
                    </div>
                    <div className={cls.filter__switch}>
                        <p>Filterlangan</p>
                        <Switch />
                    </div>
                </div>
            </div>
        </Modal>
    );
})
