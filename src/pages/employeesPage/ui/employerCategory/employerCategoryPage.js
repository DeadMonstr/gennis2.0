import {CategoryModal, EmployerCategoryHeader, EmployerCategoryLists} from "entities/employer";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {API_URL, headers, useHttp} from "shared/api/base";
import {useDispatch, useSelector} from "react-redux";
import {getEmployerCategoryData} from "entities/employer/model/selector/employerCategory";
import {getEmployerCategory} from "entities/employer/model/slice/employerCategoryThunk";
import {updateCategory} from "entities/employer/model/slice/employerCategory";


export const EmployerCategoryPage = () => {
    const [activeCategory, setActiveCategory] = useState(false)
    const {register, handleSubmit, setValue} = useForm()

    const employerCategory = useSelector(getEmployerCategoryData)
    const dispatch = useDispatch()
    const [edit, setEdit] = useState({})
    const {request} = useHttp()

    useEffect(() => {
        dispatch(getEmployerCategory())
    }, [])
    const createEmpCategory = (data) => {

        request(`${API_URL}Teachers/salary-types/`, "POST", JSON.stringify(data), headers())
            .then(res => {
                console.log(res)
                setActiveCategory(!activeCategory)
                dispatch(updateCategory(data))
                setValue("name", "")
                setValue("salary", "")
            })
            .catch(err => {
                console.log(err)
            })
    }




    return (
        <div>
            <EmployerCategoryHeader activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
            <EmployerCategoryLists setEdit={setEdit} salaryTypes={employerCategory} edit={edit}/>
            <CategoryModal onClick={createEmpCategory} register={register} handleSubmit={handleSubmit}
                           activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
        </div>
    );
};

