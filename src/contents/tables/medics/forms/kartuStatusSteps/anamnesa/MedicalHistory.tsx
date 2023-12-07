import { MedicalHistoryInputs } from "@app/constants/medicFormInputs";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { CheckboxGroupInput } from "react-admin";

export default function MedicalHistory(props: { className?: string }) {
    const [choices, setChoices] = useState(MedicalHistoryInputs.values);
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
                    <Button disabled={!isValid()} onClick={handleTambah} variant="contained" startIcon={<i className="fas fa-plus"/>}>Tambah</Button>
                </Box>
            </Box>
        </div>
    );
}