"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorControlType = void 0;
// Source: https://github.com/SapphireServer/Sapphire/blob/develop/src/common/Network/CommonActorControl.h
var ActorControlType;
(function (ActorControlType) {
    /*! Toggles weapon status -> Sheathed/UnSheathed
            \param param1 status 0|1 */
    ActorControlType[ActorControlType["ToggleWeapon"] = 0] = "ToggleWeapon";
    /*! Toggles Autoattack status on/off
            \param param1 status 0|1 */
    ActorControlType[ActorControlType["AutoAttack"] = 1] = "AutoAttack";
    ActorControlType[ActorControlType["SetStatus"] = 2] = "SetStatus";
    ActorControlType[ActorControlType["CastStart"] = 3] = "CastStart";
    ActorControlType[ActorControlType["ToggleAggro"] = 4] = "ToggleAggro";
    ActorControlType[ActorControlType["ClassJobChange"] = 5] = "ClassJobChange";
    ActorControlType[ActorControlType["DefeatMsg"] = 6] = "DefeatMsg";
    ActorControlType[ActorControlType["GainExpMsg"] = 7] = "GainExpMsg";
    ActorControlType[ActorControlType["LevelUpEffect"] = 10] = "LevelUpEffect";
    ActorControlType[ActorControlType["ExpChainMsg"] = 12] = "ExpChainMsg";
    ActorControlType[ActorControlType["HpSetStat"] = 13] = "HpSetStat";
    ActorControlType[ActorControlType["DeathAnimation"] = 14] = "DeathAnimation";
    ActorControlType[ActorControlType["CastInterrupt"] = 15] = "CastInterrupt";
    /*!
     * @brief Sent when a player uses an action
     *
     * param1 Seems to be always 1 from what I've seen, needs more research
     * param2 The actionid
     * param3 The action cooldown in ms / 10
     */
    ActorControlType[ActorControlType["ActionStart"] = 17] = "ActionStart";
    ActorControlType[ActorControlType["StatusEffectGain"] = 20] = "StatusEffectGain";
    ActorControlType[ActorControlType["StatusEffectLose"] = 21] = "StatusEffectLose";
    ActorControlType[ActorControlType["HPFloatingText"] = 23] = "HPFloatingText";
    ActorControlType[ActorControlType["UpdateRestedExp"] = 24] = "UpdateRestedExp";
    ActorControlType[ActorControlType["Unk2"] = 25] = "Unk2";
    ActorControlType[ActorControlType["Flee"] = 27] = "Flee";
    ActorControlType[ActorControlType["Unk3"] = 32] = "Unk3";
    ActorControlType[ActorControlType["CombatIndicationShow"] = 34] = "CombatIndicationShow";
    ActorControlType[ActorControlType["SpawnEffect"] = 37] = "SpawnEffect";
    ActorControlType[ActorControlType["ToggleInvisible"] = 38] = "ToggleInvisible";
    ActorControlType[ActorControlType["ToggleActionUnlock"] = 41] = "ToggleActionUnlock";
    ActorControlType[ActorControlType["UpdateUiExp"] = 43] = "UpdateUiExp";
    ActorControlType[ActorControlType["DmgTakenMsg"] = 45] = "DmgTakenMsg";
    ActorControlType[ActorControlType["SetTarget"] = 50] = "SetTarget";
    ActorControlType[ActorControlType["ToggleNameHidden"] = 54] = "ToggleNameHidden";
    ActorControlType[ActorControlType["LimitbreakStart"] = 71] = "LimitbreakStart";
    ActorControlType[ActorControlType["LimitbreakPartyStart"] = 72] = "LimitbreakPartyStart";
    ActorControlType[ActorControlType["BubbleText"] = 73] = "BubbleText";
    ActorControlType[ActorControlType["DamageEffect"] = 80] = "DamageEffect";
    ActorControlType[ActorControlType["RaiseAnimation"] = 81] = "RaiseAnimation";
    ActorControlType[ActorControlType["TreasureScreenMsg"] = 87] = "TreasureScreenMsg";
    ActorControlType[ActorControlType["SetOwnerId"] = 89] = "SetOwnerId";
    ActorControlType[ActorControlType["ItemRepairMsg"] = 92] = "ItemRepairMsg";
    ActorControlType[ActorControlType["BluActionLearn"] = 99] = "BluActionLearn";
    ActorControlType[ActorControlType["DirectorInit"] = 100] = "DirectorInit";
    ActorControlType[ActorControlType["DirectorClear"] = 101] = "DirectorClear";
    ActorControlType[ActorControlType["LeveStartAnim"] = 102] = "LeveStartAnim";
    ActorControlType[ActorControlType["LeveStartError"] = 103] = "LeveStartError";
    ActorControlType[ActorControlType["DirectorEObjMod"] = 106] = "DirectorEObjMod";
    ActorControlType[ActorControlType["DirectorUpdate"] = 109] = "DirectorUpdate";
    ActorControlType[ActorControlType["ItemObtainMsg"] = 117] = "ItemObtainMsg";
    ActorControlType[ActorControlType["DutyQuestScreenMsg"] = 123] = "DutyQuestScreenMsg";
    ActorControlType[ActorControlType["ItemObtainIcon"] = 132] = "ItemObtainIcon";
    ActorControlType[ActorControlType["FateItemFailMsg"] = 133] = "FateItemFailMsg";
    ActorControlType[ActorControlType["ItemFailMsg"] = 134] = "ItemFailMsg";
    ActorControlType[ActorControlType["ActionLearnMsg1"] = 135] = "ActionLearnMsg1";
    ActorControlType[ActorControlType["FreeEventPos"] = 138] = "FreeEventPos";
    ActorControlType[ActorControlType["DailyQuestSeed"] = 144] = "DailyQuestSeed";
    ActorControlType[ActorControlType["SetBGM"] = 161] = "SetBGM";
    ActorControlType[ActorControlType["UnlockAetherCurrentMsg"] = 164] = "UnlockAetherCurrentMsg";
    ActorControlType[ActorControlType["RemoveName"] = 168] = "RemoveName";
    ActorControlType[ActorControlType["ScreenFadeOut"] = 170] = "ScreenFadeOut";
    ActorControlType[ActorControlType["ZoneIn"] = 200] = "ZoneIn";
    ActorControlType[ActorControlType["ZoneInDefaultPos"] = 201] = "ZoneInDefaultPos";
    ActorControlType[ActorControlType["TeleportStart"] = 203] = "TeleportStart";
    ActorControlType[ActorControlType["TeleportDone"] = 205] = "TeleportDone";
    ActorControlType[ActorControlType["TeleportDoneFadeOut"] = 206] = "TeleportDoneFadeOut";
    ActorControlType[ActorControlType["DespawnZoneScreenMsg"] = 207] = "DespawnZoneScreenMsg";
    ActorControlType[ActorControlType["InstanceSelectDlg"] = 210] = "InstanceSelectDlg";
    ActorControlType[ActorControlType["ActorDespawnEffect"] = 212] = "ActorDespawnEffect";
    ActorControlType[ActorControlType["CompanionUnlock"] = 253] = "CompanionUnlock";
    ActorControlType[ActorControlType["ObtainBarding"] = 254] = "ObtainBarding";
    ActorControlType[ActorControlType["EquipBarding"] = 255] = "EquipBarding";
    ActorControlType[ActorControlType["CompanionMsg1"] = 258] = "CompanionMsg1";
    ActorControlType[ActorControlType["CompanionMsg2"] = 259] = "CompanionMsg2";
    ActorControlType[ActorControlType["ShowPetHotbar"] = 260] = "ShowPetHotbar";
    ActorControlType[ActorControlType["ActionLearnMsg"] = 265] = "ActionLearnMsg";
    ActorControlType[ActorControlType["ActorFadeOut"] = 266] = "ActorFadeOut";
    ActorControlType[ActorControlType["ActorFadeIn"] = 267] = "ActorFadeIn";
    ActorControlType[ActorControlType["WithdrawMsg"] = 268] = "WithdrawMsg";
    ActorControlType[ActorControlType["OrderCompanion"] = 269] = "OrderCompanion";
    ActorControlType[ActorControlType["ToggleCompanion"] = 270] = "ToggleCompanion";
    ActorControlType[ActorControlType["LearnCompanion"] = 271] = "LearnCompanion";
    ActorControlType[ActorControlType["ActorFateOut1"] = 272] = "ActorFateOut1";
    ActorControlType[ActorControlType["Emote"] = 290] = "Emote";
    ActorControlType[ActorControlType["EmoteInterrupt"] = 291] = "EmoteInterrupt";
    ActorControlType[ActorControlType["SetPose"] = 295] = "SetPose";
    ActorControlType[ActorControlType["CraftingUnk"] = 300] = "CraftingUnk";
    ActorControlType[ActorControlType["GatheringSenseMsg"] = 304] = "GatheringSenseMsg";
    ActorControlType[ActorControlType["PartyMsg"] = 305] = "PartyMsg";
    ActorControlType[ActorControlType["GatheringSenseMsg1"] = 306] = "GatheringSenseMsg1";
    ActorControlType[ActorControlType["GatheringSenseMsg2"] = 312] = "GatheringSenseMsg2";
    ActorControlType[ActorControlType["FishingMsg"] = 320] = "FishingMsg";
    ActorControlType[ActorControlType["FishingTotalFishCaught"] = 322] = "FishingTotalFishCaught";
    ActorControlType[ActorControlType["FishingBaitMsg"] = 325] = "FishingBaitMsg";
    ActorControlType[ActorControlType["FishingReachMsg"] = 327] = "FishingReachMsg";
    ActorControlType[ActorControlType["FishingFailMsg"] = 328] = "FishingFailMsg";
    ActorControlType[ActorControlType["MateriaConvertMsg"] = 350] = "MateriaConvertMsg";
    ActorControlType[ActorControlType["MeldSuccessMsg"] = 351] = "MeldSuccessMsg";
    ActorControlType[ActorControlType["MeldFailMsg"] = 352] = "MeldFailMsg";
    ActorControlType[ActorControlType["MeldModeToggle"] = 353] = "MeldModeToggle";
    ActorControlType[ActorControlType["AetherRestoreMsg"] = 355] = "AetherRestoreMsg";
    ActorControlType[ActorControlType["DyeMsg"] = 360] = "DyeMsg";
    ActorControlType[ActorControlType["ToggleCrestMsg"] = 362] = "ToggleCrestMsg";
    ActorControlType[ActorControlType["ToggleBulkCrestMsg"] = 363] = "ToggleBulkCrestMsg";
    ActorControlType[ActorControlType["MateriaRemoveMsg"] = 364] = "MateriaRemoveMsg";
    ActorControlType[ActorControlType["GlamourCastMsg"] = 365] = "GlamourCastMsg";
    ActorControlType[ActorControlType["GlamourRemoveMsg"] = 366] = "GlamourRemoveMsg";
    ActorControlType[ActorControlType["RelicInfuseMsg"] = 377] = "RelicInfuseMsg";
    ActorControlType[ActorControlType["AetherReductionDlg"] = 381] = "AetherReductionDlg";
    /*!
     * param1 = state
     * param2 = actorid
     */
    ActorControlType[ActorControlType["EObjSetState"] = 409] = "EObjSetState";
    ActorControlType[ActorControlType["Unk6"] = 412] = "Unk6";
    ActorControlType[ActorControlType["EObjAnimation"] = 413] = "EObjAnimation";
    ActorControlType[ActorControlType["SetTitle"] = 500] = "SetTitle";
    ActorControlType[ActorControlType["SetStatusIcon"] = 504] = "SetStatusIcon";
    ActorControlType[ActorControlType["LimitBreakGauge"] = 505] = "LimitBreakGauge";
    ActorControlType[ActorControlType["SetHomepoint"] = 507] = "SetHomepoint";
    ActorControlType[ActorControlType["SetFavorite"] = 508] = "SetFavorite";
    ActorControlType[ActorControlType["LearnTeleport"] = 509] = "LearnTeleport";
    ActorControlType[ActorControlType["OpenRecommendationGuide"] = 512] = "OpenRecommendationGuide";
    ActorControlType[ActorControlType["ArmoryErrorMsg"] = 513] = "ArmoryErrorMsg";
    ActorControlType[ActorControlType["AchievementPopup"] = 515] = "AchievementPopup";
    ActorControlType[ActorControlType["LogMsg"] = 517] = "LogMsg";
    ActorControlType[ActorControlType["AchievementMsg"] = 518] = "AchievementMsg";
    ActorControlType[ActorControlType["SetItemLevel"] = 521] = "SetItemLevel";
    ActorControlType[ActorControlType["ChallengeEntryCompleteMsg"] = 523] = "ChallengeEntryCompleteMsg";
    ActorControlType[ActorControlType["ChallengeEntryUnlockMsg"] = 524] = "ChallengeEntryUnlockMsg";
    /*!
     * Sent when a player desynths an item, one packet per result type (one for consumed item, one for each obtained items, and one for exp if the player received exp)
     * param1 = result type (4921 => Item consumed, 4922 => Item obtained, 4925 => Exp obtained)
     * param3 = item id (used for result types 4921 & 4922)
     * param5 = exp amount (x 100)
     */
    ActorControlType[ActorControlType["DesynthOrReductionResult"] = 527] = "DesynthOrReductionResult";
    ActorControlType[ActorControlType["GilTrailMsg"] = 529] = "GilTrailMsg";
    ActorControlType[ActorControlType["HuntingLogRankUnlock"] = 541] = "HuntingLogRankUnlock";
    ActorControlType[ActorControlType["HuntingLogEntryUpdate"] = 542] = "HuntingLogEntryUpdate";
    ActorControlType[ActorControlType["HuntingLogSectionFinish"] = 543] = "HuntingLogSectionFinish";
    ActorControlType[ActorControlType["HuntingLogRankFinish"] = 544] = "HuntingLogRankFinish";
    ActorControlType[ActorControlType["SetMaxGearSets"] = 560] = "SetMaxGearSets";
    ActorControlType[ActorControlType["SetCharaGearParamUI"] = 608] = "SetCharaGearParamUI";
    ActorControlType[ActorControlType["ToggleWireframeRendering"] = 609] = "ToggleWireframeRendering";
    ActorControlType[ActorControlType["ExamineError"] = 703] = "ExamineError";
    ActorControlType[ActorControlType["GearSetEquipMsg"] = 801] = "GearSetEquipMsg";
    ActorControlType[ActorControlType["SetBait"] = 805] = "SetBait";
    ActorControlType[ActorControlType["SetFestival"] = 902] = "SetFestival";
    ActorControlType[ActorControlType["ToggleOrchestrionUnlock"] = 918] = "ToggleOrchestrionUnlock";
    /*!
     * param1 = mountSpeed
     * Retail sends 12 for mount speed star 1 unlocked and 15 for mount speed star 2 unlocked
     * This also has to be sent before mounting finishes for it to take effect
     */
    ActorControlType[ActorControlType["SetMountSpeed"] = 927] = "SetMountSpeed";
    ActorControlType[ActorControlType["Dismount"] = 929] = "Dismount";
    // Duty Recorder
    ActorControlType[ActorControlType["BeginReplayAck"] = 930] = "BeginReplayAck";
    ActorControlType[ActorControlType["EndReplayAck"] = 931] = "EndReplayAck";
    // Housing
    ActorControlType[ActorControlType["ShowHousingItemUI"] = 1015] = "ShowHousingItemUI";
    ActorControlType[ActorControlType["ShowBuildPresetUI"] = 1001] = "ShowBuildPresetUI";
    /*!
     * param1 = plot id
     */
    ActorControlType[ActorControlType["ShowEstateExternalAppearanceUI"] = 1002] = "ShowEstateExternalAppearanceUI";
    ActorControlType[ActorControlType["ShowEstateInternalAppearanceUI"] = 1003] = "ShowEstateInternalAppearanceUI";
    ActorControlType[ActorControlType["BuildPresetResponse"] = 1005] = "BuildPresetResponse";
    /*!
     * param1 = u16 landid
     *          u16 slotid
     */
    ActorControlType[ActorControlType["RemoveExteriorHousingItem"] = 1007] = "RemoveExteriorHousingItem";
    /*!
     * param1 = object array index
     */
    ActorControlType[ActorControlType["RemoveInteriorHousingItem"] = 1009] = "RemoveInteriorHousingItem";
    /*!
     * param1 = identity shit
     *          u16 1 - container id
     *          u16 2 - plot id
     * param2 = item shit
     *          u16 1 - slot
     */
    ActorControlType[ActorControlType["HousingItemMoveConfirm"] = 1017] = "HousingItemMoveConfirm";
    ActorControlType[ActorControlType["OpenEstateSettingsUI"] = 1023] = "OpenEstateSettingsUI";
    ActorControlType[ActorControlType["HideAdditionalChambersDoor"] = 1024] = "HideAdditionalChambersDoor";
    /*!
     * param1 = outdoor furnishings
     *          u8 0 - relocation available, 1 = available
     *          u8 1 - outoor furnishings placed
     *          u8 2 - outdoor furnishings in storeroom
     *          u8 3 - outdoor funishings limit
     * param2 = indoor furnishings
     *          u16 0 - relocation available, 1 = available
     *          u16 1 - furnishings placed
     * param3 = indoor furnishings
     *          u16 0 - in storeroom
     *          u16 1 - indoor furnishings limit
     */
    ActorControlType[ActorControlType["HousingStoreroomStatus"] = 1049] = "HousingStoreroomStatus";
    // PvP Duel
    ActorControlType[ActorControlType["SetPvPState"] = 1504] = "SetPvPState";
    ActorControlType[ActorControlType["EndDuelSession"] = 1505] = "EndDuelSession";
    ActorControlType[ActorControlType["StartDuelCountdown"] = 1506] = "StartDuelCountdown";
    ActorControlType[ActorControlType["StartDuel"] = 1507] = "StartDuel";
    ActorControlType[ActorControlType["DuelResultScreen"] = 1508] = "DuelResultScreen";
    // Duty Action
    ActorControlType[ActorControlType["SetDutyActionId"] = 1512] = "SetDutyActionId";
    ActorControlType[ActorControlType["SetDutyActionHud"] = 1513] = "SetDutyActionHud";
    ActorControlType[ActorControlType["SetDutyActionActive"] = 1514] = "SetDutyActionActive";
    ActorControlType[ActorControlType["SetDutyActionRemaining"] = 1515] = "SetDutyActionRemaining";
    ActorControlType[ActorControlType["EurekaStep"] = 1850] = "EurekaStep";
})(ActorControlType = exports.ActorControlType || (exports.ActorControlType = {}));
//# sourceMappingURL=ActorControlType.js.map