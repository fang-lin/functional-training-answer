import {expect} from 'chai';
import {Folding} from '../src/FoldingExercises';

const {foldLeft, foldRight, sum, length, map, filter, append, flatten, flatMap, maximum, reverse} = Folding;

describe('FoldingExercisesSpec', () => {

    it('foldLeft', () => {
        expect(foldLeft<number, number>(0, [1, 2, 3])((b, a) => b + a)).equal(6);
        expect(foldLeft<number, number[]>([], [1, 2, 3])((b, a) => [a, ...b])).eql([3, 2, 1]);
    });

    it('foldRight', () => {
        expect(foldRight<number, number>(0, [1, 2, 3])((b, a) => b + a)).equal(6);
        expect(foldRight<number, number[]>([], [1, 2, 3])((a, b) => [a, ...b])).eql([1, 2, 3]);
    });

    it('Sum of [1,2,3,4,5,6] = 21', () => {
        expect(sum([1, 2, 3, 4, 5, 6])).equal(21);
    });

    it('Length of [1,2,3,4,5,6] = 6', () => {
        expect(length([1, 2, 3, 4, 5, 6])).equal(6);
    });

    it('Add one to [1,2,3,4,5,6] = [2,3,4,5,6,7]', () => {
        expect(map<number, number>([1, 2, 3, 4, 5, 6])(a => a + 1)).eql([2, 3, 4, 5, 6, 7]);
    });

    it('Remove even number for [1,2,3,4,5,6] = [1,3,5]', () => {
        expect(filter<number>([1, 2, 3, 4, 5, 6])(a => a % 2 === 1)).eql([1, 3, 5]);
    });

    it('Append [a,b,c] with [d,e,f] = [a,b,c,d,e,f]', () => {
        expect(append<string>(['a', 'b', 'c'])(['d', 'e', 'f'])).eql(['a', 'b', 'c', 'd', 'e', 'f']);
    });

    it('Flatten a [[a,b,c],[d,e,f,g], [h,i,j]] = [a,b,c,d,e,f,g,h,i,j]', () => {
        expect(flatten<string>([['a', 'b', 'c'], ['d', 'e', 'f', 'g'], ['h', 'i', 'j']])).eql(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
    });

    it('Run a flatMap over [hello, world] with function split = [h,e,l,l,o,w,o,r,l,d]', () => {
        expect(flatMap<string, string>(['hello', 'world'])(a => a.split(''))).eql(['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']);
    });

    it('maximum of [4,3,5,7,1,2,6,3,4,5,6] = 7', () => {
        expect(maximum([4, 3, 5, 7, 1, 2, 6, 3, 4, 5, 6])).equal(7);
    });

    it('Reverse a [1,2,3,4,5,6] = [6,5,4,3,2,1]', () => {
        expect(reverse<number>([1, 2, 3, 4, 5, 6])).eql([6, 5, 4, 3, 2, 1]);
    });
});
