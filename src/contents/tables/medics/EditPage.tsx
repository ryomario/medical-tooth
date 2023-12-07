import ContentHeader from "@app/components/pages/contents/Header";
import useDocumentTitle from "@app/hooks/useDocumentTitle";
import { Box, ScopedCssBaseline, Typography } from "@mui/material";
import { Create, DateInput, Edit, FileField, FileInput, ReferenceField, ReferenceInput, TabbedForm } from "react-admin";
import MahasiswaForm from "./forms/MahasiswaForm";
import PasienForm from "./forms/PasienForm";
import KartuStatusForm from "./forms/KartuStatusForm";
import Askesgilut from "./forms/Askesgilut";

export default function EditMedicPage() {
    const [_, setTitle] = useDocumentTitle();
    setTitle('Ubah Data Medis');
    const breadCrumb = [
        {
            title:"Home",
            url:"/"
        },{
            title:"Tabel Data Medis",
            url:"/medics"
        },{
            title:"Ubah",
            active:true
        }
    ];
    return (
        <>
            <ContentHeader title="Ubah data medis" breadcrumb={breadCrumb}/>
            <section className="content">
                <div className="contianer-fluid">
                    <ScopedCssBaseline enableColorScheme>
                        <Edit redirect="show">
                            <TabbedForm>
                                <TabbedForm.Tab label="Data Pasien">
                                    <MahasiswaForm>
                                        <ReferenceInput source="mahasiswaId" reference="mahasiswas" isRequired fullWidth/>
                                    </MahasiswaForm>
                                    <div className="mb-3"></div>
                                    <PasienForm>
                                        <ReferenceInput source="pasienId" reference="pasiens" isRequired fullWidth/>
                                    </PasienForm>
                                    <DateInput source="tgl-kunjungan" label="Tanggal kunjungan" defaultValue={new Date().toLocaleDateString()}/>
                                </TabbedForm.Tab>
                                <TabbedForm.Tab label="Kartu Status">
                                    <KartuStatusForm/>
                                </TabbedForm.Tab>
                                <TabbedForm.Tab label="Diagnosis Askesgilut">
                                    <Askesgilut/>
                                </TabbedForm.Tab>
                                <TabbedForm.Tab label="Informed Consent">
                                    <Typography>Save terlebih dahulu untuk melihat format dokumen <b>Informed Consent</b></Typography>
                                    <br />
                                    <FileInput source="informedConsentFile" label="Upload dokumen" helperText="Upload dokumen yang sudah ditandatangani oleh pihak terkait">
                                        <FileField source="src" title="title"/>
                                    </FileInput>
                                </TabbedForm.Tab>
                            </TabbedForm>
                        </Edit>
                    </ScopedCssBaseline>
                </div>
            </section>
        </>
    );
}