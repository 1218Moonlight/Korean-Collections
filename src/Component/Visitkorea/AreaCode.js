import React from 'react'

export default (class AreaCode extends React.Component {
    state = {
        items: [],
        numOfRows: '0',
        pageNo: '0',
        totalCount: '0'
    };

    constructor(props) {
        super(props);
        this._getAreaCode(this._getXml2Json.bind(this));
    }

    componentWillMount(){
        return this.state.items !== '';
    }

    _getXml2Json = (body) => {
        const convert = require('xml-js');
        const options = {compact: true, spaces: 4};
        const result1 = convert.xml2json(body, options);
        const bodyJson = JSON.parse(result1).response.body;
        // console.log(bodyJson.totalCount._text);
        this.setState({
            items: bodyJson.items.item,
            numOfRows: bodyJson.numOfRows._text,
            pageNo: bodyJson.pageNo._text,
            totalCount: bodyJson.totalCount._text
        });
        // console.log(bodyJson.items);
        // this.defaultProps({
        //     items: bodyJson.items,
        //     numOfRows: bodyJson.numOfRows._text,
        //     pageNo: bodyJson.pageNo._text,
        //     totalCount: bodyJson.totalCount._text
        // })
    };

    _getAreaCode = (_getXml2Json) => {
        let request = require('request');
        let url = 'https://api.visitkorea.or.kr/openapi/service/rest/EngService/areaCode';

        let queryParams = '?' + encodeURIComponent('ServiceKey') + '=RFTC3k4z2wJ5GJHf53NSi218tLreQZw%2F0bboS1I45pE6w1z8v%2ByLQi12XTkrwVDgeeqd0GpEy67fbvoIp83buQ%3D%3D';
        queryParams += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent('인증키 (URL- Encode)');
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('50');
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
        queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC');
        queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest');
        // queryParams += '&' + encodeURIComponent('areaCode') + '=' + encodeURIComponent('1');

        request({
            url: url + queryParams,
            method: 'GET'
        }, function (error, response, body) {
            _getXml2Json(body)
        });
    };

    render() {
        return (
            <div>
                {this.props.render({
                    items: this.state.items,
                    numOfRows: this.state.numOfRows,
                    pageNo: this.state.pageNo,
                    totalCount: this.state.totalCount,
                })}
            </div>
        )
    }
})