const functions = () => {
    // 함수의 파라미터에 타입을 정의하는 방식
    // function sum(a: number, b: number) {
    //     return a + b;
    // }
    // sum(10, 20);

    // 함수의 반환 값에 타입을 정의하는 방식
    function add(): number {
        return 10;
    }

    // 함수의 타입을 정의하는 방식
    function sum(a: number, b: number): number {
        return a + b;
    }
    sum(10, 20);                // 30
    // sum(10, 20, 30, 40);     // error: JS는 정의한 파라미터 개수보다 더 입력한 경우, 유연하게 처리하는 반면(Cf. function.js), TS는 error 
    
    // 함수의 옵셔널 파라미터 : 물음표를 추가한 파라미터는 넣어도 되고, 생략해도 된다!
    function log(a: string, b?: string, c?: string) {

    }
    log('hello world');
    log('hello ts', 'abc');
}

functions();