import { Loading, useReference } from "react-admin";
import { PagePropTypes } from "../ShowPage";

const HARI = ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"];
const BULAN = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
const JK = {'P':"Perempuan",'L':"Laki-laki"};

export default function DataIdentitas(props: PagePropTypes) {
    const {record,...rest} = props;
    if (!record) return null;
    const {isLoading:isLoading1, referenceRecord: dataMhs} = useReference({id: record.mahasiswaId, reference: 'mahasiswas'});
    const {isLoading:isLoading2, referenceRecord: dataPasien} = useReference({id: record.pasienId, reference: 'pasiens'});
    if (isLoading1 || isLoading2) return <Loading/>;

    const tglKunjungan = new Date(record?.['tgl-kunjungan']);
    const tglKunjunganStr = HARI[tglKunjungan.getDay()] + ', ' + tglKunjungan.getDate() + ' ' + BULAN[tglKunjungan.getMonth()] + ' ' + tglKunjungan.getFullYear();

    return (
        <div {...rest}>
            <table width="100%" border={0}>
                <tbody>
                    <tr>
                        <td colSpan={3}><span className="f14"><b>Data Mahasiswa</b></span></td>
                        <td colSpan={3} width="50%"></td>
                    </tr>
                    <tr>
                        <td>Nama</td>
                        <td>:</td>
                        <td>{dataMhs?.nama}</td>
                        <td>No. Id</td>
                        <td>:</td>
                        <td>{record?.id}</td>
                    </tr>
                    <tr>
                        <td>NIM</td>
                        <td>:</td>
                        <td>{dataMhs?.nim}</td>
                        <td>Tgl. Kunjungan</td>
                        <td>:</td>
                        <td>{tglKunjunganStr}</td>
                    </tr>
                    <tr><td colSpan={6} height="10px"></td></tr>
                    <tr>
                        <td colSpan={6}><span className="f14"><b>Data Pasien</b></span></td>
                    </tr>
                    <tr>
                        <td>Nama</td>
                        <td>:</td>
                        <td>{dataPasien?.nama}</td>
                        <td>Agama</td>
                        <td>:</td>
                        <td>{dataPasien?.agama}</td>
                    </tr>
                    <tr>
                        <td>Tgl. Lahir</td>
                        <td>:</td>
                        <td>{dataPasien?.['tgl-lahir']}</td>
                        <td>Alamat</td>
                        <td>:</td>
                        <td>{dataPasien?.alamat}</td>
                    </tr>
                    <tr>
                        <td>Jenis Kelamin</td>
                        <td>:</td>
                        <td>{//  @ts-ignore
                        JK[dataPasien?.['jk']]||''}</td>
                        <td>No. HP</td>
                        <td>:</td>
                        <td>{dataPasien?.hp}</td>
                    </tr>
                    <tr>
                        <td>Tinggi Badan (cm)</td>
                        <td>:</td>
                        <td>{dataPasien?.tBadan}</td>
                        <td>Berat Badan (kg)</td>
                        <td>:</td>
                        <td>{dataPasien?.bBadan}</td>
                    </tr>
                    <tr>
                        <td>Golongan darah</td>
                        <td>:</td>
                        <td>{dataPasien?.golDar}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}