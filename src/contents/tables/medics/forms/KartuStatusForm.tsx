import { Box, Button, Step, StepContent, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import AnamnesaStep from "./kartuStatusSteps/AnamnesaStep";
import VitalSignStep from "./kartuStatusSteps/VitalSignStep";

export default function KartuStatusForm() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep(prevStep => prevStep + 1);
    }
    const handleBack = () => {
        setActiveStep(prevStep => prevStep - 1);
    }

    return (
        <Box>
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
        </Box>
    );
}