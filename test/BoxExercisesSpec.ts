import {expect} from 'chai';
import {Box} from '../src/BoxExercises';

describe('BoxExercisesSpec', () => {

    it('Box[6] + 3 = Box[9]', () => {
        expect(new Box(6).map(a => a + 3)).eql(new Box(9));
    });

    it('Box[4] + 2 = Box[6]', () => {
        expect(new Box(4).flatMap(a => new Box(a + 2))).eql(new Box(6));
    });
});
