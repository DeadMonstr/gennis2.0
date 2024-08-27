
export const getGroupProfileData = (state) =>
    state.groupProfileSlice.data

export const getGroupProfileLoading = (state) =>
    state.groupProfileSlice.loading

export const getGroupProfileFilteredTeachers = (state) =>
    state.groupProfileSlice.filteredTeachers

export const getGroupProfileFilteredStudents = (state) =>
    state.groupProfileSlice.filteredStudents

export const getReasons = (state) =>
    state.groupProfileSlice.reasons

export const getTimeTable = (state) =>
    state.groupProfileSlice.timeTable

export const getFilteredGroups = (state) =>
    state.groupProfileSlice.filteredGroups

export const getWeekDays = (state) =>
    state.groupProfileSlice.weekDays
