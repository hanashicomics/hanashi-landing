import '../assets/styles/Navigation.css'
import {Link} from "react-router-dom";

export default function RootNavigation(){
    return(
        <>
            <div className="NavigationLinks">
                <div className="nav-left">
                    <img src={"/h2.png"} alt={"Hanashi Logo"} />
                    <Link to={'/'} className="Logo">Hanashi</Link>
                </div>

                <div className="nav-right">
                    {/*<Link to="/features" className="Links">Features</Link>*/}
                    {/*<Link to="/docs" className="Links">Docs</Link>*/}
                    <a href="https://hanashi.website/stories" target="_blank" className="navigation-link-goto">Go to Dashboard</a>
                </div>

                {/*<div className="nav-right">*/}
                {/*    <Link to="/login" className="navigation-link-goto">Login</Link>*/}
                {/*</div>*/}
            </div>

        </>

    )
}