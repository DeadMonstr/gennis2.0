import React, {Suspense} from 'react';
import {createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import classNames from "classnames";
import {RequireAuth} from "./RequireAuth";
import {routersConfigList} from "app/routers/config/routersConfigList";
import {Layout} from "app/layout";
import {Login} from "pages/loginPage";
import {StudentProfilePage} from "pages/profilePage";
import {CenterHomePage, SchoolHomePage} from "pages/homePage";
import {Register} from "pages/registerPage/ui/register";
import {NotFoundPage} from "pages/notfoundPage/ui/notfound";

import {ClassMolassesPage} from "pages/School";

import {useTheme} from "shared/lib/hooks/useTheme";

import "app/styles/index.sass"

import {FlowProfileNavigators} from "entities/flowsProfile";
import {FlowListPage} from "pages/FlowListPage";
import {ClassAddColorPage, ClassPage} from "pages/classPage";

import {CalendarPage} from "pages/calendarPage";
import RequireBranch from "app/routers/ui/RequireBranch";
import RequireHeader from "app/routers/ui/RequireHeader";
import {routersConfigProfile} from "app/routers/config/routerConfigProfiles";
import {
    SchoolHomeAboutUs,
    SchoolHomeCertificats,
    SchoolHomeContact,
    SchoolHomeHeader
} from "../../../entities/schoolHome";
import {
    SchoolGalleryModal,
    SchoolHomeCertificatsModal,
    SchoolHomeCurriculamModal,
    SchoolHomeLatestNewModal, SchoolHomeStudentProfileModal, SchoolVisionMission
} from "../../../features/schoolHome";
import LayoutWebsite from "../../layoutWebSite/layoutWebsite";


export const AppRouter = () => {

    const {theme} = useTheme()

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>

                <Route
                    path={"/"}
                    element={<SchoolHomePage/>}
                />


                <Route element={<LayoutWebsite/>}>
                    <Route element={<SchoolVisionMission/>} path={"aboutUs"}/>
                    <Route element={<SchoolHomeLatestNewModal/>} path={"news"}/>
                    <Route element={<SchoolHomeCurriculamModal/>} path={"curricular"}/>
                    <Route element={<SchoolGalleryModal/>} path={"gallery"}/>
                    <Route element={<SchoolHomeStudentProfileModal/>} path={"studentLife"}/>
                </Route>





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

                        <Route element={<RequireHeader header={false}/>}>
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
