import { ns as sh } from '../peer-deps/shacl';

export type SeverityType = sh.Info | sh.Warning | sh.Violation;

export type NodeKindType =
  | sh.IRI
  | sh.BlankNode
  | sh.Literal
  | sh.IRIOrLiteral
  | sh.BlankNodeOrIRI
  | sh.BlankNodeOrLiteral
