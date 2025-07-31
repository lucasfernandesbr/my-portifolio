import { createBrowserRouter } from 'react-router-dom'

import Main from './pages/main'

const router = createBrowserRouter([{ path: '/', element: <Main /> }], {
  basename: '/my-portifolio',
})

export default router
