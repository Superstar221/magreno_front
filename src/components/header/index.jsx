import Logo from '../../assets/logo.webp'
import {Link} from 'react-router-dom';

export default () => {
    return (
        <div className="w-full flex justify-center">
            <Link to = "/admin">
                <img src={Logo} className="w-[150px] h-[75px]"/>
            </Link>
        </div>
    )
}