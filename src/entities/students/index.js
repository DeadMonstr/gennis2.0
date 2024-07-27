export {Students} from "./ui/studyingStudents/studnets"
export {DeletedStudents} from "./ui/deletedStudents/deletedStudents"
export {NewStudents} from "./ui/newStudents/newStudents"
export {StudentsHeader} from "./ui/studentsHeader/studentsHeader"
export {CreateGroup} from "./ui/createGroup/CreateGroup"

export {default as newStudents} from "./model/studentsSlice"

export {fetchNewStudentsData} from "./model/studentsThunk"
export {getNewStudentsData , getStudyingStudents} from "./model/selector/studentsSelector"

export {StudentsListDirector} from "./ui/studentsListDirector/studentsListDirector";
