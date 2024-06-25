import { ThemeContext } from '../../App';
import { useContext } from 'react';
import './style.css';

const ThemeButton = () =>{
    const {theme,setTheme} = useContext(ThemeContext);

    console.log(theme,setTheme);

    return (
        <button 
        style={theme ? {backgroundColor: '#12343b' } : {}}
        onClick={() => setTheme(!theme)}
        
        className="themeButton">Change Theme</button>
    );
}

export default ThemeButton;