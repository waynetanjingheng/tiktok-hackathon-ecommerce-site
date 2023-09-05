import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import PATHS from './constants/paths'
import Home from './pages/Home'

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
        <BrowserRouter>
            <Routes>
                <Route path={PATHS.HOME} element={<Home />} />
            </Routes>
        </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
