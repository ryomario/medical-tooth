import { useWindowSizeState } from "@app/store/ui";
import { PfImage } from "@profabric/react-components";
import { useEffect, useState } from "react";
import { Datagrid, DeleteButton, DeleteWithConfirmButton, EditButton, FunctionField, ImageField, List, SimpleList, TextField, TextInput } from "react-admin";
import { ScopedCssBaseline } from "@mui/material";

export default function UserList() {
    const [screenSize] = useWindowSizeState();
    function checkSmall () {
        return screenSize == 'xs';
    }
    const [isSmall, setSmall] = useState(checkSmall());
    useEffect(() => {
        setSmall(checkSmall());
        // console.log(checkSmall());
    }, [screenSize]);
    const usersFilters = [
        <TextInput label="Cari" source="q" alwaysOn/>
    ];
    const ROLES = ["student", "admin"];
    return (
        <ScopedCssBaseline enableColorScheme>
            <List filters={usersFilters}>
                {isSmall ? (
                    <SimpleList
                        primaryText={(record)=>record.fullName}
                        secondaryText={(record)=>record.username}
                        tertiaryText={(record) =>'role: ' + ROLES[record.role]}
                        leftAvatar={(record) => (<PfImage src={record?.avatar} fallbackSrc="/img/default-profile.png" width={50} height={50}/>)}
                    />
                ) : (
                    <Datagrid>
                        <TextField source="id"/>
                        <FunctionField label="Foto Profil" render={(record: any) => (<PfImage src={record?.avatar} fallbackSrc="/img/default-profile.png" width={50} height={50}/>)}/>
                        <TextField label="Nama Lengkap" source="fullName"/>
                        <TextField label="Username" source="username"/>
                        <FunctionField label="Role" render={(record: any) => <span className={"badge badge-"+(record.role === 1?"primary":"secondary")}>{ROLES[record.role]}</span>}/>
                        <>
                            <EditButton/>
                            <DeleteWithConfirmButton/>
                        </>
                    </Datagrid>
                )}
            </List>
        </ScopedCssBaseline>
    );
}