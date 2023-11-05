import { Box, Button, ButtonGroup, Input, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useCreate, useNotify } from "react-admin";

export default function MahasiswaForm({ children }: {children: any}) {
    const [isOpen, setOpen] = useState(false);
    const toogleOpen = () => {
        setOpen(!isOpen);
    };
    const [nim, setNim] = useState('');
    const [nama, setNama] = useState('');
    const notify = useNotify();
    const [create, { isLoading, error }] = useCreate(undefined,undefined, {
        onSuccess(data, variables, context) {
            setOpen(false);
            setNim('');
            setNama('');
            notify('Mahasiswa ditambahkan!', {type:'success'});
        },
        onError() {
            notify('Gagal menambahkan!', {type:'error'});
        },
    });
    const handleTambah = (e: any) => {
        e.preventDefault();
        create('mahasiswas', { data: {nim, nama} });
    };
    if (error) return null;
    return (
        <>
            {!isOpen ? (
                <>
                    <Typography variant="h6" gutterBottom>
                        Pilih Mahasiswa
                    </Typography>
                    <Box display={{ xs: 'block', sm: 'flex', width: '100%' }} alignItems="center">
                        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                            {children}
                        </Box>
                        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                            {" atau "}
                            <Button size="small" onClick={toogleOpen}>Daftarkan mahasiswa baru</Button>
                        </Box>
                    </Box>
                </>
            ): (
                <>
                    <Typography variant="h6" gutterBottom>
                        Mahasiswa baru
                    </Typography>
                    <TextField
                        label="NIM"
                        variant="filled"
                        value={nim}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setNim(event.target.value);
                        }}
                        onSubmit={() => {}}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === 'Enter') handleTambah(e);
                        }}
                    />
                    <TextField
                        label="Nama"
                        variant="filled"
                        className="mb-3"
                        value={nama}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setNama(event.target.value);
                        }}
                        onSubmit={() => {}}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === 'Enter') handleTambah(e);
                        }}
                    />
                    <ButtonGroup>
                        <Button onClick={toogleOpen}>Batal</Button>
                        <Button disabled={isLoading} onClick={handleTambah} variant="contained">Tambah</Button>
                    </ButtonGroup>
                </>
            )}
        </>
    );
}