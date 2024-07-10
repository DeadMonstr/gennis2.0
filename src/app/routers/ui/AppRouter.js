import React, {Suspense} from 'react';
import {createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";


import {Home} from "pages/home/ui/home";
import {Login} from "pages/login";
import {Register} from "pages/register/ui/register";
import {NotFoundPage} from "pages/notfound/ui/notfound";
import {NewStudents} from "pages/newStudents/";
import {DeletedStudents} from "pages/deletedStudents";
import {Students} from "pages/students";
import {DeletedGroups} from "pages/deletedGroups";
import {Groups} from "pages/groups";
import {Layout} from "app/layout";

import "app/styles/index.sass"
import {Teacher} from "../../../pages/teacher";
import {CreateGroup} from "../../../pages/createGroup";

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
                    <Route path={"newStudents"} element={<NewStudents/>}/>
                    <Route
                        index
                        element={<Navigate to={"home"}/>}
                    />
                    <Route
                        path={"deletedGroups"}
                        element={<DeletedGroups/>}
                    />
                    <Route
                        path={"groups"}
                        element={<Groups/>}
                    />
                    <Route path={"teacher"} element={<Teacher/>}/>
                    <Route path={"newStudents/createGroup"} element={<CreateGroup/>}/>
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

