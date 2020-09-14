import styled from "styled-components"
import { useState } from 'react'

import { Messages } from './Messages'
import { Favourites } from './Favourites'
import { Selling } from './Selling'

import { UnderlineButton } from '../Button'
import { FlexContainer } from '../styles/Page'


const UserHubStyled = styled.div`

`

export const UserHub = () => {
    const [view, setView] = useState('messages')

    const renderView = () => {

        switch (view) {
            case 'messages':
                return <Messages />
                break;
            case 'favourites':
                return <Favourites />
                break;
            case 'selling':
                return <Selling />
                break;
            default:
                return <Messages />
        }
    }
    return (
        <UserHubStyled>
            <FlexContainer dir="row" style={{ padding: '0 0 60px 0' }}>

                <UnderlineButton
                    className={view == 'messages' && 'active'}
                    onClick={() => setView('messages')}
                >Messages
                </UnderlineButton>

                <UnderlineButton
                    className={view == 'favourites' && 'active'}
                    onClick={() => setView('favourites')}
                >Favourites
                </UnderlineButton>

                <UnderlineButton
                    className={view == 'selling' && 'active'}
                    onClick={() => setView('selling')}
                >Selling
                </UnderlineButton>
            </FlexContainer>


            {renderView()}

        </UserHubStyled>
    )
}