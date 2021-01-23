import { ns as sh } from '../peer-deps/shacl';
import { SeverityType } from '../types';

const severityOrder: SeverityType[] = [
  sh.Info,
  sh.Warning,
  sh.Violation,
];

export function severityFactory(strengthen: boolean):
  (l: SeverityType, r: SeverityType) => SeverityType {
  const modifier = strengthen ? Math.max : Math.min;
  return (l: SeverityType, r: SeverityType) => severityOrder[modifier(
    severityOrder.indexOf(l),
    severityOrder.indexOf(r),
  )];
}
