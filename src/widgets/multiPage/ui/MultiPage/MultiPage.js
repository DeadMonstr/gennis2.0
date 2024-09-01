import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import {getSelectedLocationsByIds} from "features/locations/model/selector/locationsSelector";
import {MultiPageList} from "../MultiPageList/MultiPageList";


import cls from "./MultiPage.module.sass"
import {Routes} from "react-router-dom";
import {Route, useNavigate} from "react-router";
import {onChangedPage,onChangedOldPage} from "../../model/slice/multiPageSlice";
import {getMultiChangePage, getMultiPageData,getMultiOldPage} from "../../model/selector/multiPageSelector";
import {fetchMultiPageDataThunk} from "../../model/thunk/multiPageThunk";
import {getBranch} from "features/branchSwitcher";
export const MultiPage = ({types, children,page}) => {


    const dispatch = useDispatch()

    const locations = useSelector(getSelectedLocationsByIds)
    const branch = useSelector(getBranch)
    const data = useSelector(getMultiPageData)
    const changedPage = useSelector(getMultiChangePage)
    const oldPage = useSelector(getMultiOldPage)
    const navigate = useNavigate()

    useEffect(() => {
        console.log(locations.length > 1 && !changedPage && page !== oldPage)
        if (locations.length > 1  && page !== oldPage) {
            navigate(".", { relative: "path" })
            const data = {
                types,
                locations
            }
            dispatch(onChangedPage(true))
            dispatch(onChangedOldPage(page))
            dispatch(fetchMultiPageDataThunk(data))
        } else if (locations.length < 2 && changedPage) {
            dispatch(onChangedPage(false))
        }
    }, [locations.length, types,page,oldPage])



    useEffect(() => {
        if (locations.length < 2 && branch?.id) {
            navigate(`./${branch.id}`, {relative: "path"})
        }
        // else if (!locations.length && !branch?.id) {
        //     navigate(`../home`, {relative: "path"})
        // }
    },[branch?.id,locations])



    if (locations.length < 2) {
        return children
    }


    return (
        <div className={cls.locations}>
            <Routes>
                <Route
                    index
                    element={
                        <MultiPageList data={data}/>
                    }
                />
                <Route path={"*"}   element={<ChildComponent children={children}/>}/>
            </Routes>

        </div>
    );
};


const ChildComponent = ({children}) => {

    return children
}

