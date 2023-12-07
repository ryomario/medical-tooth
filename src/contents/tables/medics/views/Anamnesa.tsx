import { MedicalHistoryInputs } from "@app/constants/medicFormInputs";
import { PagePropTypes } from "../ShowPage";
import DentalHistoryShow from "./AnamnesaDentalHistory";
import Header from "./prints/Header";

export default function AnamnesaShow(props: PagePropTypes) {
    const {record,...rest} = props;
    if (!record) return null;
    const medicalHistory = record['medicalHistory'] as Array<string>;
    return (
        <div {...rest}>
            <span className="f14"><b>1. Anamnesa</b></span><br/>
            <table className="print-page-table">
                <thead>
                    <tr>
                        <th className="minWidth-fitContent">a.</th>
                        <th>Medical History</th>
                        <th className="minWidth-fitContent">Jawaban</th>
                    </tr>
                </thead>
                <tbody>
                    {MedicalHistoryInputs.values.map((value,idx) => (
                        <tr key={idx}>
                            <td colSpan={2}>{value}</td>
                            <td className="text-center vAlign-center"><i className={"fas fa-"+ (medicalHistory.includes(value)?'check':'minus')}></i></td>
                        </tr>
                    ))}
                    <tr><th colSpan={3}>Lain-lain</th></tr>
                    {medicalHistory.filter(value => !MedicalHistoryInputs.contains(value)).map((value,idx) => (
                        <tr key={idx}>
                            <td style={{border: 0}}></td>
                            <td style={{border: 0}}>{value}</td>
                            <td className="text-center vAlign-center"><i className="fas fa-check"></i></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <table className="print-page-table">
                <thead>
                    <tr>
                        <th className="minWidth-fitContent">b.</th>
                        <th>Social History</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2}>{record['socialHistory']}</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <div className="page-break"></div>
            <DentalHistoryShow record={record} />
            <div className="page-break"></div>
            <br />
            <table className="print-page-table">
                <thead>
                    <tr>
                        <th className="minWidth-fitContent">d.</th>
                        <th colSpan={4}>Pharmacological History</th>
                    </tr>
                </thead>
                <tbody className="table-noBorder">
                    <tr>
                        <td className="minWidth-fitContent">1.</td>
                        <td colSpan={4}>Apakah Anda sedang/pernah mengkonsumsi obat-obatan (termasuk obat herbal/alternatif)?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4}>
                            <div className="d-flex flex-wrap">
                                <div className="flex-fill mr-3">
                                    {record['pharmacologicalHistory']?.['pernahKonsumsiObat']?.['pernah']}
                                </div>
                                <div className="flex-fill mr-3">
                                    Jenis/nama obat : &nbsp;
                                    {record['pharmacologicalHistory']?.['pernahKonsumsiObat']?.['jenisNamaObat']}
                                </div>
                                <div className="flex-fill">
                                    Untuk : &nbsp;
                                    {record['pharmacologicalHistory']?.['pernahKonsumsiObat']?.['untukApa']}
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">2.</td>
                        <td colSpan={4}>Apa efek samping dari obat tersebut?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4}>
                            {record['pharmacologicalHistory']?.['efekSampingObat']}
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">2.</td>
                        <td colSpan={4}>Apa pengaruh positif dari obat tersebut?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4}>
                            {record['pharmacologicalHistory']?.['pengaruhPositifObat']}
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">3.</td>
                        <td colSpan={4}>Apakah ada masalah dengan dosis obat tersebut?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={1}>
                            {record['pharmacologicalHistory']?.['masalahDosisObat']?.['apaAda']}
                        </td>
                        <td colSpan={3}>
                            {record['pharmacologicalHistory']?.['masalahDosisObat']?.['penjelasan']?('Penjelasan : ' + record['pharmacologicalHistory']?.['masalahDosisObat']?.['penjelasan']):''}
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">4.</td>
                        <td colSpan={4}>Apakah Anda mengonsumsi obat tersebut secara teratur?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4}>
                            {record['pharmacologicalHistory']?.['apaKonsumsiObatTeratur']}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}