const typeCompatibility = () => {
    interface Developer {
        name: string;
        skill: string;
    }
    interface Person {
        name: string;
    }
    class Human {
        name: string;
        age: number;
    }
    var developer: Developer;
    var person: Person;
    // developer = person;  // 구조적으로 작은 타입과는 호환되지 않는다.
    person = developer;     // 구조적으로 같거나 큰 타입과 호환 가능하다.
    person = new Human();   // interface든, class든 상관없이 구조만 보고 호환 여부를 결정한다.

    // 함수
    var add = function(a: number) {
        // ...
    }
    var sum = function(a: number, b: number) {
        // ...
    }
    // add = sum;
    sum = add;  // 반대로 함수는 구조적으로 같거나 작은 타입과 호환 가능하다.

    // 제네릭
    interface Empty<T> {
        // ...
    }
    var empty1: Empty<string>;
    var empty2: Empty<number>;
    empty1 = empty2;
    empty2 = empty1;

    interface NotEmpty<T> {
        data: T;
    }
    var notempty1: NotEmpty<string>;
    var notempty2: NotEmpty<number>;
    // notempty1 = notempty2;
    // notempty2 = notempty1;
}