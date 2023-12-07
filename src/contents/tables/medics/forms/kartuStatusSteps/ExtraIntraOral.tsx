import { Box, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import image from "./extra_intra_oral.png";
import { CheckboxGroupInput, RadioButtonGroupInput, TextInput } from "react-admin";

export default function ExtraIntraOral() {
    return (
        <div>
            <Box display={{ sm: 'block', md: 'flex', width: '100%' }} justifyContent="space-between">
                <Box flex={1} mr={{ sm: 0, md: '0.5em' }}>
                    <img src={image} width={300}/>
                </Box>
                <Box flex={2} order={-1} mr={{ sm: 0, md: '0.5em' }}>
                    <Typography fontWeight="bold">EXTRAORAL</Typography>

                    <Table padding="none" size="small">
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.extraOral.skin1.nama"
                                        label="skin"
                                        helperText="skin"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.skin1.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.skin1.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.skin1.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.skin1.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.extraOral.skin2.nama"
                                        label="skin"
                                        helperText="skin"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.skin2.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.skin2.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.skin2.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.skin2.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            {/* Vermillion borders */}
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.extraOral.vermilionBorders.nama"
                                        label="Vermilioin Borders"
                                        helperText="Vermilioin Borders"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.vermilionBorders.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.vermilionBorders.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.vermilionBorders.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.vermilionBorders.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            {/* Parotid Glands */}
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.extraOral.parotidGlands.nama"
                                        label="Parotid Glands"
                                        helperText="Parotid Glands"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.parotidGlands.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.parotidGlands.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.parotidGlands.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.parotidGlands.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            {/* Lymph Nodes */}
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.extraOral.lymphNodes.nama"
                                        label="Lymph Nodes"
                                        helperText="Lymph Nodes"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.lymphNodes.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.lymphNodes.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.lymphNodes.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.lymphNodes.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            {/* Anterior Cervical */}
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.extraOral.anteriorCervical.nama"
                                        label="Anterior Cervical"
                                        helperText="Anterior Cervical"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.anteriorCervical.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.anteriorCervical.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.anteriorCervical.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.anteriorCervical.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            {/* Posterior Cervical */}
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.extraOral.posteriorCervical.nama"
                                        label="Posterior Cervical"
                                        helperText="Posterior Cervical"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.posteriorCervical.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.posteriorCervical.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.posteriorCervical.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.posteriorCervical.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            {/* Submental */}
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.extraOral.submental.nama"
                                        label="Submental"
                                        helperText="Submental"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.submental.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.submental.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.submental.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.submental.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            {/* Submandibular */}
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.extraOral.submandibular.nama"
                                        label="Submandibular"
                                        helperText="Submandibular"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.submandibular.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.submandibular.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.submandibular.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.submandibular.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            {/* Supraclavicular */}
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.extraOral.supraclavicular.nama"
                                        label="Supraclavicular"
                                        helperText="Supraclavicular"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.supraclavicular.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.supraclavicular.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.supraclavicular.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.extraOral.supraclavicular.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <Typography fontWeight="bold" style={{marginTop: '20px'}}>INTRAORAL</Typography>

                    <Table padding="none" size="small">
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.intraOral.labialMucosa.nama"
                                        label="Labial Mucosa"
                                        helperText="Labial Mucosa"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.labialMucosa.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.labialMucosa.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.labialMucosa.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.labialMucosa.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.intraOral.labialVestibules.nama"
                                        label="Labial Vestibules"
                                        helperText="Labial Vestibules"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.labialVestibules.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.labialVestibules.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.labialVestibules.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.labialVestibules.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.intraOral.anteriorGingivae.nama"
                                        label="Anterior Gingivae"
                                        helperText="Anterior Gingivae"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.anteriorGingivae.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.anteriorGingivae.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.anteriorGingivae.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.anteriorGingivae.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.intraOral.buccalVestibules.nama"
                                        label="Buccal Vestibules"
                                        helperText="Buccal Vestibules"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.buccalVestibules.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.buccalVestibules.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.buccalVestibules.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.buccalVestibules.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.intraOral.buccalGingivae.nama"
                                        label="Buccal Gingivae"
                                        helperText="Buccal Gingivae"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.buccalGingivae.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.buccalGingivae.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.buccalGingivae.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.buccalGingivae.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.intraOral.tongueDorsal.nama"
                                        label="Tongue Dorsal"
                                        helperText="Tongue Dorsal"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.tongueDorsal.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.tongueDorsal.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.tongueDorsal.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.tongueDorsal.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.intraOral.tongueVentral.nama"
                                        label="Tongue Ventral"
                                        helperText="Tongue Ventral"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.tongueVentral.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.tongueVentral.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.tongueVentral.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.tongueVentral.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.intraOral.tongueLateral.nama"
                                        label="Tongue Lateral"
                                        helperText="Tongue Lateral"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.tongueLateral.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.tongueLateral.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.tongueLateral.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.tongueLateral.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.intraOral.lingualTonsils.nama"
                                        label="Lingual Tonsils"
                                        helperText="Lingual Tonsils"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.lingualTonsils.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.lingualTonsils.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.lingualTonsils.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.lingualTonsils.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.intraOral.floorOfMouth.nama"
                                        label="Floor of Mouth"
                                        helperText="Floor of Mouth"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.floorOfMouth.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.floorOfMouth.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.floorOfMouth.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.floorOfMouth.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.intraOral.lingualGingivae.nama"
                                        label="Lingual Gingivae"
                                        helperText="Lingual Gingivae"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.lingualGingivae.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.lingualGingivae.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.lingualGingivae.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.lingualGingivae.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.intraOral.tonsillarPilars.nama"
                                        label="Tonsillar Pilars"
                                        helperText="Tonsillar Pilars"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.tonsillarPilars.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.tonsillarPilars.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.tonsillarPilars.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.tonsillarPilars.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.intraOral.pharyngealWall.nama"
                                        label="Pharyngeal Wall"
                                        helperText="Pharyngeal Wall"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.pharyngealWall.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.pharyngealWall.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.pharyngealWall.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.pharyngealWall.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.intraOral.softPalate.nama"
                                        label="Soft Palate"
                                        helperText="Soft Palate"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.softPalate.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.softPalate.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.softPalate.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.softPalate.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.intraOral.uvula.nama"
                                        label="Uvula"
                                        helperText="Uvula"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.uvula.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.uvula.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.uvula.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.uvula.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.intraOral.hardPalate.nama"
                                        label="Hard Palate"
                                        helperText="Hard Palate"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.hardPalate.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.hardPalate.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.hardPalate.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.hardPalate.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.intraOral.palateGingivae.nama"
                                        label="Palate Gingivae"
                                        helperText="Palate Gingivae"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.palateGingivae.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.palateGingivae.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.palateGingivae.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.palateGingivae.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextInput
                                        source="extraIntra.intraOral.submandibularGlands.nama"
                                        label="Submandibular Glands"
                                        helperText="Submandibular Glands"
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.submandibularGlands.NO1"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.submandibularGlands.NO2"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.submandibularGlands.NO3"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RadioButtonGroupInput
                                        source="extraIntra.intraOral.submandibularGlands.NO4"
                                        choices={[{id: 'N',name: 'N'},{id: 'O',name: 'O'}]}
                                        label=""
                                        sx={{'& .MuiFormControlLabel-root': {margin: 0},'& .MuiRadio-root': {padding: 0}}}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
            </Box>
        </div>
    );
}