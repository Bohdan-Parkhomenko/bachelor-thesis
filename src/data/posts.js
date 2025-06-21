import Image1 from "../assets/Children-are-our-future.png";
import Image2 from "../assets/dolia-vchytelia.webp";
import Image3 from "../assets/uspikh-navchannia.webp";
import Image4 from "../assets/psykholoh-emocii.webp";
import Image5 from "../assets/volontery-syla.webp";
import Image6 from "../assets/svyato-vesny.webp";
import Image7 from "../assets/vidkryti-dveri.webp";

import { fetchNews } from "./newsApi";

const posts2 = await fetchNews();

const posts = [
    {
        id: "dity-maibutne",
        title: "Діти – наше майбутнє: важливість підтримки",
        category: "Новини",
        readTime: "5 хвилин читання",
        author: "Олександр Іваненко",
        publishedAt: "22 січня 2021",
        image: Image1,
        content: `
            <h2>Heading 2</h2>
            <p><strong>Dolor enim eu tortor urna sed duis nulla...</strong></p>
            <h3>Heading 3</h3>
            <p>Morbi sed imperdiet in ipsum, adipiscing elit...</p>
        `
    },
    {
        id: "dolia-vchytelia",
        title: "Роль вихователя у формуванні дитячих мрій",
        category: "Історії",
        readTime: "4 хвилини читання",
        author: "Ірина Ковальчук",
        publishedAt: "5 березня 2022",
        image: Image2,
        content: `
            <h2>Роль наставництва</h2>
            <p>Кожна дитина потребує уваги та підтримки...</p>
            <h3>Підтримка щодня</h3>
            <p>Навіть маленькі жести можуть мати великий вплив...</p>
        `
    },
    {
        id: "uspikh-navchannia",
        title: "Освіта як ключ до майбутнього дітей",
        category: "Аналітика",
        readTime: "6 хвилин читання",
        author: "Наталя Сердюк",
        publishedAt: "10 вересня 2023",
        image: Image3,
        content: `
            <h2>Значення шкільного середовища</h2>
            <p>Освіта в дитячому будинку — це більше, ніж просто уроки...</p>
            <h3>Інновації в навчанні</h3>
            <p>Ми впроваджуємо інтерактивні методики...</p>
        `
    },
    {
        id: "volontery-syla",
        title: "Волонтери — наша невидима сила",
        category: "Історії успіху",
        readTime: "5 хвилин читання",
        author: "Андрій Литвин",
        publishedAt: "3 серпня 2023",
        image: Image4,
        content: `
            <h2>Велика місія допомоги</h2>
            <p>Волонтери щодня підтримують дітей — добром і турботою.</p>
            <h3>Справжня подяка</h3>
            <p>Їх внесок — неоціненний для розвитку наших вихованців.</p>
        `
    },
    {
        id: "psykholoh-emocii",
        title: "Робота психолога з емоціями дитини",
        category: "Поради для батьків",
        readTime: "6 хвилин читання",
        author: "Марина Сидоренко",
        publishedAt: "20 квітня 2023",
        image: Image5,
        content: `
            <h2>Важливість емоційної підтримки</h2>
            <p>Робота з емоціями допомагає дитині адаптуватися...</p>
            <h3>Методи психологічної допомоги</h3>
            <p>Групові та індивідуальні зустрічі приносять результати.</p>
        `
    },
    {
        id: "svyato-vesny",
        title: "Свято весни в нашому притулку",
        category: "Події",
        readTime: "3 хвилини читання",
        author: "Олена Мельник",
        publishedAt: "10 березня 2024",
        image: Image6,
        content: `
            <h2>Радість у кожному кроці</h2>
            <p>Наші вихованці підготували концерт та поробки для гостей.</p>
            <h3>Об’єднання родин</h3>
            <p>На свято прийшли небайдужі мешканці громади.</p>
        `
    },
    {
        id: "peremoga-na-konkursi",
        title: "Наша перемога у міському конкурсі малюнків",
        category: "Досягнення",
        readTime: "4 хвилини читання",
        author: "Тетяна Гаврилюк",
        publishedAt: "18 жовтня 2023",
        image: Image6,
        content: `
            <h2>Креативність наших дітей</h2>
            <p>Малюнки вразили журі оригінальністю й щирістю.</p>
            <h3>Пишаємося результатами</h3>
            <p>Наші вихованці посіли перші місця серед 40 учасників.</p>
        `
    },
    {
        id: "vidkryti-dveri",
        title: "День відкритих дверей для громади",
        category: "Події",
        readTime: "5 хвилин читання",
        author: "Сергій Павленко",
        publishedAt: "12 грудня 2023",
        image: Image7,
        content: `
            <h2>Зустріч з добром</h2>
            <p>Ми відкрили двері всім охочим побачити життя притулку.</p>
            <h3>Враження гостей</h3>
            <p>Люди були вражені атмосферою турботи й родинності.</p>
        `
    },
];

export default posts;
