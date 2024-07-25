
import React, {Suspense} from 'react';
import {createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import classNames from "classnames";

import {RequireAuth} from "./RequireAuth";
import {routersConfig} from "app/routers"
import {Layout} from "app/layout";
import {Login} from "pages/login";
import {StudentProfilePage} from "pages/profilePage";
import {HomePage} from "pages/homePage";
import {Register} from "pages/register/ui/register";
import {NotFoundPage} from "pages/notfound/ui/notfound";
import {ProfileTeacherPage} from "pages/profileTeacherPage";
import {TeacherSalaryPage} from "pages/teacherSalaryPage";
import {GiveSalaryPage} from "pages/giveSalaryPage";
import {ClassProfilePage} from "pages/School";
import {ClassMolassesPage} from "pages/School";
import {EmployerPage} from "pages/employeesPage"
import {useTheme} from "shared/lib/hooks/useTheme";

import "app/styles/index.sass"
import {CreateGroup} from "../../../entities/students";
import {FlowsPage} from "../../../pages/flowsPage";


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
                                    // <RequireAuth roles={item.roles}>
                                    //     {item.element}
                                    // </RequireAuth>
                                    item.element
                                }
                            />
                        )
                    }
                    <Route path={"students/createGroup"} element={<CreateGroup/>} />
                    <Route
                        path={"profile"}
                        element={<StudentProfilePage/>}
                    />


                    <Route path={"employer"} element={<EmployerPage/>} />
                    <Route path={"flows"} element={<FlowsPage/>} />
                    <Route
                        path={"classProfile"}
                        element={<ClassProfilePage/>}
                    />

                    <Route
                            path={"molasses"}
                        element={<ClassMolassesPage/>}
                    />

                    <Route
                        path={"teacherProfile"}
                        element={<ProfileTeacherPage/>}
                    />
                    <Route
                        path={"teacherSalaryPage"}
                        element={<TeacherSalaryPage/>}
                    />
                    <Route
                        path={"giveSalaryPage"}
                        element={<GiveSalaryPage/>}
                    />

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
