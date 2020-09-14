import React from "react"
import styled from "styled-components"
import BorderTopTemplate from "../templates/BorderTopTemplate"
import { FlexContainer, ComponentContainer } from "../components/styles/Page"
import { ProfileComponent } from "../components/ProfileComponent"
import { UserHub } from "../components/UserHub"

const ProfileColumn = styled.div`
    flex: 2 0 0;
`

const ContentColumn = styled.div`
    flex: 4 0 0;
`

const Profile = () => {
    return (
        <BorderTopTemplate>

            <ComponentContainer>

                <FlexContainer dir="row">

                    <ProfileColumn>
                        <ProfileComponent />
                    </ProfileColumn>

                    <ContentColumn>
                        <UserHub />
                    </ContentColumn>

                </FlexContainer>

            </ComponentContainer>

        </BorderTopTemplate>
    )
}

export default Profile
