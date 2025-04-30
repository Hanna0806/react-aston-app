import { describe, expect, test } from '@jest/globals';
import { isValidMovie, filterValidMovies } from './utils';

const movie = {
    id: 1,
    title: 'test',
    year: 2000,
    plot: 'test',
    user_rating: 8
}

// Tests for isValidMovie util
describe('isValidMovie util negative case', () => {
    test('pass {} return false', () => {
        expect(isValidMovie({})).toBe(false);
    });
});

describe('isValidMovie util positive case', () => {
    test('pass valid {} return true', () => {
        expect(isValidMovie(movie)).toBe(true);
    });
});

// Test for filterValidMovies util
describe('filterValidMovies util', () => {
    test('filter movies', () => {
        expect(filterValidMovies([movie, {}])).toStrictEqual([movie]);
    });
});