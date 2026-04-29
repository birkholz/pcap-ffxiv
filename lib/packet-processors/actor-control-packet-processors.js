"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorControlPacketProcessors = void 0;
var actionStart_1 = require("./processors/actor-control/actionStart");
var autoAttack_1 = require("./processors/actor-control/autoAttack");
var dailyQuestSeed_1 = require("./processors/actor-control/dailyQuestSeed");
var eObjSetState_1 = require("./processors/actor-control/eObjSetState");
var fishingBaitMsg_1 = require("./processors/actor-control/fishingBaitMsg");
var setMountSpeed_1 = require("./processors/actor-control/setMountSpeed");
var statusEffectLose_1 = require("./processors/actor-control/statusEffectLose");
var toggleWeapon_1 = require("./processors/actor-control/toggleWeapon");
var updateRestedExp_1 = require("./processors/actor-control/updateRestedExp");
/**
* THIS IS A GENERATED FILE, DO NOT EDIT IT BY HAND.
*
* To update it, restart the build process.
*/
exports.actorControlPacketProcessors = {
    actionStart: actionStart_1.actionStart,
    autoAttack: autoAttack_1.autoAttack,
    dailyQuestSeed: dailyQuestSeed_1.dailyQuestSeed,
    eObjSetState: eObjSetState_1.eObjSetState,
    fishingBaitMsg: fishingBaitMsg_1.fishingBaitMsg,
    setMountSpeed: setMountSpeed_1.setMountSpeed,
    statusEffectLose: statusEffectLose_1.statusEffectLose,
    toggleWeapon: toggleWeapon_1.toggleWeapon,
    updateRestedExp: updateRestedExp_1.updateRestedExp,
};
//# sourceMappingURL=actor-control-packet-processors.js.map