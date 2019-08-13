import React from 'react'
import ToolbarBase from '../Toolbar/Base'
import AreaCode from '../Visitkorea/AreaCode'
import MaterialTable from 'material-table';
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles';
import {styles} from '../../Resources/Styles/Tour'


const useStyles = makeStyles(styles);

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

    const classes = useStyles();
    return (
        <AreaCode render={({items, numOfRows, pageNo, totalCount}) => (
            <ToolbarBase>
                {(() => {
                    // console.log(items, numOfRows, pageNo, totalCount);
                    const data = [];
                    items.map(item => data.push({
                        area: item.name._text,
                        index: item.rnum._text,
                        code: item.code._text
                    }));

                    if (numOfRows === '0') {
                        return (<p>Empty</p>) // Todo
                    } else {
                        // return (<p>Not Empty</p>)
                        return <div>
                            <MaterialTable
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
                            <Typography className={classes.Copyright} variant="overline" display="block" gutterBottom align={'center'}>
                                영문 관광정보 서비스 by 한국관광공사, CC BY 라이센스
                            </Typography>
                        </div>
                    }
                })()}
            </ToolbarBase>
        )}/>
    )
})