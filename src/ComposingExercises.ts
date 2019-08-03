export namespace Composing {

    function add(a: number, b: number) {
        return a + b;
    }

    // We want to partially apply add
    export const addTwo: (x: number) => number = (x) => {
        return add(x, 2);
    };

    function subtract(a: number, b: number) {
        return a - b;
    }

    // We want to partially apply subtract
    export const minusThree: (i: number) => number = (i) => {
        return subtract(i, 3);
    };

    // How do we create a new function from addTwo and minusThree?
    export const addTwoMinusThree: (i: number) => number = (i) => {
        return minusThree(addTwo(i));
    };

    export const prettyPrint = (i: number) => `The number is ${i}`;

    export const addTwoMinusThreePrettyPrint: (i: number) => string = (i) => {
        return prettyPrint(addTwoMinusThree(i));
    };

    // How do we convert (compose) f and g into a brand new function?
    export function compose_<A, B, C>(f: (b: B) => C, g: (a: A) => B): (a: A) => C {
        return (i: A): C => f(g(i));
    }
}


