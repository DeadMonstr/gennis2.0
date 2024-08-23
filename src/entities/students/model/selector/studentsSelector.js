

export const getNewStudentsData = (state) =>
    state.newStudents?.newStudents

export const getNewStudentsLoading = (state) =>
    state.newStudents?.newStudentsStatus


export const getStudyingStudents = (state) =>
    state.newStudents?.studyingStudents

export const getFilteredStudents = (state) =>
    state.newStudents?.filteredStudents

export const getFilteredTeachers = (state) =>
    state.newStudents?.filteredTeachers

export const getFilteredErrors = (state) =>
    state.newStudents?.filteredErrors

export const getFilteredStatus = (state) =>
    state.newStudents?.newStudentsStatus

export const getCurseTypesData = (state) =>
    state.newStudents?.filteredCurseTypes

export const getCurseLevelData = (state) =>
    state.newStudents?.filteredCurseLevel
