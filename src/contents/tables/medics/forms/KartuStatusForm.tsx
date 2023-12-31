import { Box, Button, Paper, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import { useState } from "react";
import AnamnesaStep from "./kartuStatusSteps/AnamnesaStep";
import VitalSignStep from "./kartuStatusSteps/VitalSignStep";
import ExtraIntraOral from "./kartuStatusSteps/ExtraIntraOral";
import OHIS from "./kartuStatusSteps/OHIS";
import PlaqueControl from "./kartuStatusSteps/PlaqueControl";
import PenilaianGusi from "./kartuStatusSteps/PenilaianGusi";

export default function KartuStatusForm() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep(prevStep => prevStep + 1);
    }
    const handleBack = () => {
        setActiveStep(prevStep => prevStep - 1);
    }
    const handleReset = () => {
        setActiveStep(0);
    }

    return (
        <Box width="100%">
            <Stepper activeStep={activeStep} orientation="vertical">
                <Step>
                    <StepLabel>Anamnesa</StepLabel>
                    <StepContent>
                        <AnamnesaStep onFinish={handleNext}/>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Tanda-tanda vital</StepLabel>
                    <StepContent>
                        <VitalSignStep/>

                        <Box sx={{ mb: 2, mt: 2 }}>
                            
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                Lanjut
                            </Button>
                            <Button
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                Kembali
                            </Button>
                            
                        </Box>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Ekstra dan Intra Oral</StepLabel>
                    <StepContent>
                        <ExtraIntraOral/>

                        <Box sx={{ mb: 2, mt: 2 }}>
                            
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                Lanjut
                            </Button>
                            <Button
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                Kembali
                            </Button>
                            
                        </Box>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Pemeriksaan Oral Hygiene (OHI-S)</StepLabel>
                    <StepContent>
                        <OHIS/>

                        <Box sx={{ mb: 2, mt: 2 }}>
                            
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                Lanjut
                            </Button>
                            <Button
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                Kembali
                            </Button>
                            
                        </Box>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Plaque Control</StepLabel>
                    <StepContent>
                        <PlaqueControl/>

                        <Box sx={{ mb: 2, mt: 2 }}>
                            
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                Lanjut
                            </Button>
                            <Button
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                Kembali
                            </Button>
                            
                        </Box>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Penilaian Gusi / Status Periodontal (CPITN)</StepLabel>
                    <StepContent>
                        <PenilaianGusi/>

                        <Box sx={{ mb: 2, mt: 2 }}>
                            
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                Selesai
                            </Button>
                            <Button
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                Kembali
                            </Button>
                            
                        </Box>
                    </StepContent>
                </Step>
            </Stepper>
            {activeStep === 6 && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>Semua langkah sudah selesai</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>Reset</Button>
                    {/* <Button onClick={handleNext} sx={{ mt: 1, mr: 1 }} variant="contained">Selanjutnya</Button> */}
                </Paper>
            )}
        </Box>
    );
}