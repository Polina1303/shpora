import React from "react";
import { Menu } from 'antd'
import { Link } from "react-router-dom";

function AppHeader() {
   return (
      <div className="container-fluid">
         <div className="header" >
            <div className="logo" >
               <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC
             4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPS
             IjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0
             iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0i
             NC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K
             " height='20' />
               <a href="https://ru.reactjs.org/" class="react">React</a>
            </div>
            <Menu
               theme="dark"
               mode="horizontal"
               defaultSelectedKeys={['home']}>
               <Menu.Item >  <Link to='/'>Home</Link>  </Menu.Item>
               <Menu.Item> <Link to='/components'>Components</Link> </Menu.Item>
               <Menu.Item>  <Link to='/props'>Props</Link>  </Menu.Item>
               <Menu.Item>  <Link to='/onClick'>onClick</Link>  </Menu.Item>
               <Menu.Item>  <Link to='/lifecircle'>Life circle</Link>  </Menu.Item>
               <Menu.Item>  <Link to='/fragment'>React.Fragment</Link>  </Menu.Item>
               <Menu.Item> <Link to='/form'>Form</Link>  </Menu.Item>
               <Menu.Item> <Link to='/hooks'>Hooks</Link> </Menu.Item>
            </Menu>

         </div>
      </div>
   )
}


export default AppHeader

