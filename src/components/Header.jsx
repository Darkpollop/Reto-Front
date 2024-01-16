import logo from '../images/loguito.png'
import { NavBar } from './NavBar'

export const Header = () =>{
    return(
        // el place-content es para darle espacio a la derecha separandose 
        <header className="flex place-content-between items-center mb-8">
            
            <NavBar />

        </header>
    )
}