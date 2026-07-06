import { classMappings } from '../lib/classMappings';
import { ns as sh } from '../lib/peer-deps/shacl';
import { ConstraintType } from '../lib/types/constraint-type';

describe('classMappings', () => {
  it('should map lower bound constraint parameters to LowerBound', () => {
    expect(classMappings[sh.minLength]).toEqual(ConstraintType.LowerBound);
    expect(classMappings[sh.minExclusive]).toEqual(ConstraintType.LowerBound);
    expect(classMappings[sh.minInclusive]).toEqual(ConstraintType.LowerBound);
    expect(classMappings[sh.minCount]).toEqual(ConstraintType.LowerBound);
    expect(classMappings[sh.qualifiedMinCount]).toEqual(ConstraintType.LowerBound);
  });

  it('should map upper bound constraint parameters to UpperBound', () => {
    expect(classMappings[sh.maxLength]).toEqual(ConstraintType.UpperBound);
    expect(classMappings[sh.maxExclusive]).toEqual(ConstraintType.UpperBound);
    expect(classMappings[sh.maxInclusive]).toEqual(ConstraintType.UpperBound);
    expect(classMappings[sh.maxCount]).toEqual(ConstraintType.UpperBound);
    expect(classMappings[sh.qualifiedMaxCount]).toEqual(ConstraintType.UpperBound);
  });

  it('should map list-valued constraint parameters to a list constraint type', () => {
    expect(classMappings[sh.languageIn]).toEqual(ConstraintType.ListIntersection);
    expect(classMappings[sh._in]).toEqual(ConstraintType.ListIntersection);
    expect(classMappings[sh.pattern]).toEqual(ConstraintType.ListUnion);
    expect(classMappings[sh.hasValue]).toEqual(ConstraintType.ListUnion);
  });

  it('should map boolean constraint parameters to a boolean constraint type', () => {
    expect(classMappings[sh.uniqueLang]).toEqual(ConstraintType.BooleanOr);
    expect(classMappings[sh.closed]).toEqual(ConstraintType.BooleanOr);
    expect(classMappings[sh.deactivated]).toEqual(ConstraintType.BooleanAnd);
  });

  it('should map string constraint parameters to StringJoin', () => {
    expect(classMappings[sh.message]).toEqual(ConstraintType.StringJoin);
    expect(classMappings[sh.name]).toEqual(ConstraintType.StringJoin);
  });
});
