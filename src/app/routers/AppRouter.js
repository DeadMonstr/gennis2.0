import React, {Suspense} from 'react';
import {createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";


import {Home} from "pages/home/ui/home";
import Login from "pages/login/ui/login";
import {Register} from "pages/register/ui/register";
import {NotFoundPage} from "pages/notfound/ui/notfound";
import {Layout} from "app/layout";

import "app/styles/index.sass"

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
                        index
                        element={<Navigate to={"home"}/>}
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

