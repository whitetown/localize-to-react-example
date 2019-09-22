import React from 'react'
import '../App.css';

import { useLocalizeTo } from 'localize-to'

const CurrentKeyValues = () => {

    const { ls, localize } = useLocalizeTo()

    return (
        <div className='card'>
            <div className='box gray'>{localize('all_keys')}</div>
            <div className='column'>
            {
                Object.keys(ls).map( (k, index) => {
                    return (
                        <div key={index} className='box'>
                            <div className='column'>{k}</div>
                            <div className='column'>{localize(k)}</div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default CurrentKeyValues
