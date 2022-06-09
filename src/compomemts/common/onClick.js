import React from "react";
import { Button } from 'antd';

function OnClick() {
    return (
        <div className="onclick">
            <h1>Обработка событий</h1>
            <p>Обработка событий в React-элементах очень похожа на обработку событий в DOM-элементах. Но есть несколько синтаксических
                отличий:</p>
            <ul>
                <li>События в React именуются в стиле camelCase вместо нижнего регистра.</li>
                <li>С JSX вы передаёте функцию как обработчик события вместо строки.</li>
            </ul>
            <div className="componentscode">
                <pre>
                    <code>
                        {'<button onClick={activateLasers}>'} <br />
                        Активировать лазеры <br />
                        {'</button>'}
                    </code>
                </pre>
            </div>
            <Button type="primary">  Активировать лазеры</Button>
            <p>Ещё одно отличие — в React нельзя предотвратить обработчик события по умолчанию, вернув false.
                Нужно явно вызвать preventDefault.</p>
            <div className="componentscode">
                <pre>
                    <code>
                        function Form() {'{'} <br />
                        function handleSubmit(e) {'{'} <br />
                        e.preventDefault(); <br />
                        console.log('Отправлена форма.'); <br />
                        {'}'} <br />
                        return ( <br />
                        {' <form onsubmit="{handleSubmit}">'} <br />
                        {'<button type="submit">Отправить</button>'} <br />
                        {'</form>'}<br />
                        );<br />
                        {'}'}<br />
                    </code>
                </pre>
            </div>
            <p>В приведённом выше коде e — это синтетическое событие.</p>
        </div>
    )
}


export default OnClick