Mylikita  Implements Blockchain Using The NEAR Protocol, patient consultation history was stored in NEAR Protocol, medical records are confidential that is why we use unique encryption algorithms before storing the data.

Let's get started on how we do it.

First, we creat function setConsultation,The function accept some parameters, parameters like consultation_notes,treatmentPlan,dressing_request,nursing_request we use unique encryption algorithms to encrypt the data.
Note: parameters like consultation_notes,treatmentPlan are required.

One's the function setConsultation is call and appropriate parameters is pass to the function the record would store into the blockchain.

Example: setConsultation({"consultation": {
    id: '8d789959-3ecd-49f8-bd5d-c0939163505d',
    patient_id: '1-7',
    userId: '5',
    consultation_notes: '......',
    treatmentPlan: '....',
    decision: 'out-patient',
    dressing_request: '...',
    nursing_request: '...',
    nursing_request_status: 'pending',
    facilityId: null,
    created_at: '2022-10-05',
    treatment_plan_status: 'pending',
    treated_by: ''
  }})
 
Therefore, one's getConsultation function is call it would return

!['return image']()

!['login page'](https://github.com/emaitee/mylikita-near-wallet-project/main/img/image1.png?raw=true)


