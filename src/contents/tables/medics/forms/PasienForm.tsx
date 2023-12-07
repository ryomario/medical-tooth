import { Autocomplete, Box, Button, ButtonGroup, FormControl, FormHelperText, Input, InputAdornment, InputBase, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useCreate, useNotify } from "react-admin";

export default function PasienForm({ children }: {children: any}) {
    const [isOpen, setOpen] = useState(false);
    const toogleOpen = () => {
        setOpen(!isOpen);
    };
    const [formState, setFormState] = useState<{
        "nama": string,
        "tgl-lahir": string,
        "alamat": string,
        "hp": string,
        "jk": string,
        "golDar": string,
        "agama": string,
        "tBadan": string,
        "bBadan": string
    }>({
        "nama": '',
        "tgl-lahir": '',
        "alamat": '',
        "hp": '',
        "jk": '',
        "golDar": '',
        "agama": '',
        "tBadan": '',
        "bBadan": ''
    });
    const notify = useNotify();
    const [create, { isLoading, error }] = useCreate(undefined,undefined, {
        onSuccess(data, variables, context) {
            setOpen(false);
            setFormState({
                "nama": '',
                "tgl-lahir": '',
                "alamat": '',
                "hp": '',
                "jk": '',
                "golDar": '',
                "agama": '',
                "tBadan": '',
                "bBadan": ''
            });
            notify('Pasien ditambahkan!', {type:'success'});
        },
        onError() {
            notify('Gagal menambahkan!', {type:'error'});
        },
    });
    const validate = () => formState.nama !== '' && formState.jk !== '';
    const handleTambah = (e: any) => {
        e.preventDefault();
        if(validate())create('pasiens', { data: formState });
        else notify('Isi data dengan tanda (*)!', {type:'warning'});
    };
    const handleChange = (e: any) => {
        const name = e.target.name
    };
    if (error) return null;
    return (
        <>
            {!isOpen ? (
                <>
                    <Typography variant="h6" gutterBottom>
                        Pilih Pasien
                    </Typography>
                    <Box display={{ xs: 'block', sm: 'flex', width: '100%' }} alignItems="center">
                        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                            {children}
                        </Box>
                        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                            {" atau "}
                            <Button size="small" onClick={toogleOpen}>Daftarkan pasien baru</Button>
                        </Box>
                    </Box>
                </>
            ): (
                <>
                    <Typography variant="h6" gutterBottom>
                        Pasien baru
                    </Typography>
                    <Box display={{ xs: 'block', sm: 'flex', width: '100%' }} alignItems="center">
                        <Box flex={2} mr={{ xs: 0, sm: '0.5em' }}>
                            <TextField
                                label="Nama Pasien"
                                variant="filled"
                                value={formState.nama}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setFormState(state => ({...state, nama: event.target.value}));
                                }}
                                onSubmit={() => {}}
                                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                    if (e.key === 'Enter') handleTambah(e);
                                }}
                                required
                                fullWidth
                            />
                        </Box>
                        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                            <FormControl fullWidth required>
                                <InputLabel id="jk-pasien-select-label">Jenis kelamin</InputLabel>
                                <Select
                                    labelId="jk-pasien-select-label"
                                    id="jk-pasien-select"
                                    value={formState.jk}
                                    label="Jenis kelamin"
                                    onChange={(event: SelectChangeEvent) => {
                                        setFormState(state => ({...state, jk: event.target.value}));
                                    }}
                                >
                                    <MenuItem value="L">Laki-laki</MenuItem>
                                    <MenuItem value="P">Perempuan</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>

                    <Box display={{ xs: 'block', sm: 'flex', width: '100%' }} alignItems="center">
                        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                            <div className="form-group mt-3">
                                <label htmlFor="tgl-lahir-pasien">Tanggal lahir</label>
                                <input type="date" className="form-control" id="tgl-lahir-pasien" aria-describedby="tgl-lahir-pasienHelp"
                                    value={formState["tgl-lahir"]}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setFormState(state => ({...state, "tgl-lahir": event.target.value}));
                                    }}
                                    onSubmit={() => {}}
                                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                        if (e.key === 'Enter') handleTambah(e);
                                    }}
                                />
                                <small id="tgl-lahir-pasienHelp" className="form-text text-muted">Tanggal lahir pasien.</small>
                            </div>
                        </Box>
                        <Box flex={2} mr={{ xs: 0, sm: '0.5em' }}>
                            <TextField
                                label="Nomor HP"
                                variant="filled"
                                value={formState.hp}
                                inputProps={{ type: 'text', pattern: '[0-9]' }}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setFormState(state => ({...state, hp: event.target.value}));
                                }}
                                onSubmit={() => {}}
                                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                    if (e.key === 'Enter') handleTambah(e);
                                }}
                                fullWidth
                            />
                        </Box>
                    </Box>
                    <div className="form-group">
                        <label htmlFor="alamat-pasien">Alamat</label>
                        <textarea className="form-control" id="alamat-pasien" aria-describedby="alamat-pasienHelp"
                            value={formState["alamat"]}
                            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                                setFormState(state => ({...state, alamat: event.target.value}));
                            }}
                            onSubmit={() => {}}
                            onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                                if (e.key === 'Enter') handleTambah(e);
                            }}
                            cols={50}
                        />
                    </div>

                    <Box display={{ xs: 'block', sm: 'flex', width: '100%' }} alignItems="center">
                        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                            <Autocomplete
                                disablePortal
                                id="golDar-pasien"
                                options={['O','A','B','AB']}
                                // sx={{ width: 300 }}
                                value={formState.golDar}
                                onChange={(event: React.SyntheticEvent, value: string | null) => {
                                    setFormState(state => ({...state, golDar: value || ''}));
                                }}
                                renderInput={(params) => <TextField {...params} label="Golongan darah" 
                                    value={formState.golDar}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setFormState(state => ({...state, golDar: event.target.value}));
                                    }}
                                    onSubmit={() => {}}
                                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                        if (e.key === 'Enter') handleTambah(e);
                                    }}
                                    fullWidth
                                />}

                            />
                        </Box>
                        <Box flex={2} mr={{ xs: 0, sm: '0.5em' }}>
                            <Autocomplete
                                disablePortal
                                id="agama-pasien"
                                options={['Islam','Kristen','Hindu','Budha','Ateis']}
                                // sx={{ width: 300 }}
                                value={formState.agama}
                                onChange={(event: React.SyntheticEvent, value: string | null) => {
                                    setFormState(state => ({...state, agama: value || ''}));
                                }}
                                renderInput={(params) => <TextField {...params} label="Agama" 
                                    value={formState.agama}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setFormState(state => ({...state, agama: event.target.value}));
                                    }}
                                    onSubmit={() => {}}
                                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                        if (e.key === 'Enter') handleTambah(e);
                                    }}
                                    fullWidth
                                />}
                            />
                        </Box>
                    </Box>

                    <Box display={{ xs: 'block', sm: 'flex', width: '100%' }} alignItems="center">
                        <Box mr={{ xs: 0, sm: '0.5em' }}>
                            <TextField
                                label="Tinggi badan"
                                variant="filled"
                                value={formState.tBadan}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">cm</InputAdornment>
                                }}
                                inputProps={{type: 'number',min:'0'}}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setFormState(state => ({...state, tBadan: event.target.value}));
                                }}
                                onSubmit={() => {}}
                                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                    if (e.key === 'Enter') handleTambah(e);
                                }}
                            />
                        </Box>
                        <Box mr={{ xs: 0, sm: '0.5em' }}>
                            <TextField
                                label="Berat badan"
                                variant="filled"
                                value={formState.bBadan}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">kg</InputAdornment>
                                }}
                                inputProps={{type: 'number',min:'0'}}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setFormState(state => ({...state, bBadan: event.target.value}));
                                }}
                                onSubmit={() => {}}
                                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                    if (e.key === 'Enter') handleTambah(e);
                                }}
                                fullWidth
                            />
                        </Box>
                    </Box>

                    <ButtonGroup>
                        <Button onClick={toogleOpen}>Batal</Button>
                        <Button disabled={isLoading} onClick={handleTambah} variant="contained">Tambah</Button>
                    </ButtonGroup>
                </>
            )}
        </>
    );
}