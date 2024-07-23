
// studentProfile
export {StudentProfileInfo} from "./studentProfile/ui/studentProfileInfo/studentProfileInfo";
export {StudentProfileTeachers} from "./studentProfile/ui/studentProfileTeachers/studentProfileTeachers";
export {StudentProfileRating} from "./studentProfile/ui/studentProfileRating/studentProfileRating";
export {StudentProfileReward} from "./studentProfile/ui/studentProfileReward/studentProfileReward";
export {StudentProfileSubjects} from "./studentProfile/ui/studentProfileSubjects/studentProfileSubjects";
export {StudentProfileAttendance} from "./studentProfile/ui/studentProfileAttendance/studentProfileAttendance";

export {StudentProfileTotalAmount} from "./studentProfile/ui/studentProfileTotalAmount/studentProfileTotalAmount";
export {StudentProfileAmountPath} from "./studentProfile/ui/studentProfileAmountPath/studentProfileAmountPath";
export {StudentProfileTotalRating} from "./studentProfile/ui/studentProfileTotalRating/studentProfileTotalRating";
export {StudentProfileGroupsHistory} from "./studentProfile/ui/studentProfileGroupsHistory/studentProfileGroupsHistory";
export {StudentProfileTotalAttendance} from "./studentProfile/ui/studentProfileTotalAttendance/studentProfileTotalAttendance";

export {amountService, amountTypes} from "./studentProfile/model/consts/amountConsts";

export {default as studentProfilePayment} from "./studentProfile/model/slice/paymentSlice";
export {getPaymentData} from "./studentProfile/model/selectors/paymentSelector";

export {default as studentProfileBooks} from "./studentProfile/model/slice/booksSlice";
export {getBooksData} from "./studentProfile/model/selectors/booksSelector";

export {default as studentProfileRating} from "./studentProfile/model/slice/ratingSlice";
export {getRatingData} from "./studentProfile/model/selectors/ratingSelector";
export {fetch} from "./studentProfile/model/slice/ratingSlice";

//teacherProfile
export {TeacherProfileTeachersGroup} from "./teacherProfile/ui/teacherProfileTeachersGroup/teacherProfileTeachersGroup";

export {groups} from "./teacherProfile/model/consts";

