// Utility function to download a PDF checklist
export const downloadChecklist = (serviceType: string) => {
  // Create a simple PDF content (in a real app, this would be a proper PDF file)
  const checklistContent = `
${serviceType} Document Checklist

Required Documents:
□ Original degree/certificate
□ Copy of degree/certificate
□ Copy of CNIC
□ Copy of passport (if applicable)
□ Passport size photographs
□ Fee payment receipt
□ Application form

Process Steps:
1. Submit all required documents
2. Pay the attestation fee
3. Wait for verification process
4. Collect attested documents

Important Notes:
- All documents must be original or certified copies
- Photographs should be recent and passport-sized
- Fees are non-refundable once processing begins
- Processing time: 5-10 business days

For more information, contact us at:
Phone: +92-XXX-XXXXXXX
Email: info@apostillebloom.com
Website: www.apostillebloom.com
  `;

  // Create a blob with the content
  const blob = new Blob([checklistContent], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  
  // Create a temporary link element and trigger download
  const link = document.createElement('a');
  link.href = url;
  link.download = `${serviceType}-Checklist.txt`;
  document.body.appendChild(link);
  link.click();
  
  // Clean up
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};
