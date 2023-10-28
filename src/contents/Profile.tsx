import ContentHeader, { BreadCrumbItems } from "@app/components/pages/contents/Header";
import { ScopedCssBaseline, Stack } from "@mui/material";
import { PfButton, PfImage } from "@profabric/react-components";
import { Edit, Error, Form, FunctionField, ImageInput, Loading, PasswordInput, SaveButton, SimpleForm, TextInput, Toolbar, required, useAuthProvider, useGetIdentity, useGetOne, useNotify } from "react-admin";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledUserImage = styled(PfImage)`
    --pf-border: 3px solid #adb5bd;
    --pf-padding: 3px;
`;

export default function Profile() {
    const navigate = useNavigate();
    const {data: user, isLoading, error} = useGetIdentity();
    
    if (isLoading) {
        return (<Loading/>);
    }
    if (error) {
        return (<Error error={error} resetErrorBoundary={function (...args: unknown[]): void {} }/>);
    }
    if (!user) return null;


    return (
        <>
            <ContentHeader title="Profil Saya"/>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card card-primary card-outline">
                                <div className="card-body box-profile">
                                    <div className="text-center">
                                        <StyledUserImage
                                            width={100}
                                            height={100}
                                            rounded
                                            src={user.avatar}
                                            fallbackSrc="/img/default-profile.png"
                                            alt="User Profil"
                                        />
                                    </div>
                                    <h3 className="profile-username text-center">
                                        {user.fullName}
                                    </h3>
                                    <p className="text-muted text-center">{user.username}</p>
                                    <PfButton block onClick={() => {navigate('/profile/edit')}}>Edit</PfButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export const ProfileEdit = () => {
    const notify = useNotify();
    const navigate = useNavigate();
    const authProvider = useAuthProvider();
    const {data: user, isLoading, error, refetch} = useGetIdentity();
    
    if (isLoading) {
        return (<Loading/>);
    }
    if (error) {
        return (<Error error={error} resetErrorBoundary={function (...args: unknown[]): void {} }/>);
    }
    if (!user) return null;

    const breadcrumb: BreadCrumbItems = [
        {
            title: 'Home',
            url: '/'
        }, {
            title: 'Profile',
            url: '/profile'
        }, {
            title: 'Edit',
            active: true
        }
    ];
    const transformFile = (file: any) => {
        if (!(file instanceof File)) {
            return file;
        }

        const preview = URL.createObjectURL(file);
        const transformedFile = {
            rawFile: file,
            src: preview,
            title: file.name,
        };

        return transformedFile;
    };
    const imageFileFormater = (file: any) => {
        if (!file) return null;

        if (typeof file === 'string') return {src: file};

        return transformFile(file);
    };

    const onSuccess = (data: any) => {
        let { password, ...userToPersist } = data;
        // console.log(userToPersist);
        authProvider.setIdentity(userToPersist).then(() => {
            refetch();
        });
        
        notify('Profil tersimpan!');
        navigate('/profile');
    }

    return (
        <>
            <ContentHeader title="Edit Profil Saya" breadcrumb={breadcrumb}/>
            <section className="content">
                <div className="container-fluid">
                    <ScopedCssBaseline enableColorScheme>
                        <Edit resource="users" id={user.id} mutationMode="pessimistic" mutationOptions={{ onSuccess }}>
                            <SimpleForm toolbar={<Toolbar><SaveButton/></Toolbar>}>
                                <Stack>
                                    <TextInput hidden disabled source="id" label="ID User"/>
                                    <TextInput source="fullName" label="Nama Lengkap" validate={required()}/>
                                    <TextInput source="username" validate={required()}/>
                                    <PasswordInput source="password"/>
                                    <ImageInput source="avatar" maxSize={2000000} format={imageFileFormater} parse={imageFileFormater}>
                                        <FunctionField render={(avatar: any) => {
                                            // console.log(avatar);
                                            return (<PfImage src={avatar.src} fallbackSrc="/img/default-profile.png" width={200} height={200}/>);
                                        }}/>
                                    </ImageInput>
                                </Stack>
                            </SimpleForm>
                        </Edit>
                    </ScopedCssBaseline>
                </div>
            </section>
        </>
    );
}