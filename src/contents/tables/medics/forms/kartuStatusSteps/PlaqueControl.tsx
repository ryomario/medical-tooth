import { NumberInput, RadioButtonGroupInput, TextInput, useInput } from "react-admin";
import "./plaqueControl.css";
import { useCallback, useEffect, useState } from "react";
import { Box, InputAdornment } from "@mui/material";

export default function PlaqueControl() {
    const [skor, setSkor] = useState(0);
    const [totSkor, setTotSkor] = useState(0);
    const [tot, setTot] = useState(0);
    const handleChange = (event: any) => {
        event.preventDefault();
        setTotSkor(event.target.value);
    }
    const handleChangeTot = (event: any) => {
        event.preventDefault();
        setTot(event.target.value);
    }
    useEffect(()=>{
        setSkor(totSkor/tot * 100);
        console.log(totSkor/tot * 100);
    },[tot,totSkor]);
    return (
        <div>
            <NumberInput source="plaqueControl.kunjunganKe" label="Kunjungan ke-" defaultValue={1}/>

            <Plaque/>


            <Box display="flex" alignItems="center" columnGap={3}>
                <NumberInput source="plaqueControl.totSkor" label="" value={totSkor} onChange={handleChange}/>
                <h5>/</h5>
                <NumberInput source="plaqueControl.tot" label="" value={tot} onChange={handleChangeTot}/>
                <h5>=</h5>
                <NumberInput source="plaqueControl.skor" label="Skor" value={skor} InputProps={{endAdornment: (<InputAdornment position="end">%</InputAdornment>)}}/>
            </Box>

            <RadioButtonGroupInput
                source="plaqueControl.kategori"
                label="Kategori"
                helperText="<15% = Baik"
                choices={[{id:'Baik',name:'Baik'},{id:'Buruk',name:'Buruk'}]}
            />
        </div>
    );
}

function Plaque() {
    const source = 'plaqueControl.controls';
    return (
        <div className="plaque-control">
            <div className="plaque-control-row" style={{borderBottom: '2px solid black'}}>
                <div className="plaque-control-item flex-end" style={{borderRight: '2px solid black'}}>
                    <div className="plaque-control-item-row">{[18,17,16,15,14,13,12,11].map(label => (<PlaqueSquare key={label} label={label.toString()} source={source+'.control_'+label}/>))}</div>
                    <div className="plaque-control-item-row">{[55,54,53,52,51].map(label => (<PlaqueSquare key={label} label={label.toString()} source={source+'.control_'+label}/>))}</div>
                </div>
                <div className="plaque-control-item flex-start" style={{borderLeft: '2px solid black'}}>
                    <div className="plaque-control-item-row">{[21,22,23,24,25,26,27,28].map(label => (<PlaqueSquare key={label} label={label.toString()} source={source+'.control_'+label}/>))}</div>
                    <div className="plaque-control-item-row">{[61,62,63,64,65].map(label => (<PlaqueSquare key={label} label={label.toString()} source={source+'.control_'+label}/>))}</div>
                </div>
            </div>
            <div className="plaque-control-row" style={{borderTop: '2px solid black'}}>
                <div className="plaque-control-item flex-end" style={{borderRight: '2px solid black'}}>
                    <div className="plaque-control-item-row">{[85,84,83,82,81].map(label => (<PlaqueSquare key={label} label={label.toString()} source={source+'.control_'+label}/>))}</div>
                    <div className="plaque-control-item-row">{[48,47,46,45,44,43,42,41].map(label => (<PlaqueSquare key={label} label={label.toString()} source={source+'.control_'+label}/>))}</div>
                </div>
                <div className="plaque-control-item flex-start" style={{borderLeft: '2px solid black'}}>
                    <div className="plaque-control-item-row">{[71,72,73,74,75].map(label => (<PlaqueSquare key={label} label={label.toString()} source={source+'.control_'+label}/>))}</div>
                    <div className="plaque-control-item-row">{[31,32,33,34,35,36,37,38].map(label => (<PlaqueSquare key={label} label={label.toString()} source={source+'.control_'+label}/>))}</div>
                </div>
            </div>
        </div>
    );
}
function PlaqueSquare({source, label}: {source: string, label: string}) {
    const {id: idUp, field: fieldUp, fieldState: fieldStateUp} = useInput<boolean>({ source: source+'.up', defaultValue: false });
    const {id: idDown, field: fieldDown, fieldState: fieldStateDown} = useInput<boolean>({ source: source+'.down', defaultValue: false });
    const {id: idLeft, field: fieldLeft, fieldState: fieldStateLeft} = useInput<boolean>({ source: source+'.left', defaultValue: false });
    const {id: idRight, field: fieldRight, fieldState: fieldStateRight} = useInput<boolean>({ source: source+'.right', defaultValue: false });

    const format = (value: any) => {
        if (value && value !== 'false') {
            return true;
        }
        return false;
    };
    const handleChangeUp = useCallback(
        (event: any) => {
            event.target.value = format(event.target.checked);
            fieldUp.onChange(event);

            fieldUp.onBlur();
        }
    ,[fieldUp]);
    const handleChangeDown = useCallback(
        (event: any) => {
            event.target.value = format(event.target.checked);
            fieldDown.onChange(event);

            fieldDown.onBlur();
        }
    ,[fieldDown]);
    const handleChangeLeft = useCallback(
        (event: any) => {
            event.target.value = format(event.target.checked);
            fieldLeft.onChange(event);

            fieldLeft.onBlur();
        }
    ,[fieldLeft]);
    const handleChangeRight = useCallback(
        (event: any) => {
            event.target.value = format(event.target.checked);
            fieldRight.onChange(event);

            fieldRight.onBlur();
        }
    ,[fieldRight]);

    return (
        <div className="plaque-control-box">
            <span>{label}</span>
            <div className="plaque-control-square">
                <div className="plaque-control-triangleUp"><input type="checkbox" {...fieldUp} id={idUp} onChange={handleChangeUp} checked={format(fieldUp.value)} /><label htmlFor={idUp} className="triangle"></label></div>
                <div className="plaque-control-triangleDown"><input type="checkbox" {...fieldDown} id={idDown} onChange={handleChangeDown} checked={format(fieldDown.value)} /><label htmlFor={idDown} className="triangle"></label></div>
                <div className="plaque-control-triangleLeft"><input type="checkbox" {...fieldLeft} id={idLeft} onChange={handleChangeLeft} checked={format(fieldLeft.value)} /><label htmlFor={idLeft} className="triangle"></label></div>
                <div className="plaque-control-triangleRight"><input type="checkbox" {...fieldRight} id={idRight} onChange={handleChangeRight} checked={format(fieldRight.value)} /><label htmlFor={idRight} className="triangle"></label></div>
            </div>
        </div>
    );
}