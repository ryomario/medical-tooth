import { useWindowSizeState } from "@app/store/ui";
import { PfImage } from "@profabric/react-components";
import { useEffect, useState } from "react";
import { Create, Datagrid, Edit, FunctionField, ImageField, ImageInput, List, PasswordInput, ReferenceInput, SimpleForm, SimpleList, TextField, TextInput, required } from "react-admin";
import { ScopedCssBaseline } from "@mui/material";
import ContentHeader from "@app/components/pages/contents/Header";
import UserList from "@app/components/tables/Users";

export default function UsersTable() {
    const [screenSize] = useWindowSizeState();
    function checkSmall () {
        return screenSize == 'xs';
    }
    const [isSmall, setSmall] = useState(checkSmall());
    useEffect(() => {
        setSmall(checkSmall());
    }, [screenSize]);
    return (
        <div>
            <ContentHeader title="Tabel User"/>
            <section className="content">
                <div className="container-fluid">
                    <UserList/>
                </div>
            </section>
        </div>
    );
}

export const UserCreate = () => {
    const breadCrumb = [
        {
            title:"Home",
            url:"/"
        },{
            title:"Tabel User",
            url:"/users"
        },{
            title:"Tambah",
            active:true
        }
    ];
    return (
        <div>
            <ContentHeader title="Tambah User" breadcrumb={breadCrumb} />
            <section className="content">
                <div className="container-fluid">
                    <ScopedCssBaseline enableColorScheme>
                        <Create>
                            <SimpleForm>
                                <TextInput source="fullName" label="Nama Lengkap" autoFocus/>
                                <TextInput source="username"/>
                                <PasswordInput source="password"/>
                            </SimpleForm>
                        </Create>
                    </ScopedCssBaseline>
                </div>
            </section>
        </div>
    );
}

export const UserEdit = () => {
    const breadCrumb = [
        {
            title:"Home",
            url:"/"
        },{
            title:"Tabel User",
            url:"/users"
        },{
            title:"Edit",
            active:true
        }
    ];
    return (
        <div>
            <ContentHeader title="Edit User" breadcrumb={breadCrumb} />
            <section className="content">
                <div className="container-fluid">
                    <ScopedCssBaseline enableColorScheme>
                        <Edit>
                            <SimpleForm>
                                <TextInput disabled source="id" label="ID User"/>
                                <TextInput source="fullName" label="Nama Lengkap" autoFocus validate={required()}/>
                                <TextInput source="username" validate={required()}/>
                                <PasswordInput source="password"/>
                                {/* <ImageInput source="avatar">
                                    <ImageField source="src" title="title"/>
                                </ImageInput> */}
                            </SimpleForm>
                        </Edit>
                    </ScopedCssBaseline>
                </div>
            </section>
        </div>
    );
}