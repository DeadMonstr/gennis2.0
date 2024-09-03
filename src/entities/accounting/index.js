export {AccountingHeader} from "./ui/accountingHeader/accountingHeader"
export {AccountingFilter} from "./ui/accountingFilter/accountingFilter"



export {AccountingAdditionalCosts} from "./ui/acauntingTables/accountingTableAdditionalCosts/accountingAdditionalCosts"
export {AccountingCapitalCosts} from "./ui/acauntingTables/accountingTableCapitalCosts/accountingCapitalCosts"
export {AccountingBooks} from "./ui/acauntingTables/accountingTableBooks/accountingBooks"

export {StudentsPayments} from "./ui/acauntingTables/accountingTableStudent/studentsPayments"
export {DebtStudents} from "./ui/acauntingTables/accountingTableDebStudents/DebtStudents"
export {StudentsDiscount} from "./ui/acauntingTables/accountingTableStudentDiscount/StudentsDiscount"
export {EmployeeSalary} from "./ui/acauntingTables/accountingTableWorkerSalary/EmployeeSalary"
export {TeachersSalary} from "./ui/acauntingTables/accountingTableTeacherSalary/TeachersSalary"


export {getAccountingSelect , getStudentsData} from "./model/selector/accountingSelector"
export {getEmployerSalary , getLoading , getDeletedEmployer} from "./model/selector/employerSalary"
export {getStudentPaymentes , getLoadingStudent , getDeletedStudent} from "./model/selector/student"
export {getOverHeadType , getOverHeadLoading} from "./model/selector/additionalCosts"

export {default as accountingSlice} from "./model/slice/accountingSlice"
export {default as studentSlice} from "./model/slice/studetntSlice"
export {default as employerSlice} from "./model/slice/employerSalary"
export {default as teacher} from "./model/slice/teacher"
export {default as overHeadSlice} from "./model/slice/additionalCosts"
export {default as capitalSlice} from "./model/slice/capital"