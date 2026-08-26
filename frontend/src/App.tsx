import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { PopupHost } from './components/popups/PopupHost'

function App () {
  return (
    <div>
      <PopupHost />
      < RouterProvider router={router} />
    </div >
  )

}

export default App
