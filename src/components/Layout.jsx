import { Layout as LayoutAnd } from 'antd';
const { Header, Footer, Content } = LayoutAnd;

import { Navbar } from "./Navbar"

export function Layout({ children, setShowUsers, setUser, isAuth }) {
  const headerStyle = {
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#213555',
  }
  
  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#213555',
    backgroundColor: '#F0F0F0',
    padding: '64px'
  }
  
  const footerStyle = {
    textAlign: 'center',
    color: '#213555',
    backgroundColor: '#E5D283',
  }
  
  return (
    <LayoutAnd>
      <Header style={headerStyle}>
        <Navbar setShowUsers={setShowUsers} setUser={setUser} isAuth={isAuth} />
      </Header>
      <Content style={contentStyle}>
        {children}
      </Content>
      <Footer style={footerStyle}>All right reserved 2023</Footer>
    </LayoutAnd>
  )
}
