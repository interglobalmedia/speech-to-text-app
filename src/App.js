import React, {Component} from 'react';
import Speech from './components/Speech';
import styles from './App.scss';

class App extends Component {
    render() {
        return (
            <div className={styles.Site}>
                <div className={styles.Sitecontent}>
                    <div className={styles.App}>
                        <Speech />
                    </div>
                </div>
                <div className={styles.footercontainer}>
                    <footer className={styles.sitefooter}>
                        <p className={styles.identity}>© 2018 Maria D. Campbell</p>
                    </footer>
                </div>
            </div>
        )
    }
}

export default App;

