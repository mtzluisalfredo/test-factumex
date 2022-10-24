import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components';
import { useAuth } from './contexts/auth';
import { Login, Employees, RequireAuth, Upload } from './pages';
import WithAuth from './pages/WithAuth';

export default function App() {
  const { stateAuth } = useAuth();
  const { user } = stateAuth;

  return (
    <Layout>
      <Routes>
        <Route>
          <Route
            path='/'
            element={
              <WithAuth>
                <Login />
              </WithAuth>
            }
          />
          <Route
            path='/login'
            element={
              <WithAuth>
                <Login />
              </WithAuth>
            }
          />
          <Route
            path='/upload'
            element={
              <RequireAuth>
                <Upload />
              </RequireAuth>
            }
          />
          <Route
            path='/employees'
            element={
              <RequireAuth>
                <Employees />
              </RequireAuth>
            }
          />
          <Route path='*' element={<Navigate to={user ? '/employees' : '/login'} replace />} />
        </Route>
      </Routes>
    </Layout>
  );
}
