import React, {useState} from 'react';
import data from './data'
import Question from './Question';

function App() {
  const [questions, setQuestions] = useState(data)
  console.log(data, questions)

  return (
    <main>
      <div className="container">
        <h3>Qusetions and Answers about Loggin</h3>
        <section className="info">
        {
          questions.map(question => <Question key={question.id} {...question}/>)
        }
        </section>
      </div>
    </main>

  );
}

export default App;
