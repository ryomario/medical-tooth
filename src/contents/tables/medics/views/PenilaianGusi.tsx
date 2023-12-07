import { PagePropTypes } from "../ShowPage";

export default function PenilaianGusiShow(props: PagePropTypes) {
    const {record,...rest} = props;
    if (!record) return null;
    const penilaianGusi = record['penilaianGusi'];
    return (
        <div {...rest}>
            <span className="f14"><b>6. Penilaian gusi / status periodontal (CPITN)</b></span>
            <br />
            <br />
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td colSpan={3}>Kartu status periodontal :</td>
                        </tr>
                        <tr>
                            <td>0</td><td>:</td><td>Sehat</td>
                        </tr>
                        <tr>
                            <td>1</td><td>:</td><td>Berdarah / tak sehat</td>
                        </tr>
                        <tr>
                            <td>2</td><td>:</td><td>Karang gigi</td>
                        </tr>
                        <tr>
                            <td>3</td><td>:</td><td>Saku gusi 4-5 mm</td>
                        </tr>
                        <tr>
                            <td>4</td><td>:</td><td>Saku gusi 6 mm atau lebih</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <div className="d-flex">
                    <div className="p-2 w-50">
                        <table className="print-page-table">
                            <thead>
                                <tr><th className="minWidth-fitContent">Gigi tetap</th><th>Status / Kondisi</th></tr>
                            </thead>
                            <tbody className="table-noBorder table-small-line">
                                <tr><td align="center">0</td><td>Sehat</td></tr>
                                <tr><td align="center">1</td><td>Gigi berlubang / karies</td></tr>
                                <tr><td align="center">2</td><td>Tumpatan dengan karies</td></tr>
                                <tr><td align="center">3</td><td>Tumpatan tanpa karies</td></tr>
                                <tr><td align="center">4</td><td>Gigi dicabut karena karies</td></tr>
                                <tr><td align="center">5</td><td>Gigi dicabut oleh sebab lain</td></tr>
                                <tr><td align="center">6</td><td>Sealant, Varnish</td></tr>
                                <tr><td align="center">7</td><td>Abutment, Mahkota Khusus</td></tr>
                                <tr><td align="center">8</td><td>Gigi tidak tumbuh</td></tr>
                                <tr><td align="center">9</td><td>Gigi tidak termasuk kriteria diatas</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="p-2 w-50">
                        <table className="print-page-table">
                            <thead>
                                <tr><th className="minWidth-fitContent">Gigi susu</th><th>Status / Kondisi</th></tr>
                            </thead>
                            <tbody className="table-noBorder table-small-line">
                                <tr><td align="center">A</td><td>Sehat</td></tr>
                                <tr><td align="center">B</td><td>Gigi berlubang / karies</td></tr>
                                <tr><td align="center">C</td><td>Tumpatan dengan karies</td></tr>
                                <tr><td align="center">D</td><td>Tumpatan tanpa karies</td></tr>
                                <tr><td align="center">E</td><td>Gigi dicabut karena karies</td></tr>
                                <tr><td align="center">F</td><td>Sealant, Varnish</td></tr>
                                <tr><td align="center">G</td><td>Abutment, Mahkota Khusus</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br />
            <table className="print-page-table text-center">
                <thead className="bg-info">
                    <tr>
                        <th>Sextan 1</th>
                        <th>Sextan 2</th>
                        <th>Sextan 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>&nbsp;{penilaianGusi['sextan1']}</td>
                        <td>&nbsp;{penilaianGusi['sextan2']}</td>
                        <td>&nbsp;{penilaianGusi['sextan3']}</td>
                    </tr>
                    <tr>
                        <td>&nbsp;{penilaianGusi['sextan4']}</td>
                        <td>&nbsp;{penilaianGusi['sextan5']}</td>
                        <td>&nbsp;{penilaianGusi['sextan6']}</td>
                    </tr>
                </tbody>
                <tfoot className="bg-info">
                    <tr>
                        <th>Sextan 4</th>
                        <th>Sextan 5</th>
                        <th>Sextan 6</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}