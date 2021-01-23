import { ProxiedResource } from 'rdf-object-proxy';
import { ns as sh } from './peer-deps/shacl';
import { classMappings } from './classMappings';

type Severity = sh.Info | sh.Warning | sh.Violation;

const severityOrder: Severity[] = [
  sh.Info,
  sh.Warning,
  sh.Violation,
];
// TODO: Implement similar custom function for nodeKind
export function severityFactory(strengthen: boolean): (l: Severity, r: Severity) => Severity {
  const modifier = strengthen ? Math.max : Math.min;
  return (l: Severity, r: Severity) => severityOrder[modifier(
    severityOrder.indexOf(l),
    severityOrder.indexOf(r),
  )];
}
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
