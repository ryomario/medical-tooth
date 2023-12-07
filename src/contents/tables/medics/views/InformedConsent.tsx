import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "@mui/material";
import Header from "./prints/Header";

const titikTitik = "....................";

type DataType = {
    namaPasien: string,
    umurPasien: number|string,
    alamatPasien: string,

    namaWali: string,
    umurWali: number|string,
    alamatWali: string,

    tanggalAtas?: string,
    tanggalBawah?: string,
}

export default function InformedConsent() {
    const printableCompRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => printableCompRef.current!,
    });
    const [data, setData] = useState<DataType>({
        namaPasien: '',
        umurPasien: '',
        alamatPasien: '',
        namaWali: '',
        umurWali: '',
        alamatWali: '',
    });
    const handleChange = (event: any) => {
        event.preventDefault();
        const name: string = event.target.name;
        const value = event.target.value;
        const newData: any = {};
        newData[name] = value;
        setData(prevData => ({...prevData,...newData}));
    }
    
    return (
        <>
            <center><Button onClick={handlePrint} color="info" variant="contained">Print</Button></center>
            <br/>
            <div className="print-page page-potrait" ref={printableCompRef}>
                <Header/>
                <span className="f14"><b>Informed Consent</b></span>
                <br/>
                <br/>
                <table width="100%" border={0}>
                    <tbody>
                        <tr>
                            <td colSpan={3} width="50%"><span><b>Saya Pasien</b></span></td>
                            <td colSpan={3} width="50%"><span><b>Orang tua / Wali pasien</b></span></td>
                        </tr>
                        <tr>
                            <td width="15%">Nama</td><td>:</td><td><span className="printable hide inline">{data.namaPasien}</span><input className="not-printable" type="text" name="namaPasien" value={data.namaPasien} onChange={handleChange}/></td>
                            <td width="15%">Nama</td><td>:</td><td><span className="printable hide inline">{data.namaWali}</span><input className="not-printable" type="text" name="namaWali" value={data.namaWali} onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <td>Umur</td><td>:</td><td><span className="printable hide inline">{data.umurPasien}</span><input className="not-printable" type="number" min={0} name="umurPasien" value={data.umurPasien} onChange={handleChange}/></td>
                            <td>Umur</td><td>:</td><td><span className="printable hide inline">{data.umurWali}</span><input className="not-printable" type="number" min={0} name="umurWali" value={data.umurWali} onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <td>Alamat</td><td>:</td><td><span className="printable hide">{data.alamatPasien}</span><input className="not-printable" type="text" name="alamatPasien" value={data.alamatPasien} onChange={handleChange}/></td>
                            <td>Alamat</td><td>:</td><td><span className="printable hide">{data.alamatWali}</span><input className="not-printable" type="text" name="alamatWali" value={data.alamatWali} onChange={handleChange}/></td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <br/>
                <p>Menyatakan telah mendapat penerangan mengenai pemeriksaan dan perawatan yang akan dilaksanakan terhadap saya / anak saya, dengan akibat sampingan yang mungkin terjadi, jumlah kunjungan yang harus dilaksanakan serta biaya yang harus dibayar untuk pemeriksaan dan perawatan dimaksud.</p>
                <p>Selanjutnya saya memberikan persetujuan kepada perawat gigi yang di tunjuk untuk melaksanakan tindakan asuhan keperawatan gigi kepada saya/anak saya sesuai dengan yang telah dijelaskan kepada saya sebelumnya.</p>
                <p>Persetujuan ini diberikan dengan penuh kesadaran akan kemungkinan terjadinya akibat sampingan dari tindakan tersebut diatas.</p>
                <p>Demikian surat pernyataan ini dibuat dengan sesungguhnya dan penuh rasa tanggung jawab</p>
                <br />
                <br />
                <table align="center" width="90%">
                    <tbody>
                        <tr>
                            <td align="center"><span>Makassar, </span><span className="printable inline hide">{data.tanggalAtas||titikTitik}</span><input className="not-printable" type="text" name="tanggalAtas" value={data.tanggalAtas} onChange={handleChange}/></td>
                            <td rowSpan={3}></td>
                            <td></td>
                            <td rowSpan={3}></td>
                            <td></td>
                        </tr>
                        <tr style={{height: '100px'}}>
                            <td align="center">
                                Yang menyatakan <br />Pasien
                            </td>
                            <td align="center">Orang tua / Wali Pasien</td>
                            <td align="center">Saksi</td>
                        </tr>
                        <tr>
                            <td align="center">
                                {data.namaPasien||"(........................)"}
                            </td>
                            <td align="center">
                                {data.namaWali||"(........................)"}
                            </td>
                            <td align="center">
                                (........................)
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <br />
                <span><b>Pernyataan pelaksana perawatan gigi :</b></span>
                <br />
                <br />
                <p>Saya menyatakan bahwa saya telah menjelaskan sifat dan tujuan serta kemungkinan akibat yang akan timbul dari tindakan perawatan gigi ini kepada pasien sendiri/orang tua/wali/istri/suami/keluarga lainnya terkecuali pasien tak sadar/gangguan mental.</p>
                <br />
                <br />
                <div><span>Makassar, </span><span className="printable inline hide">{data.tanggalBawah||titikTitik}</span><input className="not-printable" type="text" name="tanggalBawah" value={data.tanggalBawah} onChange={handleChange}/></div>
                <div>Yang menyatakan</div>
                <div>Operator (Terapis Gigi dan Mulut / Mahasiswa)</div>
                <div style={{height:'80px'}}></div>
                <div>(...............................)</div>
            </div>
        </>
    );
}