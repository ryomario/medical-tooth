import { PagePropTypes } from "../ShowPage";

export default function ExtraIntraOralShow(props: PagePropTypes) {
    const {record,...rest} = props;
    if (!record) return null;
    const extraIntra = record['extraIntra'];
    return (
        <div {...rest}>
            <span className="f14"><b>3. Extra dan Intra Oral</b></span>
            <br/>
            <span><b>EXTRAORAL</b></span>
            <br/>
            <table width="100%">
                <thead>
                    <tr>
                        <th colSpan={2} style={{width:'25%'}}></th>
                        <th>N</th><th className="pr-3">O</th>
                        <th>N</th><th className="pr-3">O</th>
                        <th>N</th><th className="pr-3">O</th>
                        <th>N</th><th>O</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Skin</td>
                        <td className="minWidth-fitContent">- Skin <span className="text-underline">{extraIntra['extraOral']?.['skin1']?.['nama']}</span></td>
                        <td><i className={extraIntra['extraOral']?.['skin1']?.['NO1']=='N'?'far fa-check-square':'far fa-square'}></i> </td>
                        <td><i className={extraIntra['extraOral']?.['skin1']?.['NO1']=='O'?'far fa-check-square':'far fa-square'}></i> </td>
                        <td><i className={extraIntra['extraOral']?.['skin1']?.['NO2']=='N'?'far fa-check-square':'far fa-square'}></i> </td>
                        <td><i className={extraIntra['extraOral']?.['skin1']?.['NO2']=='O'?'far fa-check-square':'far fa-square'}></i> </td>
                        <td><i className={extraIntra['extraOral']?.['skin1']?.['NO3']=='N'?'far fa-check-square':'far fa-square'}></i> </td>
                        <td><i className={extraIntra['extraOral']?.['skin1']?.['NO3']=='O'?'far fa-check-square':'far fa-square'}></i> </td>
                        <td><i className={extraIntra['extraOral']?.['skin1']?.['NO4']=='N'?'far fa-check-square':'far fa-square'}></i> </td>
                        <td><i className={extraIntra['extraOral']?.['skin1']?.['NO4']=='O'?'far fa-check-square':'far fa-square'}></i> </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="minWidth-fitContent">- Skin <span className="text-underline">{extraIntra['extraOral']?.['skin2']?.['nama']}</span></td>
                        <td><i className={extraIntra['extraOral']?.['skin2']?.['NO1']=='N'?'far fa-check-square':'far fa-square'}></i> </td>
                        <td><i className={extraIntra['extraOral']?.['skin2']?.['NO1']=='O'?'far fa-check-square':'far fa-square'}></i> </td>
                        <td><i className={extraIntra['extraOral']?.['skin2']?.['NO2']=='N'?'far fa-check-square':'far fa-square'}></i> </td>
                        <td><i className={extraIntra['extraOral']?.['skin2']?.['NO2']=='O'?'far fa-check-square':'far fa-square'}></i> </td>
                        <td><i className={extraIntra['extraOral']?.['skin2']?.['NO3']=='N'?'far fa-check-square':'far fa-square'}></i> </td>
                        <td><i className={extraIntra['extraOral']?.['skin2']?.['NO3']=='O'?'far fa-check-square':'far fa-square'}></i> </td>
                        <td><i className={extraIntra['extraOral']?.['skin2']?.['NO4']=='N'?'far fa-check-square':'far fa-square'}></i> </td>
                        <td><i className={extraIntra['extraOral']?.['skin2']?.['NO4']=='O'?'far fa-check-square':'far fa-square'}></i> </td>
                    </tr>
                    {[
                        {key:'vermilionBorders',name:'Vermilion Borders'},
                        {key:'parotidGlands',name:'Parotid Glands'},
                        {key:'lymphNodes',name:'Lymph Nodes'},
                        {key:'anteriorCervical',name:'Anterior Cervical'},
                        {key:'posteriorCervical',name:'Posterior Cervical'},
                        {key:'submental',name:'Submental'},
                        {key:'submandibular',name:'Submandibular'},
                        {key:'supraclavicular',name:'Supraclavicular'},
                    ].map(value => (
                        <Row key={value.key} data={extraIntra['extraOral']} keyName={value.key} name={value.name}/>
                    ))}
                </tbody>
            </table>
            <br/>
            <span><b>INTRAORAL</b></span>
            <br/>
            <table width="100%">
                <thead>
                    <tr>
                        <th colSpan={2} style={{width:'25%'}}></th>
                        <th>N</th><th className="pr-3">O</th>
                        <th>N</th><th className="pr-3">O</th>
                        <th>N</th><th className="pr-3">O</th>
                        <th>N</th><th>O</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        {key:'labialMucosa',name:'Labial Mucosa'},
                        {key:'labialVestibules',name:'Labial Vestibules'},
                        {key:'anteriorGingivae',name:'Anterior Gingivae'},
                        {key:'buccalVestibules',name:'Buccal Vestibules'},
                        {key:'buccalGingivae',name:'Buccal Gingivae'},
                        {key:'tongueDorsal',name:'Tongue Dorsal'},
                        {key:'tongueVentral',name:'Tongue Ventral'},
                        {key:'tongueLateral',name:'Tongue Lateral'},
                        {key:'lingualTonsils',name:'Lingual Tonsils'},
                        {key:'floorOfMouth',name:'Floor Of Mouth'},
                        {key:'lingualGingivae',name:'Lingual Gingivae'},
                        {key:'tonsillarPilars',name:'Tonsillar Pilars'},
                        {key:'pharyngealWall',name:'Pharyngeal Wall'},
                        {key:'softPalate',name:'Soft Palate'},
                        {key:'uvula',name:'Uvula'},
                        {key:'hardPalate',name:'Hard Palate'},
                        {key:'palateGingivae',name:'Palate Gingivae'},
                        {key:'submandibularGlands',name:'Submandibular Glands'},
                    ].map(value => (
                        <Row key={value.key} data={extraIntra['intraOral']} keyName={value.key} name={value.name}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function Row(props:{data:any,keyName:string,name:string}){
    const {data, keyName, name} = props;
    return (
        <tr>
            <td className="minWidth-fitContent" colSpan={2}>{name} <span className="text-underline">{data?.[keyName]?.['nama']}</span></td>
            <td><i className={data?.[keyName]?.['NO1']=='N'?'far fa-check-square':'far fa-square'}></i> </td>
            <td><i className={data?.[keyName]?.['NO1']=='O'?'far fa-check-square':'far fa-square'}></i> </td>
            <td><i className={data?.[keyName]?.['NO2']=='N'?'far fa-check-square':'far fa-square'}></i> </td>
            <td><i className={data?.[keyName]?.['NO2']=='O'?'far fa-check-square':'far fa-square'}></i> </td>
            <td><i className={data?.[keyName]?.['NO3']=='N'?'far fa-check-square':'far fa-square'}></i> </td>
            <td><i className={data?.[keyName]?.['NO3']=='O'?'far fa-check-square':'far fa-square'}></i> </td>
            <td><i className={data?.[keyName]?.['NO4']=='N'?'far fa-check-square':'far fa-square'}></i> </td>
            <td><i className={data?.[keyName]?.['NO4']=='O'?'far fa-check-square':'far fa-square'}></i> </td>
        </tr>
    );
}