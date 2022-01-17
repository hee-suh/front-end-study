const typeAliases = () => {
    // 타입 별칭 vs interface
    interface PersonI {
        name: string;
        age: number;
    }
    type PersonT = {
        name: string;
        age: number;
    }
    var sehoI: PersonI = {
        name: '세호',
        age: 30
    }
    var sehoT: PersonT = {
        name: '세호',
        age: 30
    }  

    type MyString = string;
    var str: MyString = 'hello';
    
    type Todo = { id: string, title: string; done: boolean };
    function getTodo(todo: Todo) {};

    // type 별칭은 interface와 달리, 확장(extends)이 되지 않는다. => 확장이 가능한 interface를 사용하는 것이 좋다!
}