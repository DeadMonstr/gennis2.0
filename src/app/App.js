import {StoreProvider} from "./providers/storeProvider";
import {ThemeProvider} from "./providers/themeProvider";
import {SearchProvider} from "./providers/searchProvider";
import {AppRouter} from "./routers";


function App() {
    return (
        <StoreProvider>
            <ThemeProvider>
                <SearchProvider>
                    <AppRouter/>
                </SearchProvider>
            </ThemeProvider>
        </StoreProvider>
    );
}

export default App;
