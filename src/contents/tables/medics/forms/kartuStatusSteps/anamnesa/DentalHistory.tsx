import { Box, Button, Paper, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DentalHistoryBagian1 from "./dentalHistory/Bagian1";
import DentalHistoryBagian2 from "./dentalHistory/Bagian2";

export default function DentalHistory(props: { onFinish: () => void, onGoBack: () => void }) {
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
            props.onFinish();
        }
    }, [activeStep]);

    return (
        <>
        <Stepper activeStep={activeStep} orientation="vertical">
            <Step>
                <StepLabel icon="-">Bagian I : Pengalaman Kesehatan Gigi dan Gejala-gejalanya</StepLabel>
                <StepContent>
                    <DentalHistoryBagian1/>

                    <Box sx={{ mb: 2, mt: 2 }}>
                        
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
                        
                    </Box>
                </StepContent>
            </Step>
            <Step>
                <StepLabel icon="-">Bagian II : Pemeliharan Kesehatan Gigi dan Mulut Sendiri</StepLabel>
                <StepContent>

                    <Box sx={{ mb: 2, mt: 2 }}>
                        <DentalHistoryBagian2/>
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
                <StepLabel icon="-">Bagian III : Camilan Diantara Waktu Makanan</StepLabel>
                <StepContent>

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
                <StepLabel icon="-">Bagian IV : Keyakinan Tentang Kesehatan Gigi dan Mulut</StepLabel>
                <StepContent>

                    <Box sx={{ mb: 2, mt: 2 }}>
                        
                        <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                        >
                            Selesai
                        </Button>
                        
                    </Box>
                </StepContent>
            </Step>
        </Stepper>
        {activeStep === 4 && (
            <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>Semua langkah sudah selesai</Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>Reset</Button>
                <Button onClick={handleNext} sx={{ mt: 1, mr: 1 }} variant="contained">Selanjutnya</Button>
                <Button onClick={props.onGoBack} sx={{ mt: 1, mr: 1 }} >Kembali</Button>
            </Paper>
        )}
        </>
    );
}