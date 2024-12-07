export {GroupProfileInfo} from "./ui/groupProfileInfo/groupProfileInfo";
export {GroupProfileTeacher} from "./ui/groupProfileTeacher/groupProfileTeacher";
export {GroupProfileStatistics} from "./ui/groupProfileStatistics/groupProfileStatistics";
export {GroupProfileAttendance} from "./ui/groupProfileAttendance/groupProfileAttendance";
export {GroupProfileSubjectList} from "./ui/groupProfileSubjectList/groupProfileSubjectList";
export {GroupProfileMore} from "./ui/groupProfileMore/groupProfileMore";
export {GroupProfileRating} from "./ui/groupProfileRating/groupProfileRating";

export {
    fetchGroupProfile,
    changeGroupProfile,
    deleteGroupProfile,
    createWeekDays,
    fetchFilteredTeachers,
    changeWeekDays,
    deleteWeekDays,
    fetchFilteredGroups,
    fetchFilteredStudents,
    fetchFilteredStudentsAndTeachers,
    fetchGroupProfileTimeTable,
    moveGroup,
    fetchReasons,
    fetchWeekDays
} from "./model/groupProfileThunk";
export {default as groupProfileSlice} from "./model/groupProfileSlice";
export {
    getGroupProfileData,
    getGroupProfileLoading,
    getTimeTable
} from "./model/groupProfileSelector";
