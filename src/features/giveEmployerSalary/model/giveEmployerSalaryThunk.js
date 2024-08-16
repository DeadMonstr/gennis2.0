import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, useHttp, headers} from "../../../shared/api/base";

export const giveEmployerSalaryThunk = createAsyncThunk(
    'giveEmployerSalarySlices/giveEmployerSalaryThunk',
    async (newSalary, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}Users/salaries/create/`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newSalary)
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