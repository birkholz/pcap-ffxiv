/// <reference types="node" />
import { Position3 } from "./definitions";
export declare class BufferReader {
    private buf;
    private offset;
    get buffer(): Buffer;
    get remaining(): number;
    constructor(buf: Buffer);
    reset(): BufferReader;
    move(offset: number): BufferReader;
    skip(length: number): BufferReader;
    slice(begin?: number, end?: number): Buffer;
    nextString(length?: number): string;
    nextBuffer(length: number, asReader?: false): Buffer;
    nextBuffer(length: number, asReader: true): BufferReader;
    restAsBuffer(asReader?: false): Buffer;
    restAsBuffer(asReader: true): BufferReader;
    nextInt8(fallback?: number): number;
    nextUInt8(fallback?: number): number;
    nextUInt16(fallback?: number): number;
    nextInt16(fallback?: number): number;
    nextUInt32(fallback?: number): number;
    nextInt32(fallback?: number): number;
    nextUInt64(fallback?: number): bigint;
    nextInt64(fallback?: number): bigint;
    nextFloat(fallback?: number): number;
    nextDouble(fallback?: number): number;
    nextPosition3UInt16(): Position3;
    nextPosition3(): Position3;
    debug(length?: number): BufferReader;
    private tryNext;
}
//# sourceMappingURL=BufferReader.d.ts.map