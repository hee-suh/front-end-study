const operator = () => {
    // function logMessage(value: any) {
    //     console.log(value);
    // }
    // logMessage('hello');
    // logMessage(100);

    // Union Type
    var seho: string | number | boolean;

    function logMessage(value: string | number) {
        if (typeof value === 'number') {
            value.toLocaleString();
        }
        if (typeof value === 'string') {
            value.toString();
        }
        throw new TypeError('value must be string or number');  // Type guard
    }
    logMessage('hello');
    logMessage(100);

    interface Developer {
        name: string;
        skill: string;
    }
    interface Person {
        name: string;
        age: number;
    }
    function askSomeoneUnion(someone: Developer | Person) {
        someone.name;   // 공통된 속성에만 접근 가능
        // someone.skill;
        // someone.age;
    }
    askSomeoneUnion({ name: '디벨로퍼', skill: '웹 개발'});
    askSomeoneUnion({ name: '캡틴', age: 100 });

    // Intersection Type
    var capt: string & number & boolean;

    function askSomeoneInter(someone: Developer & Person) {
        // Developer과 Person 속성 모두에 접근 가능 : 타입 연결 => 새로운 타입 생성
        someone.name;
        someone.skill;
        someone.age;
    }
    askSomeoneInter({ name: '디벨로퍼', skill: '웹 개발', age: 100 });
}