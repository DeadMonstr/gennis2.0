import React, {Suspense} from 'react';
import {createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";

import {routersConfig} from "app/routers"
import {Layout} from "app/layout";
import {Home} from "pages/home/ui/home";
import {Login} from "pages/login/ui/login";
import {Register} from "pages/register/ui/register";
import {NotFoundPage} from "pages/notfound/ui/notfound";

import "app/styles/index.sass"
import {ProfilePage} from "../../../pages/profilePage";

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

                    {
                        routersConfig.map(item =>
                            <Route
                                key={item.name}
                                path={item.path}
                                element={item.element}
                            />
                        )
                    }

                    <Route
                        path={"profile"}
                        element={<ProfilePage/>}
                    />

                    {/*<Route*/}
                    {/*    path={"home"}*/}
                    {/*    element={<Home/>}*/}

                    {/*/>*/}

                    {/*<Route*/}
                    {/*    path={"taskManager"}*/}
                    {/*/>*/}

                    {/*<Route*/}
                    {/*    path={"register"}*/}
                    {/*    element={<Register/>}*/}
                    {/*/>*/}

                    {/*<Route*/}
                    {/*    path={"deletedStudents"}*/}
                    {/*    element={<DeletedStudents/>}*/}
                    {/*/>*/}
                    {/*<Route*/}
                    {/*    path={"students"}*/}
                    {/*    element={<Students/>}*/}

                    {/*/>*/}
                    {/*<Route path={"newStudents"} element={<NewStudents/>}/>*/}

                    {/*<Route*/}
                    {/*    path={"deletedGroups"}*/}
                    {/*    element={<DeletedGroups/>}*/}
                    {/*/>*/}
                    {/*<Route*/}
                    {/*    path={"groups"}*/}
                    {/*    element={<GroupsPage/>}*/}
                    {/*/>*/}

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
        <Suspense>
            <RouterProvider router={router}/>
        </Suspense>
    );
};

