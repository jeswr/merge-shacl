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

function assertType<T>(type: 'array' | 'number' | 'boolean' | 'string', f: (l: T, r: T) => T) {
  return (l: T, r: T) => {
    if (type === 'array') {
      if (!Array.isArray(l) || !Array.isArray(r)) {
        throw new Error(`Type ${type} expected for both inputs, but got ${typeof l} and ${typeof r}`);
      }
    // eslint-disable-next-line valid-typeof
    } else if (typeof l !== type || typeof r !== type) {
      throw new Error(`Type ${type} expected for both inputs, but got ${typeof l} and ${typeof r}`);
    }
    return f(l, r);
  };
}

export function getFunctionMappings(strengthen: boolean):
  Record<ConstraintType, MergerFunc> {
  return {
    [ConstraintType.LowerBound]: assertType('number', strengthen ? Math.max : Math.min),
    [ConstraintType.UpperBound]: assertType('number', strengthen ? Math.min : Math.max),
    [ConstraintType.ListUnion]: assertType('array', strengthen ? R.union : R.intersection),
    [ConstraintType.ListIntersection]: assertType('array', strengthen ? R.intersection : R.union),
    [ConstraintType.BooleanOr]: assertType<boolean>('boolean', strengthen ? R.or : R.and),
    [ConstraintType.BooleanAnd]: assertType<boolean>('boolean', strengthen ? R.and : R.or),
    [ConstraintType.StringJoin]: assertType('string',
      (l: string, r: string) => (l === r ? l : `${l} & ${r}`)),
    // [ConstraintType.SeverityHandler]: severityFactory(strengthen),
    // [ConstraintType.Nodekind]: severityFactory(strengthen),
  };
}

export function getCustomMappings(strengthen: boolean): {
  [key in sh]?: MergerFunc;
} {
  return {
    [sh.severity]: severityFactory(strengthen),
    [sh.nodeKind]: nodeKindFactory(strengthen),
  };
}
