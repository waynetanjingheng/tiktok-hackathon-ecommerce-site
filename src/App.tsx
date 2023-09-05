import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import PATHS from './constants/paths'
import Home from './pages/Home'
import MyCart from './pages/MyCart';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
        <ModalsProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={PATHS.HOME} element={<Home />} />
                    <Route path={PATHS.CART} element={<MyCart />} />
                </Routes>
            </BrowserRouter>
        </ModalsProvider>
    </MantineProvider>
  );
}

export default App;
