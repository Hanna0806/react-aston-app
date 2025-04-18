import React from 'react';
import { AUTH_TYPES } from '../../constants/general';
import Auth from '../../components/Auth/Auth';

const SignUp: React.FC = () => {
    return <Auth authType={AUTH_TYPES.SIGN_IN} />
};

export default SignUp;