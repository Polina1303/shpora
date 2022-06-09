import React from "react";
import { Input } from 'antd';
const { Search } = Input;


function Form(){
  return(
      <div className="form">
<h1>Формы</h1>
<p>В HTML элементы формы, такие как {'<input>'},{'<textarea>'} и {'<select>'}, обычно сами управляют своим состоянием и обновляют
его когда пользователь вводит данные. В React мутабельное состояние обычно содержится в свойстве компонентов state и
 обновляется только через вызов setState() </p>
 <div className="componentscode">
     <pre>
         <code>
         class NameForm extends React.Component {'{'} <br/>
  constructor(props) {'{'} <br/>
    super(props); <br/>
    this.state ={'{'}value: ''{'}'}; <br/>

    this.handleChange = this.handleChange.bind(this); <br/>
    this.handleSubmit = this.handleSubmit.bind(this); <br/>
  {'}'}<br/>
  handleChange(event) {'{'} <br/>
    this.setState({'{'}value: event.target.value{'}'}); <br/>
  {'}'}<br/>
  render() {'{'}<br/>
    return (<br/>
      {'<form onSubmit={this.handleSubmit}>'} <br/>
        {'<label>'} <br/>
          Имя:
         {' <input type="text" value={this.state.value} onChange={this.handleChange} />'} <br/>
        {'</label>'} <br/>
       {'<input type="submit" value="Отправить" />'} <br/>
      {'</form>'} <br/>
    ); <br/>
  {'}'} <br/>
{'}'} <br/>
         </code>
     </pre>
 </div>
 <div>
 <Search placeholder="input search loading default" loading />
    <br />
    <br />
    <Search placeholder="input search loading with enterButton" loading enterButton />
    <br />
    <br />
    <Search placeholder="input search text" enterButton="Search" size="large" loading />
 </div>
<p>Мы установили атрибут value для поля ввода, и теперь в нём всегда будет отображаться значение this.state.value.
     Состояние React-компонента стало «источником истины». А так как каждое нажатие клавиши вызывает handleChange,
      который обновляет состояние React-компонента, значение в поле будет обновляться по мере того, как пользователь печатает.</p>
      </div>
  )
}

export default Form


