import { Box, List, ListItem, ListItemIcon, ListItemText, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { AutocompleteInput } from "react-admin";

type ItemType = {kode:string,status:string};
type ItemsType = Array<ItemType>;

const kodePeriodontal:ItemsType = [
    {kode: '0', status: "Sehat"},
    {kode: '1', status: "Berdarah / tak sehat"},
    {kode: '2', status: "Karang gigi"},
    {kode: '3', status: "Saku gusi 4-5 mm"},
    {kode: '4', status: "Saku gusi 6 mm atau lebih"},
];
const kodePeriodontalGigiTetap:ItemsType = [
    {kode: '0', status: "Sehat"},
    {kode: '1', status: "Gigi berlubang / Karies"},
    {kode: '2', status: "Tumpatan dengan Karies"},
    {kode: '3', status: "Tumpatan tanpa Karies"},
    {kode: '4', status: "Gigi dicabut karena Karies"},
    {kode: '5', status: "Gigi dicabut oleh sebab lain"},
    {kode: '6', status: "Sealant, Varnish"},
    {kode: '7', status: "Abutment, Mahkota Khusus"},
    {kode: '8', status: "Gigi tidak tumbuh"},
    {kode: '9', status: "Gigi tidak termasuk kriteria diatas"},
];
const kodePeriodontalGigiSusu:ItemsType = [
    {kode: 'A', status: "Sehat"},
    {kode: 'B', status: "Gigi berlubang / Karies"},
    {kode: 'C', status: "Tumpatan dengan Karies"},
    {kode: 'D', status: "Tumpatan tanpa Karies"},
    {kode: 'E', status: "Gigi dicabut karena Karies"},
    {kode: 'F', status: "Sealant, Varnish"},
    {kode: 'G', status: "Abutment, Mahkota Khusus"},
];

const generate = (items: ItemsType, callback: (item: ItemType) => React.ReactElement) => {
    return items.map((item: ItemType) => {
        return callback(item);
    });
}
const toChoices = (items: ItemsType) => items.map((item: ItemType) => ({id: item.kode, name: item.kode + ' - ' + item.status}));

export default function PenilaianGusi() {
    return (
        <div>
            <Typography>Kode status periodontal :</Typography>
            <List dense={true}>
                {generate(kodePeriodontal,(item: ItemType) => (
                    <ListItem key={item.kode}>
                        <ListItemIcon>{item.kode}</ListItemIcon>
                        <ListItemText primary={item.status}/>
                    </ListItem>
                ))}
            </List>
            <Box display={{xs:'block',sm:'flex',width:'100%'}}>
                <Box flex={1} mr={{xs: '0', sm: 5}}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Gigi Tetap</TableCell>
                                <TableCell>Status / Kondisi</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {generate(kodePeriodontalGigiTetap,(item: ItemType)=>(
                                <TableRow key={item.kode}>
                                    <TableCell align="center">{item.kode}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
                <Box flex={1}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Gigi Susu</TableCell>
                                <TableCell>Status / Kondisi</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {generate(kodePeriodontalGigiSusu,(item: ItemType)=>(
                                <TableRow key={item.kode}>
                                    <TableCell align="center">{item.kode}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Box>

            <br/>

            <Box display={{xs:'block',sm:'flex',width:'100%'}}>
                <Box flex={1} mr={{xs: '0', sm: 2}}>
                    <AutocompleteInput
                        source="penilaianGusi.sextan1"
                        label="Sextan 1"
                        variant="outlined"
                        choices={toChoices([...kodePeriodontalGigiTetap,...kodePeriodontalGigiSusu])}
                    />
                </Box>
                <Box flex={1} mr={{xs: '0', sm: 2}}>
                    <AutocompleteInput
                        source="penilaianGusi.sextan2"
                        label="Sextan 2"
                        variant="outlined"
                        choices={toChoices([...kodePeriodontalGigiTetap,...kodePeriodontalGigiSusu])}
                    />
                </Box>
                <Box flex={1}>
                    <AutocompleteInput
                        source="penilaianGusi.sextan3"
                        label="Sextan 3"
                        variant="outlined"
                        choices={toChoices([...kodePeriodontalGigiTetap,...kodePeriodontalGigiSusu])}
                    />
                </Box>
            </Box>
            <Box display={{xs:'block',sm:'flex',width:'100%'}}>
                <Box flex={1} mr={{xs: '0', sm: 2}}>
                    <AutocompleteInput
                        source="penilaianGusi.sextan4"
                        label="Sextan 4"
                        variant="outlined"
                        choices={toChoices([...kodePeriodontalGigiTetap,...kodePeriodontalGigiSusu])}
                    />
                </Box>
                <Box flex={1} mr={{xs: '0', sm: 2}}>
                    <AutocompleteInput
                        source="penilaianGusi.sextan5"
                        label="Sextan 5"
                        variant="outlined"
                        choices={toChoices([...kodePeriodontalGigiTetap,...kodePeriodontalGigiSusu])}
                    />
                </Box>
                <Box flex={1}>
                    <AutocompleteInput
                        source="penilaianGusi.sextan6"
                        label="Sextan 6"
                        variant="outlined"
                        choices={toChoices([...kodePeriodontalGigiTetap,...kodePeriodontalGigiSusu])}
                    />
                </Box>
            </Box>
        </div>
    );
}