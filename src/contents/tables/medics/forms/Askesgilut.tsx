import { AskesgilutInputs } from "@app/constants/medicFormInputs";
import { Box, Grid, InputLabel, Typography } from "@mui/material";
import { DateTimeInput, TextInput } from "react-admin";

export default function Askesgilut() {
    return (
        <div>
            <Typography>Diagnosis, Perencanaan, Implementasi dan Evaluasi Askesgilut</Typography>
            <hr/>
            <Grid container spacing={{ xs: 0, sm: 1 }} columns={{ xs: 1, sm: 12 }}>
                {AskesgilutInputs.diagnosis.map((field, index) => (
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