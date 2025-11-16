import ColorParagraph from './components/ColorParagraph/'
import Button from './components/Button/'
import Porject from './components/Project/index.tsx'

function App() {
  return (
    <Porject>
      <ColorParagraph color="red" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
      <Button label="Baixar CV"/>
    </Porject>
  )
}

export default App
