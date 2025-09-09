import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import router from './routes'

function App() {
  return (
    <HelmetProvider>
      <Helmet title="Lucas Fernandes Souza | My Portifolio" />

      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App
