import { useWindowSizeState } from "@app/store/ui";
import { useEffect, useState } from "react";
import { Datagrid, ImageField, List, SimpleList, TextField } from "react-admin";

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
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record)=>record.fullName}
                    secondaryText={(record)=>record.username}
                />
            ) : (
                <Datagrid>
                    <TextField source="id"/>
                    <ImageField source="avatar"/>
                    <TextField source="fullName"/>
                    <TextField source="username"/>
                </Datagrid>
            )}
        </List>
    );
}