// package: ory.keto.relation_tuples.v1alpha2
// file: ory/keto/relation_tuples/v1alpha2/relation_tuples.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RelationTuple extends jspb.Message { 
    getNamespace(): string;
    setNamespace(value: string): RelationTuple;
    getObject(): string;
    setObject(value: string): RelationTuple;
    getRelation(): string;
    setRelation(value: string): RelationTuple;

    hasSubject(): boolean;
    clearSubject(): void;
    getSubject(): Subject | undefined;
    setSubject(value?: Subject): RelationTuple;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelationTuple.AsObject;
    static toObject(includeInstance: boolean, msg: RelationTuple): RelationTuple.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelationTuple, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelationTuple;
    static deserializeBinaryFromReader(message: RelationTuple, reader: jspb.BinaryReader): RelationTuple;
}

export namespace RelationTuple {
    export type AsObject = {
        namespace: string,
        object: string,
        relation: string,
        subject?: Subject.AsObject,
    }
}

export class RelationQuery extends jspb.Message { 

    hasNamespace(): boolean;
    clearNamespace(): void;
    getNamespace(): string | undefined;
    setNamespace(value: string): RelationQuery;

    hasObject(): boolean;
    clearObject(): void;
    getObject(): string | undefined;
    setObject(value: string): RelationQuery;

    hasRelation(): boolean;
    clearRelation(): void;
    getRelation(): string | undefined;
    setRelation(value: string): RelationQuery;

    hasSubject(): boolean;
    clearSubject(): void;
    getSubject(): Subject | undefined;
    setSubject(value?: Subject): RelationQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelationQuery.AsObject;
    static toObject(includeInstance: boolean, msg: RelationQuery): RelationQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelationQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelationQuery;
    static deserializeBinaryFromReader(message: RelationQuery, reader: jspb.BinaryReader): RelationQuery;
}

export namespace RelationQuery {
    export type AsObject = {
        namespace?: string,
        object?: string,
        relation?: string,
        subject?: Subject.AsObject,
    }
}

export class Subject extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): string;
    setId(value: string): Subject;

    hasSet(): boolean;
    clearSet(): void;
    getSet(): SubjectSet | undefined;
    setSet(value?: SubjectSet): Subject;

    getRefCase(): Subject.RefCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Subject.AsObject;
    static toObject(includeInstance: boolean, msg: Subject): Subject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Subject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Subject;
    static deserializeBinaryFromReader(message: Subject, reader: jspb.BinaryReader): Subject;
}

export namespace Subject {
    export type AsObject = {
        id: string,
        set?: SubjectSet.AsObject,
    }

    export enum RefCase {
        REF_NOT_SET = 0,
        ID = 1,
        SET = 2,
    }

}

export class SubjectSet extends jspb.Message { 
    getNamespace(): string;
    setNamespace(value: string): SubjectSet;
    getObject(): string;
    setObject(value: string): SubjectSet;
    getRelation(): string;
    setRelation(value: string): SubjectSet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubjectSet.AsObject;
    static toObject(includeInstance: boolean, msg: SubjectSet): SubjectSet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubjectSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubjectSet;
    static deserializeBinaryFromReader(message: SubjectSet, reader: jspb.BinaryReader): SubjectSet;
}

export namespace SubjectSet {
    export type AsObject = {
        namespace: string,
        object: string,
        relation: string,
    }
}
