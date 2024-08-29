import {useNavigate, useParams} from "react-router";
import React, {memo, useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    CapitalInsideHeader,
    CapitalInsideProduct,
    CapitalInsideSecond,
    getCapitalData, getCapitalDataThunk,
    getCapitalInside, getCapitalTypes, getInsideCategory
} from "entities/capital";

import cls from "./capitalInside.module.sass"
import {getCapitalInsideInfo} from "entities/capital";
import {getCapitalInfo} from "entities/capital";
import {getLoading} from "entities/capital/model/selector/capitalSelector";
import {DefaultPageLoader} from "../../../../shared/ui/defaultLoader";
import {Modal} from "../../../../shared/ui/modal";
import {Form} from "../../../../shared/ui/form";
import {Input} from "../../../../shared/ui/input";
import {Button} from "shared/ui/button";
import {useDropzone} from "react-dropzone";
import {useForm} from "react-hook-form";
import {getOnDemandLazySlides} from "react-slick/lib/utils/innerSliderUtils";
import {
    changeCapitalInfoThunk,
    createInsideCategory,
    getPaymentType
} from "../../../../entities/capital/model/thunk/capitalThunk";
import {onDeleteBranch} from "entities/capital/model/slice/capitalSlice";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";
import {Select} from "../../../../shared/ui/select";

import {AddCategoryModal, EditModal} from "features/createCapitalModal";
import {getBranchThunk, getLocations} from "../../../../entities/editCreates";
import {getLocationThunk} from "../../../../entities/creates/model/createThunk/createBranchThunk";

const capitalType = [
    {name: "category", label: "Category"},
    {name: "subCategory", label: "Sub Category"},
]


export const CapitalInside = memo(() => {

    const dispatch = useDispatch()
    const {register, setValue, handleSubmit} = useForm()
    const {id} = useParams()
    const {request} = useHttp()
    const navigation = useNavigate()
    const capitalInside = useSelector(getCapitalInside)

    const paymentType = useSelector(getCapitalTypes)

    useEffect(() => {
        dispatch(getCapitalInfo(id))
        dispatch(getInsideCategory())
        dispatch(getCapitalDataThunk())

        dispatch(getPaymentType())
        dispatch(getBranchThunk())
    }, [])
    console.log(capitalInside , "log")
    const getCapitalInsideData = useSelector(getCapitalInsideInfo)

    const loading = useSelector(getLoading)
    const branches = useSelector(getLocations)



    const [changeItem, setChangeItem] = useState({})
    const [changedImages, setChangedImages] = useState([])
    const [selectPayment, setSelectPayment] = useState()
    const [capitalSelect , setSelectedCapital] = useState([])


    const [activeMenu, setActiveMenu] = useState(capitalType[0].name)

    const [activeModal, setActiveModal] = useState(false)

    const [editModal, setEditModal] = useState(false)
    const capital = useSelector(getCapitalData)
    const [ selectedBranches ,setSelectedBranches] =useState([])
    const onDelete = () => {
        console.log(id)
        navigation(-2)

        request(`${API_URL}Capital/capital_category/${id}`, "DELETE", null, headers()) // JSON.stringify qismi kerak emas, chunki DELETE so'rovi uchun badan (body) odatda kerak bo'lmaydi
            .then(res => {
                console.log(res)
                dispatch(onDeleteBranch({id: id}));
            })
            .catch(err =>{
                console.log(err)
            })


    }
    const capitalItem = () => {
        return loading ? <DefaultPageLoader/> : (
            <>
                <CapitalInsideSecond onDelete={onDelete} editModal={editModal}
                                     setEditModal={() => setEditModal(!editModal)}
                                     capitalData={getCapitalInsideData}/>
                <CapitalInsideProduct addModal={activeModal} setAddModal={setActiveModal}
                                      capitalData={capitalInside}/>
            </>
        )
    }



    const onClick = (data) => {

        setActiveModal(false)
        dispatch(createInsideCategory({data , changedImages , selectPayment , capitalSelect , selectedBranches}));
        dispatch(getInsideCategory())
    };
    const onChange = (data) => {
        setEditModal(!editModal)
        dispatch(changeCapitalInfoThunk({data, id: id}))
        setValue("name", "")
        setValue("id_number", "")
    }


    const capitalItemRender = capitalItem()

    return (
        <div className={cls.capitalInside}>
            <CapitalInsideHeader
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                categoryMenu={capitalType}
            />
            {capitalItemRender}
            <AddCategoryModal
                setSelectPayment={setSelectPayment}
                register={register}
                handleSubmit={handleSubmit}
                onClick={onClick}
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                setChangedImages={setChangedImages}
                changeItem={changeItem}
                capital={capital}
                setSelectedCapital={setSelectedCapital}
                options={paymentType}
                branches={branches}
                setSelectedBranches={setSelectedBranches}
            />
            <EditModal register={register} handleSubmit={handleSubmit} onClick={onChange} editModal={editModal}
                       setEditModal={setEditModal} setChangedImages={setChangedImages} changeItem={changeItem}/>


        </div>
    );
})


