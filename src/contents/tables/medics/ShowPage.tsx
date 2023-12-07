import ContentHeader from "@app/components/pages/contents/Header";
import useDocumentTitle from "@app/hooks/useDocumentTitle";
import { ScopedCssBaseline } from "@mui/material";
import { Show, TabbedShowLayout } from "react-admin";
import Summary from "./views/Summary";
import InformedConsent from "./views/InformedConsent";
import React from "react";

export default function ShowMedicPage() {
    const [_, setTitle] = useDocumentTitle();
    setTitle('Lihat Data Medis');
    const breadCrumb = [
        {
            title:"Home",
            url:"/"
        },{
            title:"Tabel Data Medis",
            url:"/medics"
        },{
            title:"Lihat",
            active:true
        }
    ];
    return (
        <>
            <ContentHeader title="Lihat Data Medis" breadcrumb={breadCrumb}/>
            <section className="content">
                <div className="contianer-fluid">
                    <ScopedCssBaseline enableColorScheme>
                        <Show>
                            <TabbedShowLayout>
                                <TabbedShowLayout.Tab label="Rangkuman">
                                    <Summary/>
                                </TabbedShowLayout.Tab>
                                <TabbedShowLayout.Tab label="Informed Consent">
                                    <InformedConsent/>
                                </TabbedShowLayout.Tab>
                            </TabbedShowLayout>
                        </Show>
                    </ScopedCssBaseline>
                </div>
            </section>
        </>
    );
}

export type PagePropTypes = React.HTMLAttributes<HTMLDivElement> & {
    record: any
};