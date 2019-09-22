import React from 'react'
import '../App.css';

import { useLocalizeTo } from 'localize-to'

const LanguageSelect = () => {

    const { localize, language, translations, setLanguage, fallbackLanguage, setFallbackLanguage } = useLocalizeTo()

    return (
        <div className='card'>
            <div className='row'>
            <div className='box'>{localize('select_language')}</div>
            {
                Object.keys(translations).map( (l, index) => {
                    return (
                        <div key={index}  >
                            <button onClick={()=>setLanguage(l)} className={'button' + (l === language ? ' current' : '')} >
                                {l}
                            </button>
                        </div>
                    )
                })
            }
            </div>
            <div className='row'>
            <div className='box'>{localize('select_fallback')}</div>
                <div>
                    <button onClick={()=>setFallbackLanguage('en')} className={'button' + (fallbackLanguage ? ' current' : '')} >
                        en
                    </button>
                </div>
                <div>
                    <button onClick={()=>setFallbackLanguage(null)} className={'button' + (!fallbackLanguage ? ' current' : '')} >
                        {localize('clear')}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LanguageSelect
