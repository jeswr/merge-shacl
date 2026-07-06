import { getFunctionMappings, getCustomMappings } from '../lib/getFunctionMappings';
import { severityFactory, nodeKindFactory } from '../lib/custom-handlers';
import { ns as sh } from '../lib/peer-deps/shacl';
import { ConstraintType } from '../lib/types';

// The custom handlers are unit tested separately; mock them here so that this
// suite only exercises the mapping logic.
jest.mock('../lib/custom-handlers', () => ({
  severityFactory: jest.fn(() => jest.fn()),
  nodeKindFactory: jest.fn(() => jest.fn()),
}));

type Merger<T> = (l: T, r: T) => T | undefined;

const strengthenMappings = getFunctionMappings(true);
const weakenMappings = getFunctionMappings(false);

describe('getFunctionMappings', () => {
  it('should take the greater lower bound and lesser upper bound when strengthening', () => {
    expect((strengthenMappings[ConstraintType.LowerBound] as Merger<number>)(2, 5)).toEqual(5);
    expect((strengthenMappings[ConstraintType.UpperBound] as Merger<number>)(2, 5)).toEqual(2);
  });

  it('should take the lesser lower bound and greater upper bound when weakening', () => {
    expect((weakenMappings[ConstraintType.LowerBound] as Merger<number>)(2, 5)).toEqual(2);
    expect((weakenMappings[ConstraintType.UpperBound] as Merger<number>)(2, 5)).toEqual(5);
  });

  it('should throw when a bound merger is not given two numbers', () => {
    const lowerBound = strengthenMappings[ConstraintType.LowerBound] as Merger<any>;
    expect(() => lowerBound('a', 5)).toThrowError(/Type number expected/);
    expect(() => lowerBound(2, 'b')).toThrowError(/Type number expected/);
  });

  it('should union and intersect lists according to the constraint type when strengthening', () => {
    const listUnion = strengthenMappings[ConstraintType.ListUnion] as Merger<string[]>;
    const listIntersection = strengthenMappings[
      ConstraintType.ListIntersection] as Merger<string[]>;
    expect(listUnion(['a', 'b'], ['b', 'c'])).toEqual(['a', 'b', 'c']);
    expect(listIntersection(['a', 'b'], ['b', 'c'])).toEqual(['b']);
  });

  it('should intersect and union lists according to the constraint type when weakening', () => {
    const listUnion = weakenMappings[ConstraintType.ListUnion] as Merger<string[]>;
    const listIntersection = weakenMappings[ConstraintType.ListIntersection] as Merger<string[]>;
    expect(listUnion(['a', 'b'], ['b', 'c'])).toEqual(['b']);
    expect(listIntersection(['a', 'b'], ['b', 'c'])).toEqual(['a', 'b', 'c']);
  });

  it('should throw when a list merger is not given two arrays', () => {
    const listUnion = strengthenMappings[ConstraintType.ListUnion] as Merger<any>;
    expect(() => listUnion('a', ['b'])).toThrowError(/Type array expected/);
    expect(() => listUnion(['a'], 'b')).toThrowError(/Type array expected/);
  });

  it('should apply boolean or/and according to the constraint type when strengthening', () => {
    const booleanOr = strengthenMappings[ConstraintType.BooleanOr] as Merger<boolean>;
    const booleanAnd = strengthenMappings[ConstraintType.BooleanAnd] as Merger<boolean>;
    expect(booleanOr(true, false)).toEqual(true);
    expect(booleanAnd(true, false)).toEqual(false);
  });

  it('should apply boolean and/or according to the constraint type when weakening', () => {
    const booleanOr = weakenMappings[ConstraintType.BooleanOr] as Merger<boolean>;
    const booleanAnd = weakenMappings[ConstraintType.BooleanAnd] as Merger<boolean>;
    expect(booleanOr(true, false)).toEqual(false);
    expect(booleanAnd(true, false)).toEqual(true);
  });

  it('should throw when a boolean merger is not given two booleans', () => {
    const booleanOr = strengthenMappings[ConstraintType.BooleanOr] as Merger<any>;
    expect(() => booleanOr(1, false)).toThrowError(/Type boolean expected/);
    expect(() => booleanOr(true, 1)).toThrowError(/Type boolean expected/);
  });

  it('should join distinct strings and deduplicate equal strings', () => {
    const stringJoin = strengthenMappings[ConstraintType.StringJoin] as Merger<string>;
    expect(stringJoin('a', 'a')).toEqual('a');
    expect(stringJoin('a', 'b')).toEqual('a & b');
  });

  it('should throw when the string merger is not given two strings', () => {
    const stringJoin = strengthenMappings[ConstraintType.StringJoin] as Merger<any>;
    expect(() => stringJoin(1, 'b')).toThrowError(/Type string expected/);
  });
});

describe('getCustomMappings', () => {
  it('should construct the severity and node kind handlers with the strengthen flag', () => {
    const customMappings = getCustomMappings(true);
    expect(severityFactory).toHaveBeenCalledWith(true);
    expect(nodeKindFactory).toHaveBeenCalledWith(true);
    expect(customMappings[sh.severity])
      .toBe((severityFactory as jest.Mock).mock.results[0].value);
    expect(customMappings[sh.nodeKind])
      .toBe((nodeKindFactory as jest.Mock).mock.results[0].value);
  });
});
