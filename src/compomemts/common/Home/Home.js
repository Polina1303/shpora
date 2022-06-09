import React from "react";
import { Image } from 'antd';

function Home() {
    return (
        <div className="home">
            <h1>React</h1>
            <h2>JavaScript-библиотека для создания пользовательских интерфейсов</h2>

            <Image className="homesrc" width={350} src='https://heroku-shpora.herokuapp.com/static/media/react.530f51f4.jpeg' />

        </div>
    )
}

export default Home