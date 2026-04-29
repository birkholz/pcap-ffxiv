/// <reference types="node" />
import { EventEmitter } from "events";
import { ConstantsList, Message, Region } from "./models";
import { CaptureInterfaceOptions } from "./capture-interface-options";
export declare class CaptureInterface extends EventEmitter {
    private _opcodeLists;
    private _constants;
    private readonly _packetDefs;
    private readonly _superPacketDefs;
    private _opcodes;
    readonly _options: CaptureInterfaceOptions;
    private _deucalion?;
    get constants(): ConstantsList | undefined;
    constructor(options: Partial<CaptureInterfaceOptions>);
    getXIVPIFFromTasklist(): Promise<{
        name: string;
        pid: number;
    } | null>;
    getXIVPID(): Promise<number>;
    start(): Promise<void>;
    stop(): Promise<void>;
    setRegion(region: Region): void;
    private static opcodesToRegistry;
    updateOpcodesCache(): void;
    private _fetchFFXIVOpcodes;
    private _loadOpcodes;
    private _loadConstants;
    private _processSuperPacket;
    private _processSegment;
}
export interface CaptureInterfaceEvents {
    ready: () => void;
    stopped: () => void;
    error: (err: Error) => void;
    message: (message: Message) => void;
}
export declare interface CaptureInterface {
    on<U extends keyof CaptureInterfaceEvents>(event: U, listener: CaptureInterfaceEvents[U]): this;
    emit<U extends keyof CaptureInterfaceEvents>(event: U, ...args: Parameters<CaptureInterfaceEvents[U]>): boolean;
}
//# sourceMappingURL=pcap-ffxiv.d.ts.map