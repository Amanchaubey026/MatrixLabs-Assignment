import  { useEffect, useState } from 'react';
import WebView from './components/WebView';
import MobileView from './components/MobileView';

const App = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {isMobile ? <MobileView /> : <WebView />}
        </div>
    );
};

export default App;
