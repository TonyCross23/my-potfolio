import { useState, useEffect } from 'react'
import HeroSection from './components/HeroSection';

function App() {
  const [theme, setTheme ] = useState(null);

  useEffect( () => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    } else {
     setTheme('light');
    }
  },[]);

  const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

  useEffect( () => {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark');
    }else {
      document.documentElement.classList.remove('dark');
    }
  },[theme]);

  return (
    <>
			<button
				type="button"
				onClick={handleThemeSwitch}
				className="fixed z-10 right-2 top-2 bg-green-500 text-lg p-1 rounded-md"
			>
				{theme === 'dark' ? '🌙' : '🌞'}
			</button>
      <div className='bg-white dark:bg-gray-800 min-h-screen font-inter '>
        <HeroSection></HeroSection>
      </div>
    </>
    
  )
}

export default App;
