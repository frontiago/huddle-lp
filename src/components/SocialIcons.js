import {FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa'
import {StyledSocialIcons} from './styles/SocialIcons.styled'

export default function SocialIcons() {
    return (
        <StyledSocialIcons>
            <a href="https://google.com"> <FaTwitter /> </a>
            <a href="https://google.com"> <FaFacebook /> </a>
            <a href="https://google.com"> <FaLinkedin /> </a>
        </StyledSocialIcons>
    )
}