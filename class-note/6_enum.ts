// 숫자형 enum
enum Shoes {
    Nike,
    Adidas
}

// 문자형 enum
enum Shoes2 {
    Nike = '나이키',
    Adidas = '아디다스'
}

enum Answer {
    Yes = 'Y',
    No = 'N',
}

// 예제
function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다.');
                console.log('정답입니다.');
                        console.log('정답입니다.');

        console.log('정답입니다.');

    }
    if (answer === Answer.No) {
        console.log('오답입니다.');
    }
}

askQuestion(Answer.Yes);

