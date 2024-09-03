

export const getNewStudentsData = (state) =>
    state.newStudents?.newStudentes;

export const getNewStudentsLoading = (state) =>
    state.newStudents?.newStudentsStatus;

export const getStudyingStudents = (state) =>
    state.newStudents?.studyingStudents;

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

export const getSchoolClassNumbers = (state) =>
    state.newStudents?.schoolClassNumbers

export const getSchoolClassColors = (state) =>
    state.newStudents?.schoolClassColors

export const getSchoolStudents = (state) =>
    state.newStudents?.schoolStudents

export const getStudentsWithBranch = (state) =>
    state.newStudents?.branchStudents

export const getStudyingStudentsWithBranch = (state) =>
    state.newStudents?.branchStStudents

export const getStudyingStudentsLoading = (state) =>
    state.newStudents?.branchStStudentsLoading


export const getOnlyDeletedStudents = (state) =>
    state.newStudents?.deletedStudents
