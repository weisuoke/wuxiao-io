import * as React from 'react'
import { Link } from 'gatsby'

const navList = [
  { to: '/article/', label: '文章' },
  { to: '/lab/', label: '实验室' },
  { to: '/code/', label: '源码阅读' },
  { to: '/portfolio/', label: '作品' },
  { to: '/efficiency/', label: '效率' },
  { to: '/minimalism/', label: '极简' },
]

const Nav = () => {
  return (
    <div className="wuxiaoio-nav">
      {
        navList.map(list => {
          return (
            <div className="navItem" key={list.label}>
              <Link to={list.to}>{list.label}</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Nav