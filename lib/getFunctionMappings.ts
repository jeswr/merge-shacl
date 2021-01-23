import * as R from 'rambda';
import { ConstraintType, SeverityType, NodeKindType } from './types';
import { ns as sh } from './peer-deps/shacl';
import { severityFactory, nodeKindFactory } from './custom-handlers';

type Merger<T> = (l: T, r: T) => T | undefined
type MergerFunc =
  | Merger<SeverityType>
  | Merger<number>
  | Merger<boolean>
  // TODO FIX TYPINGS BELOW
  | Merger<readonly any[]>
  | Merger<string>
  | Merger<NodeKindType>

function getFunctionMappings(strengthen: boolean):
  Record<ConstraintType, MergerFunc> {
  return {
    [ConstraintType.LowerBound]: (l: number, r: number) => (strengthen ? Math.max : Math.min)(l, r),
    [ConstraintType.UpperBound]: strengthen ? Math.min : Math.max,
    [ConstraintType.ListUnion]: strengthen ? R.union : R.intersection,
    [ConstraintType.ListIntersection]: strengthen ? R.intersection : R.union,
    [ConstraintType.BooleanOr]: strengthen ? R.or : R.and,
    [ConstraintType.BooleanAnd]: strengthen ? R.and : R.or,
    [ConstraintType.StringJoin]: (l: string, r: string) => (l === r ? l : `${l} & ${r}`),
    // [ConstraintType.SeverityHandler]: severityFactory(strengthen),
    // [ConstraintType.Nodekind]: severityFactory(strengthen),
  };
}

function getCustomMappings(strengthen: boolean): {
  [key in sh]?: MergerFunc;
} {
  return {
    [sh.severity]: severityFactory(strengthen),
    [sh.nodeKind]: nodeKindFactory(strengthen),
  };
}
