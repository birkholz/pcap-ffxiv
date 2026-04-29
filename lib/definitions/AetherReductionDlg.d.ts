import { ActorControl } from "./ActorControl";
export interface AetherReductionDlg extends ActorControl {
    reducedItemId: number;
    resultItems: {
        itemId: number;
        hq: boolean;
        quantity: number;
    }[];
}
//# sourceMappingURL=AetherReductionDlg.d.ts.map