import { BrowserRouter } from 'react-router-dom';

import { useAuth } from "../hooks/auth";
import { USER_ROLE } from "../utils/roles";

import { CustomerRoutes } from './customer.routes';
import { AdminRoutes } from './admin.routes';
import { AuthRoutes } from './auth.routes';
import { useEffect } from 'react';
import { api } from '../services/api';

export function Routes() {
  const { signOut, user } = useAuth();

  useEffect(() => {
    api
    .get("/users/validated")
    .catch(error => signOut())
  }, [])

  function AccessRoutes(){
    switch(user.role){
      case USER_ROLE.ADMIN:
        return <AdminRoutes/>
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes/>
      default:
        return <CustomerRoutes/>
    }
  }

  return (
    <BrowserRouter>
      {user ? <AccessRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}