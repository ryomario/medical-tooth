import { Box, Button, Paper, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MedicalHistory from "./anamnesa/MedicalHistory";
import { TextInput } from "react-admin";
import DentalHistory from "./anamnesa/DentalHistory";
import PharmacologicalHistory from "./anamnesa/PharmacologicalHistory";

export type AnamnesaStepProps = {
    onFinish: () => void
}

export default function AnamnesaStep({ onFinish }: AnamnesaStepProps) {
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

    useEffect(() => {
        if (activeStep === 5) {
            onFinish();
        }
    }, [activeStep]);

    return (
        <>
        <Stepper activeStep={activeStep} orientation="vertical">
            <Step>
                <StepLabel icon="a">Medical History</StepLabel>
                <StepContent TransitionProps={{ unmountOnExit: false }}>
                    <MedicalHistory/>
                    <Box sx={{ mb: 2, mt: 2 }}>
                        <div>
                        <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                        >
                            Lanjut
                        </Button>
                        <Button
                            disabled
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                        >
                            Kembali
                        </Button>
                        </div>
                    </Box>
                </StepContent>
            </Step>
            <Step>
                <StepLabel icon="b">Social History</StepLabel>
                <StepContent>
                    <TextInput source="socialHistory" rows={5} multiline fullWidth resettable/>
                    <Box sx={{ mb: 2, mt: 2 }}>
                        <div>
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
                        </div>
                    </Box>
                </StepContent>
            </Step>
            <Step>
                <StepLabel icon="c">Dental History</StepLabel>
                <StepContent>
                    <DentalHistory onFinish={handleNext} onGoBack={handleBack}/>
                </StepContent>
            </Step>
            <Step>
                <StepLabel icon="d">Pharmacological History</StepLabel>
                <StepContent>
                    <PharmacologicalHistory/>
                    
                    <Box sx={{ mb: 2, mt: 2 }}>
                        <div>
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
                        </div>
                    </Box>
                </StepContent>
            </Step>
        </Stepper>
        {activeStep === 4 && (
            <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>Semua langkah sudah selesai</Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>Reset</Button>
                <Button onClick={handleNext} sx={{ mt: 1, mr: 1 }} variant="contained">Selanjutnya</Button>
            </Paper>
        )}
        </>
    );
}