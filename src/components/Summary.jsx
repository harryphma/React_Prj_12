import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js'; 

export default function Summary({userAnswers}){
    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);
    const skippedAnswers_ratio = Math.round((skippedAnswers.length / userAnswers.length) * 100);
    const correctAnswer_ratio = Math.round((correctAnswers.length / userAnswers.length) * 100);
    const wrongAnswer_ratio = 100 - skippedAnswers_ratio - correctAnswer_ratio;
    
    return (
        <div id="summary">
            <img src={quizCompleteImg} alt="Trophy icon" />
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswers_ratio}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswer_ratio}%</span>
                    <span className="text">correct answers</span>
                </p>
                <p>
                    <span className="number">{wrongAnswer_ratio}%</span>
                    <span className="text">incorrect answers</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = 'user-answer';

                    if (answer === null){
                        cssClass += ' skipped';
                    } else if(answer === QUESTIONS[index].answers[0]){
                        cssClass += ' correct';
                    } else{
                        cssClass += ' wrong';
                    }
                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className='question'>{QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer ?? 'Skipped'}</p>
                        </li>
                    );
                })}
                
            </ol>
        </div>
    );
}