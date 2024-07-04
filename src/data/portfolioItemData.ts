import incImage from '../assets/img/it_incubator_cover.png'
import ylabImage from '../assets/img/ylabImage.jpg'

export const portfolioItemData: ItemType[] = [
    {
        id: 1,
        title: 'it-incubator',
        link: 'https://it-incubator.io/',
        img: incImage,
        description:
            'В школе "IT-INCUBATOR" я изучил библиотеку ReactJS, включая классы и хуки, а также освоил TypeScript и Redux Toolkit. Научился работать с сервером, используя axios и fetch. Освоил создание, настройку, отладку и тестирование компонентов, а также управление состоянием и концепцию Flux. Узнал о назначении и применении redux-thunk для асинхронных действий. Этот курс дал мне ценные знания и практические навыки для успешной работы в веб-разработке.',
    },
    {
        id: 2,
        title: 'Y_LAB university',
        link: 'https://university.ylab.io/',
        img: ylabImage,
        description:
            'В течение месяца я прошел интенсивный курс по React, успешно завершив его и получив сертификат. В рамках проекта онлайн магазина я реализовал функционал корзины, смену языка и темы, а также сортировку данных с сервера, включая управление комментариями и ответами. Научился создавать и переиспользовать лэйауты, что упростило разработку. Активно использовал Git для управления версиями кода и настроил роутинг для товаров. Этот курс значительно углубил мои знания и навыки в разработке на React.',
    },
]

export type ItemType = {
    id: number
    title: string
    link: string
    img: string
    description: string
}
