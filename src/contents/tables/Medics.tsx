import ContentHeader from "@app/components/pages/contents/Header";
import useDocumentTitle from "@app/hooks/useDocumentTitle";
import { useWindowSizeState } from "@app/store/ui";
import { ScopedCssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import { Datagrid, DateField, FunctionField, List, ReferenceField, SimpleList, TextField } from "react-admin";

export default function MedicsTable() {
    const [_, setTitle] = useDocumentTitle();
    setTitle('Data Laporan Medis');
    const [screenSize] = useWindowSizeState();
    function checkSmall() {
        return screenSize == 'xs';
    }
    const [isSmall, setSmall] = useState(checkSmall());
    useEffect(() => {
        setSmall(checkSmall());
    }, [screenSize]);


    return (
        <>
            <ContentHeader title="Tabel Laporan Medis"/>
            <section className="content">
                <div className="container-fluid">
                    <ScopedCssBaseline enableColorScheme>
                        <List>
                            {isSmall ? (
                                <SimpleList
                                    primaryText={
                                        <>
                                            {"#"}
                                            <TextField source="no"/>
                                            {" "}
                                            <ReferenceField source="pasienId" reference="pasiens"><FunctionField render={(record: any) => 'Pasien: ' + record.nama}/></ReferenceField>
                                        </>
                                    }
                                    secondaryText={<ReferenceField source="mahasiswaId" reference="mahasiswas"><FunctionField render={(record: any) => 'Mhs: ' + record.nama}/></ReferenceField>}
                                    tertiaryText={record => new Date(record.tglKunjungan).toLocaleDateString()}
                                />
                            ) : (
                                <Datagrid>
                                    <TextField source="id"/>
                                    <ReferenceField source="mahasiswaId" reference="mahasiswas">
                                        <>
                                            <div>
                                                <TextField source="nama"/>
                                            </div>
                                            <div className="text-muted">
                                                <TextField source="nim"/>
                                            </div>
                                        </>
                                    </ReferenceField>
                                    <TextField source="no" label="No. Pasien"/>
                                    <ReferenceField source="pasienId" reference="pasiens">
                                        <>
                                            <div>
                                                <TextField source="nama"/>
                                            </div>
                                            <div className="text-muted">
                                                <TextField source="jk"/>
                                            </div>
                                        </>
                                    </ReferenceField>
                                </Datagrid>
                            )}
                        </List>
                    </ScopedCssBaseline>
                </div>
            </section>
        </>
    );
}