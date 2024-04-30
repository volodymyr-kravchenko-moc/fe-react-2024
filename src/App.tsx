import { AboutComponent } from './components/about/About.component.tsx';

import styles from './App.module.css';

function App() {
    return (
        <main className={styles.mainContainer}>
            <AboutComponent />
        </main>
    );
}

export default App;
