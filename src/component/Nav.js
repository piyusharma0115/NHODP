import { Link } from "react-router-dom";

import './nav.css';
function Nav(){
    return(
            <ul className="nav1">
                <div className="ip">
                <img alt="img" src="https://play-lh.googleusercontent.com/FDb361lYoCC8WsUCu5d9ywaIatXMSEz0rysRZmA_R-Rdc5ysyfcjEtwlCb-m9NwdLQ=w300"></img>
                <p className="io">KHODP</p>
                </div>
                <li><Link to="/Homes"><img className="img1" alt="img" src="https://cdn-icons-png.flaticon.com/512/5973/5973800.png" /> </Link></li>
                <li><Link to="/Clsy"><img className="img1" alt="img" src="https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/512/Calculator_512.png" /> </Link></li>
                <li><Link to="/Todo"><img className="img1" alt="img" src='https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png'/> </Link></li>
                <li><Link to="/Trans"><img className="img1" alt="img" src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/512px-Google_Translate_logo.svg.png?20210606111727'/> </Link></li>
                <li><Link to="/wiki"><img className="img1" alt="img" src='https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png'/> </Link></li>
            </ul>

    );
};
export default Nav;