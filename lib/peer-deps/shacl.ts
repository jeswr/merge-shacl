/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
/* eslint-disable no-shadow */
/* eslint-disable max-len */
export enum ns {
  AndConstraintComponentAnd = 'http://www.w3.org/ns/shacl#AndConstraintComponent-and',
  HasValueConstraintComponentHasValue = 'http://www.w3.org/ns/shacl#HasValueConstraintComponent-hasValue',
  NodeConstraintComponentNode = 'http://www.w3.org/ns/shacl#NodeConstraintComponent-node',
  NotConstraintComponentNot = 'http://www.w3.org/ns/shacl#NotConstraintComponent-not',
  OrConstraintComponentOr = 'http://www.w3.org/ns/shacl#OrConstraintComponent-or',
  PropertyConstraintComponentProperty = 'http://www.w3.org/ns/shacl#PropertyConstraintComponent-property',
  QualifiedMaxCountConstraintComponentQualifiedValueShape = 'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedValueShape',
  QualifiedMinCountConstraintComponentQualifiedValueShape = 'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedValueShape',
  XoneConstraintComponentXone = 'http://www.w3.org/ns/shacl#XoneConstraintComponent-xone',
  SPARQLConstraintComponentSparql = 'http://www.w3.org/ns/shacl#SPARQLConstraintComponent-sparql',
  ExpressionConstraintComponentExpression = 'http://www.w3.org/ns/shacl#ExpressionConstraintComponent-expression',
  JSConstraintJs = 'http://www.w3.org/ns/shacl#JSConstraint-js',
  ClassConstraintComponentClass = 'http://www.w3.org/ns/shacl#ClassConstraintComponent-class',
  ClosedConstraintComponentClosed = 'http://www.w3.org/ns/shacl#ClosedConstraintComponent-closed',
  ClosedConstraintComponentIgnoredProperties = 'http://www.w3.org/ns/shacl#ClosedConstraintComponent-ignoredProperties',
  DisjointConstraintComponentDisjoint = 'http://www.w3.org/ns/shacl#DisjointConstraintComponent-disjoint',
  EqualsConstraintComponentEquals = 'http://www.w3.org/ns/shacl#EqualsConstraintComponent-equals',
  InConstraintComponentIn = 'http://www.w3.org/ns/shacl#InConstraintComponent-in',
  LanguageInConstraintComponentLanguageIn = 'http://www.w3.org/ns/shacl#LanguageInConstraintComponent-languageIn',
  LessThanConstraintComponentLessThan = 'http://www.w3.org/ns/shacl#LessThanConstraintComponent-lessThan',
  LessThanOrEqualsConstraintComponentLessThanOrEquals = 'http://www.w3.org/ns/shacl#LessThanOrEqualsConstraintComponent-lessThanOrEquals',
  PatternConstraintComponentPattern = 'http://www.w3.org/ns/shacl#PatternConstraintComponent-pattern',
  QualifiedMaxCountConstraintComponentQualifiedMaxCount = 'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedMaxCount',
  QualifiedMinCountConstraintComponentQualifiedMinCount = 'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedMinCount',
  DatatypeConstraintComponentDatatype = 'http://www.w3.org/ns/shacl#DatatypeConstraintComponent-datatype',
  MaxCountConstraintComponentMaxCount = 'http://www.w3.org/ns/shacl#MaxCountConstraintComponent-maxCount',
  MaxExclusiveConstraintComponentMaxExclusive = 'http://www.w3.org/ns/shacl#MaxExclusiveConstraintComponent-maxExclusive',
  MaxInclusiveConstraintComponentMaxInclusive = 'http://www.w3.org/ns/shacl#MaxInclusiveConstraintComponent-maxInclusive',
  MaxLengthConstraintComponentMaxLength = 'http://www.w3.org/ns/shacl#MaxLengthConstraintComponent-maxLength',
  MinCountConstraintComponentMinCount = 'http://www.w3.org/ns/shacl#MinCountConstraintComponent-minCount',
  MinExclusiveConstraintComponentMinExclusive = 'http://www.w3.org/ns/shacl#MinExclusiveConstraintComponent-minExclusive',
  MinInclusiveConstraintComponentMinInclusive = 'http://www.w3.org/ns/shacl#MinInclusiveConstraintComponent-minInclusive',
  MinLengthConstraintComponentMinLength = 'http://www.w3.org/ns/shacl#MinLengthConstraintComponent-minLength',
  NodeKindConstraintComponentNodeKind = 'http://www.w3.org/ns/shacl#NodeKindConstraintComponent-nodeKind',
  PatternConstraintComponentFlags = 'http://www.w3.org/ns/shacl#PatternConstraintComponent-flags',
  QualifiedMaxCountConstraintComponentQualifiedValueShapesDisjoint = 'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedValueShapesDisjoint',
  QualifiedMinCountConstraintComponentQualifiedValueShapesDisjoint = 'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedValueShapesDisjoint',
  UniqueLangConstraintComponentUniqueLang = 'http://www.w3.org/ns/shacl#UniqueLangConstraintComponent-uniqueLang',
  /** A rule based on triple (subject, predicate, object) pattern. */
  TripleRule = 'http://www.w3.org/ns/shacl#TripleRule',
  /**
   * A human-readable message (possibly with placeholders for variables) explaining the cause of the result.
   * @label message
   */
  message = 'http://www.w3.org/ns/shacl#message',
  /**
   * The node kind of all blank nodes.
   * @label Blank node
   */
  BlankNode = 'http://www.w3.org/ns/shacl#BlankNode',
  /**
   * The node kind of all blank nodes or IRIs.
   * @label Blank node or IRI
   */
  BlankNodeOrIRI = 'http://www.w3.org/ns/shacl#BlankNodeOrIRI',
  /**
   * The node kind of all blank nodes or literals.
   * @label Blank node or literal
   */
  BlankNodeOrLiteral = 'http://www.w3.org/ns/shacl#BlankNodeOrLiteral',
  /**
   * The node kind of all IRIs.
   * @label IRI
   */
  IRI = 'http://www.w3.org/ns/shacl#IRI',
  /**
   * The node kind of all IRIs or literals.
   * @label IRI or literal
   */
  IRIOrLiteral = 'http://www.w3.org/ns/shacl#IRIOrLiteral',
  /**
   * The node kind of all literals.
   * @label Literal
   */
  Literal = 'http://www.w3.org/ns/shacl#Literal',
  /**
   * The severity for an informational validation result.
   * @label Info
   */
  Info = 'http://www.w3.org/ns/shacl#Info',
  /**
   * The severity for a violation validation result.
   * @label Violation
   */
  Violation = 'http://www.w3.org/ns/shacl#Violation',
  /**
   * The severity for a warning validation result.
   * @label Warning
   */
  Warning = 'http://www.w3.org/ns/shacl#Warning',
  /**
   * Specifies a value that must be among the value nodes.
   * @label has value
   */
  hasValue = 'http://www.w3.org/ns/shacl#hasValue',
  /**
   * Specifies the maximum exclusive value of each value node.
   * @label max exclusive
   */
  maxExclusive = 'http://www.w3.org/ns/shacl#maxExclusive',
  /**
   * Specifies the maximum inclusive value of each value node.
   * @label max inclusive
   */
  maxInclusive = 'http://www.w3.org/ns/shacl#maxInclusive',
  /**
   * Specifies the minimum exclusive value of each value node.
   * @label min exclusive
   */
  minExclusive = 'http://www.w3.org/ns/shacl#minExclusive',
  /**
   * Specifies the minimum inclusive value of each value node.
   * @label min inclusive
   */
  minInclusive = 'http://www.w3.org/ns/shacl#minInclusive',
  /**
   * Specifies the relative order of this compared to its siblings. For example use 0 for the first, 1 for the second.
   * @label order
   */
  order = 'http://www.w3.org/ns/shacl#order',
  /**
   * A node expression that represents the current focus node.
   * @label this
   */
  _this = 'http://www.w3.org/ns/shacl#this',
  /**
   * The node expression producing the input nodes of a filter shape expression.
   * @label nodes
   */
  nodes = 'http://www.w3.org/ns/shacl#nodes',
  /**
   * A list of node expressions that shall be intersected.
   * @label intersection
   */
  intersection = 'http://www.w3.org/ns/shacl#intersection',
  /**
   * A list of node expressions that shall be used together.
   * @label union
   */
  union = 'http://www.w3.org/ns/shacl#union',
  /**
   * The node expression that must return true for the value nodes.
   * @label expression
   */
  expression = 'http://www.w3.org/ns/shacl#expression',
  /**
   * This vocabulary defines terms used in SHACL, the W3C Shapes Constraint Language.
   * @label W3C Shapes Constraint Language (SHACL) Vocabulary
   */
  _ = 'http://www.w3.org/ns/shacl#',
  /**
   * A shape is a collection of constraints that may be targeted for certain nodes.
   * @label Shape
   */
  Shape = 'http://www.w3.org/ns/shacl#Shape',
  /**
   * A node shape is a shape that specifies constraint that need to be met with respect to focus nodes.
   * @label Node shape
   */
  NodeShape = 'http://www.w3.org/ns/shacl#NodeShape',
  /**
   * A property shape is a shape that specifies constraints on the values of a focus node for a given property or path.
   * @label Property shape
   */
  PropertyShape = 'http://www.w3.org/ns/shacl#PropertyShape',
  /**
   * If set to true then all nodes conform to this.
   * @label deactivated
   */
  deactivated = 'http://www.w3.org/ns/shacl#deactivated',
  /**
   * Links a shape to individual nodes, indicating that these nodes must conform to the shape.
   * @label target node
   */
  targetNode = 'http://www.w3.org/ns/shacl#targetNode',
  /**
   * The class of validation result severity levels, including violation and warning levels.
   * @label Severity
   */
  Severity = 'http://www.w3.org/ns/shacl#Severity',
  /**
   * The class of all node kinds, including sh:BlankNode, sh:IRI, sh:Literal or the combinations of these: sh:BlankNodeOrIRI, sh:BlankNodeOrLiteral, sh:IRIOrLiteral.
   * @label Node kind
   */
  NodeKind = 'http://www.w3.org/ns/shacl#NodeKind',
  /**
   * The class of SHACL validation reports.
   * @label Validation report
   */
  ValidationReport = 'http://www.w3.org/ns/shacl#ValidationReport',
  /**
   * The class of validation results.
   * @label Validation result
   */
  ValidationResult = 'http://www.w3.org/ns/shacl#ValidationResult',
  /**
   * The base class of validation results, typically not instantiated directly.
   * @label Abstract result
   */
  AbstractResult = 'http://www.w3.org/ns/shacl#AbstractResult',
  /**
   * The focus node that was validated when the result was produced.
   * @label focus node
   */
  focusNode = 'http://www.w3.org/ns/shacl#focusNode',
  /**
   * Human-readable messages explaining the cause of the result.
   * @label result message
   */
  resultMessage = 'http://www.w3.org/ns/shacl#resultMessage',
  /**
   * The constraint that was validated when the result was produced.
   * @label source constraint
   */
  sourceConstraint = 'http://www.w3.org/ns/shacl#sourceConstraint',
  /**
   * The class of constraint components.
   * @label Constraint component
   */
  ConstraintComponent = 'http://www.w3.org/ns/shacl#ConstraintComponent',
  /**
   * An RDF node that has caused the result.
   * @label value
   */
  value = 'http://www.w3.org/ns/shacl#value',
  /**
   * The (single) value of this property represents an inverse path (object to subject).
   * @label inverse path
   */
  inversePath = 'http://www.w3.org/ns/shacl#inversePath',
  /**
   * The (single) value of this property must be a list of path elements, representing the elements of alternative paths.
   * @label alternative path
   */
  alternativePath = 'http://www.w3.org/ns/shacl#alternativePath',
  /**
   * The (single) value of this property represents a path that is matched zero or more times.
   * @label zero or more path
   */
  zeroOrMorePath = 'http://www.w3.org/ns/shacl#zeroOrMorePath',
  /**
   * The (single) value of this property represents a path that is matched one or more times.
   * @label one or more path
   */
  oneOrMorePath = 'http://www.w3.org/ns/shacl#oneOrMorePath',
  /**
   * The (single) value of this property represents a path that is matched zero or one times.
   * @label zero or one path
   */
  zeroOrOnePath = 'http://www.w3.org/ns/shacl#zeroOrOnePath',
  /**
   * Superclass of components that can take parameters, especially functions and constraint components.
   * @label Parameterizable
   */
  Parameterizable = 'http://www.w3.org/ns/shacl#Parameterizable',
  /**
   * The class of parameter declarations, consisting of a path predicate and (possibly) information about allowed value type, cardinality and other characteristics.
   * @label Parameter
   */
  Parameter = 'http://www.w3.org/ns/shacl#Parameter',
  /**
   * Outlines how human-readable labels of instances of the associated Parameterizable shall be produced. The values can contain {?paramName} as placeholders for the actual values of the given parameter.
   * @label label template
   */
  labelTemplate = 'http://www.w3.org/ns/shacl#labelTemplate',
  /**
   * The class of validators, which provide instructions on how to process a constraint definition. This class serves as base class for the SPARQL-based validators and other possible implementations.
   * @label Validator
   */
  Validator = 'http://www.w3.org/ns/shacl#Validator',
  /**
   * The class of validators based on SPARQL ASK queries. The queries are evaluated for each value node and are supposed to return true if the given node conforms.
   * @label SPARQL ASK validator
   */
  SPARQLAskValidator = 'http://www.w3.org/ns/shacl#SPARQLAskValidator',
  /**
   * The class of SPARQL executables that are based on an ASK query.
   * @label SPARQL ASK executable
   */
  SPARQLAskExecutable = 'http://www.w3.org/ns/shacl#SPARQLAskExecutable',
  /**
   * The class of validators based on SPARQL SELECT queries. The queries are evaluated for each focus node and are supposed to produce bindings for all focus nodes that do not conform.
   * @label SPARQL SELECT validator
   */
  SPARQLSelectValidator = 'http://www.w3.org/ns/shacl#SPARQLSelectValidator',
  /**
   * The class of SPARQL executables based on a SELECT query.
   * @label SPARQL SELECT executable
   */
  SPARQLSelectExecutable = 'http://www.w3.org/ns/shacl#SPARQLSelectExecutable',
  /**
   * A constraint component that can be used to test whether a value node conforms to all members of a provided list of shapes.
   * @label And constraint component
   */
  AndConstraintComponent = 'http://www.w3.org/ns/shacl#AndConstraintComponent',
  /**
   * RDF list of shapes to validate the value nodes against.
   * @label and
   */
  and = 'http://www.w3.org/ns/shacl#and',
  /**
   * A constraint component that can be used to verify that each value node is an instance of a given type.
   * @label Class constraint component
   */
  ClassConstraintComponent = 'http://www.w3.org/ns/shacl#ClassConstraintComponent',
  /**
   * The type that all value nodes must have.
   * @label class
   */
  _class = 'http://www.w3.org/ns/shacl#class',
  /**
   * Specifies the node kind (e.g. IRI or literal) each value node.
   * @label node kind
   */
  nodeKind = 'http://www.w3.org/ns/shacl#nodeKind',
  /**
   * A constraint component that can be used to indicate that focus nodes must only have values for those properties that have been explicitly enumerated via sh:property/sh:path.
   * @label Closed constraint component
   */
  ClosedConstraintComponent = 'http://www.w3.org/ns/shacl#ClosedConstraintComponent',
  /**
   * If set to true then the shape is closed.
   * @label closed
   */
  closed = 'http://www.w3.org/ns/shacl#closed',
  /**
   * Specifies an RDF datatype that all value nodes must have.
   * @label datatype
   */
  datatype = 'http://www.w3.org/ns/shacl#datatype',
  /**
   * An optional RDF list of properties that are also permitted in addition to those explicitly enumerated via sh:property/sh:path.
   * @label ignored properties
   */
  ignoredProperties = 'http://www.w3.org/ns/shacl#ignoredProperties',
  /**
   * A constraint component that can be used to restrict the datatype of all value nodes.
   * @label Datatype constraint component
   */
  DatatypeConstraintComponent = 'http://www.w3.org/ns/shacl#DatatypeConstraintComponent',
  /**
   * Specifies the maximum number of values in the set of value nodes.
   * @label max count
   */
  maxCount = 'http://www.w3.org/ns/shacl#maxCount',
  /**
   * A constraint component that can be used to verify that the set of value nodes is disjoint with the the set of nodes that have the focus node as subject and the value of a given property as predicate.
   * @label Disjoint constraint component
   */
  DisjointConstraintComponent = 'http://www.w3.org/ns/shacl#DisjointConstraintComponent',
  /**
   * Specifies a property where the set of values must be disjoint with the value nodes.
   * @label disjoint
   */
  disjoint = 'http://www.w3.org/ns/shacl#disjoint',
  /**
   * A constraint component that can be used to verify that the set of value nodes is equal to the set of nodes that have the focus node as subject and the value of a given property as predicate.
   * @label Equals constraint component
   */
  EqualsConstraintComponent = 'http://www.w3.org/ns/shacl#EqualsConstraintComponent',
  /**
   * Specifies a property that must have the same values as the value nodes.
   * @label equals
   */
  equals = 'http://www.w3.org/ns/shacl#equals',
  /**
   * A constraint component that can be used to verify that one of the value nodes is a given RDF node.
   * @label Has-value constraint component
   */
  HasValueConstraintComponent = 'http://www.w3.org/ns/shacl#HasValueConstraintComponent',
  /**
   * A constraint component that can be used to exclusively enumerate the permitted value nodes.
   * @label In constraint component
   */
  InConstraintComponent = 'http://www.w3.org/ns/shacl#InConstraintComponent',
  /**
   * Specifies a list of allowed values so that each value node must be among the members of the given list.
   * @label in
   */
  _in = 'http://www.w3.org/ns/shacl#in',
  /**
   * A constraint component that can be used to enumerate language tags that all value nodes must have.
   * @label Language-in constraint component
   */
  LanguageInConstraintComponent = 'http://www.w3.org/ns/shacl#LanguageInConstraintComponent',
  /**
   * Specifies a list of language tags that all value nodes must have.
   * @label language in
   */
  languageIn = 'http://www.w3.org/ns/shacl#languageIn',
  /**
   * A constraint component that can be used to verify that each value node is smaller than all the nodes that have the focus node as subject and the value of a given property as predicate.
   * @label Less-than constraint component
   */
  LessThanConstraintComponent = 'http://www.w3.org/ns/shacl#LessThanConstraintComponent',
  /**
   * Specifies a property that must have smaller values than the value nodes.
   * @label less than
   */
  lessThan = 'http://www.w3.org/ns/shacl#lessThan',
  /**
   * A constraint component that can be used to verify that every value node is smaller than all the nodes that have the focus node as subject and the value of a given property as predicate.
   * @label less-than-or-equals constraint component
   */
  LessThanOrEqualsConstraintComponent = 'http://www.w3.org/ns/shacl#LessThanOrEqualsConstraintComponent',
  /**
   * Specifies a property that must have smaller or equal values than the value nodes.
   * @label less than or equals
   */
  lessThanOrEquals = 'http://www.w3.org/ns/shacl#lessThanOrEquals',
  /**
   * A constraint component that can be used to restrict the maximum number of value nodes.
   * @label Max-count constraint component
   */
  MaxCountConstraintComponent = 'http://www.w3.org/ns/shacl#MaxCountConstraintComponent',
  /**
   * A constraint component that can be used to restrict the range of value nodes with a maximum exclusive value.
   * @label Max-exclusive constraint component
   */
  MaxExclusiveConstraintComponent = 'http://www.w3.org/ns/shacl#MaxExclusiveConstraintComponent',
  /**
   * A constraint component that can be used to restrict the range of value nodes with a maximum inclusive value.
   * @label Max-inclusive constraint component
   */
  MaxInclusiveConstraintComponent = 'http://www.w3.org/ns/shacl#MaxInclusiveConstraintComponent',
  /**
   * A constraint component that can be used to restrict the maximum string length of value nodes.
   * @label Max-length constraint component
   */
  MaxLengthConstraintComponent = 'http://www.w3.org/ns/shacl#MaxLengthConstraintComponent',
  /**
   * Specifies the maximum string length of each value node.
   * @label max length
   */
  maxLength = 'http://www.w3.org/ns/shacl#maxLength',
  /**
   * A constraint component that can be used to restrict the minimum number of value nodes.
   * @label Min-count constraint component
   */
  MinCountConstraintComponent = 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
  /**
   * Specifies the minimum number of values in the set of value nodes.
   * @label min count
   */
  minCount = 'http://www.w3.org/ns/shacl#minCount',
  /**
   * A constraint component that can be used to restrict the range of value nodes with a minimum exclusive value.
   * @label Min-exclusive constraint component
   */
  MinExclusiveConstraintComponent = 'http://www.w3.org/ns/shacl#MinExclusiveConstraintComponent',
  /**
   * A constraint component that can be used to restrict the range of value nodes with a minimum inclusive value.
   * @label Min-inclusive constraint component
   */
  MinInclusiveConstraintComponent = 'http://www.w3.org/ns/shacl#MinInclusiveConstraintComponent',
  /**
   * A constraint component that can be used to restrict the minimum string length of value nodes.
   * @label Min-length constraint component
   */
  MinLengthConstraintComponent = 'http://www.w3.org/ns/shacl#MinLengthConstraintComponent',
  /**
   * Specifies the minimum string length of each value node.
   * @label min length
   */
  minLength = 'http://www.w3.org/ns/shacl#minLength',
  /**
   * A constraint component that can be used to verify that all value nodes conform to the given node shape.
   * @label Node constraint component
   */
  NodeConstraintComponent = 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
  /**
   * Specifies the node shape that all value nodes must conform to.
   * @label node
   */
  node = 'http://www.w3.org/ns/shacl#node',
  /**
   * A constraint component that can be used to restrict the RDF node kind of each value node.
   * @label Node-kind constraint component
   */
  NodeKindConstraintComponent = 'http://www.w3.org/ns/shacl#NodeKindConstraintComponent',
  /**
   * A constraint component that can be used to verify that value nodes do not conform to a given shape.
   * @label Not constraint component
   */
  NotConstraintComponent = 'http://www.w3.org/ns/shacl#NotConstraintComponent',
  /**
   * Specifies a shape that the value nodes must not conform to.
   * @label not
   */
  not = 'http://www.w3.org/ns/shacl#not',
  /**
   * A constraint component that can be used to restrict the value nodes so that they conform to at least one out of several provided shapes.
   * @label Or constraint component
   */
  OrConstraintComponent = 'http://www.w3.org/ns/shacl#OrConstraintComponent',
  /**
   * Specifies a list of shapes so that the value nodes must conform to at least one of the shapes.
   * @label or
   */
  or = 'http://www.w3.org/ns/shacl#or',
  /**
   * A constraint component that can be used to verify that every value node matches a given regular expression.
   * @label Pattern constraint component
   */
  PatternConstraintComponent = 'http://www.w3.org/ns/shacl#PatternConstraintComponent',
  /**
   * Specifies a regular expression pattern that the string representations of the value nodes must match.
   * @label pattern
   */
  pattern = 'http://www.w3.org/ns/shacl#pattern',
  /**
   * An optional flag to be used with regular expression pattern matching.
   * @label flags
   */
  flags = 'http://www.w3.org/ns/shacl#flags',
  /**
   * A constraint component that can be used to verify that all value nodes conform to the given property shape.
   * @label Property constraint component
   */
  PropertyConstraintComponent = 'http://www.w3.org/ns/shacl#PropertyConstraintComponent',
  /**
   * A constraint component that can be used to verify that a specified maximum number of value nodes conforms to a given shape.
   * @label Qualified-max-count constraint component
   */
  QualifiedMaxCountConstraintComponent = 'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent',
  /**
   * The maximum number of value nodes that can conform to the shape.
   * @label qualified max count
   */
  qualifiedMaxCount = 'http://www.w3.org/ns/shacl#qualifiedMaxCount',
  /**
   * The shape that a specified number of values must conform to.
   * @label qualified value shape
   */
  qualifiedValueShape = 'http://www.w3.org/ns/shacl#qualifiedValueShape',
  /**
   * Can be used to mark the qualified value shape to be disjoint with its sibling shapes.
   * @label qualified value shapes disjoint
   */
  qualifiedValueShapesDisjoint = 'http://www.w3.org/ns/shacl#qualifiedValueShapesDisjoint',
  /**
   * A constraint component that can be used to verify that a specified minimum number of value nodes conforms to a given shape.
   * @label Qualified-min-count constraint component
   */
  QualifiedMinCountConstraintComponent = 'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent',
  /**
   * The minimum number of value nodes that must conform to the shape.
   * @label qualified min count
   */
  qualifiedMinCount = 'http://www.w3.org/ns/shacl#qualifiedMinCount',
  /**
   * A constraint component that can be used to specify that no pair of value nodes may use the same language tag.
   * @label Unique-languages constraint component
   */
  UniqueLangConstraintComponent = 'http://www.w3.org/ns/shacl#UniqueLangConstraintComponent',
  /**
   * Specifies whether all node values must have a unique (or no) language tag.
   * @label unique languages
   */
  uniqueLang = 'http://www.w3.org/ns/shacl#uniqueLang',
  /**
   * A constraint component that can be used to restrict the value nodes so that they conform to exactly one out of several provided shapes.
   * @label Exactly one constraint component
   */
  XoneConstraintComponent = 'http://www.w3.org/ns/shacl#XoneConstraintComponent',
  /**
   * Specifies a list of shapes so that the value nodes must conform to exactly one of the shapes.
   * @label exactly one
   */
  xone = 'http://www.w3.org/ns/shacl#xone',
  /**
   * The class of resources that encapsulate a SPARQL query.
   * @label SPARQL executable
   */
  SPARQLExecutable = 'http://www.w3.org/ns/shacl#SPARQLExecutable',
  /**
   * The class of SPARQL executables that are based on a CONSTRUCT query.
   * @label SPARQL CONSTRUCT executable
   */
  SPARQLConstructExecutable = 'http://www.w3.org/ns/shacl#SPARQLConstructExecutable',
  /**
   * The class of SPARQL executables based on a SPARQL UPDATE.
   * @label SPARQL UPDATE executable
   */
  SPARQLUpdateExecutable = 'http://www.w3.org/ns/shacl#SPARQLUpdateExecutable',
  /**
   * The class of prefix declarations, consisting of pairs of a prefix with a namespace.
   * @label Prefix declaration
   */
  PrefixDeclaration = 'http://www.w3.org/ns/shacl#PrefixDeclaration',
  /**
   * A constraint component that can be used to define constraints based on SPARQL queries.
   * @label SPARQL constraint component
   */
  SPARQLConstraintComponent = 'http://www.w3.org/ns/shacl#SPARQLConstraintComponent',
  /**
   * The class of constraints based on SPARQL SELECT queries.
   * @label SPARQL constraint
   */
  SPARQLConstraint = 'http://www.w3.org/ns/shacl#SPARQLConstraint',
  /**
   * A default value for a property, for example for user interface tools to pre-populate input fields.
   * @label default value
   */
  defaultValue = 'http://www.w3.org/ns/shacl#defaultValue',
  /**
   * Human-readable descriptions for the property in the context of the surrounding shape.
   * @label description
   */
  description = 'http://www.w3.org/ns/shacl#description',
  /**
   * Instances of this class represent groups of property shapes that belong together.
   * @label Property group
   */
  PropertyGroup = 'http://www.w3.org/ns/shacl#PropertyGroup',
  /**
   * Human-readable labels for the property in the context of the surrounding shape.
   * @label name
   */
  name = 'http://www.w3.org/ns/shacl#name',
  /**
   * The base class of targets such as those based on SPARQL queries.
   * @label Target
   */
  Target = 'http://www.w3.org/ns/shacl#Target',
  /**
   * The (meta) class for parameterizable targets.	Instances of this are instantiated as values of the sh:target property.
   * @label Target type
   */
  TargetType = 'http://www.w3.org/ns/shacl#TargetType',
  /**
   * The class of targets that are based on SPARQL queries.
   * @label SPARQL target
   */
  SPARQLTarget = 'http://www.w3.org/ns/shacl#SPARQLTarget',
  /**
   * The (meta) class for parameterizable targets that are based on SPARQL queries.
   * @label SPARQL target type
   */
  SPARQLTargetType = 'http://www.w3.org/ns/shacl#SPARQLTargetType',
  /**
   * The class of SHACL functions.
   * @label Function
   */
  Function = 'http://www.w3.org/ns/shacl#Function',
  /**
   * A function backed by a SPARQL query - either ASK or SELECT.
   * @label SPARQL function
   */
  SPARQLFunction = 'http://www.w3.org/ns/shacl#SPARQLFunction',
  /**
   * A class of result annotations, which define the rules to derive the values of a given annotation property as extra values for a validation result.
   * @label Result annotation
   */
  ResultAnnotation = 'http://www.w3.org/ns/shacl#ResultAnnotation',
  /**
   * The (default) values of the annotation property.
   * @label annotation value
   */
  annotationValue = 'http://www.w3.org/ns/shacl#annotationValue',
  /**
   * The shape that all input nodes of the expression need to conform to.
   * @label filter shape
   */
  filterShape = 'http://www.w3.org/ns/shacl#filterShape',
  /**
   * A constraint component that can be used to verify that a given node expression produces true for all value nodes.
   * @label Expression constraint component
   */
  ExpressionConstraintComponent = 'http://www.w3.org/ns/shacl#ExpressionConstraintComponent',
  /**
   * The class of SHACL rules. Never instantiated directly.
   * @label Rule
   */
  Rule = 'http://www.w3.org/ns/shacl#Rule',
  /**
   * An expression producing the resources that shall be inferred as subjects.
   * @label subject
   */
  subject = 'http://www.w3.org/ns/shacl#subject',
  /**
   * An expression producing the properties that shall be inferred as predicates.
   * @label predicate
   */
  predicate = 'http://www.w3.org/ns/shacl#predicate',
  /**
   * An expression producing the nodes that shall be inferred as objects.
   * @label object
   */
  object = 'http://www.w3.org/ns/shacl#object',
  /**
   * The class of SHACL rules based on SPARQL CONSTRUCT queries.
   * @label SPARQL CONSTRUCT rule
   */
  SPARQLRule = 'http://www.w3.org/ns/shacl#SPARQLRule',
  /**
   * Abstract base class of resources that declare an executable JavaScript.
   * @label JavaScript executable
   */
  JSExecutable = 'http://www.w3.org/ns/shacl#JSExecutable',
  /**
   * The class of targets that are based on JavaScript functions.
   * @label JavaScript target
   */
  JSTarget = 'http://www.w3.org/ns/shacl#JSTarget',
  /**
   * The (meta) class for parameterizable targets that are based on JavaScript functions.
   * @label JavaScript target type
   */
  JSTargetType = 'http://www.w3.org/ns/shacl#JSTargetType',
  /**
   * The class of constraints backed by a JavaScript function.
   * @label JavaScript-based constraint
   */
  JSConstraint = 'http://www.w3.org/ns/shacl#JSConstraint',
  /**
   * A constraint component with the parameter sh:js linking to a sh:JSConstraint containing a sh:script.
   * @label JavaScript constraint component
   */
  JSConstraintComponent = 'http://www.w3.org/ns/shacl#JSConstraintComponent',
  /**
   * Constraints expressed in JavaScript.
   * @label JavaScript constraint
   */
  js = 'http://www.w3.org/ns/shacl#js',
  /**
   * Declares which JavaScript libraries are needed to execute this.
   * @label JavaScript library
   */
  jsLibrary = 'http://www.w3.org/ns/shacl#jsLibrary',
  /**
   * Represents a JavaScript library, typically identified by one or more URLs of files to include.
   * @label JavaScript library
   */
  JSLibrary = 'http://www.w3.org/ns/shacl#JSLibrary',
  /**
   * The class of SHACL functions that execute a JavaScript function when called.
   * @label JavaScript function
   */
  JSFunction = 'http://www.w3.org/ns/shacl#JSFunction',
  /**
   * The class of SHACL rules expressed using JavaScript.
   * @label JavaScript rule
   */
  JSRule = 'http://www.w3.org/ns/shacl#JSRule',
  /**
   * A SHACL validator based on JavaScript. This can be used to declare SHACL constraint components that perform JavaScript-based validation when used.
   * @label JavaScript validator
   */
  JSValidator = 'http://www.w3.org/ns/shacl#JSValidator',
  /**
   * The prefix of a prefix declaration.
   * @label prefix
   */
  prefix = 'http://www.w3.org/ns/shacl#prefix',
  /**
   * The namespace associated with a prefix in a prefix declaration.
   * @label namespace
   */
  namespace = 'http://www.w3.org/ns/shacl#namespace',
  /**
   * Links a resource with its namespace prefix declarations.
   * @label declare
   */
  declare = 'http://www.w3.org/ns/shacl#declare',
  /**
   * Suggested shapes graphs for this ontology. The values of this property may be used in the absence of specific sh:shapesGraph statements.
   * @label suggested shapes graph
   */
  suggestedShapesGraph = 'http://www.w3.org/ns/shacl#suggestedShapesGraph',
  /**
   * Links a shape to a class, indicating that all instances of the class must conform to the shape.
   * @label target class
   */
  targetClass = 'http://www.w3.org/ns/shacl#targetClass',
  /**
   * Links a shape to a property, indicating that all all objects of triples that have the given property as their predicate must conform to the shape.
   * @label target objects of
   */
  targetObjectsOf = 'http://www.w3.org/ns/shacl#targetObjectsOf',
  /**
   * Links a shape to a property, indicating that all subjects of triples that have the given property as their predicate must conform to the shape.
   * @label target subjects of
   */
  targetSubjectsOf = 'http://www.w3.org/ns/shacl#targetSubjectsOf',
  /**
   * Defines the severity that validation results produced by a shape must have. Defaults to sh:Violation.
   * @label severity
   */
  severity = 'http://www.w3.org/ns/shacl#severity',
  /**
   * True if the validation did not produce any validation results, and false otherwise.
   * @label conforms
   */
  conforms = 'http://www.w3.org/ns/shacl#conforms',
  /**
   * The validation results contained in a validation report.
   * @label result
   */
  result = 'http://www.w3.org/ns/shacl#result',
  /**
   * If true then the validation engine was certain that the shapes graph has passed all SHACL syntax requirements during the validation process.
   * @label shapes graph well-formed
   */
  shapesGraphWellFormed = 'http://www.w3.org/ns/shacl#shapesGraphWellFormed',
  /**
   * Links a result with other results that provide more details, for example to describe violations against nested shapes.
   * @label detail
   */
  detail = 'http://www.w3.org/ns/shacl#detail',
  /**
   * The path of a validation result, based on the path of the validated property shape.
   * @label result path
   */
  resultPath = 'http://www.w3.org/ns/shacl#resultPath',
  /**
   * The severity of the result, e.g. warning.
   * @label result severity
   */
  resultSeverity = 'http://www.w3.org/ns/shacl#resultSeverity',
  /**
   * The shape that is was validated when the result was produced.
   * @label source shape
   */
  sourceShape = 'http://www.w3.org/ns/shacl#sourceShape',
  /**
   * The constraint component that is the source of the result.
   * @label source constraint component
   */
  sourceConstraintComponent = 'http://www.w3.org/ns/shacl#sourceConstraintComponent',
  /**
   * Shapes graphs that should be used when validating this data graph.
   * @label shapes graph
   */
  shapesGraph = 'http://www.w3.org/ns/shacl#shapesGraph',
  /**
   * An entailment regime that indicates what kind of inferencing is required by a shapes graph.
   * @label entailment
   */
  entailment = 'http://www.w3.org/ns/shacl#entailment',
  /**
   * Specifies the property path of a property shape.
   * @label path
   */
  path = 'http://www.w3.org/ns/shacl#path',
  /**
   * The parameters of a function or constraint component.
   * @label parameter
   */
  parameter = 'http://www.w3.org/ns/shacl#parameter',
  /**
   * Indicates whether a parameter is optional.
   * @label optional
   */
  optional = 'http://www.w3.org/ns/shacl#optional',
  /**
   * The validator(s) used to evaluate constraints of either node or property shapes.
   * @label validator
   */
  validator = 'http://www.w3.org/ns/shacl#validator',
  /**
   * The validator(s) used to evaluate a constraint in the context of a node shape.
   * @label shape validator
   */
  nodeValidator = 'http://www.w3.org/ns/shacl#nodeValidator',
  /**
   * The validator(s) used to evaluate a constraint in the context of a property shape.
   * @label property validator
   */
  propertyValidator = 'http://www.w3.org/ns/shacl#propertyValidator',
  /**
   * Links a shape to its property shapes.
   * @label property
   */
  property = 'http://www.w3.org/ns/shacl#property',
  /**
   * The SPARQL ASK query to execute.
   * @label ask
   */
  ask = 'http://www.w3.org/ns/shacl#ask',
  /**
   * The SPARQL CONSTRUCT query to execute.
   * @label construct
   */
  construct = 'http://www.w3.org/ns/shacl#construct',
  /**
   * The SPARQL SELECT query to execute.
   * @label select
   */
  select = 'http://www.w3.org/ns/shacl#select',
  /**
   * The SPARQL UPDATE to execute.
   * @label update
   */
  update = 'http://www.w3.org/ns/shacl#update',
  /**
   * The prefixes that shall be applied before parsing the associated SPARQL query.
   * @label prefixes
   */
  prefixes = 'http://www.w3.org/ns/shacl#prefixes',
  /**
   * Links a shape with SPARQL constraints.
   * @label constraint (in SPARQL)
   */
  sparql = 'http://www.w3.org/ns/shacl#sparql',
  /**
   * Can be used to link to a property group to indicate that a property shape belongs to a group of related property shapes.
   * @label group
   */
  group = 'http://www.w3.org/ns/shacl#group',
  /**
   * Links a shape to a target specified by an extension language, for example instances of sh:SPARQLTarget.
   * @label target
   */
  target = 'http://www.w3.org/ns/shacl#target',
  /**
   * The expected type of values returned by the associated function.
   * @label return type
   */
  returnType = 'http://www.w3.org/ns/shacl#returnType',
  /**
   * Links a SPARQL validator with zero or more sh:ResultAnnotation instances, defining how to derive additional result properties based on the variables of the SELECT query.
   * @label result annotation
   */
  resultAnnotation = 'http://www.w3.org/ns/shacl#resultAnnotation',
  /**
   * The annotation property that shall be set.
   * @label annotation property
   */
  annotationProperty = 'http://www.w3.org/ns/shacl#annotationProperty',
  /**
   * The name of the SPARQL variable from the SELECT clause that shall be used for the values.
   * @label annotation variable name
   */
  annotationVarName = 'http://www.w3.org/ns/shacl#annotationVarName',
  /**
   * The rules linked to a shape.
   * @label rule
   */
  rule = 'http://www.w3.org/ns/shacl#rule',
  /**
   * The shapes that the focus nodes need to conform to before a rule is executed on them.
   * @label condition
   */
  condition = 'http://www.w3.org/ns/shacl#condition',
  /**
   * The name of the JavaScript function to execute.
   * @label JavaScript function name
   */
  jsFunctionName = 'http://www.w3.org/ns/shacl#jsFunctionName',
  /**
   * Declares the URLs of a JavaScript library. This should be the absolute URL of a JavaScript file. Implementations may redirect those to local files.
   * @label JavaScript library URL
   */
  jsLibraryURL = 'http://www.w3.org/ns/shacl#jsLibraryURL'
}
