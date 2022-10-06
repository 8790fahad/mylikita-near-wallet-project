import { PersistentUnorderedMap, context } from "near-sdk-as";

@nearBindgen
export class Consultations {
  id: string;
  patient_id: string;
  userId: string;
  consultation_notes: string;
  treatmentPlan: string;
  decision: string;
  dressing_request: string;
  nursing_request: string;
  nursing_request_status: string;
  facilityId: string;
  created_at: string;
  treatment_plan_status: string;
  treated_by: string;
  public static fromPayload(payload: Consultations): Consultations {
    const consultations = new Consultations();
    consultations.id = payload.id;
    consultations.patient_id = payload.patient_id;
    consultations.userId = payload.userId;
    consultations.consultation_notes = payload.consultation_notes;
    consultations.treatmentPlan = payload.treatmentPlan;
    consultations.decision = payload.decision;
    consultations.dressing_request = payload.dressing_request;
    consultations.nursing_request = payload.nursing_request;
    consultations.nursing_request_status = payload.nursing_request_status;
    consultations.facilityId = payload.facilityId;
    consultations.created_at = payload.created_at;
    consultations.treatment_plan_status = payload.treatment_plan_status;
    consultations.treated_by = payload.treated_by;
    return consultations;
  }
}

export const consultations = new PersistentUnorderedMap<string, Consultations>(
  "CONSULTATIONS"
);
