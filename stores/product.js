import {
    defineStore
} from "pinia";

export const useProductStore = defineStore('product', {
    state: () => {
        return {
            product: [{
                    id: 1,
                    img: 'asset1.webp',
                    name: 'کیف سطلی',
                    price: 69000
                },
                {
                    id: 2,
                    img: 'asset4.webp',
                    name: 'تی شرت کتون',
                    price: 59000

                },
                {
                    id: 3,
                    img: 'asset7.webp',
                    name: 'دامن پاپیونی',
                    price: 59000

                },
                {
                    id: 4,
                    img: 'asset2.webp',
                    name: 'گوشواره آویز',
                    price: 59000
                },
                {
                    id: 5,
                    img: 'asset5.webp',
                    name: 'جیب های زیپ دار',
                    price: 59000
                },
                {
                    id: 6,
                    img: 'asset8.webp',
                    name: 'گوشواره فلزی',
                    price: 59000
                },
                {
                    id: 7,
                    img: 'asset3.webp',
                    name: 'تی شرت کتون',
                    price: 59000
                },
                {
                    id: 8,
                    img: 'asset6.webp',
                    name: 'کیف چرمی گرد',
                    price: 59000
                },
                {
                    id: 9,
                    img: 'asset9.webp',
                    name: 'کیف کراس بادی فلپ',
                    price: 59000

                }
            ]
        }
    }
})