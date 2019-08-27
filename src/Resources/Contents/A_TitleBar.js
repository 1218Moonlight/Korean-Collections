import React from 'react'
import TripOrigin from '@material-ui/icons/TripOrigin';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';


export const items = [
    [
        {icon: <ShoppingCartIcon/>, endPoint: "Home", title:"Home"},
        // TODO: {icon: <ShoppingCartIcon/>, endPoint: "Collections"},
    ],
    [
        {icon: <TripOrigin/>, endPoint: "Tour", title: "Korean Tour"},
        {icon: <TripOrigin/>, endPoint: "Foods", title: "Korean Foods"},
    ],
    [
        {icon: <LayersIcon/>, endPoint: "SimteToKorean", title: "learn Korean [Simte]"},
        {icon: <PeopleIcon/>, endPoint: "Contact", title: "Contact Us"},
    ]
];