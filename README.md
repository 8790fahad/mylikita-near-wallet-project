Mylikita Implements Blockchain Using The NEAR Protocol, patient consultation history was stored in NEAR Protocol, medical records are confidential that is why we use unique encryption algorithms before storing the data.

Let's get started on how we do it.

First, we creat function setConsultation,The function accept some parameters, parameters like consultation_notes,treatmentPlan,dressing_request,nursing_request we use unique encryption algorithms to encrypt the data.
Note: parameters like consultation_notes,treatmentPlan are required.

Once the function, "setConsultation" is called and appropriate parameters are passed, the function will store the record onto the blockchain.

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

!['login page'](https://github.com/emaitee/mylikita-near-wallet-project/blob/main/img/image2.png)

Finally if you want to view the entire consultation record store then you can call getConsultationHistory

!['login page'](https://github.com/emaitee/mylikita-near-wallet-project/blob/main/img/image1.png)

<details>
<summary>For more info</summary>
<p>https://mylikita.clinic/</p>
<p>https://mylikitahealth.medium.com/mylikita-receives-a-10-000-grant-from-the-near-foundation-3db18e928e15</p>
<p>https://mylikitahealth.medium.com/how-mylikita-implements-blockchain-using-the-near-protocol-a1a84bb06329</p>
</details>
