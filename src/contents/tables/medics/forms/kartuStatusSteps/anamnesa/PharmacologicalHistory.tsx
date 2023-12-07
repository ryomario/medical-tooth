import { Box } from "@mui/material";
import { RadioButtonGroupInput, TextInput } from "react-admin";

export default function PharmacologicalHistory() {
    return (
        <div>
            <RadioButtonGroupInput
                source="pharmacologicalHistory.pernahKonsumsiObat.pernah"
                label="1. Apakah anda sedang/pernah mengkonsumsi otab-obatan (termasuk obat herbal/alternatif)?"
                choices={[{id:'Ya', name:'Ya'},{id:'Tidak',name:'Tidak'},{id:'Sama seperti umumnya',name:'Sama seperti umumnya'},{id:'Sedikit dibawah rata-rata',name:'Sedikit dibawah rata-rata'}]}
                sx={{ mb: -2, mt: 3 }}
            />
            <Box display={{ xs: 'block', sm: 'flex' }} alignItems="center" justifyContent="flex-start">
                <Box mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput 
                        source="pharmacologicalHistory.pernahKonsumsiObat.jenisNamaObat" 
                        label="Jenis / nama obat" 
                        helperText="Jika poin 1 memilih 'Iya'"
                    />
                </Box>
                <Box mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput 
                        source="pharmacologicalHistory.pernahKonsumsiObat.untukApa" 
                        label="Untuk apa" 
                        helperText="Jika poin 1 memilih 'Iya'"
                    />
                </Box>
            </Box>
            <fieldset className="MuiFormControl-root MuiFormControl-marginDense ra-input css-17g58nf-MuiFormControl-root-RaCheckboxGroupInput-root d-block">
                <legend className="MuiFormLabel-root MuiFormLabel-colorPrimary RaCheckboxGroupInput-label css-u4tvz2-MuiFormLabel-root">
                    <span>2. Apa efek samping dari obat tersebut?</span>
                </legend>
                <TextInput 
                    source="pharmacologicalHistory.efekSampingObat" 
                    label="Efek samping obat" 
                />
            </fieldset>
            <fieldset className="MuiFormControl-root MuiFormControl-marginDense ra-input css-17g58nf-MuiFormControl-root-RaCheckboxGroupInput-root d-block">
                <legend className="MuiFormLabel-root MuiFormLabel-colorPrimary RaCheckboxGroupInput-label css-u4tvz2-MuiFormLabel-root">
                    <span>3. Apakah pengaruh positif dari obat tersebut?</span>
                </legend>
                <TextInput 
                    source="pharmacologicalHistory.pengaruhPositifObat" 
                    label="Pengaruh positif obat" 
                />
            </fieldset>
            <RadioButtonGroupInput
                source="pharmacologicalHistory.masalahDosisObat.apaAda"
                label="4. Apakah ada masalah dengan dosis obat tersebut?"
                choices={[{id:'Ya', name:'Ya'},{id:'Tidak',name:'Tidak'}]}
                sx={{ mb: -2, mt: 3 }}
            />
            <TextInput 
                source="pharmacologicalHistory.masalahDosisObat.penjelaan" 
                label="Jelaskan" 
                helperText="Jika poin 4 memilih 'Iya'"
            />
            <RadioButtonGroupInput
                source="pharmacologicalHistory.apaKonsumsiObatTeratur"
                label="5. Apakah anda mengkonsumsi obat tersebut secara teratur?"
                choices={[{id:'Ya', name:'Ya'},{id:'Tidak',name:'Tidak'}]}
                sx={{ mb: -2, mt: 3 }}
            />
        </div>
    );
}