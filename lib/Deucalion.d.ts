/// <reference types="node" />
import { EventEmitter } from "events";
import { CaptureInterfaceOptions } from "./capture-interface-options";
export declare class Deucalion extends EventEmitter {
    private readonly logger;
    readonly pid: number;
    private readonly name;
    private readonly bridgeTcpPort?;
    private readStream?;
    private writeStream?;
    /** Used instead of readStream/writeStream when connecting via TCP (Linux bridge mode). */
    private _socket?;
    private remaining?;
    get running(): boolean;
    pipe_path: string;
    constructor(logger: CaptureInterfaceOptions["logger"], pid: number, name?: string, bridgeTcpPort?: number | undefined);
    start(): Promise<void>;
    private startPipe;
    private startTcp;
    private sendHandshake;
    stop(): Promise<void>;
    private send;
    private nextPacket;
    private handleDeucalionPacket;
    private handleDebug;
    private handleXIVPacket;
    private closeStreams;
    private setupDataListeners;
}
//# sourceMappingURL=Deucalion.d.ts.map