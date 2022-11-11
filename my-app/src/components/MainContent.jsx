import React from 'react';
export class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }
    getRandomColor() {
        return "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
    }
    setRandomColor(event) {
        event.target.style.background = this.getRandomColor();
        event.target.style.color = this.getRandomColor();
    }
    render() {
        return <>
            <p>Мої хобі</p>
            <ul>
                <li>Спорт</li>
                <li>Читання</li>
                <li onClick={this.setRandomColor}>Вишивання бісером</li>
            </ul>
            <p onClick={this.setRandomColor}>Мої улюблені книги</p>
            <ol>
                <li>"Граф Монте-Крісто"</li>
                <li>"Портрет Доріана Грея"</li>
                <li>"Усі квіти Парижа"</li>
            </ol>
            <p>Київ - столиця та найбільше місто України, одне з найбільших і найстаріших міст Європи. Розташований у середній
                течії Дніпра, у північній Наддніпрянщині.Політичний, соціально-економічний, транспортний, освітньо-науковий,
                історичний, культурний та духовний центр України. Місце розташування центральних органів влади України,
                іноземних місій, штаб-квартир більшості підприємств і громадських об'єднань, що працюють в Україні.</p>
            <p>
                <a href="https://uk.wikipedia.org/wiki/%D0%9A%D0%B8%D1%97%D0%B2#:~:text=%D0%9A%D0%B8%CC%81%D1%97%D0%B2%20(%D0%9C%D0%A4%D0%90%3A%20%5B%CB%88k%C9%AAjiu%CC%AF%5D,%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%BD%D0%B8%D0%B9%20%D1%82%D0%B0%20%D0%B4%D1%83%D1%85%D0%BE%D0%B2%D0%BD%D0%B8%D0%B9%20%D1%86%D0%B5%D0%BD%D1%82%D1%80%20%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8."
                    target="_blank">
                    <img src="https://city-afisha.kiev.ua/wp-content/uploads/2021/06/kiiv-afisha.jpeg" alt="Картинка Києва" style={{ width: '50%' }} />
                </a>
            </p>
        </>
    }
}