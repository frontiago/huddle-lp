import {Container} from './styles/Container.styled'
import {Flex} from './styles/Flex.styled'
import {StyledFooter} from './styles/Footer.styled'
import SocialIcons from '../components/SocialIcons'

export default function Footer(){
    return(
        <StyledFooter>
            <Container>
                <img src="./images/logo_white.svg" alt="logo white" className="footer-img"/>
                <Flex>
                    <ul>
                        <li>
                            Create connections and build communities, let's hear your voice
                        </li>
                        <li>+1-543-123-4567</li>
                        <li>example@huddle.com</li>
                    </ul>
                    <ul>
                        <li><a href="https://google.com">About Us</a></li>
                        <li><a href="https://google.com">What We Do</a></li>
                        <li><a href="https://google.com">FAQ</a></li>
                    </ul>
                    <ul>
                        <li><a href="https://google.com">Carrer</a></li>
                        <li><a href="https://google.com">Blog</a></li>
                        <li><a href="https://google.com">Contact Us</a></li>
                    </ul>
                </Flex>
                <SocialIcons />
                <p>&copy; 2023 Huddle - All Rights Reserved</p>
            </Container>
        </StyledFooter>
    )
}