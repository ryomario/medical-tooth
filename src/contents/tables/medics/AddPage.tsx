import ContentHeader from "@app/components/pages/contents/Header";
import useDocumentTitle from "@app/hooks/useDocumentTitle";
import { Box, ScopedCssBaseline } from "@mui/material";
import { Create, ReferenceField, ReferenceInput, TabbedForm } from "react-admin";
import MahasiswaForm from "./forms/MahasiswaForm";
import PasienForm from "./forms/PasienForm";
import KartuStatusForm from "./forms/KartuStatusForm";
import Askesgilut from "./forms/Askesgilut";
import InformedConsent from "./forms/InformedConsent";

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
                                <TabbedForm.Tab label="Data Pasien">
                                    <MahasiswaForm>
                                        <ReferenceInput source="mahasiswaId" reference="mahasiswas" isRequired fullWidth/>
                                    </MahasiswaForm>
                                    <div className="mb-3"></div>
                                    <PasienForm>
                                        <ReferenceInput source="pasienId" reference="pasiens" isRequired fullWidth/>
                                    </PasienForm>
                                </TabbedForm.Tab>
                                <TabbedForm.Tab label="Kartu Status">
                                    <KartuStatusForm/>
                                </TabbedForm.Tab>
                                <TabbedForm.Tab label="Diagnosis Askesgilut">
                                    <Askesgilut/>
                                </TabbedForm.Tab>
                                <TabbedForm.Tab label="Informed Consent">
                                    <InformedConsent/>
                                </TabbedForm.Tab>
                            </TabbedForm>
                        </Create>
                    </ScopedCssBaseline>
                </div>
            </section>
        </>
    );
}