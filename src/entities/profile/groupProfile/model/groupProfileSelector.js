
export const getGroupProfileData = (state) =>
    state.groupProfileSlice.data

export const getGroupProfileNextLsData = (state) =>
    state.groupProfileSlice.nextLessonData

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


// export const getGroupAttendance = (state) =>
//     state.groupProfileSlice.groupAttendance