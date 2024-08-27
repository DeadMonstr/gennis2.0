export const getRouteMain = () => 'home';
export const getRouteTaskManager = (id) => `taskManager/${id}`;
// export const getRouteNewStudents = (id) => `newStudents`;
// export const getRouteDeletedStudents = (id) => `deletedStudents`;
export const getRouteStudents = (id) => `students/${id}`;
export const getDirectorRouteStudents = () => `locations-overview`;
export const getRouteGroups = (id) => `groups/${id}`;
// export const getRouteDeletedGroups = (id) => `deletedGroups`;
export const getRouteRegister = () => `register`;
export const getRouteTeacher = (id) => `teacher/${id}`;
// export const getRouteCreateGroup = () => `newStudents/createGroup`;
export const getRouteRooms = (id) => `rooms/${id}`;
export const getTeacherProfile = (id) => `teacher/:id/teacherProfile/${id}`;
export const getVacancyPage = (id) => `vacancyPage/${id}`
export const getVacancyWorkPage = (id) => `vacancyPage/:id/vacancyWorkPage/${id}`
export const getRoomsProfilePage = (id) => `rooms/:id/roomsProfilePage/${id}`
export const getProfile = (id) => `students/:id/profile/${id}`;
export const getRouteTimePage = (id) => `timeList/${id}`
export const getRouteUserProfile = (id) => `profile/${id}`
export const getEmployerPage = (id) => `employer/${id}`
export const getEmployerProfile = (id) => `employer/:id/employerProfile/${id}`;

export const getTeacherSalary = (id) => `teacher/:id/teacherProfile/:id/teacherSalaryPage/${id}`
export const getEmployerSalary = (id) => `employer/:id/employerProfile/:id/employerSalaryPage/${id}`
export const getEmployerSalaryInsideSource = (id, permission) => `employer/:id/employerProfile/:id/employerSalaryPage/:id/giveSalaryPage/${id}/${permission}`
export const getTeacherSalaryInsideSource = (id) => `teacher/:id/teacherProfile/:id/teacherSalaryPage/:id/giveTeacherSalaryPage/${id}`

export const getClass = (id) => `class`

export const getFlow = (id) => `flows/${id}`

export const getContract = (id) => `contract/${id}`

export const getCapital = (id) => `capital/${id}`

export const getCapitalInside = (id) => `capital/:id/capitalBoxProfile/${id}`



export const getCreateBranch = (id) => `createBranch/${id}`
export const getCreateSystem = (id) => `createSystem/${id}`
export const getCreateLocation = (id) => `createLocation/${id}`
export const getCreateEducation = (id) => `createEducation/${id}`


export const getLocations = (id) => `location/${id}`
export const getBranch = (id) => `branches/${id}`

export const getRouteCreateGroup = () => `students/:id/createGroup`

export const getEducation = (id) => `education/${id}`


export const getSystem = (id) => `system/${id}`
export const getAccounting = (id) => `accounting/${id}/*`
export const getInkasatsiya = (id) => `inkasatsiya/${id}/*`


export const getGroupHistory = (id) => `students/:id/profile/:id/history/${id}`