import React from 'react';
import TitleBarBase from '../../A_TitleBar/TitleBarBase'
import {styles} from '../../../Resources/Styles/Tour'
import {withStyles} from "@material-ui/core/styles/index";
import TourTopScreen from './TourTopScreen'
import TourBanner from './TourBanner'
import TourSearch from './TourSearch'
import TourImgHandler from '../../../Resources/Img/Tour/TourImgHandler'
import TourJson from '../../../Resources/Contents/Tour';

export default withStyles(styles)(class TourBase extends React.Component {
    state = {
        items: TourJson,
        itemsSize: TourJson.length,
    };

    handleSearchFieldChange = (e) => {
        let searchText = e.target.value.toLowerCase();
        let collections = [];

        Object.keys(TourJson).forEach(index => {
            let title = TourJson[index].이름.toLowerCase();
            if (title.indexOf(searchText) !== -1) {
                collections.push(TourJson[index])
            }
        });

        this.setState({
            items: collections,
            itemsSize: collections.length
        })
    };

    render() {
        const {classes} = this.props;
        return (
            <TitleBarBase>
                <TourTopScreen classes={classes}/>
                <TourSearch classes={classes} search={this.handleSearchFieldChange}/>
                <TourBanner classes={classes} items={this.state.items} itemsSize={this.state.itemsSize}
                            TourImgHandler={TourImgHandler}/>
            </TitleBarBase>
        );
    }
})