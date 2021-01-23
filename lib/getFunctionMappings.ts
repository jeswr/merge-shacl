import * as R from 'rambda';
import { ConstraintType } from './types/constraint-type';
import { severityFactory } from './merge-constraint-components';

// TODO FIX TYPINGS BELOW
function getFunctionMappings(strengthen: boolean): Record<ConstraintType, Function> {
  return {
    [ConstraintType.LowerBound]: (l: number, r: number) => (strengthen ? Math.max : Math.min)(l, r),
    [ConstraintType.UpperBound]: strengthen ? Math.min : Math.max,
    [ConstraintType.ListUnion]: strengthen ? R.union : R.intersection,
    [ConstraintType.ListIntersection]: strengthen ? R.intersection : R.union,
    [ConstraintType.BooleanOr]: strengthen ? R.or : R.and,
    [ConstraintType.BooleanAnd]: strengthen ? R.and : R.or,
    [ConstraintType.StringJoin]: (l: string, r: string) => (l === r ? l : `${l} & ${r}`),
    [ConstraintType.SeverityHandler]: severityFactory(strengthen),
  };
}
