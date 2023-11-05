import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { CheckboxGroupInput } from "react-admin";

export default function MedicalHistory(props: { className?: string }) {
    const [choices, setChoices] = useState([
        "Pasien merasa dalam keadaan sehat",
        "Selama 5 tahun terakhir, pasien pernah dinyatakan mengalami penyakit serius, menjalani operasi dan atau di rawat inap di rumah sakit, yaitu sakit/operasi.",
        "Pasien mempunyai kelainan pembekuan darah",
        "Alergi makanan",
        "Alergi obat-obatan",
        "Alergi obat yang disuntik (obat bius)",
        "Alergi cuaca"
    ]);
    const [value, setValue] = useState('');
    const toChoices = (items: string[]) => items.map(item => ({id: item, name: item}));

    const isValid = () => Boolean(value.length > 0);
    const handleTambah = (e: any) => {
        e.preventDefault();
        
        if (isValid()) {
            setChoices(oldVal => [...oldVal, value]);
            // reset
            setValue('');
        }

    };
    return (
        <div className={props.className}>
            <CheckboxGroupInput
                source="medicalHistory"
                choices={toChoices(choices)}
                row={false}
                className=""
            />
            <Box display={{ xs: 'block', sm: 'flex' }} alignItems="center">
                <Box mr={{ xs: 0, sm: '0.5em' }}>
                    <TextField
                        label="Lainnya"
                        variant="outlined"
                        onSubmit={() => {}}
                        value={value}
                        onChange={(e: any) => {setValue(e.target.value)}}
                        onKeyDown={(e: any) => {
                            if (e.key === 'Enter') handleTambah(e);
                        }}
                    />
                </Box>
                <Box mr={{ xs: 0, sm: '0.5em' }}>
                    <Button hidden={!isValid()} onClick={handleTambah} variant="contained">Tambah</Button>
                </Box>
            </Box>
        </div>
    );
}