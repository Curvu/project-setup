import { Test } from './pages/Test'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}
