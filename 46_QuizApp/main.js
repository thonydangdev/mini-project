const quizContainer = document.querySelector('.quiz-container')
const btnSubmit = document.querySelector('.btn-submit')
const btnReload = document.querySelector('.btn-reload')
const QuizApp = {
    questioncurrent: 0,
    trueAnswers: 0,
    hasAnswer: false,
    exam: [
        {
            question: 'Which language runs in a web browser?',
            answerA: 'Java',
            answerB: 'C',
            answerC: 'Python',
            answerD: 'Javascript',
            trueAnswer: 'Javascript'
        },
        {
            question: 'What does CSS stand for?',
            answerA: ' Central Style Sheets',
            answerB: 'Cascading Style Sheets',
            answerC: 'Cascading Simple Sheets',
            answerD: 'Cars SUVs Sailboats',
            trueAnswer: 'Cascading Style Sheets'
        },
        {
            question: 'What does HTML stand for?',
            answerA: 'Hypertext Markup Language',
            answerB: 'Hypertext Markdown Language',
            answerC: 'Hyperloop Machine Language',
            answerD: ' Helicopters Terminals Motorboats Lamborginis',
            trueAnswer: 'Hypertext Markup Language'
        },
        {
            question: 'What year was JavaScript launched?',
            answerA: '1996',
            answerB: '1995',
            answerC: '1994',
            answerD: 'none of the above',
            trueAnswer: '1995'
        }
    ],
    start() {
        this.renderingQuestion(this.questioncurrent)
        this.handleEvent()
    },
    handleEvent() {
        btnSubmit.addEventListener('click', () => {
            this.checkAnswer()
        })
        btnReload.addEventListener('click', () => {
            this.reload()
        })
    },
    reload() {
        this.questioncurrent = 0
        this.trueAnswers = 0
        this.hasAnswer = false
        this.renderingQuestion(this.questioncurrent)
        btnSubmit.style.display = 'block';
        btnReload.style.display = 'none';
    },
    renderingQuestion(index, totalTrue) {
        if (index < this.exam.length) {
            const examCurrent = this.exam[index]
            quizContainer.innerHTML = `
            <h2 class="question">${examCurrent.question}</h2>
            <ul class="answer">
                <li><input type="radio" name="answer" id="answerA" value=${examCurrent.answerA === examCurrent.trueAnswer ? 'true' : 'false'}><label for="answerA"
                class="choice value">${examCurrent.answerA}</label></li>
                <li><input type="radio" name="answer" id="answerB" value=${examCurrent.answerB === examCurrent.trueAnswer ? 'true' : 'false'}><label for="answerB"
                class="choice value">${examCurrent.answerB}</label></li>
                <li><input type="radio" name="answer" id="answerC" value=${examCurrent.answerC === examCurrent.trueAnswer ? 'true' : 'false'}><label for="answerC"
                class="choice value">${examCurrent.answerC}</label></li>
                <li><input type="radio" name="answer" id="answerD" value=${examCurrent.answerD === examCurrent.trueAnswer ? 'true' : 'false'}><label for="answerD"
                class="choice value">${examCurrent.answerD}</label>
                </li>
            </ul>`
        } else {
            quizContainer.innerHTML = `
            <h2 class="question">You answered ${totalTrue}/${this.exam.length} questions correctly</h2>`
            btnSubmit.style.display = 'none';
            btnReload.style.display = 'block';
        }
    },
    checkAnswer() {
        const answerCurrent = quizContainer.querySelector('input[name="answer"]:checked')
        if (answerCurrent) {
            this.hasAnswer = true;
            if (answerCurrent.value === 'true') {
                ++this.trueAnswers
            }
        }
        if (this.hasAnswer == false) {
            alert('Please select answer')
        } else {
            ++this.questioncurrent
            this.renderingQuestion(this.questioncurrent, this.trueAnswers)
            this.hasAnswer = false
        }
    }

}
QuizApp.start()