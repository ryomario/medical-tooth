import { DentalHistoryInputs } from "@app/constants/medicFormInputs";
import { PagePropTypes } from "../ShowPage";

export default function DentalHistoryShow(props: PagePropTypes) {
    const {record, ...rest} = props;
    if (!record) return null;

    const dentalHistory = record['dentalHistory'];
    const dentalHistoryBagian2 = record['dentalHistory']['bag2'];
    const dentalHistoryBagian3 = record['dentalHistory']['bag3'];
    const dentalHistoryBagian4 = record['dentalHistory']['bag4'];

    return (
        <div {...rest}>
            <table className="print-page-table">
                <thead>
                    <tr>
                        <th className="minWidth-fitContent">c.</th>
                        <th colSpan={4}>Dental History</th>
                    </tr>
                    <tr>
                        <th colSpan={5}><b>Bagian I : Pengalaman Kesehatan Gigi dan Gejala-gejalanya</b></th>
                    </tr>
                </thead>
                <tbody className="table-noBorder">
                    <tr>
                        <td className="minWidth-fitContent">1.</td>
                        <td colSpan={4}>Apa alasan utama kunjungan anda ke klinik gigi?</td>
                    </tr>
                    <tr><td></td><td colSpan={4}>Jawaban : {dentalHistory['alasanKunjunganKlinikGigi']}</td></tr>
                    <tr>
                        <td className="minWidth-fitContent">2.</td>
                        <td colSpan={4}>Apakah yang ingin diketahui dari dalam rongga mulut anda saat ini?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4} className="d-flex flex-wrap">
                            {DentalHistoryInputs.yangInginDiketahuiDalamMulut.map((value,idx) => (
                                <div key={idx} className="d-flex align-items-baseline flex-fill mr-3">
                                    <i className={dentalHistory['yangInginDiketahuiDalamMulut'].includes(value)?'far fa-check-square':'far fa-square'}></i> 
                                    <div className="ml-1">{value}</div>
                                </div>
                            ))}
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">3.</td>
                        <td colSpan={4}>Pernahkah dilakukan rontgen foto (X-ray) gigi/mulut dalam 2 tahun terakhir?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4}>
                            {dentalHistory['pernahRontgenMulutDuaTahunTerakhir']}
                            {dentalHistory['tipeRontgenMulut']?', Tipe : '+dentalHistory['tipeRontgenMulut']:''}
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">4.</td>
                        <td colSpan={4}>Pernahkan Anda mengalami komplikasi atau pengalaman negativ yang terkait dengan perawatan gigi sebelumnya?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4}>
                            {dentalHistory['pernahMengalamiMasalahGigi']}
                            {dentalHistory['pengalamanMasalahGigi']?', Jelaskan : '+dentalHistory['pengalamanMasalahGigi']:''}
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">5.</td>
                        <td colSpan={4}>Bagaimana pendapat Anda tentang kunjungan ke klinik gigi sebelumnya?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4} className="d-flex flex-wrap">
                            {DentalHistoryInputs.pendapatPadaKunjunganKlinikGigiSebelumnya.map((value,idx) => (
                                <div key={idx} className="d-flex align-items-baseline flex-fill mr-3">
                                    <i className={dentalHistory['pendapatPadaKunjunganKlinikGigiSebelumnya'].includes(value)?'far fa-check-square':'far fa-square'}></i> 
                                    <div className="ml-1">{value}</div>
                                </div>
                            ))}
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">6.</td>
                        <td colSpan={4}>Bagaimana pendapat Anda tentang pernyataan ini? “Kesehatan gigi dan mulut mempengaruhi kesehatan umum.”</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4} className="d-flex flex-wrap">
                            {DentalHistoryInputs.pendapatPernyataanKesehatanGigiMemengaruhiKesehatanUmum.map((value,idx) => (
                                <div key={idx} className="d-flex align-items-baseline flex-fill mr-3">
                                    <i className={dentalHistory['pendapatPernyataanKesehatanGigiMemengaruhiKesehatanUmum'].includes(value)?'far fa-check-square':'far fa-square'}></i> 
                                    <div className="ml-1">{value}</div>
                                </div>
                            ))}
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">7.</td>
                        <td colSpan={4}>Apakah Anda mengalamai gejala berikut?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4} className="d-flex flex-wrap">
                            {DentalHistoryInputs.gejala.map((value,idx) => (
                                <div key={idx} className="d-flex align-items-baseline flex-fill mr-3">
                                    <i className={dentalHistory['gejala'].includes(value)?'far fa-check-square':'far fa-square'}></i> 
                                    <div className="ml-1">{value}</div>
                                </div>
                            ))}
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">8.</td>
                        <td colSpan={4}>Apakah gigi Anda bergemeretak/bergesekan di siang hari atau malam hari?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4}>
                            {dentalHistory['gigiBergemeretakSiangAtauMalam']}
                            {dentalHistory['apaMengenakanPelingdungGigitan']?(
                                <>
                                <br />
                                Jika iya, apakah Anda mengenakan pelindung gigitan (bite guard)?
                                {' '+dentalHistory['apaMengenakanPelingdungGigitan']}
                                </>
                            ):''}
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">9.</td>
                        <td colSpan={4}>Dalam dua tahun terakhir apakah Anda mencemaskan tentang aroma nafas / penampilan gigi / wajah Anda?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4}>
                            {dentalHistory['apaCemasTentangAromaNafasTampilanGigiWajah']}
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4}>Jika iya, apa saja yang Anda anggap bermasalah?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4} className="d-flex flex-wrap">
                            {DentalHistoryInputs.dianggapBermasalah.map((value,idx) => (
                                <div key={idx} className="d-flex align-items-baseline flex-fill mr-3">
                                    <i className={dentalHistory['dianggapBermasalah'].includes(value)?'far fa-check-square':'far fa-square'}></i> 
                                    <div className="ml-1">{value}</div>
                                </div>
                            ))}
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">10.</td>
                        <td colSpan={4}>Pernahkan Anda mengalami cedera pada gigi, wajah, dan rahang Anda?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4}>
                            {dentalHistory['pernahCederaGigiWajahRahang']}
                            {dentalHistory['penjelasanCederaGigiWajahRahang']?', Jelaskan : '+dentalHistory['penjelasanCederaGigiWajahRahang']:''}
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">11.</td>
                        <td colSpan={4}>Apakah Anda mengalamai gejala berikut?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4} className="d-flex flex-wrap">
                            {DentalHistoryInputs.gejala.map((value,idx) => (
                                <div key={idx} className="d-flex align-items-baseline flex-fill mr-3">
                                    <i className={dentalHistory['gejala'].includes(value)?'far fa-check-square':'far fa-square'}></i> 
                                    <div className="ml-1">{value}</div>
                                </div>
                            ))}
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="print-page-table page-break-before">
                <thead>
                    <tr>
                        <th colSpan={5}><b>Bagian II : Pemeliharaan Kesehatan Gigi dan Mulut Sendiri</b></th>
                    </tr>
                </thead>
                <tbody className="table-noBorder avoid-page-break">
                    <tr>
                        <td className="minWidth-fitContent">1.</td>
                        <td colSpan={4}>Beri tanda (√) pada hal-hal berikut yang sering Anda gunakan di rumah :</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4}>
                            <div className="d-flex flex-wrap">
                                {DentalHistoryInputs.halYangSeringDigunakan.map((value,idx) => (
                                    <div key={idx} className="d-flex align-items-baseline flex-fill mr-3">
                                        <i className={dentalHistoryBagian2['halYangSeringDigunakan'].includes(value)?'far fa-check-square':'far fa-square'}></i> 
                                        <div className="ml-1">{value}</div>
                                    </div>
                                ))}
                                {dentalHistoryBagian2['halYangSeringDigunakanLainnya']?dentalHistoryBagian2['halYangSeringDigunakanLainnya'].split(',').map((value: any,idx: any) => (
                                    <div key={idx} className="d-flex align-items-baseline flex-fill mr-3">
                                        <i className='far fa-check-square'></i> 
                                        <div className="ml-1">{value}</div>
                                    </div>
                                )):''}
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody className="table-noBorder">
                    <tr>
                        <td className="minWidth-fitContent">2.</td>
                        <td colSpan={4}>Beri tanda (√) pada keunggulan pasta gigi yang Anda gunakan :</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4}>
                            <div className="d-flex flex-wrap">
                                {DentalHistoryInputs.keunggulanPastaGigiYangDigunakan.map((value,idx) => (
                                    <div key={idx} className="d-flex align-items-baseline flex-fill mr-3">
                                        <i className={dentalHistoryBagian2['keunggulanPastaGigiYangDigunakan'].includes(value)?'far fa-check-square':'far fa-square'}></i> 
                                        <div className="ml-1">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">3.</td>
                        <td colSpan={4}>Berapa lama waktu yang dibutuhkan untuk membersihkan gigi dan gusi Anda sendiri :</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={2}>
                            <div className="d-flex flex-wrap">
                                <div>Menyikat Gigi :&nbsp;</div>
                                <div>{dentalHistoryBagian2['berapaMenitMembersihkanGigiDanGusiSendiri']['denganSikat']}</div>
                                <div>&nbsp;menit</div>
                            </div>
                        </td>
                        <td colSpan={2}>
                            <div className="d-flex flex-wrap">
                                <div>Menggunakan benang gigi/flossing :&nbsp;</div>
                                <div>{dentalHistoryBagian2['berapaMenitMembersihkanGigiDanGusiSendiri']['denganBenangGigi']||'0'}</div>
                                <div>&nbsp;menit</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">4.</td>
                        <td colSpan={4}>Berapa kali Anda menyikat gigi/membersihkan menggunakan benang gigi?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={2}>
                            <div className="d-flex flex-wrap">
                                <div>Menyikat Gigi :&nbsp;</div>
                                {dentalHistoryBagian2['frekuensiMembersihkanGigiDanGusiSendiri']['denganSikat']['frekuensi']?(
                                    <div>
                                        {dentalHistoryBagian2['frekuensiMembersihkanGigiDanGusiSendiri']['denganSikat']['frekuensi']}
                                        &nbsp;per&nbsp;{dentalHistoryBagian2['frekuensiMembersihkanGigiDanGusiSendiri']['denganSikat']['satuan']}
                                    </div>
                                ):''}
                            </div>
                        </td>
                        <td colSpan={2}>
                            <div className="d-flex flex-wrap">
                                <div>Menggunakan benang gigi/flossing :&nbsp;</div>
                                {dentalHistoryBagian2['frekuensiMembersihkanGigiDanGusiSendiri']['denganBenangGigi']['frekuensi']?(
                                    <div>
                                        {dentalHistoryBagian2['frekuensiMembersihkanGigiDanGusiSendiri']['denganBenangGigi']['frekuensi']}
                                        &nbsp;per&nbsp;{dentalHistoryBagian2['frekuensiMembersihkanGigiDanGusiSendiri']['denganBenangGigi']['satuan']}
                                    </div>
                                ):''}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">5.</td>
                        <td colSpan={4}>Apakah Anda merasa kesulitan mengatur jadwal menyikat/membersihkan gigi dan mulut karena kesibukan Anda atau alasan lain? (Waktu ideal: pagi setelah sarapan dan malam sebelum tidur)</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4}>
                            {dentalHistoryBagian2['apaKesulitanMengaturJadwalSikatGigi']}
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">6.</td>
                        <td colSpan={4}>Apakah ada kondisi yang membuat Anda sulit membersihkan gigi?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4}>
                            <div className="d-flex flex-wrap">
                                {DentalHistoryInputs.kesulitanMembersihkanGigi.map((value,idx) => (
                                    <div key={idx} className="d-flex align-items-baseline flex-fill mr-3">
                                        <i className={dentalHistoryBagian2['kesulitanMembersihkanGigi'].includes(value)?'far fa-check-square':'far fa-square'}></i> 
                                        <div className="ml-1">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">7.</td>
                        <td colSpan={4}>Apakah Anda rutin memeriksa setiap bulan untuk mengetahui adanya kanker mulut?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4}>
                            {dentalHistoryBagian2['apaRutinMemeriksaTiapBulanUntukTahuKankerMulut']}
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">8.</td>
                        <td colSpan={4}>Manakah kebiasaan yang sering Anda lakukan?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4}>
                            <div className="d-flex flex-wrap">
                                {DentalHistoryInputs.kebiasaan.map((value,idx) => (
                                    <div key={idx} className="d-flex align-items-baseline flex-fill mr-3">
                                        <i className={dentalHistoryBagian2['kebiasaan'].includes(value)?'far fa-check-square':'far fa-square'}></i> 
                                        <div className="ml-1">{value}</div>
                                    </div>
                                ))}
                                {dentalHistoryBagian2['kebiasaan'].filter((value:any) => !DentalHistoryInputs.kebiasaan.includes(value)).map((value:any,idx:any) => (
                                    <div key={idx} className="d-flex align-items-baseline flex-fill mr-3">
                                        <i className='far fa-check-square'></i> 
                                        <div className="ml-1">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="print-page-table page-break-before">
                <thead>
                    <tr>
                        <th colSpan={5}><b>Bagian III : Cemilan Diantara Waktu Makanan</b></th>
                    </tr>
                </thead>
                <tbody className="table-noBorder avoid-page-break">
                    <tr>
                        <td className="minWidth-fitContent">1.</td>
                        <td colSpan={4}>Silahkan beri tanda pada cemilan yang mengandung gula/karbohidrat sering Anda makan diantara waktu makan!</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4}>
                            <div className="d-flex flex-wrap">
                                {dentalHistoryBagian3['camilanWaktuMakans'].map((value:any,idx:any) => (
                                    <div key={idx} className="d-flex align-items-baseline flex-fill mr-3" style={{width:'30%'}}>
                                        <div>{value.namaCamilan} :&nbsp;</div> 
                                        <div>{value.frekuensiMakan || '0'}</div>
                                        <div className="ml-1">x</div>
                                    </div>
                                ))}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="print-page-table page-break-before">
                <thead>
                    <tr>
                        <th colSpan={5}><b>Bagian IV : Keyakinan Tentang Kesehatan Gigi dan Mulut</b></th>
                    </tr>
                </thead>
                <tbody className="table-noBorder avoid-page-break">
                    <tr>
                        <td className="minWidth-fitContent">1.</td>
                        <td colSpan={4}>Jika dibandingkan dengan orang pada ummumnya, menurut Anda bagaimana kemungkinan Anda memiliki gigi berlubang atau masalah gigi dan/atau gusi Anda?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4}>
                            <div className="d-flex flex-wrap">
                                {DentalHistoryInputs.pendapanAndaKemungkinanAdaMasalahGigiDaripadaOranglain.map((value,idx) => (
                                    <div key={idx} className="d-flex align-items-baseline flex-fill mr-3">
                                        <i className={dentalHistoryBagian4['pendapanAndaKemungkinanAdaMasalahGigiDaripadaOranglain']==value?'far fa-check-square':'far fa-square'}></i> 
                                        <div className="ml-1">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">2.</td>
                        <td colSpan={4}>Seberapa pentingkah bagi Anda mencegah masalah rongga mulut, gusi, atau penyakit gigi dan mulut?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4}>
                            <div className="d-flex flex-wrap">
                                {DentalHistoryInputs.pentingnyaMencegahMasalahGigi.map((value,idx) => (
                                    <div key={idx} className="d-flex align-items-baseline flex-fill mr-3">
                                        <i className={dentalHistoryBagian4['pentingnyaMencegahMasalahGigi']==value?'far fa-check-square':'far fa-square'}></i> 
                                        <div className="ml-1">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">3.</td>
                        <td colSpan={4}>Saya percaya bahwa saya dapat menjaga kesehatan gigi dan mulut saya.</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4}>
                            {dentalHistoryBagian4['apaAndaPercayaDapatMenjagaKesehatanGigi']}
                        </td>
                    </tr>
                    <tr>
                        <td className="minWidth-fitContent">4.</td>
                        <td colSpan={4}>Saya percaya bahwa kesehatan gigi dan mulut saya :</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={4}>
                            <div className="d-flex flex-wrap">
                                {DentalHistoryInputs.seberapaTinggiAndaPercayaPadaKesehatanGigi.map((value,idx) => (
                                    <div key={idx} className="d-flex align-items-baseline flex-fill mr-3">
                                        <i className={dentalHistoryBagian4['seberapaTinggiAndaPercayaPadaKesehatanGigi']==value?'far fa-check-square':'far fa-square'}></i> 
                                        <div className="ml-1">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}