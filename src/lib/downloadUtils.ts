// Utility function to download comprehensive document checklists
export const downloadChecklist = (serviceType: string) => {
  // Create comprehensive checklist content based on service type
  const checklists = {
    HEC: {
      title: "HEC Attestation Document Checklist",
      content: `HEC ATTESTATION DOCUMENT CHECKLIST

REQUIRED DOCUMENTS:
☐ Original degree certificate (Bachelor's, Master's, PhD)
☐ Official transcripts/mark sheets (sealed by university)
☐ CNIC copy (front and back)
☐ Passport copy (first 5 pages)
☐ University registration/admission letter
☐ Provisional certificate (if applicable)
☐ Migration certificate (for transfers)

DOCUMENT REQUIREMENTS:
☐ All documents must be clear and legible
☐ No photocopies accepted for original submission
☐ Name spellings must match across all documents
☐ All stamps and seals must be clear
☐ Documents should not be damaged or tampered

PROCESSING INFORMATION:
- Processing Time: 24-48 hours
- Success Rate: 99.8%
- Global Recognition: 150+ Countries
- Express service available for urgent cases

CONTACT INFORMATION:
Phone: +92-300-1234567
Email: info@apostillemofa.com
Website: www.apostillemofa.com

IMPORTANT NOTES:
- HEC verification is done directly from university records
- Pre-verification service available to avoid rejections
- Free consultation on document requirements
- Track your application status online
- No hidden charges - transparent pricing

© 2024 MOFA Apostille Services - Your Trusted Document Partner`
    },
    MOFA: {
      title: "MOFA Attestation Document Checklist", 
      content: `MOFA ATTESTATION DOCUMENT CHECKLIST

REQUIRED DOCUMENTS:
☐ Original documents (already HEC/IBCC attested)
☐ CNIC copy (front and back)
☐ Passport copy (first 5 pages)
☐ Previous attestation certificates
☐ Application form (completed)
☐ Processing fee payment receipt

DOCUMENT CATEGORIES:
☐ Educational Documents (degrees, diplomas, transcripts)
☐ Commercial Documents (licenses, agreements, contracts)
☐ Personal Documents (birth, marriage, death certificates)

PROCESSING INFORMATION:
- Processing Time: 2-3 business days
- Validity: Lifetime (unless document expires)
- Recognition: Worldwide acceptance
- Countries Served: 150+

PRE-REQUISITES:
☐ Documents must be pre-attested by relevant authorities
☐ Educational: HEC attestation required first
☐ Secondary Education: IBCC attestation required first
☐ Technical: BTE attestation required first

CONTACT INFORMATION:
Phone: +92-300-1234567
Email: info@apostillemofa.com
Website: www.apostillemofa.com

IMPORTANT NOTES:
- MOFA attestation is the final step in document legalization
- Required for international use in most countries
- Express processing available for urgent cases
- Free consultation and document review
- Transparent pricing with no hidden charges

© 2024 MOFA Apostille Services - Your Trusted Document Partner`
    },
    IBCC: {
      title: "IBCC Verification Document Checklist",
      content: `IBCC VERIFICATION DOCUMENT CHECKLIST

REQUIRED DOCUMENTS:
☐ Original certificate or attested copy
☐ CNIC copy of the applicant
☐ Passport copy (if applying for abroad)
☐ Completed IBCC application form
☐ Processing fee payment proof

DOCUMENTS COVERED:
☐ Matriculation Certificate (SSC)
☐ Intermediate Certificate (HSSC)
☐ Diploma Certificates
☐ Technical Education Certificates
☐ Board Examination Transcripts
☐ Character Certificates from Educational Boards

PROCESSING INFORMATION:
- Processing Time: 3-5 working days
- Success Rate: 100%
- Experience: 15+ years
- Documents Verified: 50K+

PROVINCIAL BOARDS:
☐ Punjab Board of Intermediate & Secondary Education
☐ Sindh Board of Intermediate & Secondary Education
☐ KPK Board of Intermediate & Secondary Education
☐ Balochistan Board of Intermediate & Secondary Education
☐ Federal Board of Intermediate & Secondary Education

CONTACT INFORMATION:
Phone: +92-300-1234567
Email: info@apostillemofa.com
Website: www.apostillemofa.com

IMPORTANT NOTES:
- IBCC handles secondary education certificates
- Required for international university admissions
- All Pakistani education boards covered
- Express service for urgent cases
- Free consultation on requirements

© 2024 MOFA Apostille Services - Your Trusted Document Partner`
    },
    BTE: {
      title: "BTE Attestation Document Checklist",
      content: `BTE ATTESTATION DOCUMENT CHECKLIST

REQUIRED DOCUMENTS:
☐ Original certificate or attested copy
☐ CNIC copy of the applicant
☐ Passport copy (for international use)
☐ Completed application form
☐ Processing fee payment

DOCUMENTS COVERED:
☐ Technical Education Certificates
☐ Vocational Training Certificates  
☐ Diploma in Engineering
☐ Commerce Certificates
☐ Professional Training Documents
☐ Trade Test Certificates

PROVINCIAL BOARDS:
☐ Punjab Board of Technical Education (Lahore)
☐ Sindh Board of Technical Education (Karachi)
☐ KPK Board of Technical Education (Peshawar)
☐ Balochistan Board of Technical Education (Quetta)

PROCESSING INFORMATION:
- Processing Time: 2-4 working days
- Provincial Boards: 4 Major Boards
- Success Rate: 100%
- Documents Attested: 25K+

CONTACT INFORMATION:
Phone: +92-300-1234567
Email: info@apostillemofa.com
Website: www.apostillemofa.com

IMPORTANT NOTES:
- BTE handles technical and vocational education
- Required for international employment
- All provincial boards covered
- Express processing available
- Free consultation and guidance

© 2024 MOFA Apostille Services - Your Trusted Document Partner`
    },
    Embassy: {
      title: "Embassy Attestation Document Checklist",
      content: `EMBASSY ATTESTATION DOCUMENT CHECKLIST

REQUIRED DOCUMENTS:
☐ Original document (already MOFA attested)
☐ Passport copy
☐ CNIC copy
☐ Embassy application form
☐ Processing fee payment

POPULAR EMBASSIES:
☐ UAE Embassy (5-7 days)
☐ Saudi Arabia Embassy (7-10 days)
☐ UK Embassy (10-14 days)
☐ USA Embassy (14-21 days)
☐ Canada Embassy (10-15 days)
☐ Australia Embassy (12-18 days)

DOCUMENT TYPES:
☐ Educational Certificates & Degrees
☐ Commercial Documents & Trade Licenses
☐ Personal Documents (Birth, Marriage, Death)
☐ Legal Documents & Power of Attorney
☐ Medical Certificates & Reports
☐ Police Character Certificates

PROCESSING INFORMATION:
- Countries Covered: 105+
- Experience: 15+ years
- Success Rate: 100%
- Documents Processed: 75K+

CONTACT INFORMATION:
Phone: +92-300-1234567
Email: info@apostillemofa.com
Website: www.apostillemofa.com

IMPORTANT NOTES:
- Embassy attestation is the final step
- MOFA attestation required first
- Processing times vary by embassy
- Express services available
- Complete global coverage

© 2024 MOFA Apostille Services - Your Trusted Document Partner`
    },
    Translation: {
      title: "Translation Services Document Checklist",
      content: `TRANSLATION SERVICES DOCUMENT CHECKLIST

REQUIRED DOCUMENTS:
☐ Original documents to be translated
☐ Clear scanned copies (high resolution)
☐ CNIC copy of applicant
☐ Specific language requirements
☐ Certification requirements

DOCUMENT CATEGORIES:
☐ Family Documents (Marriage, Birth, Death certificates)
☐ Academic Documents (Degrees, Transcripts, Diplomas)
☐ Commercial Documents (Licenses, Contracts, Agreements)
☐ Legal Documents (Court papers, Power of Attorney)
☐ Medical Documents (Reports, Certificates)
☐ Immigration Documents

LANGUAGES AVAILABLE:
☐ English (Very High Demand)
☐ Arabic (High Demand)
☐ Chinese (High Demand)
☐ French, German, Spanish (Medium Demand)
☐ Japanese, Korean, Russian (Available)
☐ 15+ other languages

PROCESSING INFORMATION:
- Delivery Time: 1-3 days
- Languages: 20+
- Experience: 25+ years (since 1998)
- Documents Translated: 100K+
- Accuracy Rate: 99.9%

CONTACT INFORMATION:
Phone: +92-300-1234567
Email: info@apostillemofa.com
Website: www.apostillemofa.com

IMPORTANT NOTES:
- All translations are certified
- Native speakers for all languages
- Official certification stamps provided
- Express same-day service available
- Accepted by all embassies and authorities worldwide

© 2024 MOFA Apostille Services - Your Trusted Document Partner`
    }
  };

  const checklist = checklists[serviceType as keyof typeof checklists];
  
  if (!checklist) {
    console.error('Invalid service type for checklist');
    return;
  }

  // Create and download the file
  const blob = new Blob([checklist.content], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${serviceType}_Attestation_Checklist.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};
