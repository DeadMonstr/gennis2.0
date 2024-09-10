import React, {Suspense} from 'react';
import {createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import classNames from "classnames";
import {RequireAuth} from "./RequireAuth";
import {routersConfigList} from "app/routers/config/routersConfigList";
import {Layout} from "app/layout";
import {Login} from "pages/loginPage";
import {StudentProfilePage} from "pages/profilePage";
import {HomePage} from "pages/homePage";
import {Register} from "pages/registerPage/ui/register";
import {NotFoundPage} from "pages/notfoundPage/ui/notfound";
import {ProfileTeacherPage} from "pages/profilePage";
import {TeacherSalaryPage} from "pages/teacherSalaryPage";
import {GiveSalaryPage} from "pages/giveSalaryPage";
import {ClassProfilePage} from "pages/School";
import {ClassMolassesPage} from "pages/School";
import {EmployerPage} from "pages/employeesPage"
import {useTheme} from "shared/lib/hooks/useTheme";

import "app/styles/index.sass"
import {GroupCreatePage} from "entities/students";
import {VacancyPage} from "pages/vacancyPage";
import {RoomsProfilePage} from "pages/roomsProiflePage";
import {FlowsPage} from "pages/flowsPage";
import {FlowProfileNavigators} from "entities/flowsProfile";
import {FlowListPage} from "pages/FlowListPage";
import {ClassAddColorPage, ClassPage} from "pages/classPage";
// import {T} from "pages/timeTable";
import {CalendarPage} from "pages/calendarPage";
import RequireBranch from "app/routers/ui/RequireBranch";
import RequireHeader from "app/routers/ui/RequireHeader";
import {routersConfigProfile} from "app/routers/config/routerConfigProfiles";


export const AppRouter = () => {

    const {theme} = useTheme()

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>

                <Route
                    path={"/"}
                    element={<HomePage/>}
                />
                <Route
                    path={"login"}
                    element={<Login/>}
                />
                <Route
                    path={"register"}
                    element={<Register/>}
                />


                <Route element={<RequireAuth/>}>

                    <Route path={"platform/*"} element={<Layout />}>

                        <Route element={<RequireHeader/>}>
                            {
                                routersConfigList.map((item, index) =>
                                    <Route
                                        key={index}
                                        path={item.path}

                                        element={
                                            <RequireBranch>
                                                {item.element}
                                            </RequireBranch>
                                        }
                                    />
                                )
                            }

                            <Route
                                path={"flows/flow-list"}
                                element={<FlowListPage/>}
                            />




                        </Route>

                        <Route element={<RequireHeader header={false}/>}>
                            {
                                routersConfigProfile.map((item, index) =>
                                    <Route
                                        key={index}
                                        path={item.path}
                                        element={
                                            <RequireBranch>
                                                {item.element}
                                            </RequireBranch>
                                        }
                                    />
                                )
                            }
                            <Route
                                path={"flows/flowsProfile/:id"}
                                element={<FlowProfileNavigators/>}
                            />

                            <Route
                                path={"profile"}
                                element={<StudentProfilePage/>}
                            />
                        </Route>




                        {/*<Route*/}
                        {/*    path={"classProfile"}*/}
                        {/*    element={<ClassProfilePage/>}*/}
                        {/*/>*/}

                        <Route
                            path={"molasses"}
                            element={<ClassMolassesPage/>}
                        />



                        {/*<Route*/}
                        {/*    path={"calendar"}*/}
                        {/*    element={<CalendarPage/>}*/}
                        {/*/>*/}


                        <Route
                            index
                            element={<Navigate to={"register/*"}/>}
                        />
                    </Route>
                </Route>

                <Route
                    path={"*"}
                    element={<NotFoundPage/>}
                />
            </>
        )
    );

    return (
        <div className={classNames("app", [theme])}>
            <Suspense>
                <RouterProvider router={router}/>
            </Suspense>
        </div>
    );
};
