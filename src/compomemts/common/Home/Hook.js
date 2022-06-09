import React from "react";
import { Collapse } from 'antd';
const { Panel } = Collapse;

const text = `
useState — это хук (определение хука дано ниже). Мы вызываем его, чтобы наделить наш функциональный компонент внутренним
состоянием. React будет хранить это состояние между рендерами. Вызов useState возвращает массив с двумя элементами, который
содержит: текущее значение состояния и функцию для его обновления. Эту функцию можно использовать где угодно, например, в
обработчике событий. Она схожа с this.setState в классах, но не сливает новое и старое состояние вместе.Хук состояния можно 
 использовать в компоненте более одного раза.
`;

const text2 = `
С помощью хука эффекта useEffect вы можете выполнять побочные эффекты из функционального компонента. Он выполняет ту же роль,
 что и componentDidMount, componentDidUpdate и componentWillUnmount в React-классах, объединив их в единый API
`;
const text3 = `
Принимает объект контекста (значение, возвращённое из React.createContext) и возвращает текущее значение контекста для этого
 контекста. Текущее значение контекста определяется пропом value ближайшего <MyContext.Provider> над вызывающим компонентом в 
 дереве.
`;
function Hooks(){
  
  const onChange = (key) => {
    console.log(key)
  };

  return (
      <>
    <h1 className="hook">Хуки</h1>
    <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="useState" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="useEffect" key="2">
        <p>{text2}</p>
      </Panel>
      <Panel header="useContext" key="3">
        <p>{text3}</p>
      </Panel>
    </Collapse>
    </>
  );
  
    
}

export default Hooks