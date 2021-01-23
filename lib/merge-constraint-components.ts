import { ProxiedResource } from 'rdf-object-proxy';
import * as R from 'rambda';
import { ns as sh } from './peer-deps/shacl';

const enum constraintType {
  LowerBound,
  UpperBound,
  ListUnion,
  ListIntersection,
  BooleanOr,
  BooleanAnd,
  StringJoin,
  SeverityHandler,
}

type Severity = sh.Info | sh.Warning | sh.Violation;

const severityOrder: Severity[] = [
  sh.Info,
  sh.Warning,
  sh.Violation,
];

function severityFactory(strengthen: boolean): (l: Severity, r: Severity) => Severity {
  const modifier = strengthen ? Math.max : Math.min;
  return (l: Severity, r: Severity) => severityOrder[modifier(
    severityOrder.indexOf(l),
    severityOrder.indexOf(r),
  )];
}
// TODO FIX TYPINGS BELOW
function getFunctionMappings(strengthen: boolean): Record<constraintType, Function> {
  return {
    [constraintType.LowerBound]: (l: number, r: number) => (strengthen ? Math.max : Math.min)(l, r),
    [constraintType.UpperBound]: strengthen ? Math.min : Math.max,
    [constraintType.ListUnion]: strengthen ? R.union : R.intersection,
    [constraintType.ListIntersection]: strengthen ? R.intersection : R.union,
    [constraintType.BooleanOr]: strengthen ? R.or : R.and,
    [constraintType.BooleanAnd]: strengthen ? R.and : R.or,
    [constraintType.StringJoin]: (l: string, r: string) => `${l} & ${r}`,
    [constraintType.SeverityHandler]: severityFactory(strengthen),
  };
}

const classMappings: {
  [key in sh]?: constraintType
} = {
  [sh.minLength]: constraintType.LowerBound,
  [sh.minExclusive]: constraintType.LowerBound,
  [sh.minInclusive]: constraintType.LowerBound,
  [sh.minCount]: constraintType.LowerBound,
  [sh.qualifiedMinCount]: constraintType.LowerBound,
  [sh.maxCount]: constraintType.UpperBound,
  [sh.qualifiedMinCount]: constraintType.UpperBound,
  [sh.maxLength]: constraintType.UpperBound,
  [sh.maxExclusive]: constraintType.UpperBound,
  [sh.maxInclusive]: constraintType.UpperBound,
  [sh.languageIn]: constraintType.ListIntersection,
  [sh._class]: constraintType.ListIntersection,
  [sh.datatype]: constraintType.ListIntersection,
  [sh.NodeKind]: constraintType.ListIntersection,
  [sh.lessThan]: constraintType.ListUnion,
  [sh.lessThanOrEquals]: constraintType.ListUnion,
  [sh.equals]: constraintType.ListUnion,
  [sh.disjoint]: constraintType.ListUnion,
  // TODO: Handle this as a special case with sh.falgs
  [sh.pattern]: constraintType.ListUnion,
  [sh.defaultValue]: constraintType.ListUnion,
  [sh.hasValue]: constraintType.ListUnion,
  [sh.ignoredProperties]: constraintType.ListIntersection,
  [sh._in]: constraintType.ListIntersection,
  [sh.uniqueLang]: constraintType.BooleanOr,
  [sh.qualifiedValueShapesDisjoint]: constraintType.BooleanOr,
  [sh.closed]: constraintType.BooleanOr,
  [sh.deactivated]: constraintType.BooleanAnd,
  [sh.message]: constraintType.StringJoin,
  // [sh.severity]
};

/**
 * Merges the constraint components inside a single
 * property shape.
 */
export default function mergeConstraintComponents(
  path: ProxiedResource<string>,
  properties: ProxiedResource<string>[],
  strengthen: boolean = true,
) {
  if (sh._in in classMappings) {
    return true;
  }
}
