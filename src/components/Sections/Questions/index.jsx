import AppContainer from "../../AppContainer";
import "./index.scoped.css"

function Questions(){
    return (
        <AppContainer>
            <div className="question-container">
                <div className="question-text">
                    <div className="question-text-big">
                        Остались еще вопросы?
                    </div>
                    <div className="question-text-small">
                        Возможно, ответ на Ваш вопрос уже есть на сайте! А если нет - напишите нам. Мы будем рады помочь сделать Ваши покупки простыми и удобными!
                    </div>
                </div>
                <div className="question-buttons">
                    <button className="black-white-button">FAQ</button>
                    <button className="black-white-button">Контакты</button>
                </div>
            </div>
        </AppContainer>
    );
}

export default Questions;