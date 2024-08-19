import React, {Suspense} from 'react';
import {createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import classNames from "classnames";
import {RequireAuth} from "./RequireAuth";
import {routersConfig} from "../config/routersConfig";
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
import {TimeTable} from "pages/timeTable";
import {CalendarPage} from "pages/calendarPage";


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


                {/*<Route element={<RequireAuth/>}>*/}

                <Route path={"platform/*"} element={<Layout/>}>

                    {
                        routersConfig.map(item =>
                            <Route
                                key={item.name}
                                path={item.path}
                                element={
                                    // <Route element={}>
                                    //     {item.element}
                                    // </Route>
                                    <RequireAuth>
                                        {item.element}
                                    </RequireAuth>
                                    // item.element
                                }
                            />
                        )
                    }

                    <Route
                        path={"time"}
                        element={<TimeTable/>}
                    />
                    {/*<RequireAuth>*/}
                    {/*    <Route path={"students/:id/createGroup"} element={<CreateGroup/>} />*/}
                    {/*</RequireAuth>*/}
                    <Route
                        path={"profile"}
                        element={<StudentProfilePage/>}
                    />


                    <Route
                        path={"classProfile"}
                        element={<ClassProfilePage/>}
                    />

                    <Route
                        path={"molasses"}
                        element={<ClassMolassesPage/>}
                    />
                    <Route
                        path={"flowsProfile"}
                        element={<FlowProfileNavigators/>}
                    />

                    <Route
                        path={"flows/flow-list"}
                        element={<FlowListPage/>}
                    />
                    <Route
                        path={"classColorAdd"}
                        element={<ClassAddColorPage/>}
                    />

                    {/*<Route*/}
                    {/*    path={"calendar"}*/}
                    {/*    element={<CalendarPage/>}*/}
                    {/*/>*/}


                    <Route
                        index
                        element={<Navigate to={"home"}/>}
                    />

                </Route>

                {/*</Route>*/}

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
