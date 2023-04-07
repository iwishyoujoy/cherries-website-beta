import AppContainer from "../../AppContainer";
import "./index.scoped.css"

function Footer(){
    return (
        <AppContainer>
            <div className="footer-container">
                <div className="footer-text">
                    Copyright © 2023 Cherries <br />
                    All rights reserved
                </div>
            </div>
        </AppContainer>
    );
}

//TODO добавить ссылку на конктакты и пользовательское соглашение

export default Footer;