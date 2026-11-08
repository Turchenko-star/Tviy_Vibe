
let userAnswers = {
    occasion: '',
    color: ''
};

function nextStep(currentStep, answer) {
    if (currentStep === 1) {
        userAnswers.occasion = answer;
        document.getElementById('question-1').classList.remove('active');
        document.getElementById('question-2').classList.add('active');
    }
}

function showResult(answer) {
    userAnswers.color = answer;
    document.getElementById('question-2').classList.remove('active');
    
    let resultText = "";
    
    if (userAnswers.occasion === 'everyday' && userAnswers.color === 'light') {
        resultText = "Твій ідеальний вибір — мінімалістична каблучка з лабрадориту або перлинний браслет! Ніжно та доречно щодня.";
    } else if (userAnswers.occasion === 'everyday' && userAnswers.color === 'dark') {
        resultText = "Зверни увагу на браслет 'Земна енергія' з яшми. Стильний акцент для кежуал образів.";
    } else if (userAnswers.occasion === 'party' && userAnswers.color === 'light') {
        resultText = "Тобі підійде намисто 'Квіткове серце' або сет із рожевого кварцу. Сяй на всі 100%!";
    } else {
        resultText = "Твій вайб — акцентний неоновий чокер з аметистом або каблучка 'Смарагдова крапля'. Зухвало та стильно!";
    }
    
    document.getElementById('result-text').innerText = resultText;
    document.getElementById('quiz-result').classList.add('active');
}

function resetQuiz() {
    userAnswers = { occasion: '', color: '' };
    document.getElementById('quiz-result').classList.remove('active');
    document.getElementById('question-1').classList.add('active');
}
