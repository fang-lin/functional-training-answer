import {expect} from 'chai';
import {Composing} from '../src/ComposingExercises';

const {addTwoMinusThree, prettyPrint, addTwoMinusThreePrettyPrint, compose_} = Composing;

describe('ComposingExercisesSpec', () => {

    it('addTwoMinusThree', () => {
        expect(addTwoMinusThree(6)).equal(5);
    });

    it('addTwoMinusThreePrettyPrint', () => {
        expect(addTwoMinusThreePrettyPrint(2)).equal('The number is 1');
    });

    it('compose_', () => {
        expect(compose_<number, number, string>(prettyPrint, addTwoMinusThree)(2)).equal('The number is 1');
    });
});
