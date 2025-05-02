import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import CountrySwitch from '@contexts/CountrySwitch'

import router from './routes'

function App() {
  return (
    <HelmetProvider>
      <CountrySwitch>
        <Helmet title="Lucas Fernandes Souza | My Portifolio" />

        <RouterProvider router={router} />
      </CountrySwitch>
    </HelmetProvider>
  )
}

export default App
