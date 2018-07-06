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








module.exports = mod;