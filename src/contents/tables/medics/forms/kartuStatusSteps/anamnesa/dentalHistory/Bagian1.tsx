import { DentalHistoryInputs } from "@app/constants/medicFormInputs";
import { CheckboxGroupInput, RadioButtonGroupInput, TextInput } from "react-admin";

export default function DentalHistoryBagian1() {
    return (
        <div>
            <TextInput source="dentalHistory.alasanKunjunganKlinikGigi" label="Alasan kunjungan" helperText="1. Apa alasan utama kunjungan anda ke klinik gigi?" rows={3} multiline fullWidth sx={{ mb: 3 }}/>
            <CheckboxGroupInput
                source="dentalHistory.yangInginDiketahuiDalamMulut"
                label="2. Apakah yang ingin diketahui dalam rongga mulut anda saat ini?"
                choices={DentalHistoryInputs.yangInginDiketahuiDalamMulut.map(item => ({id: item, name: item}))}
            />
            <RadioButtonGroupInput
                source="dentalHistory.pernahRontgenMulutDuaTahunTerakhir"
                label="3. Pernahkah dilakukan rontgen foto (x-ray) gigi / mulut dalam 2 tahun terakhir?"
                choices={[{id:'Ya', name:'Ya'},{id:'Tidak',name:'Tidak'}]}
                sx={{ mb: -2 }}
            />
            <TextInput source="dentalHistory.tipeRontgenMulut" label="Tipe rontgen" helperText="Abaikan jika belum pernah melakukan rontgen pada mulut/gigi"/>
            
            <RadioButtonGroupInput
                source="dentalHistory.pernahMengalamiMasalahGigi"
                label="4. Pernahkah anda mengalami komplikasi atau pengalaman negatif terkait perawatan gigi sebelumnya?"
                choices={[{id:'Ya', name:'Ya'},{id:'Tidak',name:'Tidak'}]}
                sx={{ mb: -2, mt: 3 }}
            />
            <TextInput source="dentalHistory.pengalamanMasalahGigi" label="Jelaskan" helperText="Abaikan jika belum pernah mengalami masalah pada gigi/mulut"/>
            
            <RadioButtonGroupInput
                source="dentalHistory.pendapatPadaKunjunganKlinikGigiSebelumnya"
                label="5. Bagaimana pendapat anda tentang kunjungan ke klinik gigi sebelumnya?"
                choices={DentalHistoryInputs.pendapatPadaKunjunganKlinikGigiSebelumnya.map(item => ({id: item, name: item}))}
                sx={{ mt: 3 }}
            />
            <RadioButtonGroupInput
                source="dentalHistory.pendapatPernyataanKesehatanGigiMemengaruhiKesehatanUmum"
                label='6. Bagaimana pendapat anda tentang pernyataan ini? "Kesehatan gigi dan mulut memengaruhi kesehatan umum."'
                choices={DentalHistoryInputs.pendapatPernyataanKesehatanGigiMemengaruhiKesehatanUmum.map(item => ({id: item, name: item}))}
            />
            <CheckboxGroupInput
                source="dentalHistory.gejala"
                label="7. Apakah anda mengalami gejala berikut?"
                choices={DentalHistoryInputs.gejala.map(item => ({id: item, name: item}))}
            />
            <RadioButtonGroupInput
                source="dentalHistory.gigiBergemeretakSiangAtauMalam"
                label="8. Apakah gigi anda bergemeretak / bergesekan di siang atau malam hari?"
                choices={[{id:'Ya', name:'Ya'},{id:'Tidak',name:'Tidak'}]}
                sx={{ mb: -2 }}
            />
            <RadioButtonGroupInput
                source="dentalHistory.apaMengenakanPelingdungGigitan"
                label="Jika iya, apakah anda mengenakan pelindung gigitan (bite guard)?"
                choices={[{id:'Ya', name:'Ya'},{id:'Tidak',name:'Tidak'}]}
            />

            <RadioButtonGroupInput
                source="dentalHistory.apaCemasTentangAromaNafasTampilanGigiWajah"
                label="9. Dalam dua tahun terakhir apakah anda mencemaskan tentang aroma nafas / penampilan gigi / wajah anda?"
                choices={[{id:'Ya', name:'Ya'},{id:'Tidak',name:'Tidak'}]}
                sx={{ mb: -2 }}
            />
            <CheckboxGroupInput
                source="dentalHistory.dianggapBermasalah"
                label="Jika iya, apa saja yang anda anggap bermasalah?"
                choices={DentalHistoryInputs.dianggapBermasalah.map(item => ({id: item, name: item}))}
            />

            <RadioButtonGroupInput
                source="dentalHistory.pernahCederaGigiWajahRahang"
                label="10. Pernahkah anda mengalami cedera pada gigi, wajah, dan rahang anda?"
                choices={[{id:'Ya', name:'Ya'},{id:'Tidak',name:'Tidak'}]}
                sx={{ mb: -2, mt: 3 }}
            />
            <TextInput source="dentalHistory.penjelasanCederaGigiWajahRahang" label="Jelaskan" helperText="Abaikan jika belum pernah mengalami cedera pada gigi, wajah, dadn rahang anda"/>
            
            <CheckboxGroupInput
                source="dentalHistory.mengalamiMenggunakanSesuatu"
                label="11. Apakah anda pernah mengalami / menggunakan hal-hal seperti ini?"
                choices={[
                    "Karang gigi", "Pencabutan gigi", "Gigi palsu", "Perawatan saluran akar gigi",
                    "Operasi gusi", "Kawat gigi", "Terapi radiasi pada kepala / leher", "Operasi rahang",
                    "Rasa sakit pada leher dan kepala", "Pendarahan berkepanjangan setelah perawatan gigi"
                ].map(item => ({id: item, name: item}))}
            />
            <TextInput source="dentalHistory.mengalamiMenggunakanSesuatuLainnya" label="Lain-lain" helperText="Tulis hal lainnya untuk poin 11."/>
        </div>
    );
}