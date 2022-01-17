const generic = () => {
    // function logText(text) {
    //     console.log(text);
    //     return text;
    // }
    // logText(10);    // 숫자 10
    // logText('하이');    // 문자열 하이
    // logText(true);  // 진위값 true

    // function logText<T>(text: T):T {
    //     console.log(text);
    //     return text;
    // }
    // logText<string>('하이');

    /* 
    같은 기능을 하는 코드지만, 타입이 달라서 함수를 두 개나 구현한 경우 
    */
    // function logText(text: string) {
    //     console.log(text);
    //     // text.split('').reverse().join('');
    //     return text;
    // }
    // function logNumber(num: number) {
    //     console.log(num);
    //     return num;
    // }
    // logText('a');
    // logText(10);
    // const num = logNumber(10);
    // logText(true);

    /* 
    함수 두 개를 하나로 줄이기 위해 유니온 사용한 경우 
    : input은 자유롭게 받을 수 있지만, return 값이 자유자재로 활용하기 어려움
    */
    // function logText(text: string | number) {
    //     console.log(text);
    //     return text;
    // }
    // const a = logText('a');
    // a.split();  // a를 string | number로 인식하기 때문에, string에 사용되는 함수 사용 불가
    // logText(10);

    /*
    generic을 사용하여 위 문제 해결 가능!
    */
    function logText<T>(text: T): T {
        console.log(text);
        return text;
    }
    const str = logText<string>('abc');
    str.split('');
    const login = logText<boolean>(true);


    // 인터패이스에 제네릭을 선언하는 방법
    // interface DropDown {
    //     value: string;
    //     selected: boolean;
    // }
    // const obj: DropDown = { value: 'abc', selected: false };

    interface DropDown<T> {
        value: T;
        selected: boolean;
    }
    const obj: DropDown<string> = { value: 'abc', selected: false };


    // 제네릭의 타입 제한 (타입에 대한 힌트)
    // function logTextLength<T>(text: T[]): T[] {
    //     console.log(text.length);
    //     text.forEach(function(text) {
    //         console.log(text);
    //     });
    //     return text;
    // }
    // logTextLength<string>(['hi', 'hey']);

    // 제네릭 타입 제한 2 - 정의된 타입 이용하기
    interface LengthType {
        length: number;
    }   
    function logTextLength<T extends LengthType>(text: T): T {
        text.length;
        return text;
    }
    logTextLength('a');
    logTextLength({ length: 10 });

    // 제네릭 타입 제한 3 - keyof
    interface ShoppingItem {
        name: string;
        price: number;
        stock: number;
    }
    function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
        return itemOption;
    }
    // getShoppingItemOption(10);
    // getShoppingItemOption<string>('a');
    getShoppingItemOption('name');
}
