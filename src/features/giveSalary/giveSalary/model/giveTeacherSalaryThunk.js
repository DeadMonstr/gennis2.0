import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "shared/api/base";

export const giveTeacherSalaryThunk = createAsyncThunk(
    'giveTeacherSalarySlices/giveTeacherSalaryThunk',
    async (newSalary, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}Teachers/teachers/salary/create/`, {
                method: "POST",
                headers: {
                    ...headers(),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newSalary),
            });

            if (!response.ok)
            {
                throw new Error("Xatolik oylik berishda")
            }
            const data = await response.json();
            return data;
        }catch (error)
        {
            return rejectWithValue(error.message)
        }
    }
)