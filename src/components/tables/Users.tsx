import { useWindowSizeState } from "@app/store/ui";
import { PfImage } from "@profabric/react-components";
import { useEffect, useState } from "react";
import { Datagrid, FunctionField, ImageField, List, SimpleList, TextField } from "react-admin";

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
                    <FunctionField label="avatar" render={(record: any) => (<PfImage src={record?.avatar} fallbackSrc="/img/default-profile.png" width={50} height={50}/>)}/>
                    <TextField source="fullName"/>
                    <TextField source="username"/>
                </Datagrid>
            )}
        </List>
    );
}