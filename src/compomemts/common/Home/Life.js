import React from "react";
import Clock from "./clock";

function Life(){
    return(
<div className="life">
    <h1>Жизненный цикл</h1>
    <div className="componentscode">
        <pre>
            <code>
            class Clock extends React.Component {"{"} <br/>
  constructor(props) {"{"} <br/>
    super(props);<br/>
    this.state ={'{date: new Date()}'};<br/>
  {'}'}<br/>

  componentDidMount() {"{"}<br/>
    this.timerID = setInterval(<br/>
     {' () => this.tick(),'}<br/>
      1000<br/>
    );<br/>
  {'}'}<br/>

  componentWillUnmount() {"{"} <br/>
    clearInterval(this.timerID);<br/>
  {'}'}<br/>

  tick() {"{"}<br/>
    this.setState({"{"}<br/>
     {' date: new Date()'}<br/>
   {'}'}); <br/>
  {'}'}<br/>

  render() {"{"} <br/>
    return ( <br/>
     {' <div>'} <br/>
        {'<h1>Привет, мир!</h1>'}<br/>
        {'<h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>'}<br/>
      {'</div>'}<br/>
    ); <br/>
  {'}'}<br/>
{'}'}<br/>
</code>
        </pre>
    </div>
    <Clock/>
 <ol>
<li>Когда мы передаём {'<Clock />'} в ReactDOM.render(), React вызывает конструктор компонента. Clock должен отображать текущее время,
 поэтому мы задаём начальное состояние this.state объектом с текущим временем.</li>
 <li>React вызывает метод render() компонента Clock. Таким образом React узнаёт, что отобразить на экране.
      Далее React обновляет DOM так, чтобы он соответствовал выводу рендера Clock.</li>
 <li>Как только вывод рендера Clock вставлен в DOM, React вызывает метод жизненного цикла componentDidMount().
      Внутри него компонент Clock указывает браузеру установить таймер, который будет вызывать tick() раз в секунду.</li> 
 <li>Таймер вызывает tick() ежесекундно. Внутри tick() мы просим React обновить состояние компонента, вызывая setState() с 
     текущим временем. React реагирует на изменение состояния и снова запускает render(). На этот раз this.state.date в методе
      render() содержит новое значение, поэтому React заменит DOM. Таким образом компонент Clock каждую секунду обновляет UI.</li>
  <li>Если компонент Clock когда-либо удалится из DOM, React вызовет метод жизненного цикла componentWillUnmount()
       и сбросит таймер.</li>             
 </ol>
 
</div>
    )
}

export default Life