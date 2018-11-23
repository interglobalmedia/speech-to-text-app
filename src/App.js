import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './App.scss';
import Loadable from 'react-loadable';

const Speech = Loadable({
    loader: () => import('./components/speech/Speech'),
    loading: () => <div>Loading ...</div>
})

const App = () => (
    <div className={styles.Site}>
        <div className={styles.Sitecontent}>
            <div id="speech" className={styles.App}>
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
export default App;



