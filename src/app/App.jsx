import { Home, HomeFactory } from '../pages/Home'

const homeModel = HomeFactory.createModel();

function App() {
  return (
    <>
      <Home model={homeModel} />
    </>
  )
}

export default App
