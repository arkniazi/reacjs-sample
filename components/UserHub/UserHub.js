import styled from "styled-components"
import { useState } from 'react'

import { Messages } from './Messages/Messages'
import { Favourites } from './Favourites/Favourites'
import { Selling } from './Selling/Selling'

import { UnderlineButton } from '../Button'
import { FlexContainer } from '../styles/Page'

import { demoMessageList } from './DemoData'

const UserHubStyled = styled.div`

`

export const UserHub = () => {
    const [view, setView] = useState('messages')

    const renderView = () => {
        switch (view) {
            case 'messages':
                return <Messages demoMessageList={demoMessageList} />
            case 'favourites':
                return <Favourites />
            case 'selling':
                return <Selling />
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