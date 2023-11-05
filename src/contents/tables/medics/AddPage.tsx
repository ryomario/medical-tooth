import ContentHeader from "@app/components/pages/contents/Header";
import useDocumentTitle from "@app/hooks/useDocumentTitle";
import { Box, ScopedCssBaseline } from "@mui/material";
import { Create, ReferenceField, ReferenceInput, TabbedForm } from "react-admin";
import MahasiswaForm from "./forms/MahasiswaForm";
import PasienForm from "./forms/PasienForm";

export default function AddMedicPage() {
    const [_, setTitle] = useDocumentTitle();
    setTitle('Tambah User');
    const breadCrumb = [
        {
            title:"Home",
            url:"/"
        },{
            title:"Tabel Data Medis",
            url:"/medics"
        },{
            title:"Tambah",
            active:true
        }
    ];
    return (
        <>
            <ContentHeader title="Tambah data medis" breadcrumb={breadCrumb}/>
            <section className="content">
                <div className="contianer-fluid">
                    <ScopedCssBaseline enableColorScheme>
                        <Create redirect="list">
                            <TabbedForm>
                                <TabbedForm.Tab label="Data Mahasiswa">
                                    <MahasiswaForm>
                                        <ReferenceInput source="mahasiswaId" reference="mahasiswas" isRequired fullWidth/>
                                    </MahasiswaForm>
                                </TabbedForm.Tab>
                                <TabbedForm.Tab label="Data Pasien">
                                    <PasienForm>
                                        <ReferenceInput source="pasienId" reference="pasiens" isRequired fullWidth/>
                                    </PasienForm>
                                </TabbedForm.Tab>
                            </TabbedForm>
                        </Create>
                    </ScopedCssBaseline>
                </div>
            </section>
        </>
    );
}