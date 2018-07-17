var mod = {};


var programs = [
    'SYSTEM - GNF TM Entering',
    'SYSTEM - GNF TM Follow-up',
    'SYSTEM - INDx Entry Program',
    'SYSTEM - INDx Exit Program',
    'SYSTEM - New Contacts Processing GNF Cold Leads',
    'SYSTEM - Dormant Inactivate Contacts_Unsubscribe',
    'SYSTEM - Dormant Tagging',
    'SYSTEM - Dormant_Inactivate Non Responsive& Reason_Inactivity',
    'SYSTEM - Dormant_Untag Selected for Campaign',
    'SYSTEM - Pre-Dormant Tagging_ongoing',
    'TeleQueue App1 and TM Status',
    'TeleQueue Blank 0 from Phone1 & Phone2',
    'TeleQueue CDO Update',
    'TeleQueue Remove from CDO Feeder',
    'TeleQueue CDO Field Cleaner',
    'TeleQueue Field Cleaner',
    'TeleQueue Remove from CDO',
    'TeleQueue Feeder',
    'TeleQueue Remove Call List',
    'TeleQueue Remove Feeder',
    'TeleQueue No region Korea',
    'SYSTEM - Email Address Validation (Created)',
    'SYSTEM - Inactivate DACH contacts with Email',
    'SYSTEM - LinkedIn App Tagging',
    'SYSTEM - Master_ID Assign',
    'SYSTEM - New Contacts Processing',
    'SYSTEM - Phone 1 and Phone 2 Exact',
    'SYSTEM - topKA TM follow-up',
    'System - Untag App1 Campaigns',
    'eNewsletter - Language/Country and Time Split',
    'GLF-SYS-LegalBasisAssignment-LegitimateInterest',
    'GLF-SYS-InactivatePrivateEmails-GDPR',
    'GLF-SYS-LegalBasisAssignment-BlankLegitimateInterest'
];


mod.checkExists = function (txt) {


    if (programs.indexOf(txt) > 0) {

        return true;
    }
    else {

        return false;
    }

};

mod.pList = [
    [129,17312],
    [135,17312],
    [136,17312],
    [127,17312],
    [128,17312],
    [130,17312],
    [107,17395],
    [100,17395],
    [106,17395],
    [5,17395],
    [139,18502],
    [8,17310],
    [113,17310],
    [64,17310],
    [118,17310],
    [115,17310],
    [116,17310],
    [117,17310],
    [85,17310],
    [86,17310],
    [96,17310],
    [111,17310],
    [12,16410],
    [98,16410],
    [120,16410],
    [137,16410],
    [121,16410],
    [1,16410],
    [124,16410],
    [112,16410],
    [142,18529],
    [155,16410],
    [156,16410],
    [158,16410]
];



// SYSTEM - GNF Cold Lead Nurturing - GLF Entry,129,17312
// SYSTEM - GNF TM Entering,135,17312
// SYSTEM - GNF TM Follow-up,136,17312
// SYSTEM - INDx Entry Program,127,17312
// SYSTEM - INDx Exit Program,128,17312
// SYSTEM - New Contacts Processing GNF Cold Leads,130,17312
// SYSTEM - Dormant Inactivate Contacts_Unsubscribe,107,17395
// SYSTEM - Dormant Tagging,100,17395
// SYSTEM - Dormant_Inactivate Non Responsive& Reason_Inactivity,106,17395
// SYSTEM - Dormant_Untag Selected for Campaign,5,17395
// SYSTEM - Pre-Dormant Tagging_ongoing,139,18502
// TeleQueue App1 and TM Status,8,17310
// TeleQueue Blank 0 from Phone1 & Phone2,113,17310
// TeleQueue CDO Update,64,17310
// TeleQueue Remove from CDO Feeder,118,17310
// TeleQueue CDO Field Cleaner,115,17310
// TeleQueue Field Cleaner,116,17310
// TeleQueue Remove from CDO,117,17310
// TeleQueue Feeder,85,17310
// TeleQueue Remove Call List,86,17310
// TeleQueue Remove Feeder,96,17310
// TeleQueue No region Korea,111,17310
// SYSTEM - Email Address Validation (Created),12,16410
// SYSTEM - Inactivate DACH contacts with Email,98,16410
// SYSTEM - LinkedIn App Tagging,120,16410
// SYSTEM - Master_ID Assign,137,16410
// SYSTEM - New Contacts Processing,121,16410
// SYSTEM - Phone 1 and Phone 2 Exact,1,16410
// SYSTEM - topKA TM follow-up,124,16410
// System - Untag App1 Campaigns,112,16410
// eNewsletter - Language/Country and Time Split,142,18529
// GLF-SYS-LegalBasisAssignment-LegitimateInterest,155,16410
// GLF-SYS-InactivatePrivateEmails-GDPR,156,16410
// GLF-SYS-LegalBasisAssignment-BlankLegitimateInterest,158,16410








module.exports = mod;