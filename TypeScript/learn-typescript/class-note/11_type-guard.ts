const typeGuard = () => {
    interface Developer {
        name: string;
        skill: string;
    }

    interface Person {
        name: string;
        age: number;
    }

    function introduce(): Developer | Person {
        return { name: 'Tony', age: 33, skill: 'Iron Making' }
    }
    var tony = introduce();
    // console.log(tony.skill);
    console.log(tony.name); // introduce()에 skill을 명시했음에도 불구하고, Union의 특성에 따라 공통 속성만 접근 가능하다.

    if (tony as Developer) {
        // console.log(tony.skill);
        console.log((tony as Developer).skill); // 타입 단언(as ...)을 계속 해줘야 error 안 난다.
    }

    if ((tony as Developer).skill) {
        var skill = (tony as Developer).skill;
        console.log(skill);
    } else if ((tony as Person).age) {
        var age = (tony as Person).age;
        console.log(age);
    }   // 타입 단언을 계속 해주는 것은 비효율적이다 => 타입 가드를 사용하자!

    // 타입 가드 정의
    function isDeveloper(target: Developer | Person): target is Developer {
        return (target as Developer).skill !== undefined;
    }

    if (isDeveloper(tony)) {
        console.log(tony.skill);
    } else {
        console.log(tony.age);
    }
}