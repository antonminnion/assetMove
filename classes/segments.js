var mod = {};


var segments = [

    'GDPR Counts',
    'Estimation Flatworld Industry Level 1 Research',
    'Export_topKA_OF',
    'CASL Canada Monthly Domain',
    'SYSTEM -  Wrong Industry Sub',
    'Contacts TLH Welcome',
    'Contacts MPE Welcome',
    'Contacts EME Welcome',
    'Contacts TRA Welcome',
    'Contacts FAB Welcome',
    'Contacts CHE Welcome',
    'Contacts AAE Welcome',
    'Contacts PPT Welcome',
    'Contacts Generic Welcome',
    'Contacts RAW Welcome',
    'Contacts PAB Welcome',
    'Contacts TopKA Welcome',
    'Contacts TLH Nurturing',
    'Contacts MPE Nurturing',
    'Contacts FAB Nurturing',
    'Contacts AAE Nurturing',
    'Contacts Generic Nurturing',
    'Contacts PAB Nurturing',
    'Contacts CHE Nurturing',
    'Active App1 Corrected',
    'App1_Corrected',
    'Active_Industry_Workplace',
    'Overview Active_Inactive Contacts',
    'Leads Printed Mailers',
    'KPI - Reachable Contacts',
    'DATA - App1 Overview',
    'DATA - Score Overview',
    'topKA_monthly Dashboard',
    'topKA_monthly Dashboard_contacts added by addition date',
    'Lead Dashboard - 2nd Brands',
    'GLF Leads 2018',
    'SYSTEM - Feeder GNF TM Nurturing',
    'SYSTEM – GNF TM TeleQueue Contacts',
'ENQ_XXXX_All_All_All_All_All_All_DormantSelection',
'ENQ_XXXX_All_All_All_All_All_All_Pre-Dormant Selection',
'ENQ_XXXX_All_All_All_All_All_All_Pre-Dormant Selection_Pilot',
'EMT_EMK_XXXX_All_All_All_All_All_All_WebsiteVisitTrigger(Updated)',
'INDX MT Audience',
'FSX_CQX_PQX_Unsubscribe',
'FSX_CQX_PQX_FormSubmits',
'SYSTEM - Append Hard Bouncebacks',
'Soft and Hard Bounces Append Check_Magdalena',
'Outlook',
'To reactivate contacts',
'TeleQueue - New Contacts',
'TeleQueue - Non Existing Contacts',
"TeleQueue - Phone1 or Phone2 0's',TeleQueue - Inprogress No First Dial",
'TeleQueue - Remove from CDO',
'TeleQueue Deactivate',
'TeleQueue Feeder Clean',
'TeleQueue Template',
'Scheduled callback not blank',
'No region contacts',
'TMK_TM_1703_Japan/Korea_TQ_test',
'TMK_TM_1703_EN(EU)_All_All_All_All_All_TeleQueue_CCP_Nurturing',
'TMK_TM_1703_DE(DACH)_All_All_All_All_All_TeleQueue_CCP_Nurturing',
'TMK_TM_1703_FR(EU)_All_All_All_All_All_TeleQueue_CCP_Nurturing',
'TMK_TM_1703_EN(NA)_All_All_All_All_All_TeleQueue_CCP_Nurturing',
'TMK_TM_1708_CN_All_All_All_All_All_TeleQueue_China_Qualification',
'TMK_TM_1707_Japan/Korea_Qualification',
'TMK_TM_XXXX_NA_All_All_All_All_All_TopDialogQualification',
'TMK_TM_XXXX_EU_All_All_All_All_All_TopDialogNurturing',
'TMK_TM_XXXX_ROW_All_All_All_All_All_CCPQualification',
'TMK_TM_XXXX_NA_All_All_All_All_All_CCPQualification',
'TMK_TM_XXXX_ROW_All_All_All_All_All_CCPNurturing',
'Email_Validation_App_Contacts',
'Alexandra_Control Print Academia Life Science Original',
'Alexandra_Control Print Academia Chemistry Physics Original',
'Append_EmailAddress_Private_Quarterly',
'TechnicalAppend_Estimation_Quarterly',
'Append_Function_MissingValues_Monthly',
'Append_EmailAddress_Monthly',
'Append_Phone_WrongFormat_Quarterly',
'Append_Phone_MissingValues_Monthly',
'Append_IndustryCodes_MissingValues_Monthly',
'Append_Address_MissingValues_Monthly',
'Append_NumberofEmployees_Monthly',
'Append_Company&Division_Quarterly',
'Append_IndustryCodes_Check_Quarterly',
'Append_Phone_Check_Quarterly',
'Append_Address_MailingBounces_Quarterly_AcquireList',
'Alexandra_Phone_TMWrong',
'Append_Address_Check_Quarterly_AcquireList',
'Append_Function_ExistingValues_Check_Quaterly',
'Append_IndustryCodesNonresponsives_Check_Quarterly',
'Append_EmailAddress_SpamTrapCheck_Quarterly',
'Append_General_GNF_Monthly_AcquireList',
'Append_General_GNF_Monthly_InfoGlobalData',
'OTH_1802_All_All_All_ANA_TA_LAB_TAVoucher',
'eNewsletter - Contact Selection',
'MPL_1707_All_All_All_All_All_All_SRYNurt',
'SYSTEM - Click Tracking',
'SYSTEM - Phone Number Remove Inactive Contacts',
'SYSTEM - Lead Scoring - Populating Custom Data Objects',
'SYSTEM - Character encoding for survey links',
'SYSTEM - GNF Cold Leads After General Append',
'Lead Scoring - All active contacts',
'SYSTEM Inactivate - DACH contacts with email address',
'SYSTEM - Pending Contacts',
'OTH_1709_All_All_All_All_All_All_topKAtmFollow-up',
'GLF-PGM-LegalBasisAssignment-FeedContactsLegitimateInterest',
'GLF-PGM-InactivatePrivateEmailsGDPR-FeedContacts',
'GLF-SYS-LegalBasisAssignment-BlankLegitimateInterest',
'GLF-PGM-InactivateDACH-ReactivateIfNewIndustry'
];










mod.checkExists = function (txt) {


    if (segments.indexOf(txt) > 0) {

        return true;
    }
    else {

        return false;
    }

};

mod.elements = segments;








module.exports = mod;