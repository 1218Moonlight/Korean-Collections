import spaghettiRamen from '../Img/foods/noodles/Spaghetti-Ramen.jpg'
import seafoodRamen from '../Img/foods/noodles/Seafood-Ramen.jpg'
import jinjjaJjolmyeon from '../Img/foods/noodles/Jinjja-Jjolmyeon.jpg'
import BuldakStirFriedNoodles from '../Img/foods/noodles/Buldak-stir-fried-noodles.jpg'

const type = 0; // Collections Type Index

export const posts = [
    {
        type: type,
        title: 'Spaghetti Ramen',
        path: spaghettiRamen,
        tag:['foods', 'noodles'], // 0 : top category, 1 : second category
        description:
            'Spaghetti Ramen!',
        movie: 'vC_HGF0yGwU' // youtube id
    },
    {
        type: type,
        title: 'Seafood Ramen',
        path: seafoodRamen,
        tag:['foods', 'noodles'],
        description:
            'Seafood Ramen!',
        movie: 'vC_HGF0yGwU'
    },
    {
        type: type,
        title: 'Jinjja Jjolmyeon',
        path: jinjjaJjolmyeon,
        tag:['foods', 'noodles'],
        description:
            'Jinjja Jjolmyeon!',
        movie: 'vC_HGF0yGwU'
    },
    {
        type: type,
        title: 'Buldak Stir-Fried Noodles',
        path: BuldakStirFriedNoodles,
        tag:['foods', 'noodles'],
        description:
            'Buldak Stir-Fried Noodles!',
        movie: 'vC_HGF0yGwU'
    },
];