const eNum = () => {
    // 숫자형 이넘
    enum Shoes {
        Nike,
        Adidas
    }
    var myShoes = Shoes.Nike;
    console.log(myShoes);   // 0

    // 문자형 이넘
    enum ShoesChar {
        Nike = '나이키',
        Adidas = '아디다스'
    }
    var charShoes = ShoesChar.Nike;
    console.log(charShoes);

    // 예제
    enum Answer {
        Yes = 'Y',
        No = 'N',
    }

    function askQuestion(answer: Answer) {
        // if (answer === 'yes') {
        //     console.log('정답입니다');
        // }
        // if (answer === 'no') {
        //     console.log('오답입니다');
        // }
        if (answer === Answer.Yes) {
            console.log('정답입니다');
        }
        if (answer === Answer.No) {
            console.log('오답입니다');
        }
    }
    askQuestion(Answer.Yes);
    // askQuestion('예스');
    // askQuestion('y');
    // askQuestion('Yes');
}