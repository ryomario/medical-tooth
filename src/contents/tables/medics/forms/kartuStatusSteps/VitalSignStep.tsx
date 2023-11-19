import { Box, Button, InputAdornment } from "@mui/material";
import { ArrayInput, DateInput, NumberInput, SimpleFormIterator } from "react-admin";

const defaultValue = [
    {},
    {},
    {}
];

export default function VitalSignStep() {
    return (
        <div>
            <ArrayInput source="vitalSign" label="" defaultValue={defaultValue}>
                <SimpleFormIterator inline disableReordering disableClear
                    sx={{
                        '& .RaSimpleFormIterator-form': {
                            alignItems: 'center'
                        }
                    }}
                    getItemLabel={index => `#${index + 1}`}
                    addButton={<Button variant="contained">Tambah</Button>}
                    removeButton={<Button variant="contained" color="error">Hapus</Button>}
                >
                    <NumberInput
                        source="tekananDarah.tekanan.atas"
                        label="atas"
                    />
                    <span>/</span>
                    <NumberInput
                        source="tekananDarah.tekanan.bawah"
                        label="bawah"
                    />
                    <NumberInput
                        source="tekananDarahBPM"
                        label="Tekanan darah"
                        InputProps={{
                            endAdornment: (<InputAdornment position="end">BPM</InputAdornment>)
                        }}
                    />
                    <NumberInput
                        source="tekananDarahRPM"
                        label="Tekanan darah"
                        InputProps={{
                            endAdornment: (<InputAdornment position="end">RPM</InputAdornment>)
                        }}
                    />
                    <DateInput
                        source="tglPeriksa"
                        label="Tgl. Pemeriksaan"
                    />
                </SimpleFormIterator>
            </ArrayInput>
        </div>
    );
}