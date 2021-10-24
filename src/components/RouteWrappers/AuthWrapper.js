import React, {useEffect, useState} from "react";
import Router from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../../state/user/selectors";
import {getUser, loginUser} from "../../state/user/reducer";

export const AuthWrapper = (WrappedComponent) => {
    return function ProtectedWrapper(props) {
        const user = useSelector(userSelector);
        const dispatch = useDispatch();
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const rememberToken = localStorage.getItem("rememberToken");
            const token = sessionStorage.getItem("token");

            if (user.data) {
                setLoading(false);
            } else if (rememberToken && !user.data) {
                dispatch(loginUser({rememberToken}));
            } else if (token && !user.data) {
                dispatch(getUser());
            } else if (window.location.pathname !== "/login") {
                Router.push("/login").then();
            } else {
                setLoading(false);
            }

        }, [user]);

        return (
            (loading && 'Loading...') || <WrappedComponent {...props} />
        );
    };
};
