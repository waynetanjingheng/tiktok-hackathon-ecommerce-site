import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import PATHS from "./constants/paths";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";

function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <ModalsProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path={PATHS.HOME} element={<Home />} />
                        <Route path={PATHS.PAYMENT} element={<Payment />} />
                        <Route
                            path={PATHS.PAYMENT_SUCCESS}
                            element={<PaymentSuccess />}
                        />
                    </Routes>
                </BrowserRouter>
            </ModalsProvider>
        </MantineProvider>
    );
}

export default App;
