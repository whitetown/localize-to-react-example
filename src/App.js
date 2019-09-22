import React from 'react';
import './App.css';

import { LocalizeToProvider } from 'localize-to';

import initialTranslations from './resources'

import Welcome from './components/WelcomeClass'
import LanguageSelect from './components/LanguageSelect'
import Downloads from './components/Downloads'
import Header from './components/Header'
import CurrentKeyValues from './components/CurrentKeyValues'

function App() {
    return (
        <div className="App">
            <h4 className='centered' ><a href='https://localize.to'>Localize.to</a> Demo</h4>
            <Welcome />
            <LanguageSelect />
            <Header />
            <Downloads />
            <CurrentKeyValues />
        </div>
    );
}

const LocalizedApp = () => {
    return (
        <LocalizeToProvider
            language={'en'}
            fallbackLanguage={'en'}
            translations={initialTranslations}
            apiKey={'787847642e3b9c47c773921261d490e8'}
        >
            <App />
        </LocalizeToProvider>
    )
}

export default LocalizedApp;
