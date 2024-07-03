import React, {Suspense} from 'react';
import {createRoutesFromElements, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import {Home} from "pages/home/ui/home";
import Login from "pages/login/ui/login";
import Register from "pages/register/ui/register";
import NotFoundPage from "pages/notfound/ui/notfound";

export const AppRouter = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path={"/"}
                    element={<Home/>}
                />
                <Route
                    path={"/login"}
                    element={<Login/>}
                />
                <Route
                    path={"/register"}
                    element={<Register/>}
                />
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

