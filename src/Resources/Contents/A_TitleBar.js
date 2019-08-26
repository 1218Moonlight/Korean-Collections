import React from 'react'
import TripOrigin from '@material-ui/icons/TripOrigin';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';


export const items = [
    [
        {icon: <ShoppingCartIcon/>, title: "Home"},
        // TODO: {icon: <ShoppingCartIcon/>, title: "Collections"},
    ],
    [
        {icon: <TripOrigin/>, title: "Tour"},
        {icon: <TripOrigin/>, title: "Foods"},
    ],
    [
        {icon: <LayersIcon/>, title: "SimteToKorean"},
        {icon: <PeopleIcon/>, title: "Contact"},
    ]
];