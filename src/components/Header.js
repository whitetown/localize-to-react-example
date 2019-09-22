import React from 'react'
import '../App.css';

import { useLocalizeTo } from 'localize-to'

const Header = () => {

    const { ls, localize, language, fallbackLanguage, translations } = useLocalizeTo()

    return (
        <div className='card'>
            <div className='box'>
                <div>{localize('current_language')}</div>
                <div>{language}</div>
            </div>
            <div className='box'>
                <div>{localize('fallback_language')}</div>
                <div>{fallbackLanguage}</div>
            </div>
            <div className='box'>
                <div>{localize('languages_count')}</div>
                <div>{Object.keys(translations).length}</div>
            </div>
            <div className='box'>
                <div>{localize('keys_count')}</div>
                <div>{Object.keys(ls).length}</div>
            </div>
        </div>
    )
}

export default Header
