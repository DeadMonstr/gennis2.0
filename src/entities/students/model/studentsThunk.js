import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, branchQuery, headers, useHttp} from "shared/api/base";




export const fetchNewStudentsData = createAsyncThunk(
    "studentsSlice/fetchNewStudentsData",
     async () =>{
        const {request} = useHttp()
         return await request(`${API_URL}Students/students_list/`, "GET" , null , headers())
     }
)

export const fetchOnlyNewStudentsData = createAsyncThunk(
    'studentsSlice/fetchOnlyNewStudentsData',
    async ({number}) => {
        const {request} = useHttp()
        return await request(`${API_URL}Students/new-registered-students/?${branchQuery()}&number=${number}`, "GET", null, headers())
    }
)

export const fetchOnlyStudyingStudentsData = createAsyncThunk(
    'studentsSlice/fetchOnlyStudyingStudentsData',
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}Students/active-students/`, "GET", null, headers())
    }
)

export const fetchOnlyDeletedStudentsData = createAsyncThunk(
    'studentsSlice/fetchOnlyDeletedStudentsData',
    async () => {
        const {request} = useHttp();
        return await request(`${API_URL}Students/deleted-from-registered/`, "GET", null, headers())
    }
)

export const fetchFilteredStudents = createAsyncThunk(
    "studentsSlice/fetchFilteredStudents",
    async (id) => {
        const {request} = useHttp()
        // return await request(`${API_URL}Students/api/filter_students_subject/1/`, "GET", null, headers())
        return await request(`${API_URL}Students/api/filter_students_subject/${id}/`, "GET", null, headers())
    }
)

export const fetchClassNumberList = createAsyncThunk(
    "studentsSlice/fetchClassNumberList",
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}Class/class_number_list/`, "GET", null, headers())
    }
)

export const fetchClassColors = createAsyncThunk(
    "studentsSlice/fetchClassColors",
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}Class/class_colors/`, "GET", null, headers())
    }
)

export const fetchSchoolStudents = createAsyncThunk(
    "studentsSlice/fetchSchoolStudents",
    async ({userBranchId}) => {
        const {request} = useHttp()
        return await request(`${API_URL}Students/school_students/?branch=${userBranchId}`, "GET", null, headers())
    }
)

export const createSchoolClass = createAsyncThunk(
    "studentsSlice/createSchoolClass",
    async ({res}) => {
        const {request} = useHttp()
        return await request(`${API_URL}Group/groups/create/?${branchQuery()}`, "POST", JSON.stringify(res), headers())
    }
)



export const fetchNewStudentsDataWithBranch = createAsyncThunk(
    'studentsSlice/fetchNewStudentsDataWithBranch',
    async ({subjId, fromAge, untilAge, langId}) => {
        const {request} = useHttp()
        return await request(`${API_URL}Students/new-registered-students/?subject=${subjId}&age=${fromAge}-${untilAge}&language=${langId}`, "GET", null, headers())
    }
)

export const fetchStudyingStudentsDataWithBranch = createAsyncThunk(
    'studentsSlice/fetchStudyingStudentsDataWithBranch',
    async ({subjId, fromAge, untilAge, langId}) => {
        const {request} = useHttp();
        return await request(`${API_URL}Students/active-students/?subject=${subjId}&age=${fromAge}-${untilAge}&language=${langId}`, "GET", null, headers())
    }
)




