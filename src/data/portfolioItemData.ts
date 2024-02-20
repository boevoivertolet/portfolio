import incImage from '../assets/img/it_incubator_cover.png';

export const portfolioItemData: ItemType[] = [
      {
            id: 1,
            title: 'it-incubator',
            link: 'https://it-incubator.io/',
            img: incImage,
            description:
                  'Моё 1 место учёбы - школа "IT-INCUBATOR". На курсе я ознакомился с библиотекой ReactJS(Классы и хуки) + TS + Redux(toolkit). А так же научился работать с сервером(axios/fetch).Тут меня научили создавать, настраивать, дебажить, тестировать компоненты. Объяснили что такое состояние и Flux круговорот. И для чего нужен redux-thunk(middleware).',
      },
];

export type ItemType = {
      id: number;
      title: string;
      link: string;
      img: string;
      description: string;
};
