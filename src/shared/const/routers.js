


export const getRouteMain = () => 'home';
export const getRouteTaskManager = (id) => `taskManager/${id}`;
// export const getRouteNewStudents = (id) => `newStudents`;
// export const getRouteDeletedStudents = (id) => `deletedStudents`;
export const getRouteStudents = (id) => `students/${id}`;
export const getDirectorRouteStudents = () => `studentDirector`;
export const getRouteGroups = (id) => `groups/${id}`;
// export const getRouteDeletedGroups = (id) => `deletedGroups`;
export const getRouteRegister = () => `register`;
export const getRouteTeacher = (id) => `teacher/${id}`;
export const getRouteCreateGroup = () => `newStudents/createGroup`;
export const getRouteRooms = (id) => `rooms/${id}`;
export const getTeacherProfile = (id) => `teacher/:id/teacherProfile/${id}`;
export const getVacancyPage = (id) => `vacancyPage/${id}`
export const getVacancyWorkPage = (id) => `vacancyPage/:id/vacancyWorkPage/${id}`
export const getRoomsProfilePage =(id) => `rooms/:id/roomsProfilePage/${id}`
export const getProfile = (id) => `students/:id/profile/${id}`;
export const getRouteTimePage = (id) => `timeTable/${id}`
export const getRouteUserProfile = (id) => `profile/${id}`
export const getEmployerPage = (id) => `employer/${id}`
export const getEmployerProfile = (id) => `employer/:id/employerProfile/${id}`;

export const getTeacherSalary = (id) => `teacher/:id/teacherProfile/:id/teacherSalaryPage/${id}`
export const getEmployerSalary = (id) => `employer/:id/employerProfile/:id/employerSalaryPage/${id}`
export const getEmployerSalaryInsideSource = (id, permission) => `employer/:id/employerProfile/:id/employerSalaryPage/:id/giveSalaryPage/${id}/${permission}`
export const getTeacherSalaryInsideSource = (id) => `teacher/:id/teacherProfile/:id/teacherSalaryPage/:id/giveTeacherSalaryPage/${id}`

export const getClass = (id) => `class`

export const getFlow = (id) => `flows/${id}`

