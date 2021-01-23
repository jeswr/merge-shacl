import { ns as sh } from '../peer-deps/shacl';
import { SeverityType } from '../types';

const severityOrder: SeverityType[] = [
  sh.Info,
  sh.Warning,
  sh.Violation,
];

const severityMap = {
  [sh.Info]: true,
  [sh.Warning]: true,
  [sh.Violation]: true,
};

export function severityFactory(strengthen: boolean):
  (l: SeverityType, r: SeverityType) => SeverityType {
  const modifier = strengthen ? Math.max : Math.min;
  return (l: SeverityType, r: SeverityType) => {
    if (!severityMap[l] || !severityMap[r]) {
      throw new Error(`Expected two severities but recieved ${l} and ${r}`);
    }
    return severityOrder[modifier(
      severityOrder.indexOf(l),
      severityOrder.indexOf(r),
    )];
  };
}
