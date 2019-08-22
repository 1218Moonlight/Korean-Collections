import React from 'react'
import TripOrigin from '@material-ui/icons/TripOrigin';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';

export const items = [
    [
        {title: "Home", icon: <ShoppingCartIcon/>},
        {title: "Notice", icon: <ShoppingCartIcon/>},
        {title: "Collections", icon: <ShoppingCartIcon/>},
        {title: "Contact", icon: <PeopleIcon/>},
    ],
    [
        {title: "Tour", icon: <TripOrigin/>},
        {title: "Foods", icon: <TripOrigin/>},
    ],
    [
        {title: "SimteToKorean", icon: <LayersIcon/>}
    ]
];