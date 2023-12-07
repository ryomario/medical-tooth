import { PagePropTypes } from "../ShowPage";

export default function OHISShow(props: PagePropTypes) {
    const {record,...rest} = props;
    if (!record) return null;
    const ohis = record['ohis'];
    return (
        <div {...rest}>
            <span className="f14"><b>4. Pemeriksaan Oral Hygiene (OHI-S)</b></span>
            <br />
            <div className="d-flex">
                <div className="mr-3">
                    <div>Debris Index</div>
                    <table className="print-page-table">
                        <tbody>
                            <tr>
                                <td width={60}>{ohis['debrisIndex']?.['index']?.['i_1']}</td>
                                <td width={60}>{ohis['debrisIndex']?.['index']?.['i_2']}</td>
                                <td width={60}>{ohis['debrisIndex']?.['index']?.['i_3']}</td>
                            </tr>
                            <tr>
                                <td>{ohis['debrisIndex']?.['index']?.['i_4']}</td>
                                <td>{ohis['debrisIndex']?.['index']?.['i_5']}</td>
                                <td>{ohis['debrisIndex']?.['index']?.['i_6']}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        DI-S : {ohis['debrisIndex']?.['value']}
                    </div>
                </div>
                <div>
                    <div>Calculus Index</div>
                    <table className="print-page-table">
                        <tbody>
                            <tr>
                                <td width={60}>{ohis['calculusIndex']?.['index']?.['i_1']}</td>
                                <td width={60}>{ohis['calculusIndex']?.['index']?.['i_2']}</td>
                                <td width={60}>{ohis['calculusIndex']?.['index']?.['i_3']}</td>
                            </tr>
                            <tr>
                                <td>{ohis['calculusIndex']?.['index']?.['i_4']}</td>
                                <td>{ohis['calculusIndex']?.['index']?.['i_5']}</td>
                                <td>{ohis['calculusIndex']?.['index']?.['i_6']}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        CI-S : {ohis['calculusIndex']?.['value']}
                    </div>
                </div>
                <div className="ml-3">
                    <table>
                        <tbody>
                            <tr>
                                <td>Ket (OHI-S) : </td>
                                <td>Baik</td>
                                <td> = </td>
                                <td className="pr-3">B</td>
                                <td>Debris Index</td>
                                <td> : </td>
                                <td>DI-S</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Sedang</td>
                                <td> = </td>
                                <td>S</td>
                                <td>Calculus Index</td>
                                <td> : </td>
                                <td>CI-S</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Buruk</td>
                                <td> = </td>
                                <td>K</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="d-flex">
                <div>OHI-S Index : DI-S + CI-S = {ohis['value']}</div>
                <div className="ml-3">Kriteria OHI-S : {['B','S','K'].map(value => (<span>{value} <i className={ohis['kriteria'] == value?'far fa-check-square':'far fa-square'}></i> / </span>))}</div>
            </div>
        </div>
    );
}