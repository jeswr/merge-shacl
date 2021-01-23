import { ns as sh } from './peer-deps/shacl';
import { ConstraintType } from './types/constraint-type';

export const classMappings: {
  [key in sh]?: ConstraintType;
} = {
  [sh.minLength]: ConstraintType.LowerBound,
  [sh.minExclusive]: ConstraintType.LowerBound,
  [sh.minInclusive]: ConstraintType.LowerBound,
  [sh.minCount]: ConstraintType.LowerBound,
  [sh.qualifiedMinCount]: ConstraintType.LowerBound,
  [sh.maxCount]: ConstraintType.UpperBound,
  [sh.qualifiedMinCount]: ConstraintType.UpperBound,
  [sh.maxLength]: ConstraintType.UpperBound,
  [sh.maxExclusive]: ConstraintType.UpperBound,
  [sh.maxInclusive]: ConstraintType.UpperBound,
  [sh.languageIn]: ConstraintType.ListIntersection,
  [sh._class]: ConstraintType.ListIntersection,
  [sh.datatype]: ConstraintType.ListIntersection,
  [sh.NodeKind]: ConstraintType.ListIntersection,
  [sh.lessThan]: ConstraintType.ListUnion,
  [sh.lessThanOrEquals]: ConstraintType.ListUnion,
  [sh.equals]: ConstraintType.ListUnion,
  [sh.disjoint]: ConstraintType.ListUnion,
  // TODO: Handle this as a special case with sh.falgs
  [sh.pattern]: ConstraintType.ListUnion,
  [sh.defaultValue]: ConstraintType.ListUnion,
  [sh.hasValue]: ConstraintType.ListUnion,
  [sh.ignoredProperties]: ConstraintType.ListIntersection,
  [sh._in]: ConstraintType.ListIntersection,
  [sh.uniqueLang]: ConstraintType.BooleanOr,
  [sh.qualifiedValueShapesDisjoint]: ConstraintType.BooleanOr,
  [sh.closed]: ConstraintType.BooleanOr,
  [sh.deactivated]: ConstraintType.BooleanAnd,
  [sh.message]: ConstraintType.StringJoin,
  [sh.severity]: ConstraintType.SeverityHandler,
  [sh.name]: ConstraintType.StringJoin,
  [sh.order]: ConstraintType.UpperBound,
};
