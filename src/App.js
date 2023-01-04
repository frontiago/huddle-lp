import {ThemeProvider} from 'styled-components'
import GlobalStyles from './components/styles/Global'

// Components
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import content from './content' 

// Styles
import {Container} from './components/styles/Container.styled'

// ThemeProvider configuration
const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <Header />

        <Container>
          {/* Map through content file and put the values inside the card component */}
          {content.map((item, index) => (
            <>
              <Card key={index} item={item}/>
            </>
          ))}
        </Container>

        <Footer />

      </>
    </ThemeProvider>
  );
}

export default App;
