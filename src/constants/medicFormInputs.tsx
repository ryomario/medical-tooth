export const MedicalHistoryInputs = {
    values: [
        "Pasien merasa dalam keadaan sehat",
        "Selama 5 tahun terakhir, pasien pernah dinyatakan mengalami penyakit serius, menjalani operasi dan atau di rawat inap di rumah sakit, yaitu sakit/operasi.",
        "Pasien mempunyai kelainan pembekuan darah",
        "Alergi makanan",
        "Alergi obat-obatan",
        "Alergi obat yang disuntik (obat bius)",
        "Alergi cuaca"
    ],
    contains(value: string) {
        return this.values.includes(value);
    }
};
export const DentalHistoryInputs = {
    yangInginDiketahuiDalamMulut: [
        "Kerusakan gigi", "Penyakit pada gusi", "Luka pada jaringan mulut", "Kanker mulut"
    ],
    pendapatPadaKunjunganKlinikGigiSebelumnya: [
        "Sangat cemas/takut", "Agak cemas/takut", "Tidak penting sama sekali", "Antusias pada kunjungan selanjutnya"
    ],
    pendapatPernyataanKesehatanGigiMemengaruhiKesehatanUmum: [
        "Sangat setuju", "Setuju", "Tidak setuju", "Sangat tidak setuju"
    ],
    gejala: [
        "Gigi sensitif", "Sakit pada rahang", "Sakit gigi", "Sakit gusi",
        "Gusi berdarah", "Kesulitan mengunyah", "Tambalan lepas", "Mulut kering",
        "Bau mulut", "Sensasi terbakar", "Bengkak", "Gusi menurun"
    ],
    dianggapBermasalah: [
        "Gigi menguning / berubah warna", "Jarak antar gigi (renggang)", "Noda pada permukaan gigi",
        "Masalah gusi", "Gigi berjejal / tidak beraturan", "Profil wajah"
    ],
    halYangSeringDigunakan: [
        "Sikat gigi dengan bulu sikat lunak", "Karet pemijat gusi", "Air minum berfluoride", "Air dalam botol/kemasaan",
        "Sikat gigi dengan bulu sikat keras", "Sikat khusus sela-sela gigi", "Sikat gigi elektrik", "Tusuk gigi",
        "Sikat gigi dengan bulu sikat sedang", "Air minum berfluoride yang digunakan setiap hari", "Alat irigasi mulut", "Benang gigi bertangkai",
        "Perekat gigi tiruan", "Pembersih gigi tiruan", "Obat kumur", "Benang gigi",
        "Pemutih gigi", "Sikat gigi khusus", "Pasta/gel fluor", "Pasta gigi berfluoride", "Fluor tetes/tablet"
    ],
    keunggulanPastaGigiYangDigunakan: [
        "Berfluoride", "Perlindungan gigi sensitif", "Mengontrol karang gigi", "Mengandung baking soda",
        "Beraroma mint", "Mengandung peroxida", "Memiliki banyak manfaat"
    ],
    kesulitanMembersihkanGigi: [
        "Memegang sikat gigi", "Menggunakan benang gigi", "Memegang sikat/benang untuk waktu yang lama",
        "Penglihatan yang buruk"
    ],
    kebiasaan: ['Menggigit benda keras','Merokok'],
    camilanWaktuMakans: [
        "Permen mint", "Minuman kaleng/botol", "Obat syrup", "Minuman manis", "Permen karet",
        "Keripik", "Buah kering", "Kerupuk", "Kue kering"
    ],
    pendapanAndaKemungkinanAdaMasalahGigiDaripadaOranglain: [
        "Jauh diatas rata-rata", "Sedikit diatas rata-rata", "Sama seperti umumnya", "Sedikit dibawah rata-rata", "Jauh dibawah rata-rata"
    ],
    pentingnyaMencegahMasalahGigi: [
        "Sangat penting", "Tidak terlalu penting", "Tidak penting"
    ],
    seberapaTinggiAndaPercayaPadaKesehatanGigi: [
        "Baik sekali", "Baik", "Cukup", "Buruk"
    ]
}
export const AskesgilutInputs = {
    diagnosis: [
        {id: 'askesgilut.diagnosis.perlindunganResikoKesehatan', label: '1. Perlindungan dari resiko kesehatan'},
        {id: 'askesgilut.diagnosis.bebasDariKetakutanAtauStress', label: '2. Bebas dari ketakutan/stres'},
        {id: 'askesgilut.diagnosis.kesanWajahSehat', label: '3. Kesan wajah yang sehat'},
        {id: 'askesgilut.diagnosis.keutuhanKulitDanMembranMukosaPadaLeherKepala', label: '4. Keutuhan kulit dan membran Mukosa pada leher dan kepala'},
        {id: 'askesgilut.diagnosis.kondisiDanFungsiGigiGeligiYangBaik', label: '5. Kondisi biologis dan fungsi gigi geligi yang baik'},
        {id: 'askesgilut.diagnosis.konseptualisasiDanPemecahanMasalah', label: '6. Konseptualisasi dan pemecahan masalah'},
        {id: 'askesgilut.diagnosis.bebasNyeriKepalaLeher', label: '7. Bebas dari nyeri pada kepala dan leher'},
        {id: 'askesgilut.diagnosis.tanggungJawabKesehatanGigiDanMulut', label: '8. Tanggung jawab terhadap kesehatan gigi dan mulutnya'},
    ]
}