var mod = {};


var campaigns = [
    'EMT_EMK_XXXX_All_All_IND/PRO/PI/TLA_All_All_App1_Split',
    'EMT_EMK_1405_CA(FR)_MPE_All_All_All_All_Welcome',
    'EMT_EMK_XXXX_All_All_PRO_All_All_App1',
    'EMT_EMK_XXXX_All_All_TLA_All_All_App1_New',
    'EMT_EMK_XXXX_All_LAB_All_All_All_ApplicationProgram',
    'OTH_XXXX_All_All_IND_All_IND_App1_Split',
    'GDE/MPL_XXXX_All_CHE/PAB_All_IND_All_IND_App1',
    'GDE/MPL_XXXX_All_FAB_All_IND_All_IND_App1',
    'CLT_XXXX_All_EME_All_IND_All_IND_App1',
    'LIB_XXXX_All_MPE_All_IND_All_IND_App1',
    'WPP_XXXX_All_VEH_All_IND_All_IND_App1',
    'GDE/MPL_XXXX_All_GEN_All_IND_All_IND_App1',
    'OTH_1802_All_All_All_ANA_TA_LAB_TAVoucher',
    'SYSTEM  - Email Address Validation (Confirmed)',
    'SYSTEM - Character encoding for survey links',
'SYSTEM - Click Tracking',
'SYSTEM - Lead Scoring - Populating Custom Data Objects',
'SYSTEM - Phone Number General Cleaning Phone1',
'SYSTEM - Phone Number General Cleaning Phone2',
'SYSTEM - Phone Number Remove Inactive Contacts',
'ENQ_XXXX_All_All_All_All_All_All_Dormant_Email1',
'ENQ_XXXX_All_All_All_All_All_All_Dormant_Email2',
'ENQ_XXXX_All_All_All_All_All_All_Pre-Dormant',
'ENQ_XXXX_All_All_All_All_All_All_Pre-Dormant_Final Evaluation',
'ENQ_XXXX_All_All_All_All_All_All_Pre-Dormant_Pilot',
'ENQ_XXXX_All_All_All_All_All_All_Pre-Dormant_Survey',
'MPL_XXXX_All_MPE_All_All_All_All_Nurt_Split',
'MPL_XXXX_All_MPE_All_IND_All_IND_Nurt1',
'MPL_XXXX_All_MPE_All_PRO_All_PRO_Nurt1',
'MPL_XXXX_All_MPE_All_TLA_All_TLA_Nurt1',
'MPL_XXXX_All_MPE_All_PI_All_PI_Nurt1',
'MPL_XXXX_All_MPE_All_LAB_All_LAB_Nurt1',
'MPL_XXXX_All_MPE_EPD_IND_All_IND_Nurt1',
'EMT_EMK_1503_All_PAB_All_All_All_All_Nurt_Split',
'EMT_EMK_1503_CN_PAB_All_LAB_All_All_Nurt',
'EMT_EMK_1503_CN_PAB_All_PRO/PI/IND/TLA_All_All_Nurt',
'EMT_EMK_1503_DE_PAB_All_LAB_All_All_Nurt',
'EMT_EMK_1503_DE_PAB_All_PRO/PI/IND/TLA_All_All_Nurt',
'EMT_EMK_1503_EN_PAB_All_LAB_All_All_Nurt',
'EMT_EMK_1503_EN_PAB_All_PRO/PI/IND/TLA_All_All_Nurt',
'EMT_EMK_1503_ES_PAB_All_LAB_All_All_Nurt',
'EMT_EMK_1503_ES_PAB_All_PRO/PI/IND/TLA_All_All_Nurt',
'EMT_EMK_1503_FR_PAB_All_LAB_All_All_Nurt',
'EMT_EMK_1503_FR_PAB_All_PRO/PI/IND/TLA_All_All_Nurt',
'EMT_EMK_1503_IT_PAB_All_LAB_All_All_Nurt',
'EMT_EMK_1503_IT_PAB_All_PRO/PI/IND/TLA_All_All_Nurt',
'EMT_EMK_1503_JP_PAB_All_LAB_All_All_Nurt',
'EMT_EMK_1503_JP_PAB_All_PRO/PI/IND/TLA_All_All_Nurt',
'EMT_EMK_1503_NL_PAB_All_LAB_All_All_Nurt',
'EMT_EMK_1503_NL_PAB_All_PRO/PI/IND/TLA_All_All_Nurt',
'EMT_EMK_1503_PT_PAB_All_LAB_All_All_Nurt',
'EMT_EMK_1503_PT_PAB_All_PRO/PI/IND/TLA_All_All_Nurt',
'EMT_EMK_1604_All_AAE_All_All_All_All_Nurturing_Split',
'EMT_EMK_1801_All_CHE_IND/PRO/PI_All_All_All_Nurturing1',
'EMT_EMK_1801_All_CHE_IND/PRO/PI_All_All_All_Nurturing2',
'EMT_EMK_1801_All_CHE_LAB_All_All_All_Nurturing1',
'EMT_EMK_1801_All_CHE_LAB_All_All_All_Nurturing2',
'EMT_EMK_1801_All_FAB_All_All_All_All_Nurturing1',
'EMT_EMK_1801_All_FAB_IND/PRO/PI_All_All_All_Nurturing2',
'EMT_EMK_1801_All_FAB_LAB_All_All_All_Nurturing2',
'EMT_EMK_XXXX_All_All_All_All_All_All_ApplicationNurturing(Updated)',
'EMT_EMK_XXXX_All_All_All_All_All_All_New ApplicationNurturing_Pre-Dormant',
'EMT_EMK_XXXX_All_All_All_All_All_All_Existing ApplicationNurturing_Pre-Dormant',
'EMT_EMK_XXXX_All_All_All_PRO_All_All_PRONurturing(Updated)',
'EMT_EMK_XXXX_All_All_IND_All_All_INDNurturing',
'EMT_EMK_XXXX_All_All_LAB_ACH_ACH_All_AutoChemNurturing',
'EMT_EMK_XXXX_All_All_LAB_ANA_LAI_All_ANANurturing',
'EMT_EMK_XXXX_All_All_LAB_LWE_LWS_All_LWENurturing',
'EMT_EMK_XXXX_All_All_LAB_PIP_PIP_All_PipetteNurturing',
'EMT_EMK_XXXX_All_All_PI_All_All_PINurturing',
'EMT_EMK_XXXX_All_All_TLA_All_All_TLANurturing',
'EMT_EMK_XXXX_All_MAM_LAB_All_All_All_MiningNurturing',
'MPL_1707_All_All_All_All_All_All_SRYNurt',
'EMT_EMK_XXXX_All_TLH_All_All_All_All_NurturingLanguageSplit',
'MPL_1709_APe_TLH_All_ACH_All_LAB_AutoChemNurturing',
'MPL_1709_APe_TLH_All_ANA_All_LAB_AnalyticsNurturing',
'MPL_1709_APe_TLH_All_LWE_All_LAB_WeighingNurturing',
'MPL_1709_APe_TLH_All_PIP_All_LAB_PipettingNurturing',
'MPL_1709_APw_TLH_All_ACH_All_LAB_AutoChemNurturing',
'MPL_1709_APw_TLH_All_ANA_All_LAB_AnalyticsNurturing',
'MPL_1709_APw_TLH_All_LWE_All_LAB_WeighingNurturing',
'MPL_1709_APw_TLH_All_PIP_All_LAB_PipettingNurturing',
'MPL_1709_CA(EN)_TLH_All_ACH_All_LAB_AutoChemNurturing',
'MPL_1709_CA(EN)_TLH_All_ANA_All_LAB_AnalyticsNurturing',
'MPL_1709_CA(EN)_TLH_All_LWE_All_LAB_WeighingNurturing',
'MPL_1709_CA(EN)_TLH_All_PIP_All_LAB_PipettingNurturing',
'MPL_1709_JP_TLH_All_ANA_All_LAB_AnalyticsNurturing',
'MPL_1709_ROW_TLH_All_ACH_All_LAB_AutoChemNurturing',
'MPL_1709_ROW_TLH_All_ANA_All_LAB_AnalyticsNurturing',
'MPL_1709_ROW_TLH_All_LWE_All_LAB_WeighingNurturing',
'MPL_1709_ROW_TLH_All_PIP_All_LAB_PipettingNurturing',
'MPL_1709_US_TLH_All_ACH_All_LAB_AutoChemNurturing',
'MPL_1709_US_TLH_All_ANA_All_LAB_AnalyticsNurturing',
'MPL_1709_US_TLH_All_LWE_All_LAB_WeighingNurturing',
'MPL_1709_US_TLH_All_PIP_All_LAB_PipettingNurturing',
'MPL_1802_APe_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_APw_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_AU/NZ_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_BR_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_CA(EN)_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_CA(FR)_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_CN_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_CZ_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_DE_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_ES_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_FR_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_HU_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_IT_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_JP_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_KR_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_NL_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_PL_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_PT_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_ROW_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_RU_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_SA_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_SK_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_TH_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_TR_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_TW_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_US_AAE_All_All_All_LAB_Nurturing',
'MPL_1802_VN_AAE_All_All_All_LAB_Nurturing',
'NON_XXXX_All_All_All_All_All_All_Nurturing3',
'EMT_EMK_XXXX_All_All_All_All_All_All_WebsiteVisitTrigger_New Split',
'EMT_EMK_XXXX_All_All_All_All_All_All_NOAPP1_NoWkps_WebsiteVisitTrigger',
'EMT_EMK_XXXX_All_All_IND/PRO/PI_All_All_All_NOAPP1_IND/PRO/PI_WebsiteVisitTrigger',
'EMT_EMK_XXXX_All_All_IND_All_All_All_INDAPP1WebsiteVisitTrigger',
'EMT_EMK_XXXX_All_All_LAB_ACH_All_All_ACHAPP1WebsiteVisitTrigger',
'EMT_EMK_XXXX_All_All_LAB_All_All_All_NOAPP1_LAB_WebsiteVisitTrigger',
'EMT_EMK_XXXX_All_All_LAB_ANA_All_All_ANAAPP1WebsiteVisitTrigger',
'EMT_EMK_XXXX_All_All_LAB_LWE_All_All_LWEAPP1WebsiteVisitTrigger',
'EMT_EMK_XXXX_All_All_LAB_PIP_All_All_PIPAPP1WebsiteVisitTrigger',
'EMT_EMK_XXXX_All_All_PI_All_All_All_PIAPP1WebsiteVisitTrigger',
'EMT_EMK_XXXX_All_All_PRO_All_All_All_PROAPP1WebsiteVisitTrigger',
'EMT_EMK_XXXX_All_All_TLA_All_All_All_TLAAPP1WebsiteVisitTrigger',
'BRO_1710_All_PWG_All_PRO_All_PRO_Welcome1',
'EMT_EMK_1405_All_MPE_All_All_All_All_Welcome_Split_until 2026',
'EMT_EMK_1405_AP_MPE_All_All_All_All_Welcome',
'EMT_EMK_1405_AU/NZ_MPE_All_All_All_All_Welcome',
'EMT_EMK_1405_CA(EN)_MPE_All_All_All_All_Welcome',
'EMT_EMK_1405_CA(FR)_MPE_All_All_All_All_Welcome',
'EMT_EMK_1405_CN_MPE_All_All_All_All_Welcome',
'EMT_EMK_1405_DE_MPE_All_All_All_All_Welcome',
'EMT_EMK_1405_ES_MPE_All_All_All_All_Welcome',
'EMT_EMK_1405_FR_MPE_All_All_All_All_Welcome',
'EMT_EMK_1405_IN_MPE_All_All_All_All_Welcome',
'EMT_EMK_1405_IT_MPE_All_All_All_All_Welcome',
'EMT_EMK_1405_JP_MPE_All_All_All_All_Welcome',
'EMT_EMK_1405_KR_MPE_All_All_All_All_Welcome',
'EMT_EMK_1405_NL_MPE_All_All_All_All_Welcome',
'EMT_EMK_1405_PL_MPE_All_All_All_All_Welcome',
'EMT_EMK_1405_PT(BR)_MPE_All_All_All_All_Welcome',
'EMT_EMK_1405_PT_MPE_All_All_All_All_Welcome',
'EMT_EMK_1405_ROW_MPE_All_All_All_All_Welcome',
'EMT_EMK_1405_TR_MPE_All_All_All_All_Welcome',
'EMT_EMK_1405_UK_MPE_All_All_All_All_Welcome',
'EMT_EMK_1405_US_MPE_All_All_All_All_Welcome',
'EMT_EMK_1410_All_PAB_All_All_All_All_Welcome_Split_New',
'EMT_EMK_1410_CN_PAB_All_All_All_All_Welcome',
'EMT_EMK_1410_DE_PAB_All_All_All_All_Welcome',
'EMT_EMK_1410_DK_PAB_All_All_All_All_Welcome',
'EMT_EMK_1410_EN_PAB_All_All_All_All_Welcome',
'EMT_EMK_1410_ES_PAB_All_All_All_All_Welcome',
'EMT_EMK_1410_FR_PAB_All_All_All_All_Welcome',
'EMT_EMK_1410_IT_PAB_All_All_All_All_Welcome',
'EMT_EMK_1410_JA_PAB_All_All_All_All_Welcome',
'EMT_EMK_1410_KR_PAB_All_All_All_All_Welcome',
'EMT_EMK_1410_NL_PAB_All_All_All_All_Welcome',
'EMT_EMK_1410_PL_PAB_All_All_All_All_Welcome',
'EMT_EMK_1410_PT_PAB_All_All_All_All_Welcome',
'EMT_EMK_1410_RU_PAB_All_All_All_All_Welcome',
'EMT_EMK_1410_SE_PAB_All_All_All_All_Welcome',
'EMT_EMK_1410_TH_PAB_All_All_All_All_Welcome',
'EMT_EMK_1410_TK_PAB_All_All_All_All_Welcome',
'EMT_EMK_1410_TW_PAB_All_All_All_All_Welcome',
'EMT_EMK_1601_All_RAW_All_All_All_All_Welcome',
'EMT_EMK_1601_AP_RAW_All_All_All_All_Welcome',
'EMT_EMK_1601_AU/NZ_RAW_All_All_All_All_Welcome',
'EMT_EMK_1601_CA(EN)_RAW_All_All_All_All_Welcome',
'EMT_EMK_1601_CA(FR)_RAW_All_All_All_All_Welcome',
'EMT_EMK_1601_CN_RAW_All_All_All_All_Welcome',
'EMT_EMK_1601_DE_RAW_All_All_All_All_Welcome',
'EMT_EMK_1601_ES_RAW_All_All_All_All_Welcome',
'EMT_EMK_1601_FR_RAW_All_All_All_All_Welcome',
'EMT_EMK_1601_IT_RAW_All_All_All_All_Welcome',
'EMT_EMK_1601_JP_RAW_All_All_All_All_Welcome',
'EMT_EMK_1601_KR_RAW_All_All_All_All_Welcome',
'EMT_EMK_1601_NL_RAW_All_All_All_All_Welcome',
'EMT_EMK_1601_PL_RAW_All_All_All_All_Welcome',
'EMT_EMK_1601_PT_RAW_All_All_All_All_Welcome',
'EMT_EMK_1601_ROW_RAW_All_All_All_All_Welcome',
'EMT_EMK_1601_IN_RAW_All_All_All_All_Welcome',
'EMT_EMK_1601_US_RAW_All_All_All_All_Welcome',
'EMT_EMK_1602_All_AAE_All_All_All_All_Welcome_Split',
'EMT_EMK_1602_CA(FR)_AAE_All_All_All_All_Welcome',
'EMT_EMK_1602_CN_AAE_All_All_All_All_Welcome',
'EMT_EMK_1602_DE_AAE_All_All_All_All_Welcome',
'EMT_EMK_1602_EN_AAE_All_All_All_All_Welcome',
'EMT_EMK_1602_ES_AAE_All_All_All_All_Welcome',
'EMT_EMK_1602_FR_AAE_All_All_All_All_Welcome',
'EMT_EMK_1602_IT_AAE_All_All_All_All_Welcome',
'EMT_EMK_1602_JP_AAE_All_All_All_All_Welcome',
'EMT_EMK_1602_KR_AAE_All_All_All_All_Welcome',
'EMT_EMK_1602_NL_AAE_All_All_All_All_Welcome',
'EMT_EMK_1602_PL_AAE_All_All_All_All_Welcome',
'EMT_EMK_1602_PT_AAE_All_All_All_All_Welcome',
'EMT_EMK_1602_SE_AAE_All_All_All_All_Welcome',
'EMT_EMK_1602_TR_AAE_All_All_All_All_Welcome',
'EMT_EMK_1803_All_FAB_IND/PRO/PI_All_All_All_Welcome1',
'EMT_EMK_1803_All_FAB_IND/PRO/PI_All_All_All_Welcome2',
'EMT_EMK_1803_All_FAB_LAB_All_All_All_Welcome1',
'EMT_EMK_1803_All_FAB_LAB_All_All_All_Welcome2',
'EMT_EMK_1710_All_EME_All_All_All_All_Welcome1',
'EMT_EMK_1710_All_EME_All_All_All_All_Welcome2',
'EMT_EMK_1710_All_TRA_All_All_All_All_Welcome1',
'EMT_EMK_1710_All_TRA_All_All_All_All_Welcome2',
'EMT_EMK_1801_All_CHE_All_All_All_All_Welcome1',
'EMT_EMK_1801_All_CHE_IND/PRO/PI_All_All_All_Welcome2',
'EMT_EMK_1801_All_CHE_LAB_All_All_All_Welcome2',
'EMT_EMK_1802_All_PPT_IND/PRO/PI_All_All_All_Welcome1',
'EMT_EMK_1802_All_PPT_IND/PRO/PI_All_All_All_Welcome2',
'EMT_EMK_1802_All_PPT_LAB_All_All_All_Welcome1',
'EMT_EMK_1802_All_PPT_LAB_All_All_All_Welcome2',
'EMT_EMK_XXXX_All_All_All_All_All_All_Welcome3',
'EMT_EMK_XXXX_All_TLH_All_All_All_All_WelcomeLanguageSplit',
'EMT_EMK_XXXX_AP_TLH_All_All_All_All_Welcome',
'EMT_EMK_XXXX_CA(FR)_TLH_All_All_All_All_Welcome',
'EMT_EMK_XXXX_CN_TLH_All_All_All_All_Welcome',
'EMT_EMK_XXXX_DE_TLH_All_All_All_All_Welcome',
'EMT_EMK_XXXX_ES_TLH_All_All_All_All_Welcome',
'EMT_EMK_XXXX_FR_TLH_All_All_All_All_Welcome',
'EMT_EMK_XXXX_IT_TLH_All_All_All_All_Welcome',
'EMT_EMK_XXXX_JP_TLH_All_All_All_All_Welcome',
'EMT_EMK_XXXX_NA_TLH_All_All_All_All_Welcome',
'EMT_EMK_XXXX_PT_TLH_All_All_All_All_Welcome',
'EMT_EMK_XXXX_ROW_TLH_All_All_All_All_Welcome',
'HBK_1802_XX_All_All_ANA_TA_LAB_Welcome1',
'MPL_1707_AP_AAE_All_All_All_All_Welcome',
'MPL_1707_AU/NZ_AAE_All_All_All_All_Welcome',
'MPL_1707_CA(EN)_AAE_All_All_All_All_Welcome',
'MPL_1707_ROW_AAE_All_All_All_All_Welcome',
'MPL_1707_US_AAE_All_All_All_All_Welcome',
'MPL_1708_AP_TLH_All_All_All_All_Welcome',
'MPL_1708_AU/NZ_TLH_All_All_All_All_Welcome',
'MPL_1708_CA(EN)_TLH_All_All_All_All_Welcome',
'MPL_1708_JP_TLH_All_All_All_All_Welcome',
'MPL_1708_ROW_TLH_All_All_All_All_Welcome',
'MPL_1708_US_TLH_All_All_All_All_Welcome',
'MPL_1710_All_All_All_All_All_All_Welcome1',
'MPL_1710_All_All_All_All_All_LAB_Welcome1',
'MPL_1710_All_All_All_All_All_PI/PRO/IND_Welcome1',
'MPL_1710_All_PWG_All_PRO_All_PRO_Welcome2',
'TopKA_welcome_CHE',
'TopKA_welcome_EME',
'TopKA_welcome_FAB',
'TopKA_welcome_Generic',
'TopKA_welcome_IT',
'TopKA_welcome_MPE',
'TopKA_welcome_PAB',
'TopKA_welcome_Procurement, Finance and Admin',
'TopKA_welcome_RAW',
'TopKA_welcome_Split',
'TopKA_welcome_survey',
'TopKA_welcome_TLH',
'TopKA_welcome_Touch2_Split',
'TopKA_welcome_TRA',
'eNewsletters - USA Adapted Concept',
'eNewsletters - CA(EN) Adapted Concept',
'eNewsletters - ROW Adapted Concept',
'eNewsletters - AP Adapted Concept',
'eNewsletters - AU/NZ Adapted Concept',
'eNewsletters - FR Adapted Concept',
'eNewsletters - CA(FR) Adapted Concept',
'eNewsletters - IT Adapted Concept',
'eNewsletters - ES (EU) Adapted Concept',
'eNewsletters - ES (Latin America) Adapted Concept',
'eNewsletters - PT (EU) Adapted Concept',
'eNewsletters - PT (BR) Adapted Concept',
'eNewsletters - NL Adapted Concept',
'eNewsletters - TR Adapted Concept',
'eNewsletters - RU Adapted Concept',
'eNewsletters - PL Adapted Concept',
'eNewsletters - CN Simplified Adapted Concept',
'eNewsletters - CN Traditional Adapted Concept',
'eNewsletters - JP Adapted Concept',
'eNewsletters - KR Adapted Concept',
'eNewsletters - TH Adapted Concept',
'eNewsletters - USA Adapted Concept B',
'eNewsletters - CA(EN) Adapted Concept B',
'eNewsletters - ROW Adapted Concept B',
'eNewsletters - AP Adapted Concept B',
'eNewsletters - AU/NZ Adapted Concept B',
'eNewsletters - DE Adapted Concept',
'Build email address - Follow-up and finalize',
'OTH_1709_All_All_All_All_All_All_topKAtmFollow-up',
'TopKA_welcome_CHE_2',
'TopKA_welcome_EME_2',
'TopKA_welcome_FAB_2',
'TopKA_welcome_Generic_2',
'TopKA_welcome_IT_2',
'TopKA_welcome_MPE_2',
'TopKA_welcome_PAB_2',
'TopKA_welcome_Procurement, Finance and Admin_2',
'TopKA_welcome_RAW_2',
'TopKA_welcome_TLH_2',
'TopKA_welcome_TRA_2',
'WPP/MPL_1801_All_All_All_ANA_UV_LAB_UV-VISGeneralStream1',
'GDE_1801_All_All_All_ANA_UV_LAB_UV-VISGeneralStream2',
'WPP_1801_All_All_All_ANA_UV_LAB_UV-VISGeneralStream3',
'TBX_1801_All_All_All_ANA_UV_LAB_UV-VISLifeScienceStream1',
'LIB_1801_All_All_All_ANA_UV_LAB_UV-VISLifeScienceStream2',
'WEB_1801_All_All_All_ANA_UV_LAB_UV-VISLifeScienceStream3'
    ];


mod.checkExists = function (txt) {


    for(var i = 0; i < campaigns.length; i++){

        if(txt == campaigns[i]){

            return true;
        }

    }

    return false;
    //
    // if (campaigns.indexOf(txt) > 0) {
    //
    //     return true;
    // }
    // else {
    //
    //     return false;
    // }

};








module.exports = mod;