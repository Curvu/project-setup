import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import { Test } from './pages/Test';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}
