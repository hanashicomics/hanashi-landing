import '../assets/styles/Navigation.css'
import {Link} from "react-router-dom";

export default function RootNavigation(){
    return(
        <>
            <div className="NavigationLinks">
                <div className="nav-left">
                    <h1>
                        <Link to={'/'} className="Logo">Hanashi</Link>
                    </h1>
                </div>
                <div className="nav">

                </div>

                <div className="nav-right">
                    {/*<Link to={'/pricing'} className="Links">Pricing</Link>*/}
                    {/*<Link to={'/faq'} className="Links">FAQ</Link>*/}
                </div>
            </div>
        </>

    )
}