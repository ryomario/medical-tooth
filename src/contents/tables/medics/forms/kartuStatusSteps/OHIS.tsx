import { Box, Grid, Stack } from "@mui/material";
import { RadioButtonGroupInput, TextInput } from "react-admin";

export default function OHIS() {
    return (
        <div>
            <Box display={{xs:'block', sm:'flex', width: '100%'}}>
                <Box>
                    <fieldset className="MuiFormControl-root MuiFormControl-marginDense ra-input css-17g58nf-MuiFormControl-root-RaCheckboxGroupInput-root">
                        <legend className="MuiFormLabel-root MuiFormLabel-colorPrimary RaCheckboxGroupInput-label css-u4tvz2-MuiFormLabel-root">
                            <span>Debris index</span>
                        </legend>
                        <Stack direction="column">
                            <Stack direction="row">
                                <TextInput
                                    source="ohis.debrisIndex.index.i_1"
                                    label=""
                                    variant="outlined"
                                    margin="none"
                                    sx={{'& .MuiFormHelperText-root': {display: 'none'}}}
                                />
                                <TextInput
                                    source="ohis.debrisIndex.index.i_2"
                                    label=""
                                    variant="outlined"
                                    margin="none"
                                    sx={{'& .MuiFormHelperText-root': {display: 'none'}}}
                                />
                                <TextInput
                                    source="ohis.debrisIndex.index.i_3"
                                    label=""
                                    variant="outlined"
                                    margin="none"
                                    sx={{'& .MuiFormHelperText-root': {display: 'none'}}}
                                />
                            </Stack>
                            <Stack direction="row">
                                <TextInput
                                    source="ohis.debrisIndex.index.i_4"
                                    label=""
                                    variant="outlined"
                                    margin="none"
                                    sx={{'& .MuiFormHelperText-root': {display: 'none'}}}
                                />
                                <TextInput
                                    source="ohis.debrisIndex.index.i_5"
                                    label=""
                                    variant="outlined"
                                    margin="none"
                                    sx={{'& .MuiFormHelperText-root': {display: 'none'}}}
                                />
                                <TextInput
                                    source="ohis.debrisIndex.index.i_6"
                                    label=""
                                    variant="outlined"
                                    margin="none"
                                    sx={{'& .MuiFormHelperText-root': {display: 'none'}}}
                                />
                            </Stack>
                        </Stack>

                        <TextInput
                            source="ohis.debrisIndex.value"
                            label="DI-S"
                            helperText="Debris index"
                        />
                    </fieldset>
                </Box>
                <Box ml={{xs: 0, sm: 5}}>
                    <fieldset className="MuiFormControl-root MuiFormControl-marginDense ra-input css-17g58nf-MuiFormControl-root-RaCheckboxGroupInput-root">
                        <legend className="MuiFormLabel-root MuiFormLabel-colorPrimary RaCheckboxGroupInput-label css-u4tvz2-MuiFormLabel-root">
                            <span>Calculus index</span>
                        </legend>
                        <Stack direction="column">
                            <Stack direction="row">
                                <TextInput
                                    source="ohis.calculusIndex.index.i_1"
                                    label=""
                                    variant="outlined"
                                    margin="none"
                                    sx={{'& .MuiFormHelperText-root': {display: 'none'}}}
                                />
                                <TextInput
                                    source="ohis.calculusIndex.index.i_2"
                                    label=""
                                    variant="outlined"
                                    margin="none"
                                    sx={{'& .MuiFormHelperText-root': {display: 'none'}}}
                                />
                                <TextInput
                                    source="ohis.calculusIndex.index.i_3"
                                    label=""
                                    variant="outlined"
                                    margin="none"
                                    sx={{'& .MuiFormHelperText-root': {display: 'none'}}}
                                />
                            </Stack>
                            <Stack direction="row">
                                <TextInput
                                    source="ohis.calculusIndex.index.i_4"
                                    label=""
                                    variant="outlined"
                                    margin="none"
                                    sx={{'& .MuiFormHelperText-root': {display: 'none'}}}
                                />
                                <TextInput
                                    source="ohis.calculusIndex.index.i_5"
                                    label=""
                                    variant="outlined"
                                    margin="none"
                                    sx={{'& .MuiFormHelperText-root': {display: 'none'}}}
                                />
                                <TextInput
                                    source="ohis.calculusIndex.index.i_6"
                                    label=""
                                    variant="outlined"
                                    margin="none"
                                    sx={{'& .MuiFormHelperText-root': {display: 'none'}}}
                                />
                            </Stack>
                        </Stack>

                        <TextInput
                            source="ohis.calculusIndex.value"
                            label="CI-S"
                            helperText="Calculus index"
                        />
                    </fieldset>
                </Box>
            </Box>


            <Box display={{xs:'block', sm:'flex'}}>
                <Box mr={{xs: 0, sm: 3}}>
                    <TextInput
                        source="ohis.value"
                        label="OHI-S index"
                        helperText="DI-S + CI-S"
                    />
                </Box>
                <Box>
                    <RadioButtonGroupInput
                        source="ohis.kriteria"
                        label="Kriteria OHI-S"
                        choices={[
                            {id:'B',name:'B (Baik)'},
                            {id:'S',name:'S (Sedang)'},
                            {id:'K',name:'K (Buruk)'}
                        ]}
                    />
                </Box>
            </Box>
        </div>
    );
}