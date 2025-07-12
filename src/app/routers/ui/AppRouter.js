import React, {Suspense} from 'react';
import {createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import classNames from "classnames";
import {RequireAuth} from "./RequireAuth";
import {routersConfigList} from "app/routers/config/routersConfigList";
import {Layout} from "app/layouts/layout";
import {Login} from "pages/loginPage";
import {StudentProfilePage} from "pages/profilePage";
import {NewHomeUi, NewSchoolHomePage,} from "pages/homePage";
import {Register} from "pages/registerPage/ui/register";


import {ClassMolassesPage} from "pages/School";

import {useTheme} from "shared/lib/hooks/useTheme";

import "app/styles/index.sass"

import {FlowProfileNavigators} from "entities/flowsProfile";
import {FlowListPage} from "pages/FlowListPage";
import {ClassAddColorPage} from "pages/classPage";

import RequireBranch from "app/routers/ui/RequireBranch";
import RequireHeader from "app/routers/ui/RequireHeader";
import {routersConfigProfile} from "app/routers/config/routerConfigProfiles";
import Target from "pages/target/ui/Target";
import LayoutTarget from "app/layouts/layoutTarget/LayoutTarget";
import {TestModal} from "pages/taskManager/ui/taskManager";


export const AppRouter = () => {

    const {theme} = useTheme()

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>

                <Route path={"/*"} element={<NewHomeUi/>}/>
                {/*<Route path={"/"} element={<LayoutWebsite/>}>*/}
                {/*    <Route*/}
                {/*        index*/}
                {/*        element={<SchoolHomePage/>}*/}
                {/*    />*/}
                {/*    <Route element={<AboutUs/>} path={"aboutUs"}/>*/}
                {/*    <Route element={<SchoolParentesComment/>} path={"testimonial"}/>*/}
                {/*    <Route element={<SchoolHomeWorkUs/>} path={"workwithus"}/>*/}
                {/*    <Route element={<SchoolHomeEducationPage/>} path={"education"}/>*/}
                {/*    <Route element={<SchoolHomeLatestNewModal/>} path={"news"}/>*/}
                {/*    <Route element={<SchoolHomeCurriculamModal/>} path={"curricular"}/>*/}
                {/*    <Route element={<SchoolGalleryModal/>} path={"gallery"}/>*/}
                {/*    <Route element={<SchoolHomeStudentProfileModal/>} path={"studentLife"}/>*/}
                {/*    <Route element={<SchoolHomeNewsAnnouncementModal/>} path={"news_announcement"}/>*/}
                {/*    <Route element={<SchoolHomeStudentsModal/>} path={"students"}/>*/}
                {/*</Route>*/}

                {/*<Route*/}
                {/*    path={"/"}*/}
                {/*    element={<CenterHomePage/>}*/}
                {/*/>*/}


                <Route
                    path={"login"}
                    element={<Login/>}
                />
                <Route
                    path={"register"}
                    element={<Register/>}
                />

                <Route path={"/register/target/*"}  element={<LayoutTarget>
                    <Target/>
                </LayoutTarget>} />

                <Route element={<RequireAuth/>}>

                    <Route path={"platform/*"} element={<Layout/>}>

                        <Route element={<RequireHeader/>}>
                            {
                                routersConfigList.map((item, index) =>
                                    <Route
                                        key={index}
                                        path={item.path}
                                        element={
                                            // item.element
                                            <RequireBranch>
                                                {item.element}
                                            </RequireBranch>
                                        }
                                    />
                                )
                            }
                        </Route>

                        <Route element={<RequireHeader header={false} back={false}/>}>
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
                        </Route>


                        {/*<Route path="tasks" element={<TestModal/>}/>*/}


                        <Route
                            path={"profile"}
                            element={<StudentProfilePage/>}
                        />

                        {/*<Route*/}
                        {/*    path={"classProfile"}*/}
                        {/*    element={<ClassProfilePage/>}*/}
                        {/*/>*/}

                        <Route
                            path={"molasses"}
                            element={<ClassMolassesPage/>}
                        />
                        <Route
                            path={"flows/flowsProfile/:id"}
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
                            element={<Navigate to={"register/*"}/>}
                        />
                    </Route>
                </Route>

                {/*     <Route
                    path={"*"}
                    element={<NotFoundPage/>}
                />*/}
            </>
        )
    );

    return (
        <div className={classNames("app", [theme])}>
            {/*<Suspense>*/}
                <RouterProvider router={router}/>
            {/*</Suspense>*/}
        </div>
    );
};
