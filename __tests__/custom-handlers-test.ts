import { nodeKindFactory, severityFactory } from '../lib/custom-handlers';
import { ns as sh } from '../lib/peer-deps/shacl';

describe('severityFactory', () => {
  const strengthenSeverity = severityFactory(true);
  const weakenSeverity = severityFactory(false);

  it('should return the stronger severity when strengthening', () => {
    expect(strengthenSeverity(sh.Info, sh.Violation)).toEqual(sh.Violation);
    expect(strengthenSeverity(sh.Warning, sh.Info)).toEqual(sh.Warning);
    expect(strengthenSeverity(sh.Warning, sh.Warning)).toEqual(sh.Warning);
  });

  it('should return the weaker severity when weakening', () => {
    expect(weakenSeverity(sh.Info, sh.Violation)).toEqual(sh.Info);
    expect(weakenSeverity(sh.Violation, sh.Warning)).toEqual(sh.Warning);
  });

  it('should throw when either input is not a severity', () => {
    expect(() => strengthenSeverity(sh.IRI as any, sh.Info)).toThrowError(/Expected two severities/);
    expect(() => strengthenSeverity(sh.Info, sh.IRI as any)).toThrowError(/Expected two severities/);
  });
});

describe('nodeKindFactory', () => {
  const strengthenNodeKind = nodeKindFactory(true);
  const weakenNodeKind = nodeKindFactory(false);

  it('should throw when either input is not a node kind', () => {
    expect(() => strengthenNodeKind(sh.Info as any, sh.IRI)).toThrowError(/Expected two nodekinds/);
    expect(() => strengthenNodeKind(sh.IRI, sh.Info as any)).toThrowError(/Expected two nodekinds/);
  });

  describe('strengthening', () => {
    it('should throw when the node kinds do not overlap', () => {
      expect(() => strengthenNodeKind(sh.IRI, sh.Literal)).toThrowError(/No overlap/);
      expect(() => strengthenNodeKind(sh.BlankNodeOrIRI, sh.Literal)).toThrowError(/No overlap/);
    });

    it('should return the common node kind when exactly one overlaps', () => {
      expect(strengthenNodeKind(sh.IRI, sh.IRI)).toEqual(sh.IRI);
      expect(strengthenNodeKind(sh.IRIOrLiteral, sh.BlankNodeOrIRI)).toEqual(sh.IRI);
      expect(strengthenNodeKind(sh.BlankNodeOrLiteral, sh.Literal)).toEqual(sh.Literal);
    });

    it('should return the combined node kind when two overlap', () => {
      expect(strengthenNodeKind(sh.IRIOrLiteral, sh.IRIOrLiteral)).toEqual(sh.IRIOrLiteral);
      expect(strengthenNodeKind(sh.BlankNodeOrIRI, sh.BlankNodeOrIRI)).toEqual(sh.BlankNodeOrIRI);
      expect(strengthenNodeKind(sh.BlankNodeOrLiteral, sh.BlankNodeOrLiteral))
        .toEqual(sh.BlankNodeOrLiteral);
    });
  });

  describe('weakening', () => {
    it('should return the combined node kind when the union has two members', () => {
      expect(weakenNodeKind(sh.IRI, sh.Literal)).toEqual(sh.IRIOrLiteral);
      expect(weakenNodeKind(sh.BlankNode, sh.IRI)).toEqual(sh.BlankNodeOrIRI);
      expect(weakenNodeKind(sh.BlankNode, sh.Literal)).toEqual(sh.BlankNodeOrLiteral);
    });

    it('should return the single node kind when both inputs are the same', () => {
      expect(weakenNodeKind(sh.BlankNode, sh.BlankNode)).toEqual(sh.BlankNode);
    });

    it('should return undefined when all node kinds are permitted', () => {
      expect(weakenNodeKind(sh.BlankNodeOrIRI, sh.Literal)).toBeUndefined();
      expect(weakenNodeKind(sh.IRIOrLiteral, sh.BlankNodeOrLiteral)).toBeUndefined();
    });
  });
});
