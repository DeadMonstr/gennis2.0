export {default as oftenUsedSlice} from "./model/oftenUsedSlice";

export {
    fetchClassColorData,
    fetchClassNumberData,
    fetchSubjectsData,
    fetchLanguagesData,
    fetchClassTypeData
} from "./model/oftenUsedThunk";

export {
    getSubjectsData,
    getSubjectsLoading,
    getSubjectsError,
    getLanguagesData,
    getLanguagesLoading,
    getLanguagesError,
    getClassColorData,
    getClassColorLoading,
    getClassColorError,
    getClassNumberData,
    getClassNumberLoading,
    getClassNumberError,
    getClassTypeData,
    getClassTypeLoading,
    getClassTypeError
} from "./model/oftenUsedSelector";

