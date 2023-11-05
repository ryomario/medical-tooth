import { Box, Button, Step, StepContent, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import MedicalHistory from "./anamnesa/MedicalHistory";

export default function AnamnesaStep() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep(prevStep => prevStep + 1);
    }
    const handleBack = () => {
        setActiveStep(prevStep => prevStep - 1);
    }

    return (
        <Stepper activeStep={activeStep} orientation="vertical">
            <Step>
                <StepLabel icon="a">Medical History</StepLabel>
                <StepContent>
                    <MedicalHistory/>
                    <Box sx={{ mb: 2 }}>
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
            </Step>
            <Step>
                <StepLabel icon="c">Dental History</StepLabel>
            </Step>
            <Step>
                <StepLabel icon="d">Pharmacological History</StepLabel>
            </Step>
        </Stepper>
    );
}