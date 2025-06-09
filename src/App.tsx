import { RouterProvider } from 'react-router-dom'
import routes from './Routes'
import './Style.css'

function App() {

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App