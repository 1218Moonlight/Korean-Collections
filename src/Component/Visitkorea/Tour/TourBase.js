import React from 'react';
import TitleBarBase from '../../A_TitleBar/TitleBarBase'
import {styles} from '../../../Resources/Styles/Tour'
import {withStyles} from "@material-ui/core/styles/index";
import TourTopScreen from './TourTopScreen'
import TourBanner from './TourBanner'
import TourSearch from './TourSearch'
import DialogBase from '../../Dialog/Base'
import {items} from '../../../Resources/Contents/Tour'
import imgScreen from '../../../Resources/Img/tour/seoul-1477046_1280.webp'

export default withStyles(styles)(class TourBase extends React.Component {
    state = {
        items: items,
        itemsSize: items.length,
    };

    handleSearchFieldChange = (e) => {
        let searchText = e.target.value.toLowerCase();
        let collections = [];

        Object.keys(items).forEach(index => {
            let title = items[index].title.toLowerCase();
            if (title.indexOf(searchText) !== -1) {
                collections.push(items[index])
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
            <DialogBase
                render={({HandleClickOpen}) => (
                    <TitleBarBase>
                        <TourTopScreen classes={classes} imgScreen={imgScreen}/>
                        <TourSearch classes={classes} search={this.handleSearchFieldChange}/>
                        <TourBanner classes={classes} items={this.state.items} itemsSize={this.state.itemsSize}
                                    HandleClickOpen={HandleClickOpen}/>
                        <p>출처 : 한국관광공사</p>
                    </TitleBarBase>
                )}
            />
        );
    }
})