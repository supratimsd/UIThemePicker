import { ThemeProvider } from './Context/Theme'
import './App.css'
import { useEffect, useState } from 'react'
import ThemeButton from './Components/ThemeButton'
import Card from './Components/Card'
function App() {
  const [theme,setTheme]=useState("light")

  const lightTheme=()=>{
    setTheme("light")
  }

  const darkTheme=()=>{
    setTheme("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(theme)
  },[theme])
  

  return (
    
    <ThemeProvider value={{theme,darkTheme,lightTheme}}>
      
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeButton/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

    </ThemeProvider>
  );
};

export default App
