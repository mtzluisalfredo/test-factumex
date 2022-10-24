import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components';
import { useAuth } from './contexts/auth';
import { LoginPage, ProtectedPage, RequireAuth, UploadPage } from './pages';
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
                <LoginPage />
              </WithAuth>
            }
          />
          <Route
            path='/login'
            element={
              <WithAuth>
                <LoginPage />
              </WithAuth>
            }
          />
          <Route
            path='/upload'
            element={
              <RequireAuth>
                <UploadPage />
              </RequireAuth>
            }
          />
          <Route
            path='/employees'
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
          <Route path='*' element={<Navigate to={user ? '/employees' : '/login'} replace />} />
        </Route>
      </Routes>
    </Layout>
  );
}
