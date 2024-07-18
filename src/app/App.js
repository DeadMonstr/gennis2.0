import {StoreProvider} from "./providers/storeProvider";
import {ThemeProvider} from "./providers/themeProvider";
import {AppRouter} from "./routers";


function App() {
    return (
        <StoreProvider>
            <ThemeProvider>
                <AppRouter/>
            </ThemeProvider>
        </StoreProvider>
    );
}

export default App;
