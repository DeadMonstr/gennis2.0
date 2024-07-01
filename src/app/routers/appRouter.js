import React, {Suspense} from 'react';
import {createRoutesFromElements, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import {Home} from "pages/home/ui/home";

export const AppRouter = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path={"/"}
                    element={<Home/>}
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

