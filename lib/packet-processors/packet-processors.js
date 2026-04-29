"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packetProcessors = void 0;
var actorCast_1 = require("./processors/actorCast");
var actorControl_1 = require("./processors/actorControl");
var actorControlSelf_1 = require("./processors/actorControlSelf");
var actorControlTarget_1 = require("./processors/actorControlTarget");
var actorFreeSpawn_1 = require("./processors/actorFreeSpawn");
var actorGauge_1 = require("./processors/actorGauge");
var actorMove_1 = require("./processors/actorMove");
var actorOwner_1 = require("./processors/actorOwner");
var actorSetPos_1 = require("./processors/actorSetPos");
var addStatusEffect_1 = require("./processors/addStatusEffect");
var airshipExplorationResult_1 = require("./processors/airshipExplorationResult");
var airshipStatus_1 = require("./processors/airshipStatus");
var airshipStatusList_1 = require("./processors/airshipStatusList");
var airshipTimers_1 = require("./processors/airshipTimers");
var blackList_1 = require("./processors/blackList");
var cFAvailableContents_1 = require("./processors/cFAvailableContents");
var cFDutyInfo_1 = require("./processors/cFDutyInfo");
var cFPlayerInNeed_1 = require("./processors/cFPlayerInNeed");
var cFRegisterDuty_1 = require("./processors/cFRegisterDuty");
var charaVisualEffect_1 = require("./processors/charaVisualEffect");
var clientTrigger_1 = require("./processors/clientTrigger");
var containerInfo_1 = require("./processors/containerInfo");
var craftingLog_1 = require("./processors/craftingLog");
var currencyCrystalInfo_1 = require("./processors/currencyCrystalInfo");
var desynthResult_1 = require("./processors/desynthResult");
var effect_1 = require("./processors/effect");
var effectResult_1 = require("./processors/effectResult");
var eorzeaTimeOffset_1 = require("./processors/eorzeaTimeOffset");
var equipDisplayFlags_1 = require("./processors/equipDisplayFlags");
var eventFinish_1 = require("./processors/eventFinish");
var eventPlay_1 = require("./processors/eventPlay");
var eventPlay32_1 = require("./processors/eventPlay32");
var eventPlay4_1 = require("./processors/eventPlay4");
var eventPlay64_1 = require("./processors/eventPlay64");
var eventPlay8_1 = require("./processors/eventPlay8");
var eventPlayN_1 = require("./processors/eventPlayN");
var eventStart_1 = require("./processors/eventStart");
var freeCompanyDialog_1 = require("./processors/freeCompanyDialog");
var freeCompanyInfo_1 = require("./processors/freeCompanyInfo");
var freeCompanyUpdateShortMessage_1 = require("./processors/freeCompanyUpdateShortMessage");
var gatheringLog_1 = require("./processors/gatheringLog");
var initZone_1 = require("./processors/initZone");
var inventoryModifyHandler_1 = require("./processors/inventoryModifyHandler");
var inventoryTransaction_1 = require("./processors/inventoryTransaction");
var islandWorkshopSupplyDemand_1 = require("./processors/islandWorkshopSupplyDemand");
var itemInfo_1 = require("./processors/itemInfo");
var itemMarketBoardInfo_1 = require("./processors/itemMarketBoardInfo");
var logMessage_1 = require("./processors/logMessage");
var logout_1 = require("./processors/logout");
var marketBoardItemListing_1 = require("./processors/marketBoardItemListing");
var marketBoardItemListingCount_1 = require("./processors/marketBoardItemListingCount");
var marketBoardItemListingHistory_1 = require("./processors/marketBoardItemListingHistory");
var marketBoardPurchase_1 = require("./processors/marketBoardPurchase");
var marketBoardPurchaseHandler_1 = require("./processors/marketBoardPurchaseHandler");
var marketBoardSearchResult_1 = require("./processors/marketBoardSearchResult");
var mount_1 = require("./processors/mount");
var npcSpawn_1 = require("./processors/npcSpawn");
var objectSpawn_1 = require("./processors/objectSpawn");
var persistentEffect_1 = require("./processors/persistentEffect");
var playTime_1 = require("./processors/playTime");
var playerSetup_1 = require("./processors/playerSetup");
var playerSpawn_1 = require("./processors/playerSpawn");
var playerStats_1 = require("./processors/playerStats");
var prepareZoning_1 = require("./processors/prepareZoning");
var resultDialog_1 = require("./processors/resultDialog");
var retainerInformation_1 = require("./processors/retainerInformation");
var serverNotice_1 = require("./processors/serverNotice");
var statusEffectList_1 = require("./processors/statusEffectList");
var submarineExplorationResult_1 = require("./processors/submarineExplorationResult");
var submarineProgressionStatus_1 = require("./processors/submarineProgressionStatus");
var submarineStatusList_1 = require("./processors/submarineStatusList");
var submarineTimers_1 = require("./processors/submarineTimers");
var systemLogMessage_1 = require("./processors/systemLogMessage");
var updateClassInfo_1 = require("./processors/updateClassInfo");
var updateHpMpTp_1 = require("./processors/updateHpMpTp");
var updateInventorySlot_1 = require("./processors/updateInventorySlot");
var updatePositionHandler_1 = require("./processors/updatePositionHandler");
var updatePositionInstance_1 = require("./processors/updatePositionInstance");
var weatherChange_1 = require("./processors/weatherChange");
/**
* THIS IS A GENERATED FILE, DO NOT EDIT IT BY HAND.
*
* To update it, restart the build process.
*/
exports.packetProcessors = {
    actorCast: actorCast_1.actorCast,
    actorControl: actorControl_1.actorControl,
    actorControlSelf: actorControlSelf_1.actorControlSelf,
    actorControlTarget: actorControlTarget_1.actorControlTarget,
    actorFreeSpawn: actorFreeSpawn_1.actorFreeSpawn,
    actorGauge: actorGauge_1.actorGauge,
    actorMove: actorMove_1.actorMove,
    actorOwner: actorOwner_1.actorOwner,
    actorSetPos: actorSetPos_1.actorSetPos,
    addStatusEffect: addStatusEffect_1.addStatusEffect,
    airshipExplorationResult: airshipExplorationResult_1.airshipExplorationResult,
    airshipStatus: airshipStatus_1.airshipStatus,
    airshipStatusList: airshipStatusList_1.airshipStatusList,
    airshipTimers: airshipTimers_1.airshipTimers,
    blackList: blackList_1.blackList,
    cFAvailableContents: cFAvailableContents_1.cFAvailableContents,
    cFDutyInfo: cFDutyInfo_1.cFDutyInfo,
    cFPlayerInNeed: cFPlayerInNeed_1.cFPlayerInNeed,
    cFRegisterDuty: cFRegisterDuty_1.cFRegisterDuty,
    charaVisualEffect: charaVisualEffect_1.charaVisualEffect,
    clientTrigger: clientTrigger_1.clientTrigger,
    containerInfo: containerInfo_1.containerInfo,
    craftingLog: craftingLog_1.craftingLog,
    currencyCrystalInfo: currencyCrystalInfo_1.currencyCrystalInfo,
    desynthResult: desynthResult_1.desynthResult,
    effect: effect_1.effect,
    effectResult: effectResult_1.effectResult,
    eorzeaTimeOffset: eorzeaTimeOffset_1.eorzeaTimeOffset,
    equipDisplayFlags: equipDisplayFlags_1.equipDisplayFlags,
    eventFinish: eventFinish_1.eventFinish,
    eventPlay: eventPlay_1.eventPlay,
    eventPlay32: eventPlay32_1.eventPlay32,
    eventPlay4: eventPlay4_1.eventPlay4,
    eventPlay64: eventPlay64_1.eventPlay64,
    eventPlay8: eventPlay8_1.eventPlay8,
    eventPlayN: eventPlayN_1.eventPlayN,
    eventStart: eventStart_1.eventStart,
    freeCompanyDialog: freeCompanyDialog_1.freeCompanyDialog,
    freeCompanyInfo: freeCompanyInfo_1.freeCompanyInfo,
    freeCompanyUpdateShortMessage: freeCompanyUpdateShortMessage_1.freeCompanyUpdateShortMessage,
    gatheringLog: gatheringLog_1.gatheringLog,
    initZone: initZone_1.initZone,
    inventoryModifyHandler: inventoryModifyHandler_1.inventoryModifyHandler,
    inventoryTransaction: inventoryTransaction_1.inventoryTransaction,
    islandWorkshopSupplyDemand: islandWorkshopSupplyDemand_1.islandWorkshopSupplyDemand,
    itemInfo: itemInfo_1.itemInfo,
    itemMarketBoardInfo: itemMarketBoardInfo_1.itemMarketBoardInfo,
    logMessage: logMessage_1.logMessage,
    logout: logout_1.logout,
    marketBoardItemListing: marketBoardItemListing_1.marketBoardItemListing,
    marketBoardItemListingCount: marketBoardItemListingCount_1.marketBoardItemListingCount,
    marketBoardItemListingHistory: marketBoardItemListingHistory_1.marketBoardItemListingHistory,
    marketBoardPurchase: marketBoardPurchase_1.marketBoardPurchase,
    marketBoardPurchaseHandler: marketBoardPurchaseHandler_1.marketBoardPurchaseHandler,
    marketBoardSearchResult: marketBoardSearchResult_1.marketBoardSearchResult,
    mount: mount_1.mount,
    npcSpawn: npcSpawn_1.npcSpawn,
    objectSpawn: objectSpawn_1.objectSpawn,
    persistentEffect: persistentEffect_1.persistentEffect,
    playTime: playTime_1.playTime,
    playerSetup: playerSetup_1.playerSetup,
    playerSpawn: playerSpawn_1.playerSpawn,
    playerStats: playerStats_1.playerStats,
    prepareZoning: prepareZoning_1.prepareZoning,
    resultDialog: resultDialog_1.resultDialog,
    retainerInformation: retainerInformation_1.retainerInformation,
    serverNotice: serverNotice_1.serverNotice,
    statusEffectList: statusEffectList_1.statusEffectList,
    submarineExplorationResult: submarineExplorationResult_1.submarineExplorationResult,
    submarineProgressionStatus: submarineProgressionStatus_1.submarineProgressionStatus,
    submarineStatusList: submarineStatusList_1.submarineStatusList,
    submarineTimers: submarineTimers_1.submarineTimers,
    systemLogMessage: systemLogMessage_1.systemLogMessage,
    updateClassInfo: updateClassInfo_1.updateClassInfo,
    updateHpMpTp: updateHpMpTp_1.updateHpMpTp,
    updateInventorySlot: updateInventorySlot_1.updateInventorySlot,
    updatePositionHandler: updatePositionHandler_1.updatePositionHandler,
    updatePositionInstance: updatePositionInstance_1.updatePositionInstance,
    weatherChange: weatherChange_1.weatherChange,
};
//# sourceMappingURL=packet-processors.js.map