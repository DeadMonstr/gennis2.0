export {DeletedTeachers} from "./ui/deletedTeachers/deletedTeachers"
export {Teachers} from "./ui/teachers/teachers"
export {fetchTeachersData} from "./model/teacherThunk"
export {fetchTeacherId} from './model/teacherParseThunk'
export {editTeacherThunk} from './model/teacherParseThunk'
export {getTeachers} from "./model/selector/teacherSelector"
export {getTeacherId} from './model/selector/teacherIdSelector'
export {default as teachers} from "./model/teacherSlice"
export {default as teacherParseSlice} from './model/teacherParseSlice'
