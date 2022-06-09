import React from "react";
function Components(){
    return(
        <div className="components">
  <h1>Функциональные и классовые компоненты</h1>
  <p>Компоненты позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности.</p>
  <p>Проще всего объявить React-компонент как функцию:</p>
  <div className="componentscode">
  <pre>
      <code >function Welcome(props) {'{'} <br/>
         return {'<h1>'}Привет, {'{'}props.name{'}'}{'</h1>'}; <br/>
{'}'}
</code>
  </pre>
  </div>
        <p>Ещё компоненты можно определять как классы ES6:</p>
        <div className="componentscode">
     <pre>
         <code>
        class Welcome extends React.Component {'{'} <br/>
 render() {'{'} <br/>
    return {'<h1>'} Привет,  {'{'}this.props.name {'}'} {'</h1>'}; <br/>
       {'}'} <br/>
 {'}'}
         </code>
     </pre>
  </div>
    <h3>React.PureComponent</h3>
   <p> React.PureComponent похож на React.Component. Отличие заключается в том, что React.Component не реализует
     shouldComponentUpdate(), а React.PureComponent реализует его поверхностным сравнением пропсов и состояния.
     </p>
        </div>
    )
}

export default Components