import { useContext } from 'react';
import AuthContext from '../contexts/authcontext';

const useAuth = () => useContext(AuthContext);

export default useAuth;