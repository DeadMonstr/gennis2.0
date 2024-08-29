import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, headersImg, useHttp} from "../../../../shared/api/base";





export const createCapitalCategory = createAsyncThunk(
    'capitalSlice/createCapitalCategory',
    async ({data, changedImages}) => {
        const {request} = useHttp()
        const formData = new FormData
        formData.append("img", changedImages)
        formData.append("name", data.name)
        formData.append("id_number", data.id_number)
        return await request(`${API_URL}Capital/capital_category/`, "POST", formData, headersImg())

    }
)

export const getCapitalDataThunk = createAsyncThunk(
    'capitalSlice/getCapitalDataThunk',
    async () => {
            const {request} = useHttp()
            return await request(`${API_URL}Capital/capital_category/`, "GET", null, headers())
    }
)
export const getCapitalInfo = createAsyncThunk(
    "capitalSlice/getCapitalInfo",
    async (id) => {
        const {request} = useHttp()
        return await request(`${API_URL}Capital/capital_category/${id}`, "GET", null, headers())
    }
)


export const changeCapitalInfoThunk = createAsyncThunk(
    "capitalSlice/changeCapitalInfoThunk",
    async ({id, data}) => {
        const {request} = useHttp()
        return await request(`${API_URL}Capital/capital_category/${id}/`, "PATCH", JSON.stringify(data), headers())
    }
)


export const getInsideCategory = createAsyncThunk(
    "capitalSlice/getInsideCategory",
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}Capital/capital_list/`, "GET", null, headers())
    }
)


// export const createInsideCategory = createAsyncThunk(
//     "changeCapitalInfo/createInsideCategory",
//     async (obj) => {
//         const {request} = useHttp()
//         // const formData = new FormData
//         // formData.append("name" , data.name)
//         // formData.append("id_number" , data.id_number)
//         // formData.append("price" , data.price)
//         // formData.append("total_down_cost" , data.total_down_cost)
//         // formData.append("term" , data.term)
//         // formData.append("curriculum_hours" , data.curriculum_hours)
//         // formData.append("payment_type" , selectPayment)
//         // formData.append("category" , data.category)
//         // formData.append("branch" , data.branch)
//         return await request(`${API_URL}Capital/capital_create/` , "POST" , JSON.stringify(obj) , headersImg())
//     }
// )


export const createInsideCategory = createAsyncThunk(
    "changeCapitalInfo/createInsideCategory",
    async ({data, changedImages , selectPayment , capitalSelect , selectedBranches}) => {
        const {request} = useHttp();

        const formData = new FormData()
        formData.append("name" , data.name)
        formData.append("img" , changedImages)
        formData.append("category" , capitalSelect)
        formData.append("branch" , selectedBranches)
        formData.append("id_number" , data.id_number)
        formData.append("price" , data.price)
        formData.append("total_down_cost" , data.total_down_cost)
        formData.append('term' , data.term)
        formData.append("curriculum_hours" , data.curriculum_hours)
        formData.append("payment_type" , selectPayment)
        // const formData = new FormData();
        // formData.append("name", data.name);
        // formData.append("id_number", data.id_number);
        // formData.append("price", data.price);
        // formData.append("total_down_cost", data.total_down_cost);
        // formData.append("term", data.term);
        // formData.append("curriculum_hours", data.curriculum_hours);
        // formData.append("payment_type", data.payment_type);
        // formData.append("category", data.category);
        // formData.append("branch", data.branch);
        // formData.append("img", data.img); // Agar img fayl bo'lsa, uni `File` yoki `Blob` obyekti bilan yuboring

        return await request(`${API_URL}Capital/capital_create/`, "POST", formData, headersImg());
    }
);

export const getPaymentType = createAsyncThunk(
    "changeCapitalInfo/Payments/payment-types/",
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}Payments/payment-types/` , "GET" , null , headers())
    }
)

