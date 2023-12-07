import { DentalHistoryInputs } from "@app/constants/medicFormInputs";
import { Box, Button, Dialog, DialogActions, DialogContent, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { CheckboxGroupInput, NumberInput, RadioButtonGroupInput, SelectArrayInput, SelectInput, TextInput, useCreateSuggestionContext } from "react-admin";

const pilihanKebiasaan = DentalHistoryInputs.kebiasaan.map(item => ({id: item, name: item}));

export default function DentalHistoryBagian2() {
    return (
        <div>
            <CheckboxGroupInput
                source="dentalHistory.bag2.halYangSeringDigunakan"
                label="1. Pilih hal-hal berikut yang sering anda gunakan di rumah!"
                choices={DentalHistoryInputs.halYangSeringDigunakan.map(item => ({id: item, name: item}))}
            />
            <TextInput source="dentalHistory.bag2.halYangSeringDigunakanLainnya" label="Lain-lain" helperText="Tulis hal lainnya untuk poin 1."/>

            <CheckboxGroupInput
                source="dentalHistory.bag2.keunggulanPastaGigiYangDigunakan"
                label="2. Pilih keunggulan pasta gigi yang anda gunakan!"
                choices={DentalHistoryInputs.keunggulanPastaGigiYangDigunakan.map(item => ({id: item, name: item}))}
            />

            <fieldset className="MuiFormControl-root MuiFormControl-marginDense ra-input css-17g58nf-MuiFormControl-root-RaCheckboxGroupInput-root">
                <legend className="MuiFormLabel-root MuiFormLabel-colorPrimary RaCheckboxGroupInput-label css-u4tvz2-MuiFormLabel-root">
                    <span>3. Berapa lama waktu yang dibutuhkan untuk membersihkan gigi dan gusi anda sendiri?</span>
                </legend>

                <Box display={{ xs: 'block', sm: 'flex', width: '100%' }} alignItems="center">
                    <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                        <NumberInput
                            source="dentalHistory.bag2.berapaMenitMembersihkanGigiDanGusiSendiri.denganSikat"
                            label=""
                            helperText="Dengan sikat gigi"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">menit</InputAdornment>
                            }}
                        />
                    </Box>
                    <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                        <NumberInput
                            source="dentalHistory.bag2.berapaMenitMembersihkanGigiDanGusiSendiri.denganBenangGigi"
                            label=""
                            helperText="Dengan benang gigi/flossing"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">menit</InputAdornment>
                            }}
                        />
                    </Box>
                </Box>
            </fieldset>

            <fieldset className="MuiFormControl-root MuiFormControl-marginDense ra-input css-17g58nf-MuiFormControl-root-RaCheckboxGroupInput-root">
                <legend className="MuiFormLabel-root MuiFormLabel-colorPrimary RaCheckboxGroupInput-label css-u4tvz2-MuiFormLabel-root">
                    <span>4. Berapa kali anda menyikat gigi / membersihkan menggunakan benang gigi?</span>
                </legend>
                <Box display={{ xs: 'block', sm: 'flex', width: '100%' }} alignItems="center">
                    <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                                <NumberInput
                                    source="dentalHistory.bag2.frekuensiMembersihkanGigiDanGusiSendiri.denganSikat.frekuensi"
                                    label=""
                                    helperText="Dengan sikat gigi"
                                    InputProps={{
                                        endAdornment: (<InputAdornment position="end">kali</InputAdornment>)
                                    }}
                                />
                            </Box>
                            <Box flex={1}>
                                <SelectInput
                                    source="dentalHistory.bag2.frekuensiMembersihkanGigiDanGusiSendiri.denganSikat.satuan"
                                    label="Satuan"
                                    emptyText="per hari"
                                    emptyValue="hari"
                                    choices={[
                                        {id: 'minggu', name: 'per minggu'}
                                    ]}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                                <NumberInput
                                    source="dentalHistory.bag2.frekuensiMembersihkanGigiDanGusiSendiri.denganBenangGigi.frekuensi"
                                    label=""
                                    helperText="Dengan benang gigi/flossing"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">menit</InputAdornment>
                                    }}
                                />
                            </Box>
                            <Box flex={1}>
                                <SelectInput
                                    source="dentalHistory.bag2.frekuensiMembersihkanGigiDanGusiSendiri.denganBenangGigi.satuan"
                                    label="Satuan"
                                    emptyText="per hari"
                                    emptyValue="hari"
                                    choices={[
                                        {id: 'minggu', name: 'per minggu'}
                                    ]}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </fieldset>

            <RadioButtonGroupInput
                source="dentalHistory.bag2.apaKesulitanMengaturJadwalSikatGigi"
                label="5. Apakah anda merasa kesulitan mengatur jadwal menyikat/membersihkan gigi dan mulut karena kesibukan anda atau alasan lain?"
                choices={[{id:'Ya', name:'Ya'},{id:'Tidak',name:'Tidak'}]}
            />

            <CheckboxGroupInput
                source="dentalHistory.bag2.kesulitanMembersihkanGigi"
                label="6. Apa saja kondisi yang membuat anda kesulitan membersihkan gigi?"
                choices={DentalHistoryInputs.kesulitanMembersihkanGigi.map(item => ({id: item, name: item}))}
                helperText="Jika merasa tidak kesulitan bisa mengabaikan opsi ini"
            />

            <RadioButtonGroupInput
                source="dentalHistory.bag2.apaRutinMemeriksaTiapBulanUntukTahuKankerMulut"
                label="7. Apakah anda rutin memeriksa setiap bulan untuk mengetahui adanya kanker mulut?"
                choices={[{id:'Ya', name:'Ya'},{id:'Tidak',name:'Tidak'}]}
            />

            <SelectArrayInput
                source="dentalHistory.bag2.kebiasaan"
                label="8. Kebiasaan"
                helperText="Apa saja kebiasaan yang sering anda lakukan?"
                choices={pilihanKebiasaan}
                create={<CreateKebiasaan/>}
                createLabel="Lainnya"
            />
        </div>
    );
}

const CreateKebiasaan = () => {
    const { onCancel, onCreate } = useCreateSuggestionContext();
    const [value, setValue] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const newOption = {id: value, name: value};
        pilihanKebiasaan.push(newOption);
        setValue('');
        onCreate(newOption);
    };

    return (
        <Dialog open onClose={onCancel}>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <TextField
                        label="Kebiasaan lain"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                        autoFocus
                    />
                </DialogContent>
                <DialogActions>
                    <Button type="submit">Tambah</Button>
                    <Button onClick={onCancel}>Batal</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}