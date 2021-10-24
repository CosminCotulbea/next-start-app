import React, {useEffect, useState} from "react";
import Router from "next/router";

export const GuestWrapper = (WrappedComponent) => {
    return function ProtectedWrapper(props) {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const rememberToken = localStorage.getItem("rememberToken");
            const token = sessionStorage.getItem("token");

            if(!!(rememberToken || token)) {
                Router.push('/').then();
            } else {
                setLoading(false);
            }
        }, []);

        return (
            (loading && 'Loading...') || <WrappedComponent {...props} />
        );
    };
};
