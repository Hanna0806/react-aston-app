import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { usersSelector } from '../../redux/slices/usersSlice';

export const AuthRoutes = () => {
    const { activeUser } = useSelector(usersSelector);
    
    return (
        activeUser ? <Navigate to={ROUTES.SEARCH} /> : <Outlet />
    )
}