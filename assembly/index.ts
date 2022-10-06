import { logging } from "near-sdk-as";
import { Consultations, consultations } from "./model";

// add consultation record
export function setConsultation(consultation: Consultations): void {
  let _consultation = consultations.get(consultation.id);
  if (_consultation !== null) {
    throw new Error(`a consultation with ${consultation.id} already exists`);
    logging.log("Here consultation record already exists")
  }
  assert(
    consultation.consultation_notes.length <= 0,
    "Please consultation note is required"
  );
  assert(
    consultation.treatmentPlan.length <= 0,
    "Please treatment plan is required"
  );
  consultations.set(consultation.id, Consultations.fromPayload(consultation));
  logging.log("Here consultation record inserted")
}

// get all patient records
export function getConsultationHistory(): Consultations[] | null {
  return consultations.values();
}
// get all patient records
export function getConsultation(id: string): Consultations | null {
  return consultations.get(id);
}
