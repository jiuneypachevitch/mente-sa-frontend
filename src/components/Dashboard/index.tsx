import React from 'react';
import { PageDashboard } from "./style";
import { useAppSelector, useAppDispatch } from 'src/hooks';

/*const style = {
    display: "flex",
    "flex-direction": "column",
}*/

const Dashboard: React.FC = () => {
    const statusLogin = useAppSelector(state => state.login.isLogged);
    return (
        <PageDashboard>
        { statusLogin ? <h1>Logout</h1> : <h1>Fazer login</h1>}
        <br />
        <h1>It's me, Mario!</h1>
        </PageDashboard>
    );
}

export default Dashboard;
