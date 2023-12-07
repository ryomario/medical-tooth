import { Button } from "@mui/material";
import DataIdentitas from "./DataIdentitas";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import AnamnesaShow from "./Anamnesa";
import { Loading, useRecordContext } from "react-admin";
import Header from "./prints/Header";
import VitalSignShow from "./VitalSign";
import ExtraIntraOralShow from "./ExtraIntraOral";
import OHISShow from "./OHIS";
import PlaqueControlShow from "./PlaqueControl";
import PenilaianGusiShow from "./PenilaianGusi";
import DiagnosisAskesgilutShow from "./DiagnosisAskesgilut";

export default function Summary() {
    const record = useRecordContext();
    if (!record) return <Loading/>;
    const printableCompRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => printableCompRef.current!,
    });
    return (
        <div>
            <center><Button onClick={handlePrint} color="info" variant="contained">Print</Button></center>
            <br/>
            <div ref={printableCompRef}>
                <div className="print-page page-potrait">
                    <Header/>
                    <DataIdentitas record={record}/>
                    <br />
                    <div className="f14"><b>KARTU STATUS</b></div>
                    <br />
                    <AnamnesaShow record={record}/>
                    <br />
                    <VitalSignShow record={record}/>
                    <br />
                    <ExtraIntraOralShow record={record}/>
                    <br />
                    <OHISShow record={record}/>
                    <br />
                    <PlaqueControlShow record={record} className="avoid-page-break"/>
                    <br />
                    <PenilaianGusiShow record={record}/>
                    <br />
                    <div className="f14 page-break-before"><b>DIAGNOSIS ASKESGILUT</b></div>
                    <br />
                    <DiagnosisAskesgilutShow record={record}/>
                </div>
            </div>
        </div>
    );
}