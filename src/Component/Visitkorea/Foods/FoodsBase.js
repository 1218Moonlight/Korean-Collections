import React from 'react'
import TitleBarBase from '../../A_TitleBar/TitleBarBase'
import MaterialTable from 'material-table';
import {xml} from '../../../Resources/Visitkorea/한국국제교류재단_한국음식정보_영어_201811.js'
import {xml2json} from '../../Z_Utils/xml2json'
import Typography from '@material-ui/core/Typography'

export default function FoodsBase() {
    const foods_info_json = xml2json(xml);

    // let columns = [];
    // foods_info_json.root.header.header.map(h => (
    //     columns.push({endPoint: h._text, field: h._text})
    // ));

    let columns = [
        // {endPoint: "Sortation", field: "sortation"},
        {title: "Name", field: "name"},
        {title: "Eng", field: "eng"},
        {title: "Info", field: "info"}
    ];

    let data = [];
    foods_info_json.root.Row.map(r => (
        // console.log(r.구분._text)
        data.push({"name": r.음식명._text, "eng": r.영문._text, "info": r.음식설명._text})
        // data.push({"sortation": r.구분._text, "name": r.음식명._text, "eng": r.영문._text, "info": r.음식설명._text})
    ));
    // console.log(columns);

    // const columns = [
    //     {endPoint: 'Area', field: 'area'},
    //     {endPoint: 'Index', field: 'index'},
    //     {endPoint: 'Code', field: 'code'}
    // ];

    // console.log(getXml2Json(foods_info_xml));

    return (
        <TitleBarBase>
            <MaterialTable
                style={{marginTop:60}}
                title="Foods Dictionary"
                columns={columns}
                data={data}
                // actions={[{
                //     icon: 'save',
                //     tooltip: 'infomation',
                //     onClick: (event, rowData) => alert("Click " + rowData.area)
                // }]}
            />
            <Typography variant="overline" display="block" gutterBottom
                        align={'center'}>
                출처 : 한국국제교류재단
            </Typography>
        </TitleBarBase>
    )
}