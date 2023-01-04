import styled from 'styled-components'

export const StyledHeader = styled.header`
    background-color: #ebfbff;
    padding: 40px 0;        
`

export const Nav = styled.nav`
    display: flex;
    alignn-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction: column; 
    }
`

export const Logo = styled.img`
    height: 42px;
    @media(max-width: ${({theme}) => theme.mobile}) {
        margin: 0 auto 40px auto;
        width: 80%;
        height: auto;
    }
`

export const Image = styled.img`
    width: 375px;
    margin-left: 40px;

    @media(max-width: ${({theme}) => theme.mobile}) {
        width: 90%;
        margin: 20px auto;
`   