import React from 'react'
import '../App.css';

import { withLocalizeTo } from 'localize-to'

class Welcome extends React.Component {

    render() {

        const { ls, lc } = this.props
        //const { language, fallbackLanguage, setLanguage, ...rest } = lc

        return (
            <div className='card welcome'>
                {lc.localize('welcome_dev')}!
                {ls['some_key_1']}
                {ls.some_key_2}
            </div>
        )
    }
}

export default withLocalizeTo(Welcome)
