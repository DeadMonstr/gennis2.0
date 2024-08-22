import {useEffect, useState} from "react";
import {StoreProvider} from "./providers/storeProvider";
import {ThemeProvider} from "./providers/themeProvider";
import {SearchProvider} from "./providers/searchProvider";
import {AppRouter} from "./routers";


function App() {

    // const [ipAddress, setIPAddress] = useState('')
    // const blockedIPs = ['84.54.66.199']
    //
    // useEffect(() => {
    //     fetch('https://api.ipify.org?format=json')
    //         .then(response => response.json())
    //         .then(data => {
    //             setIPAddress(data.ip)
    //             console.log(data)
    //         })
    //         .catch(error => console.log(error))
    // }, [])
    //
    // console.log(document)


    // if (blockedIPs.includes(ipAddress))
        return (
            // <StoreProvider>
            //     <ThemeProvider>
            //         <SearchProvider>
            <AppRouter/>
            // </SearchProvider>
            // </ThemeProvider>
            // </StoreProvider>
        );
}

export default App;
