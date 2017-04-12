import * as React from 'react';
import { Link } from 'react-router';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Sider } = Layout;

class NavHeader extends React.Component {
    render() {
        return (
           <Layout>
                <Sider
                    breakpoint="md"
                    collapsedWidth="0"
                    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                <Header className='header'>
                    <div className='logo' src='../public/img/pencilsketch.png'>
                        <ul>
                            <li>
                                <Link to='/about' activeClassName='active' >About</Link>
                            </li>
                            <li>
                                <Link to='/portfolio' activeClassName='active'>Portfolio</Link>
                            </li>
                        </ul>
                    </div>
                </Header>
                </Sider>
            </Layout>
        );
    }
}

export { NavHeader };