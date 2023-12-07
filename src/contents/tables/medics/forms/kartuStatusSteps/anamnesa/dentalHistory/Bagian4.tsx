import { DentalHistoryInputs } from "@app/constants/medicFormInputs";
import { Box, Button, Dialog, DialogActions, DialogContent, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { CheckboxGroupInput, NumberInput, RadioButtonGroupInput, SelectArrayInput, SelectInput, TextInput, useCreateSuggestionContext } from "react-admin";


export default function DentalHistoryBagian4() {
    return (
        <div>
            <RadioButtonGroupInput
                source="dentalHistory.bag4.pendapanAndaKemungkinanAdaMasalahGigiDaripadaOranglain"
                label="1. Jika dibandingkan orang pada umumnya, menurut anda bagaimana kemungkinan anda memiliki gigi berlubang atau masalah gigi dan / atau gusi anda?"
                choices={DentalHistoryInputs.pendapanAndaKemungkinanAdaMasalahGigiDaripadaOranglain.map(item => ({id: item, name: item}))}
            />
            <RadioButtonGroupInput
                source="dentalHistory.bag4.pentingnyaMencegahMasalahGigi"
                label="2. Seberapa pentingkah bagi anda mencegah masalah rongga mulut, gusi, atau penyakit gigi dan mulut?"
                choices={DentalHistoryInputs.pentingnyaMencegahMasalahGigi.map(item => ({id: item, name: item}))}
            />
            <RadioButtonGroupInput
                source="dentalHistory.bag4.apaAndaPercayaDapatMenjagaKesehatanGigi"
                label="3. Saya percaya bahwa saya dapat menjaga kesehatan gigi dan mulut saya!"
                choices={[
                    "Ya", "Tidak"
                ].map(item => ({id: item, name: item}))}
            />
            <RadioButtonGroupInput
                source="dentalHistory.bag4.seberapaTinggiAndaPercayaPadaKesehatanGigi"
                label="4. Saya percaya bahwa kesehatan gigi dan mulut saya:"
                choices={DentalHistoryInputs.seberapaTinggiAndaPercayaPadaKesehatanGigi.map(item => ({id: item, name: item}))}
            />
        </div>
    );
}