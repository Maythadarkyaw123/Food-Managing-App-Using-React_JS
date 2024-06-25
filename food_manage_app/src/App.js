import React, { createContext, useState } from "react";
import './App.css';
import Homepage from "./pages/homepage";
import ThemeButton from "./components/theme-button";

//create the context
export const ThemeContext = createContext(null);

// provide the context

//consume the context


const App = () =>{
  const [theme, setTheme] = useState(false);

  
  return(
    <ThemeContext.Provider value = {{theme,setTheme,}}>
      
       <div className="App" style={theme ? {backgroundColor: "#feb300"} : {}}>
      <ThemeButton />
      <Homepage />
    </div>

    </ThemeContext.Provider>
   
  );
}

export default App;