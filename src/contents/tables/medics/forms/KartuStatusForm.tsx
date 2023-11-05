import { Box, Step, StepContent, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import AnamnesaStep from "./kartuStatusSteps/AnamnesaStep";

export default function KartuStatusForm() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <Box>
            <Stepper activeStep={activeStep} orientation="vertical">
                <Step>
                    <StepLabel>Anamnesa</StepLabel>
                    <StepContent>
                        <AnamnesaStep/>
                    </StepContent>
                </Step>
            </Stepper>
        </Box>
    );
}