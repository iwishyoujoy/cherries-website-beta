import AppContainer from "../../AppContainer";
import "./index.scoped.css"

function Footer(){
    return (
        <AppContainer>
            <div className="footer-container">
                <div className="footer-text">
                    Copyright © Cherries 2023 <br />
                    All rights are reserved
                </div>
            </div>
        </AppContainer>
    );
}

//TODO добавить ссылку на конктакты и пользовательское соглашение

export default Footer;