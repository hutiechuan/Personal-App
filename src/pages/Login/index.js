
import { Tabs } from "antd";

import React from "react";

import styles from "./index.module.less";

const {TabPane} = Tabs;

const Login =() =>{
    return (
        <div className={styles.loginContainer}>
            <div className={styles.login}>
            <Tabs defaultActiveKey='1'>
                <TabPane tab="账号密码登陆" key="1">
                    2
                </TabPane>

                <TabPane tab="手机号登陆" key="2">
                    1
                </TabPane>
            </Tabs>
            </div>
        </div>
    )
};

export default Login;