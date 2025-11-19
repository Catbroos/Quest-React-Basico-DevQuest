import StyledText from './components/StyledText/index.tsx'
import AlertButton from './components/AlertButton'
import Porject from './components/Project/index.tsx'

function App() {
  return <Porject>
    <StyledText color="red" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
    <AlertButton label="Baixar CV" />
  </Porject>

}

export default App
