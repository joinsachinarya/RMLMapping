export const mappingSpecification = `
@prefix rr: <http://www.w3.org/ns/r2rml#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix rml: <http://semweb.mmlab.be/ns/rml#> .
@prefix prefix: <http://mytestprefix.org/> .
@prefix ql: <http://semweb.mmlab.be/ns/ql#> .
@base <http://example.test/> . #the base for the classes


<#LOGICALSOURCE>
rml:source "input";
rml:referenceFormulation ql:JSONPath;
rml:iterator "$".


<#Mapping>
rml:logicalSource <#LOGICALSOURCE>;

 rr:subjectMap [
    rr:termType rr:BlankNode;
    rr:class prefix:Person;
 ];


rr:predicateObjectMap [
    rr:predicate prefix:Name;
    rr:objectMap [ rml:reference "name" ];
];


rr:predicateObjectMap [
    rr:predicate prefix:favSports;
    rr:objectMap  [
           rr:parentTriplesMap <#FavSportsMapping>;
        ];
].

<#FavSportsMapping>
rml:logicalSource <#LOGICALSOURCE>;

 rr:subjectMap [
    rr:termType rr:BlankNode;
    rr:class prefix:FavSports;
 ];

rr:predicateObjectMap [
    rr:predicate prefix:Game;
    rr:objectMap [ rml:reference "favoriteGames.*" ];
].

`;


