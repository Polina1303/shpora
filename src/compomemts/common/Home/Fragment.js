import React from "react";
import { Rate } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

function Fragment(){
    return(
<div className="fragment">
    <h1>Фрагменты</h1>
    <div>
     <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
    </div>
    <p>Фрагменты позволяют формировать список дочерних элементов, не создавая лишних узлов в DOM</p>
    <div className="componentscode" >
        <pre>
            <code>
            render() {'{'} <br/>
  return ( <br/>
    {'<React.Fragment>'} <br/>
     {' <ChildA />'} <br/>
     {' <ChildB />'} <br/>
     {' <ChildC />'} <br/>
   {' </React.Fragment>'} <br/>
  ); <br/>
{'}'} <br/>
            </code>
        </pre>
    </div>
    <p>Также существует сокращённая запись.</p>
    <div className="componentscode">
        <pre>
            <code>
            class Columns extends React.Component {'{'} <br/>
  render() {'{'} <br/>
    return ( <br/>
     {'<>'} <br/>
        <td>Привет</td> <br/>
        <td>Мир</td> <br/>
     {'</>'} <br/>
    ); <br/>
  {'}'} <br/>
{'}'} <br/>
            </code>
        </pre>
    </div>
  <h2>Фрагменты с ключами</h2> 
  <p>Фрагменты, объявленные с помощью {'<React.Fragment>'}, могут иметь ключи. Например, их можно использовать при создании
       списка определений, преобразовав коллекцию в массив фрагментов.
       Без указания атрибута `key`, React выдаст предупреждение об его отсутствии.</p> 
 <div className="componentscode">
     <pre>
         <code>
         function Glossary(props) {'{'} <br/>
  return ( <br/>
    {'<dl>'} <br/>
      {'{'}props.items.map(item {'=>'}( <br/>
        {'<React.Fragment key={item.id}>'} <br/>
         {'<dt>{item.term}</dt>'} <br/>
         {'<dd>{item.description}</dd>'} <br/>
        {'</React.Fragment>'} <br/>
      )){'}'} <br/>
   {'</dl>'} <br/>
  ); <br/>
{'}'} <br/>
         </code>
     </pre>
 </div>
 <p>key — это единственный атрибут, допустимый у Fragment. В будущем мы планируем добавить поддержку дополнительных атрибутов, 
     например, обработчиков событий.</p>
</div> 
    )  
}

export default Fragment