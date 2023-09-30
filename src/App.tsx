import { useEffect } from 'react'
import { PythonProvider } from 'react-py'
import Code from './components/Code'
import Title from './components/Title'
import Documentation from './components/Documentation'

function App() {
  useEffect(() => {
    navigator.serviceWorker
      .register('/react-py-sw.js')
      .then((registration) =>
        console.log(
          'Service Worker registration successful with scope: ',
          registration.scope
        )
      )
      .catch((err) => console.log('Service Worker registration failed: ', err))
  }, [])

  return (
    
    <div className="App">
      <Title></Title>
      <PythonProvider><Code/></PythonProvider>
      <Documentation></Documentation>
    </div>
  )
}

export default App
