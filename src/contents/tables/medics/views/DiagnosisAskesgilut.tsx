import { AskesgilutInputs } from "@app/constants/medicFormInputs";
import { PagePropTypes } from "../ShowPage";

export default function DiagnosisAskesgilutShow(props: PagePropTypes) {
    const {record,...rest} = props;
    if (!record) return null;
    const askesgilut = record['askesgilut'];
    const diagnosis = askesgilut['diagnosis'] || [];
    return (
        <div {...rest}>
            <span className="f14"><b>1. Diagnosis, Perencanaan, Implementasi dan Evaluasi Askesgilut</b></span>
            <br />
            <br />
            <table className="print-page-table table-head-colored">
                <tbody>
                    <tr>
                        <th className="w-50 vAlign-center">{AskesgilutInputs.diagnosis[0]['label']}</th>
                        <th className="w-50 vAlign-center">{AskesgilutInputs.diagnosis[4]['label']}</th>
                    </tr>
                    <tr>
                        <td className="w-50">{diagnosis[AskesgilutInputs.diagnosis[0]['id'].split('.')[2]]}&nbsp;</td>
                        <td className="w-50">{diagnosis[AskesgilutInputs.diagnosis[4]['id'].split('.')[2]]}&nbsp;</td>
                    </tr>
                    <tr>
                        <th className="w-50 vAlign-center">{AskesgilutInputs.diagnosis[1]['label']}</th>
                        <th className="w-50 vAlign-center">{AskesgilutInputs.diagnosis[5]['label']}</th>
                    </tr>
                    <tr>
                        <td className="w-50">{diagnosis[AskesgilutInputs.diagnosis[1]['id'].split('.')[2]]}&nbsp;</td>
                        <td className="w-50">{diagnosis[AskesgilutInputs.diagnosis[5]['id'].split('.')[2]]}&nbsp;</td>
                    </tr>
                    <tr>
                        <th className="w-50 vAlign-center">{AskesgilutInputs.diagnosis[2]['label']}</th>
                        <th className="w-50 vAlign-center">{AskesgilutInputs.diagnosis[6]['label']}</th>
                    </tr>
                    <tr>
                        <td className="w-50">{diagnosis[AskesgilutInputs.diagnosis[2]['id'].split('.')[2]]}&nbsp;</td>
                        <td className="w-50">{diagnosis[AskesgilutInputs.diagnosis[6]['id'].split('.')[2]]}&nbsp;</td>
                    </tr>
                    <tr>
                        <th className="w-50 vAlign-center">{AskesgilutInputs.diagnosis[3]['label']}</th>
                        <th className="w-50 vAlign-center">{AskesgilutInputs.diagnosis[7]['label']}</th>
                    </tr>
                    <tr>
                        <td className="w-50">{diagnosis[AskesgilutInputs.diagnosis[3]['id'].split('.')[2]]}&nbsp;</td>
                        <td className="w-50">{diagnosis[AskesgilutInputs.diagnosis[7]['id'].split('.')[2]]}&nbsp;</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <table className="print-page-table">
                <thead className="bg-info">
                    <tr>
                        <th colSpan={2}>Diagnosis Askesgilut (Dental Hygiene Diagnosis)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="minWidth-fitContent">Kebutuhan Yang tidak terpenuhi</td>
                        <td>{diagnosis['kebutuhanTidakTerpenuhi']}</td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">Penyebab</td>
                        <td>{diagnosis['penyebabKebutuhanTidakTerpenuhi']}</td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">Tanda-tanda dan gejala</td>
                        <td>{diagnosis['tandaDanGejala']}</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <table className="print-page-table">
                <tbody>
                    <tr><th colSpan={2}>Tujuan Yang Berpusat Pada Klien (Client-Centered Goals)</th></tr>
                    <tr><td colSpan={2}>{diagnosis['tujuanYangBerpusatKlien']}&nbsp;</td></tr>
                    <tr><th colSpan={2}>Intervensi Askesgilut (Dental Hygiene Interventions)</th></tr>
                    <tr><td colSpan={2}>{diagnosis['intervensiAskesgilut']}&nbsp;</td></tr>
                    <tr><th colSpan={2}>Pernyataan Evaluativ (Evaluative Statement)</th></tr>
                    <tr><td colSpan={2}>{diagnosis['pernyataanEvaluatif']}&nbsp;</td></tr>
                    <tr className="table-noBorder">
                        <td className="minWidth-fitContent">Jadwal kunjungan berikutnya</td>
                        <td>
                            {new Date(askesgilut['kunjunganSelanjutnya']).toLocaleString('id-ID',{
                                weekday: 'long',
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}&nbsp;
                        </td>
                    </tr>
                    <tr className="table-noBorder">
                        <td className="minWidth-fitContent">Rekomendasi perawatan selanjutnya</td>
                        <td>{askesgilut['rekomendasiPerawatanSelanjutnya']}&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}