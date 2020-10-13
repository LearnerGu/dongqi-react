import React, { Component } from 'react'
import { menuList } from '../../config/menuConfig'
import './NavBar.less'
export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <ul className="nav">
          {menuList.map(item => {
            if(item.children) {
              return <li key={item.menuId}>
                <a className="box-wrap" href={item.menuPath}>
                  {item.menuText}
                  <div className="horn" >
                    <div className="horizen-lt"></div>
                    <div className="vertical-lt"></div>
                    <div className="horizen-rt"></div>
                    <div className="vertical-rt"></div>
                    <div className="horizen-rb"></div>
                    <div className="vertical-rb"></div>
                    <div className="horizen-lb"></div>
                    <div className="vertical-lb"></div>
                  </div>
                </a>
                <ul className="subs" >
                  {
                    item.children.map(subitem => {
                      return <li key={subitem.key} ><a href={subitem.menuPath}>{subitem.menuText}</a></li>
                    })
                  }
                </ul>
              </li>
            }else if(item.imgUrl) {
              return <li key={item.menuId}>
                <a className={"box-wrap" + " " + item.class} href={item.menuPath}>
                  <img src={item.imgUrl} alt={item.alt}/>
                </a>
              </li>
            }else {
              return <li key={item.menuId}>
                <a className="box-wrap" href={item.menuPath}>
                  {item.menuText}
                  <div className="horn" >
                    <div className="horizen-lt"></div>
                    <div className="vertical-lt"></div>
                    <div className="horizen-rt"></div>
                    <div className="vertical-rt"></div>
                    <div className="horizen-rb"></div>
                    <div className="vertical-rb"></div>
                    <div className="horizen-lb"></div>
                    <div className="vertical-lb"></div>
                  </div>
                </a>
              </li> 
            }
          })}
        </ul>
      </div>
    )
  }
}
