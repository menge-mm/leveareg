import { z } from 'zod';
import patient from './patient.schema';
import conditions from './condition.schema';
import medicationStatement from './medicationStatement.schema';
import procedures from './procedure.schema';
import adverseEvents from './adverseEvents.schema';
import allergyIntolerances from './allergyIntolerance.schema';
import observations from './observation.schema';
import immunizations from './immunization.schema';
import consent from './consent.schema';
import socialHistory from './socialHistory.schema';
import encounters from './encounter.schema';
import familyMemberHistories from './familyMemberHistory.schema';
// import relatedPerson from './relatedPerson.schema';

export const RegFormSchema = z.object({
  patient: patient,
  // relatedPerson: relatedPerson,
  conditions: conditions,
  procedures: procedures,
  encounters: encounters,
  observations: observations,
  immunizations: immunizations,
  familyMemberHistories: familyMemberHistories,
  adverseEvents: adverseEvents,
  allergyIntolerances: allergyIntolerances,
  medicationStatement: medicationStatement,
  socialHistory: socialHistory,
  consent: consent,
});

export type RegFormType = z.infer<typeof RegFormSchema>;

export {
  patient,
  // relatedPerson,
  conditions,
  medicationStatement,
  procedures,
  adverseEvents,
  allergyIntolerances,
  observations,
  immunizations,
  consent,
  socialHistory,
  encounters,
  familyMemberHistories,
};
