import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { IRootState } from '../../redux/store';
import { ROUTES } from '../../constants/constants';

export const AuthRoutes = () => {
    const { activeUser } = useSelector((state: IRootState) => state.users);
    
    return (
        activeUser ? <Navigate to={ROUTES.HOME} /> : <Outlet />
    )
}