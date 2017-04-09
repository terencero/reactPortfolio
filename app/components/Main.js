import * as React from 'react';
import { NavHeader } from './Header';
import { MainFooter } from './Footer';
import { Layout } from 'antd';
const { Content } = Layout;

class Main extends React.Component {
    render() {
        return (
            <Layout>
            <div>
                <div>
                <NavHeader />
                </div>
                <Content className="main-content">
                    {this.props.children}
                </Content>
                <MainFooter />
            </div>
            </Layout>
        );
    }
}

export { Main };