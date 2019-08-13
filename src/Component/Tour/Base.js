import React from 'react'
import ToolbarBase from '../Toolbar/Base'
import AreaCode from '../Visitkorea/AreaCode'
import MaterialTable from 'material-table';


// Todo: Copyright
export default (function TourBase() {
    const [state] = React.useState({
        columns: [
            {title: 'Area', field: 'area'},
            {title: 'Index', field: 'index'},
            {title: 'Code', field: 'code'},
            // {title: 'Birth Year', field: 'birthYear', type: 'numeric'},
            // {
            //     title: 'Birth Place',
            //     field: 'birthCity',
            //     lookup: {34: 'İstanbul', 63: 'Şanlıurfa'},
            // },
        ],
        // data: [
        //     {name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63},
        //     {
        //         name: 'Zerya Betül',
        //         surname: 'Baran',
        //         birthYear: 2017,
        //         birthCity: 34,
        //     },
        // ],
    });


    return (
        <AreaCode render={({items, numOfRows, pageNo, totalCount}) => (
            <ToolbarBase>
                {(() => {
                    // console.log(items, numOfRows, pageNo, totalCount);
                    const data = [];
                    items.map(item => data.push({area: item.name._text, index: item.rnum._text, code: item.code._text}));

                    if (numOfRows === '0') {
                        return (<p>Empty</p>) // Todo
                    } else {
                        // return (<p>Not Empty</p>)
                        return <MaterialTable
                            title="Area Tours"
                            columns={state.columns}
                            // data={state.data}
                            data={data}
                            actions={[{
                                icon: 'save',
                                tooltip: 'infomation',
                                onClick: (event, rowData) => alert("Click " + rowData.area)
                            }]}
                        />
                    }
                })()}
            </ToolbarBase>
        )}/>
    )
})