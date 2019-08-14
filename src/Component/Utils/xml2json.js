const convert = require('xml-js');

export function xml2json(body) {
    const options = {compact: true, spaces: 4};
    const result1 = convert.xml2json(body, options);
    return JSON.parse(result1);
}