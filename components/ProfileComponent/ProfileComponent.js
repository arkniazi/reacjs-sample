import styled from "styled-components"
import { Image } from "../Image"
import { FlexContainer } from '../styles/Page'
import { MapPin } from "../Icons"

const user = {
    ID: 1,
    image: '/images/instagramBanner/placeholder.png',
    name: 'Johnathan S.',
    username: 'username',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis felis orci erat sed a id commodo netus. Enim, eu ut ac mauris tempor, nunc donec. Lectus ac id tellus nunc. Tincidunt sapien purus nullam vel.',
    location: 'Scarborough'
}


const ProfileComponentStyled = styled.div`
    padding-right: 75px;

    p{
        margin: 0;
    }
    .profileComponent{
        &__profile-img{
            border-radius: 50%;
        }
        &__mapPin{
            margin-right: 10px;
        }
    }
`

const SpaceWrapper = styled.div`
    margin: ${(props) => props.margin};
`


export const ProfileComponent = () => {
    return (
        <ProfileComponentStyled>
            <SpaceWrapper margin="0 0 17px 0">
                <Image
                    className="profileComponent__profile-img"
                    path={user.image}
                    alt="surfing the barrel"
                    height={115}
                    width={115}
                />
            </SpaceWrapper>

            <SpaceWrapper margin="0 0 10px 0">
                <h3 className="black">{user.name}</h3>
            </SpaceWrapper>

            <SpaceWrapper margin="0 0 15px 0">
                <p className="label">@{user.username}</p>
            </SpaceWrapper>

            <SpaceWrapper margin="0 0 10px 0">
                <p>{user.intro}</p>
            </SpaceWrapper>

            <FlexContainer align="center">
                <MapPin className="profileComponent__mapPin" />
                <p className="label">
                    {user.location}
                </p>
            </FlexContainer>

        </ProfileComponentStyled>
    )
}