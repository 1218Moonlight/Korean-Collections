import React from 'react'
import ToolbarBase from '../../Toolbar/Base'
import MaterialTable from 'material-table';
import {xml} from '../../../Resources/Visitkorea/한국국제교류재단_한국음식정보_영어_201811.js'
import {xml2json} from '../../Utils/xml2json'
import Typography from '@material-ui/core/Typography'

export default function InformationFoods() {
    const foods_info_json = xml2json(xml);

    // let columns = [];
    // foods_info_json.root.header.header.map(h => (
    //     columns.push({title: h._text, field: h._text})
    // ));

    let columns = [
        // {title: "Sortation", field: "sortation"},
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
    //     {title: 'Area', field: 'area'},
    //     {title: 'Index', field: 'index'},
    //     {title: 'Code', field: 'code'}
    // ];

    // console.log(getXml2Json(foods_info_xml));

    return (
        <ToolbarBase>
            <MaterialTable
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
        </ToolbarBase>
    )
}