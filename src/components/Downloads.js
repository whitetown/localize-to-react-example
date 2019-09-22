import React from 'react'
import '../App.css';

import { useLocalizeTo } from 'localize-to'

const Downloads = () => {

    const { localize, localizeIsLoading, downloadLanguage, downloadLanguages, downloadVersion } = useLocalizeTo()

    return (
        <div className='card'>
            <div className='centered'>
                {localizeIsLoading ? 'Loading...' : null}
            </div>
            <div className='row'>
                <div className='box'>{localize('download_sk')}</div>
                <div>
                    <button onClick={()=>downloadLanguage('sk')} className='button'>
                        Get [SK]
                    </button>
                </div>
            </div>
            <div className='row gray'>
                <div className='box'>{localize('download_pl_de')}</div>
                <div>
                    <button onClick={()=>downloadLanguages(['pl', 'de'])} className='button'>
                        Get [PL, DE]
                    </button>
                </div>
            </div>
            <div className='row'>
                <div className='box'>{localize('download_all')}</div>
                <div>
                    <button onClick={()=>downloadLanguages([])} className='button'>
                        Get [All languages]
                    </button>
                </div>
            </div>
            <div className='row gray'>
                <div className='box'>{localize('download_v1_uk')}</div>
                <div>
                    <button onClick={()=>downloadVersion('v1.0.1', ['uk'])} className='button'>
                        Get v1.0.1 [UK]
                    </button>
                </div>
            </div>
            <div className='row'>
                <div className='box'>{localize('download_v1_all')}</div>
                <div>
                    <button onClick={()=>downloadVersion('v1.0.1')} className='button'>
                        Get v1.0.1 [All]
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Downloads
