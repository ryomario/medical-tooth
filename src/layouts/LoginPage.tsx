import { HtmlHTMLAttributes, ReactNode, useEffect } from "react";
import { useCheckAuth } from "react-admin";
import { useNavigate } from "react-router-dom";
import { setWindowClass } from "@app/utils/helpers";
import { PfImage } from "@profabric/react-components";
import { LoginForm } from "@app/components/forms/LoginForm";

export function LoginPage(props: LoginPageProps) {
    const {children = defaultLoginForm, ...rest} = props;
    const checkAuth = useCheckAuth();
    const navigate = useNavigate();
    useEffect(() => {
        checkAuth({}, false)
            .then(() => {
                // authenticated
                navigate('/');
            })
            .catch(() => {
                // not authenticated
            });
    }, [checkAuth, navigate]);

    setWindowClass('hold-transition login-page');
    
    return (
        <div {...rest} className="login-box">
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                    <PfImage src="/img/logo-dark.png"/>
                </div>
                <div className="card-body">
                    <p className="login-box-msg">Masuk untuk memulai sesi</p>
                    {children}
                </div>
            </div>
        </div>
    );
}
const defaultLoginForm = <LoginForm/>;
interface LoginPageProps extends HtmlHTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    className?: string;
}