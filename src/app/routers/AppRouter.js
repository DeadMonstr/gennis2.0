import React, {Suspense} from 'react';
import {createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";


import {Home} from "pages/home/ui/home";
import Login from "pages/login/ui/login";
import {Register} from "pages/register/ui/register";
import {NotFoundPage} from "pages/notfound/ui/notfound";
import {Layout} from "app/layout";

import "app/styles/index.sass"
import {NewStudents} from "../../pages/newStudents/ui/newStudents";
import DeletedStudents from "../../pages/deletedStudents/deletedStudents";
import Students from "../../pages/students/students";
import DeletedGroups from "../../pages/deletedGroups/ui/deletedGroups";

export const AppRouter = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path={"/"}
                    element={<Home/>}
                />
                <Route
                    path={"login"}
                    element={<Login/>}
                />
                <Route
                    path={"register"}
                    element={<Register/>}
                />



                <Route path={"platform/*"} element={<Layout/>}>
                    <Route
                        path={"home"}
                        element={<Home/>}

                    />

                    <Route
                        path={"taskManager"}
                    />

                    <Route
                        path={"register"}
                        element={<Register/>}
                    />

                    <Route
                        path={"deletedStudents"}
                        element={<DeletedStudents/>}
                    />
                    <Route
                        path={"students"}
                        element={<Students/>}

                    />
                    <Route
                        index
                        element={<Navigate to={"home"}/>}
                    />
                    <Route
                        path={"deletedGroups"}
                        element={<DeletedGroups/>}
                    />

                </Route>

                <Route
                    path={"*"}
                    element={<NotFoundPage/>}
                />
            </>
        )
    );

    return (
        <Suspense >
            <RouterProvider router={router}/>
        </Suspense>
    );
};

