import { Box, Grid, InputLabel, Typography } from "@mui/material";
import { DateTimeInput, TextInput } from "react-admin";

const inputFields = [
    {id: 'askesgilut.diagnosis.perlindunganResikoKesehatan', label: '1. Perlindungan dari resiko kesehatan'},
    {id: 'askesgilut.diagnosis.bebasDariKetakutanAtauStress', label: '2. Bebas dari ketakutan/stres'},
    {id: 'askesgilut.diagnosis.kesanWajahSehat', label: '3. Kesan wajah yang sehat'},
    {id: 'askesgilut.diagnosis.keutuhanKulitDanMembranMukosaPadaLeherKepala', label: '4. Keutuhan kulit dan membran Mukosa pada leher dan kepala'},
    {id: 'askesgilut.diagnosis.kondisiDanFungsiGigiGeligiYangBaik', label: '5. Kondisi biologis dan fungsi gigi geligi yang baik'},
    {id: 'askesgilut.diagnosis.konseptualisasiDanPemecahanMasalah', label: '6. Konseptualisasi dan pemecahan masalah'},
    {id: 'askesgilut.diagnosis.bebasNyeriKepalaLeher', label: '7. Bebas dari nyeri pada kepala dan leher'},
    {id: 'askesgilut.diagnosis.tanggungJawabKesehatanGigiDanMulut', label: '8. Tanggung jawab terhadap kesehatan gigi dan mulutnya'},
];

export default function Askesgilut() {
    return (
        <div>
            <Typography>Diagnosis, Perencanaan, Implementasi dan Evaluasi Askesgilut</Typography>
            <hr/>
            <Grid container spacing={{ xs: 0, sm: 1 }} columns={{ xs: 1, sm: 12 }}>
                {inputFields.map((field, index) => (
                    <Grid item xs={1} sm={6} key={index}>
                        <TextInput
                            fullWidth
                            source={field.id}
                            label=""
                            helperText={field.label}
                            variant="outlined"
                            multiline
                            rows={3}
                        />
                    </Grid>
                ))}
            </Grid>
            <br/>
            <Typography>Diagnosis Askesgilut (Dental Hygiene Diagnosis)</Typography>
            <hr/>
            <Box display={{xs:'block',sm:'flex'}}>
                <Box flex={1}><InputLabel>Kebutuhan yang tidak terpenuhi</InputLabel></Box>
                <Box flex={3}>
                    <TextInput
                        fullWidth
                        source="askesgilut.diagnosis.kebutuhanTidakTerpenuhi"
                        label=""
                        variant="filled"
                        multiline
                        rows={3}
                    />
                </Box>
            </Box>
            <Box display={{xs:'block',sm:'flex'}}>
                <Box flex={1}><InputLabel>Penyebab</InputLabel></Box>
                <Box flex={3}>
                    <TextInput
                        fullWidth
                        source="askesgilut.diagnosis.penyebabKebutuhanTidakTerpenuhi"
                        label=""
                        variant="filled"
                        multiline
                        rows={3}
                    />
                </Box>
            </Box>
            <Box display={{xs:'block',sm:'flex'}}>
                <Box flex={1}><InputLabel>Tanda-tanda dan gejala</InputLabel></Box>
                <Box flex={3}>
                    <TextInput
                        fullWidth
                        source="askesgilut.diagnosis.tandaDanGejala"
                        label=""
                        variant="filled"
                        multiline
                        rows={3}
                    />
                </Box>
            </Box>
            <hr/>
            <TextInput
                fullWidth
                source="askesgilut.diagnosis.tujuanYangBerpusatKlien"
                label=""
                helperText="Tujuan yang berpusat pada klien (Client-Centered Goals)"
                variant="outlined"
                multiline
                rows={3}
            />
            <TextInput
                fullWidth
                source="askesgilut.diagnosis.intervensiAskesgilut"
                label=""
                helperText="Intervensi Askesgilut (Dental Hygiene Interventions)"
                variant="outlined"
                multiline
                rows={3}
            />
            <TextInput
                fullWidth
                source="askesgilut.diagnosis.pernyataanEvaluatif"
                label=""
                helperText="Pernyataan evaluatif (Evaluative Statement)"
                variant="outlined"
                multiline
                rows={3}
            />
            <hr/>
            <div>
                <DateTimeInput
                    source="askesgilut.kunjunganSelanjutnya"
                    label="Jadwal kunjungan"
                    helperText="Jadwal kunjungan selanjutnya"
                />
            </div>
            <TextInput
                fullWidth
                source="askesgilut.rekomendasiPerawatanSelanjutnya"
                label="Rekomendasi"
                helperText="Rekomendasi perawatan selanjutnya"
                variant="filled"
                multiline
                rows={3}
            />
        </div>
    );
}