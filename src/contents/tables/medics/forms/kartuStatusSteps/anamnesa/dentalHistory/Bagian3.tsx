import { Box, Checkbox, FormControlLabel, InputAdornment, Typography } from "@mui/material";
import { ArrayInput, BooleanInput, NumberInput, SimpleFormIterator, TextInput } from "react-admin";

const defaultValue = [
    "Permen mint", "Minuman kaleng/botol", "Obat syrup", "Minuman manis", "Permen karet",
    "Keripik", "Buah kering", "Kerupuk", "Kue kering"
].map(item => ({"namaCamilan":item,"frekuensiMakan":null}));

export default function DentalHistoryBagian3() {

    return (
        <div>
            <ArrayInput source="dentalHistory.bag3.camilanWaktuMakans" label="Silahkan pilih camilan mengandung gula / karbohidrat berikut yang sering anda makan diantara waktu makan!" defaultValue={defaultValue}>
                <SimpleFormIterator inline disableReordering>
                    <TextInput source="namaCamilan"/>
                    <NumberInput
                        source="frekuensiMakan"
                        label="Frekuensi"
                        InputProps={{
                            endAdornment: (<InputAdornment position="end">kali</InputAdornment>)
                        }}
                    />
                </SimpleFormIterator>
            </ArrayInput>
        </div>
    );
}