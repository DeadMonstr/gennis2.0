import {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router";

// import {getUserAuthData} from "pages/login";
import {fetchUserData} from "entities/user";

import {getUserRole} from "pages/login";


export const RequireAuth = ({roles, children}) => {
    // const auth = useSelector(getUserAuthData)
    const refresh_token = sessionStorage.getItem("refresh_token")
    const userRoles = useSelector(getUserRole)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserData(refresh_token))
    }, [])


    // const hasRequiredRoles = useMemo(() => {
    //     if (!roles) {
    //         return true;
    //     }
    //
    //     console.log(roles)
    //
    //     return roles.some((requiredRole) => {
    //         console.log(requiredRole, "roles")
    //         return userRoles?.includes(requiredRole);
    //     });
    // }, [roles, userRoles]);

    console.log(roles.includes(userRoles))
    console.log(roles)
    console.log(userRoles)

    if (!roles.includes(userRoles)){
        return (
            <Navigate
                to={"/login"}
            />
        );
    }


    return children
};