import { PagePropTypes } from "../ShowPage";

export default function PlaqueControlShow(props: PagePropTypes) {
    const {record,...rest} = props;
    if (!record) return null;
    const plaque = record['plaqueControl'];
    return (
        <div {...rest}>
            <span className="f14"><b>5. Plaque Control</b></span>
            <br />
            <br />
            <div>
                Kunjungan ke : {plaque['kunjunganKe']}
            </div>
            <br />
            <div>
                <Plaque data={plaque?.['controls']}/>
            </div>
            <br />
            <div className="d-flex justify-content-between">
                <div>
                    Skor : {plaque['totSkor']} / {plaque['tot']} &times; 100% = {plaque['skor']}%
                </div>
                <div>
                    Kategori : &lt; 15% = Baik, &#8925; 15% = Buruk
                </div>
            </div>
            <br />
            <div>
                Kategori : Baik <i className={plaque['kategori'] == 'Baik'?'far fa-check-square':'far fa-square'}></i> 
                {" "}/ Buruk <i className={plaque['kategori'] == 'Buruk'?'far fa-check-square':'far fa-square'}></i>
            </div>
        </div>
    );
}

function Plaque({data}:{data:any}) {
    return (
        <div className="plaque-control" style={{"--size-square": '40px'}}>
            <div className="plaque-control-row" style={{borderBottom: '2px solid black'}}>
                <div className="plaque-control-item flex-end" style={{borderRight: '2px solid black'}}>
                    <div className="plaque-control-item-row">{[18,17,16,15,14,13,12,11].map(label => (<PlaqueSquare key={label} label={label.toString()} data={data['control_'+label]}/>))}</div>
                    <div className="plaque-control-item-row">{[55,54,53,52,51].map(label => (<PlaqueSquare key={label} label={label.toString()} data={data['control_'+label]}/>))}</div>
                </div>
                <div className="plaque-control-item flex-start" style={{borderLeft: '2px solid black'}}>
                    <div className="plaque-control-item-row">{[21,22,23,24,25,26,27,28].map(label => (<PlaqueSquare key={label} label={label.toString()} data={data['control_'+label]}/>))}</div>
                    <div className="plaque-control-item-row">{[61,62,63,64,65].map(label => (<PlaqueSquare key={label} label={label.toString()} data={data['control_'+label]}/>))}</div>
                </div>
            </div>
            <div className="plaque-control-row" style={{borderTop: '2px solid black'}}>
                <div className="plaque-control-item flex-end" style={{borderRight: '2px solid black'}}>
                    <div className="plaque-control-item-row">{[85,84,83,82,81].map(label => (<PlaqueSquare key={label} label={label.toString()} data={data['control_'+label]}/>))}</div>
                    <div className="plaque-control-item-row">{[48,47,46,45,44,43,42,41].map(label => (<PlaqueSquare key={label} label={label.toString()} data={data['control_'+label]}/>))}</div>
                </div>
                <div className="plaque-control-item flex-start" style={{borderLeft: '2px solid black'}}>
                    <div className="plaque-control-item-row">{[71,72,73,74,75].map(label => (<PlaqueSquare key={label} label={label.toString()} data={data['control_'+label]}/>))}</div>
                    <div className="plaque-control-item-row">{[31,32,33,34,35,36,37,38].map(label => (<PlaqueSquare key={label} label={label.toString()} data={data['control_'+label]}/>))}</div>
                </div>
            </div>
        </div>
    );
}
function PlaqueSquare({data, label}: {data: any, label: string}) {
    const isUpChecked = data?.['up'];
    const isDownChecked = data?.['down'];
    const isLeftChecked = data?.['left'];
    const isRightChecked = data?.['right'];

    const format = (value: any) => {
        if (value && value !== 'false') {
            return true;
        }
        return false;
    };
    return (
        <div className="plaque-control-box">
            <span>{label}</span>
            <div className="plaque-control-square">
                <div className="plaque-control-triangleUp"><input type="checkbox" disabled checked={format(isUpChecked)} /><label className="triangle"></label></div>
                <div className="plaque-control-triangleDown"><input type="checkbox" disabled checked={format(isDownChecked)} /><label className="triangle"></label></div>
                <div className="plaque-control-triangleLeft"><input type="checkbox" disabled checked={format(isLeftChecked)} /><label className="triangle"></label></div>
                <div className="plaque-control-triangleRight"><input type="checkbox" disabled checked={format(isRightChecked)} /><label className="triangle"></label></div>
            </div>
        </div>
    );
}