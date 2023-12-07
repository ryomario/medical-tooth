import { PagePropTypes } from "../ShowPage";

export default function VitalSignShow(props: PagePropTypes) {
    const {record,...rest} = props;
    if (!record) return null;
    const vitalSign = record['vitalSign'] as Array<string>;
    return (
        <div {...rest}>
            <span className="f14"><b>2. Tanda-tanda Vital (Vital Sign)</b></span>
            <br/>
            <div className="d-flex flex-wrap">
                {vitalSign.map((value:any,idx:any)=>(
                    <table key={idx} className="flex-fill mr-1">
                        <tr>
                            <td className="minWidth-fitContent pr-3">Tekanan Darah</td>
                            <td>:</td>
                            <td>
                                {value['tekananDarah']?.['tekanan']?.['atas']}
                                /
                                {value['tekananDarah']?.['tekanan']?.['bawah']}
                            </td>
                        </tr>
                        <tr>
                            <td className="minWidth-fitContent pr-3">Tekanan Darah</td>
                            <td>:</td>
                            <td>
                                {value['tekananDarahBPM']}
                                &nbsp;BPM
                            </td>
                        </tr>
                        <tr>
                            <td className="minWidth-fitContent pr-3">Tekanan Darah</td>
                            <td>:</td>
                            <td>
                                {value['tekananDarahRPM']}
                                &nbsp;RPM
                            </td>
                        </tr>
                        <tr>
                            <td className="minWidth-fitContent pr-3">Tgl. Pemeriksaan</td>
                            <td>:</td>
                            <td>
                                {new Date(value['tglPeriksa']).toLocaleString('id-ID',{
                                    weekday: 'long',
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })}
                            </td>
                        </tr>
                    </table>
                ))}
            </div>
        </div>
    );
}