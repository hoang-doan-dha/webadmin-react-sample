import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import AdminsScreen from './AdminsScreen/AdminsScreen';
import DashboardScreen from './DashboardScreen/DashboardScreen';
import ManageUsersScreen from './ManageUsersScreen/ManageUsersScreen';
import './Layout.css';
import NotFoundScreen from './NotFoundScreen/NotFoundScreen';

function Layout() {
    return (
        <div className="layout">
            <Navbar/>
            <Sidebar />
            <div className="content">
                <Switch>
                    <Route path="/dashboard" component={DashboardScreen} />
                    <Route path="/users" component={ManageUsersScreen} />
                    <Route path="/admins" component={AdminsScreen} />
                    <Route path="*" component={NotFoundScreen} />
                </Switch>
            </div>
        </div>
    )
}

export default Layout
