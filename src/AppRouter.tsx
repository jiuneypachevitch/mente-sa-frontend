import { ReactNode} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Patient from './views/Patient';
import ResetPassword from './components/ResetPassword';
import { routesName } from './utils/routesName';
import { queryClient } from './services/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';

import { isAuthenticated, logout } from './services/Auth/service';
import { useAppDispatch } from 'src/hooks';
import { logIn, logOut } from 'src/store/loginReducer';

interface PrivateRouteProps {
    children?: ReactNode;
}

const ProtectedRoute = ({children}:PrivateRouteProps) => {
    if (!isAuthenticated()) {
        return <Navigate to={routesName.home} replace />
    }
    return <>{children}</>;
}

export default function AppRouter() {
    const dispatch = useAppDispatch();
    isAuthenticated() ? dispatch(logIn()) : dispatch(logOut());
    const LogOutClick = () => {
        logout();
        dispatch(logOut());
        return <></>;
    };

    return ( 
    <>
    <QueryClientProvider client={queryClient}>
        <Routes>
            <Route 
                index 
                element={<SignIn/>} />
            <Route 
                path={routesName.signOut} 
                element={<LogOutClick />} />
            <Route 
                path={routesName.signIn} 
                element={<SignIn/>} />
            <Route 
                path={routesName.signUp} 
                element={<SignUp/>} />
            <Route 
                path={routesName.resetPassword} 
                element={<ResetPassword/>} />
            <Route path={`/${routesName.dashboard}`} element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            } />
            <Route path={`/${routesName.dashboard}/${routesName.patients}`} element={
                <ProtectedRoute>
                    <Patient />
                </ProtectedRoute>
            } />

        </Routes>
    </QueryClientProvider>
    </>
    );
}
