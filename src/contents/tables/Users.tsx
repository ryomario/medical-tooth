import { useWindowSizeState } from "@app/store/ui";
import { PfImage } from "@profabric/react-components";
import { useEffect, useState } from "react";
import { Datagrid, FunctionField, ImageField, List, SimpleList, TextField } from "react-admin";
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
            <ContentHeader title="Tabel User" breadcrumb={[{title:"Home",url:"/"},{title:"Semua User",active:true}]}/>
            <section className="content">
                <div className="container-fluid">
                    <UserList/>
                </div>
            </section>
        </div>
    );
}