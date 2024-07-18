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
import {useTheme} from "shared/lib/hooks/useTheme";

import "app/styles/index.sass"


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

                    <Route
                        path={"profile"}
                        element={<StudentProfilePage/>}
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

