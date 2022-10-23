import { Routes, Route } from 'react-router-dom';
import { Guard, LoginPage, ProtectedPage, PublicPage, RequireAuth } from './pages';

export default function App() {
  return (
    <Routes>
      <Route element={<Guard />}>
        <Route path='/' element={<PublicPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/protected'
          element={
            <RequireAuth>
              <ProtectedPage />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}
