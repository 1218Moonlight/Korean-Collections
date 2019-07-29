import spaghettiRamen from '../../Resources/img/foods/noodles/Spaghetti-Ramen.jpg'
import seafoodRamen from '../../Resources/img/foods/noodles/Seafood-Ramen.jpg'
import jinjjaJjolmyeon from '../../Resources/img/foods/noodles/Jinjja-Jjolmyeon.jpg'
import BuldakStirFriedNoodles from '../../Resources/img/foods/noodles/Buldak-stir-fried-noodles.jpg'

export const posts = [
    {
        title: 'Spaghetti Ramen',
        path: spaghettiRamen,
        tag:['foods', 'noodles'], // 0 : top category, 1 : second category
        description:
            'Spaghetti Ramen!',
    },
    {
        title: 'Seafood Ramen',
        path: seafoodRamen,
        tag:['foods', 'noodles'],
        description:
            'Seafood Ramen!',
    },
    {
        title: 'Jinjja Jjolmyeon',
        path: jinjjaJjolmyeon,
        tag:['foods', 'noodles'],
        description:
            'Jinjja Jjolmyeon!',
    },
    {
        title: 'Buldak Stir-Fried Noodles',
        path: BuldakStirFriedNoodles,
        tag:['foods', 'noodles'],
        description:
            'Buldak Stir-Fried Noodles!',
    },
];