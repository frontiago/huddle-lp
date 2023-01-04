import styled from 'styled-components'

export const Flex = styled.div`
    display: flex;
    align-items: center;

    & > div, 
    & > ul {
        flex: 1;
    }

    div {
        margin-bottom: 3rem;
    }
    
    text-align: center;

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
    }
`