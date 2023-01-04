import styled from 'styled-components'

export const StyledFooter = styled.footer`
    background-color: ${({theme}) => theme.colors.footer};
    padding: 70px 0 60px;
    text-align: center;

    ul {
        list-style-type: none;
    }

    ul li {
        margin-bottom: 20px;
    }

    p {
        text-align: center;
    }

    ul, li, p, a {
        color: #DDD;
        line-height: 1;
    }

    a:hover {
        color: #999;
    }

    img {
        margin-bottom: 1.2rem;
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
        ul {
            padding: 0;
        }

        p {
            text-align: center;
        }

        img {
            margin-bottom: 1.2rem;
        }
    
    }
`