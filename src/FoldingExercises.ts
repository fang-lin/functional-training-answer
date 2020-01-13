export namespace Folding {

    /**
     *
     * foldLeft will reduce a list of A's down to a B. It takes an initial value_ of type B
     * and a list of A's.  It also takes a function which takes the accumulated value_ of type B
     * and the next value_ in the list (of type A) and returns a value_ which will be feed back into
     * the accumulator of the next call.
     *
     * As the name suggests it processes the list from left to right.
     *
     * Have a close look at your implementations from the RecursionExercises.  Which parts could you
     * pull out to a function to make them all common?  Your implementation will be very close to
     * foldLeft.
     *
     * Good luck!
     *
     */

    function isEmpty<A>(list: A[]): boolean {
        return list.length === 0;
    }

    function getAheadLast<A>(list: A[]): { ahead: A[], last: A } {
        return {
            ahead: list.splice(0, list.length - 1),
            last: list[list.length - 1]
        }
    }

    export const foldLeft = <A, B>(initialValue: B, list: A[]) => (f: (b: B, a: A) => B): B => {
        const [first, ...tail] = list;
        return isEmpty(list) ? initialValue : foldLeft(f(initialValue, first), tail)(f);
    };

    /**
     * foldRight is the same as foldLeft, except it processes the list from right to left.
     */

    export const foldRight = <A, B>(initialValue: B, list: A[]) => (f: (a: A, b: B) => B): B => {
        const {ahead, last} = getAheadLast(list);
        return isEmpty(list) ? initialValue : foldRight(f(last, initialValue), ahead)(f);
    };

    /**
     * Remember these, from our recursion exercises?  They can all be implemented with either
     * foldLeft or foldRight.
     */

    export const sum = (x: Array<number>): number => {
        return foldLeft<number, number>(0, x)((b, a) => b + a);
    };

    export const length = <A>(x: A[]): number => {
        return foldLeft<A, number>(0, x)(b => b + 1);
    };

    export const map = <A, B>(x: A[]) => (f: (a: A) => B): B[] => {
        return foldLeft<A, B[]>([], x)((b, a) => [...b, f(a)])
    };

    export const filter = <A>(x: A[]) => (f: (a: A) => boolean): A[] => {
        return foldLeft<A, A[]>([], x)((b, a) => f(a) ? [...b, a] : b);
    };

    export const append = <A>(x: A[]) => (y: A[]): A[] => {
        return foldLeft<A, A[]>(x, y)((b, a) => [...b, a]);
    };

    export const flatten = <A>(x: A[][]): A[] => {
        return foldLeft<A[], A[]>([], x)((b, a) => [...b, ...a]);
    };

    export const flatMap = <A, B>(x: A[]) => (f: (a: A) => B[]): B[] => {
        return foldLeft<A, B[]>([], x)((b, a) => [...b, ...f(a)]);
    };

    // Maximum of the empty list is 0
    export const maximum = (x: number[]): number => {
        return foldLeft<number, number>(0, x)((b, a) => a > b ? a : b);
    };

    export const reverse = <A>(x: A[]): A[] => {
        return foldLeft<A, A[]>([], x)((b, a) => [a, ...b]);
    };
}
