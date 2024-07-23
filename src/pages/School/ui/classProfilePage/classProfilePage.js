import {useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router";

import {
    ClassProfileRating,
    ClassProfileCoinModal,
    ClassProfileNavigators,
    ClassProfileSalaryModal,
    ClassProfileStudentsList
} from "entities/School/classProfile";
import {Button} from "shared/ui/button";

import cls from "./classProfilePage.module.sass";

export const ClassProfilePage = () => {

    const navigation = useNavigate()
    const {handleSubmit, register} = useForm()

    const [activeCoin, setActiveCoin] = useState(false)
    const [activeSalary, setActiveSalary] = useState(false)

    const onSubmitCoin = (data) => {
        console.log(data, "dataCoin")
    }

    const onSubmitSalary = (data) => {
        console.log(data, "dataCoin")
    }

    return (
        <div className={cls.classProfilePage}>
            <Button
                extraClass={cls.classProfilePage__btn}
                onClick={() => navigation("../molasses")}
            >
                <i className="fas fa-dna"/>
                Patok
            </Button>
            <ClassProfileNavigators setActive={() => setActiveCoin(true)}/>
            <ClassProfileRating/>
            <ClassProfileStudentsList/>
            <ClassProfileCoinModal
                active={activeCoin}
                setActive={setActiveCoin}
                onSubmit={handleSubmit(onSubmitCoin)}
                register={register}
            />
            <ClassProfileSalaryModal
                active={activeSalary}
                setActive={setActiveSalary}
                register={register}
                onSubmit={handleSubmit(onSubmitSalary)}
            />
        </div>
    )
}
