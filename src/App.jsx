import './App.css'
import Hero from './components/Hero'
import { useTheme } from './hooks/useTheme'

function App() {
  const { isDark } = useTheme();

  return (
    <main className={`flex flex-col items-center justify-center mt-10 px-4 w-full min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-red-500'
    }`}>
      <Hero/>
    </main>
  )
}

export default App
