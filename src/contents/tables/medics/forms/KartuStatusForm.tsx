import { Box, Step, StepContent, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import AnamnesaStep from "./kartuStatusSteps/AnamnesaStep";

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
                        
                    </StepContent>
                </Step>
            </Stepper>
        </Box>
    );
}