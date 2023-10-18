import { PfButton } from "@profabric/react-components";
import { Form, TextInput, required, useLogin, useNotify, useSafeSetState } from "react-admin";

export function LoginForm(props: LoginFormProps) {
    const { redirectTo, className } = props;
    const [loading, setLoading] = useSafeSetState(false);
    const login = useLogin();
    const notify = useNotify();

    const submit = (values: FormData) => {
        setLoading(true);
        login(values, redirectTo)
            .then(() => {
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                notify(
                    typeof error === 'string'
                        ? error
                        : typeof error === 'undefined' || !error.message
                        ? 'ra.auth.sign_in_error'
                        : error.message,
                    {
                        type: 'error',
                        messageArgs: {
                            _:
                                typeof error === 'string'
                                    ? error
                                    : error && error.message
                                    ? error.message
                                    : undefined,
                        },
                    }
                );
            });
    }

    return (
        <Form
            onSubmit={submit}
            mode="onChange"
            noValidate
        >
            <div className="mb-3">
                <TextInput autoFocus source="username" label="Username" validate={required()} fullWidth/>
                <TextInput source="password" label="Password" type="password" validate={required()} fullWidth/>
            </div>
            
            <PfButton
                block
                type="submit"
                loading={loading}
            >
                Masuk
            </PfButton>
        </Form>
    );
}

interface LoginFormProps {
    redirectTo?: string;
    className?: string;
}