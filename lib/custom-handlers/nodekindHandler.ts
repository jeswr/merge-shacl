import * as R from 'rambda';
import { ns as sh } from '../peer-deps/shacl';
import { NodeKindType } from '../types';

const nodeKindMap: Record<NodeKindType, NodeKindType[]> = {
  [sh.IRI]: [sh.IRI],
  [sh.BlankNode]: [sh.BlankNode],
  [sh.Literal]: [sh.Literal],
  [sh.IRIOrLiteral]: [sh.IRI, sh.Literal],
  [sh.BlankNodeOrIRI]: [sh.BlankNode, sh.IRI],
  [sh.BlankNodeOrLiteral]: [sh.BlankNode, sh.Literal],
};

export function nodeKindFactory(strengthen: boolean) {
  const comparator = strengthen ? R.intersection : R.union;
  return function mergeNodeKind(l: NodeKindType, r: NodeKindType): NodeKindType | undefined {
    if (!nodeKindMap[l] || !nodeKindMap[r]) {
      throw new Error(`Expected two nodekinds but received ${l} and ${r}`);
    }
    const result = R.sortBy((x: NodeKindType) => x, comparator(nodeKindMap[l], nodeKindMap[r]));
    switch (result.length) {
      case 0:
        throw new Error(`No overlap between ${l} and ${r} so this constraint is always false`);
      case 1:
        return result[0];
      case 3:
        return undefined;
      case 2: {
        if (R.equals(nodeKindMap[sh.IRIOrLiteral], result)) {
          return sh.IRIOrLiteral;
        }
        if (R.equals(nodeKindMap[sh.BlankNodeOrIRI], result)) {
          return sh.BlankNodeOrIRI;
        }
        // Every sorted two-element result matches one of the three combined node kinds
        /* istanbul ignore else */
        if (R.equals(nodeKindMap[sh.BlankNodeOrLiteral], result)) {
          return sh.BlankNodeOrLiteral;
        }
        /* istanbul ignore next: unreachable defensive check */
        throw new Error(`Invalid result set for NodeKind ${result}`);
      }
      // The merge of two node kinds can contain at most three node kinds
      /* istanbul ignore next: unreachable defensive check */
      default:
        throw new Error(`Invalid result set for NodeKind ${result}`);
    }
  };
}
