function add(a: number, b: number): number {
    return a + b;
}

/* JS 대비 TS 장점 */

// 1, 에러 사전 방지 
// add(10, '20');  

// 2. 코드 가이드 및 자동 완성 VSCode intellisense
var result = add(10, 20);
result.toLocaleString();
