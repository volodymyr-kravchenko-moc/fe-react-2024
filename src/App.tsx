import { AppContentComponent } from '@/components/appContent/AppContent.component.tsx';
import { AppContextProvider } from '@/context/App.context.tsx';

function App() {
    return (
        <AppContextProvider>
            <AppContentComponent />
        </AppContextProvider>
    );
}

export default App;
