import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import {Switch} from "shared/ui/switch";
import {getLanguagesData, getSubjectsData} from "pages/registerPage";
import {fetchLanguages, fetchSubjects} from "pages/registerPage";
import {
    fetchOnlyNewStudentsData,
    fetchOnlyStudyingStudentsData
} from "entities/students";

import cls from "../../filters.module.sass";
import {fetchDeletedNewStudentsThunk} from "entities/students";

export const StudentsFilter = React.memo(({active, setActive, activePage, isFilter, branchId}) => {

    const [selectedAgeFrom, setSelectedAgeFrom] = useState("")
    const [selectedAgeTo, setSelectedAgeTo] = useState("")
    const [selectedSubject, setSelectedSubject] = useState("all")
    const [selectedLang, setSelectedLanguage] = useState("")
    const [selectedClass, setSelectedClass] = useState("")
    const [isSwitch, setIsSwitch] = useState(false);
    const dispatch = useDispatch()
    const languages = useSelector(getLanguagesData)
    const subjects = useSelector(getSubjectsData)

    useEffect(() => {
        if (selectedAgeFrom || selectedAgeTo || selectedLang || selectedSubject || selectedClass) {
            if (activePage === "studying_students") {
                dispatch(fetchOnlyStudyingStudentsData({
                    subjId: selectedSubject,
                    langId: selectedLang,
                    fromAge: selectedAgeFrom,
                    untilAge: selectedAgeTo
                }))
                // isFilter("studying_students")
            } else {
                dispatch(fetchOnlyNewStudentsData({
                    subjId: selectedSubject,
                    langId: selectedLang,
                    fromAge: selectedAgeFrom,
                    untilAge: selectedAgeTo
                }));
                // isFilter("new_students")
            }
            // isFilter(true)
        }
    }, [selectedAgeFrom, selectedAgeTo, selectedSubject, selectedLang, selectedClass])

    useEffect(() => {
        setSelectedAgeTo("")
        setSelectedSubject("")
        setSelectedLanguage("")
        setSelectedClass("")
        setSelectedAgeFrom("")
    }, [activePage])

    const onSelectSubject = (value) => {
        setSelectedSubject(value);
    }

    const onSelectLanguage = (value) => {
        setSelectedLanguage(value);


    }

    const handleAgeFromBlur = (e) => {
        setSelectedAgeFrom(e.target.value);

    }

    const handleAgeToBlur = (e) => {
        setSelectedAgeTo(e.target.value);

    }

    const handleSwitchData = () => {
        const newState = !isSwitch;
        setIsSwitch(newState);

        if (newState) {
            dispatch(fetchDeletedNewStudentsThunk());
        } else {
            dispatch(fetchOnlyNewStudentsData({userBranchId: branchId}));
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
                        activePage !== "deleted" ? <>
                            <Select
                                title={"Fan"}
                                options={[{name: "Hamma", id: "all"}, ...subjects]}
                                extraClass={cls.filter__select}
                                onChangeOption={onSelectSubject}
                                defaultValue={selectedSubject}
                            />
                            {/*<Select*/}
                            {/*    title={"Sinf"}*/}
                            {/*    extraClass={cls.filter__select}*/}
                            {/*    onChangeOption={setSelectedClass}*/}
                            {/*    defaultValue={"all"}*/}
                            {/*/>*/}
                        </> : null
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
                    {/*<Select*/}
                    {/*    title={"Til"}*/}
                    {/*    options={[{name: "Hamma", id: "all"}, ...languages]}*/}
                    {/*    extraClass={cls.filter__select}*/}
                    {/*    onChangeOption={onSelectLanguage}*/}
                    {/*    defaultValue={"all"}*/}
                    {/*/>*/}
                    <div className={cls.filter__switch}>
                        <p>O’chirilgan</p>
                        <Switch onChangeSwitch={handleSwitchData} activeSwitch={isSwitch}/>
                    </div>
                </div>
            </div>
        </Modal>
    );
})
