import { NavLink } from "react-router-dom";
import './index.css'

function App() {
    const navigationArray = [
        {
            path: '',
            name: 'Home',

        },
        {
            path: 'minecraft',
            name: 'Minecraft',
        },
    ];

    const navigationMap = navigationArray.map((pathObject, index) => {
        return <li key={index}> <NavLink to={`/${pathObject.path}`}>{pathObject.name}</NavLink> </li>
    })


    return (
        <>
            <nav className="navBar">
                <ul>
                    {navigationMap}
                </ul>
            </nav>
        </>
    )
}

export default App
