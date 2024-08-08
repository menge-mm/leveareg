import { useContext } from "react";
import { createContext, useReducer } from "react";
import * as actions from "./actionTypes";
import { medicationStatement, RegistrationState, socialHistory } from "./state";
import { update, add, remove } from "./action";
import { v4 as uniqueId } from "uuid";

const initialRegistrationState = {
  // patient can have multiple conditions - each as a separate record
  conditions: [],
  // patient can have multiple procedures - each as a separate record
  procedures: [],
  // Single or multiple - needs a decision
  encounters: [],
  // can be multiple each as a separate record
  allergyIntolerances: [],
  // can be multiple each as a separate record
  familyMemberHistories: [],
  // can be multiple each as a separate record - each medication statement represents one medication
  medicationStatement,
  // can be multiple each as a separate record
  observations: [],

  // can be multiple each as a separate record
  immunizations: [],

  // can be multiple
  adverseEvents: [],

  // can be multiple
  socialHistory,
};

export type State = typeof initialRegistrationState;

// Container App Service - for levea-implementation
// create context

const RegistrationContext = createContext<{
  state: RegistrationState;
  dispatch: React.Dispatch<any>;
  onSubmit: () => void;
}>({} as any);

// create provider
const useRegistration = () => {
  return useContext(RegistrationContext);
};
type Action = {
  type: string;
  payload?: any;
};

// each case will call different action that will format the data
const registrationReducer = (state: RegistrationState, action: Action) => {
  switch (action.type) {
    case actions.UPDATE_CONDITION:
      return update(state, "conditions", action.payload);

    case actions.ADD_CONDITION:
      return add(state, "conditions", { ...action.payload, id: uniqueId() });

    case actions.DELETE_CONDITION:
      return remove(state, "conditions", action.payload);

    case actions.UPDATE_PROCEDURE:
      return update(state, "procedures", action.payload);

    case actions.ADD_PROCEDURE:
      return add(state, "procedures", { ...action.payload, id: uniqueId() });

    case actions.DELETE_PROCEDURE:
      return remove(state, "procedures", action.payload);

    case actions.UPDATE_ENCOUNTER:
      return update(state, "encounters", action.payload);

    case actions.ADD_ENCOUNTER:
      return add(state, "encounters", { ...action.payload, id: uniqueId() });

    case actions.DELETE_ENCOUNTER:
      return remove(state, "encounters", action.payload);

    case actions.UPDATE_ALLERGY_INTOLERANCE:
      return update(state, "allergyIntolerances", action.payload);

    case actions.ADD_ALLERGY_INTOLERANCE:
      return add(state, "allergyIntolerances", { ...action.payload, id: uniqueId() });

    case actions.DELETE_ALLERGY_INTOLERANCE:
      return remove(state, "allergyIntolerances", action.payload);

    case actions.UPDATE_FAMILY_MEMBER_HISTORY:
      return update(state, "familyMemberHistories", action.payload);

    case actions.ADD_FAMILY_MEMBER_HISTORY:
      return add(state, "familyMemberHistories", { ...action.payload, id: uniqueId() });

    case actions.DELETE_FAMILY_MEMBER_HISTORY:
      return remove(state, "familyMemberHistories", action.payload);

    case actions.UPDATE_IMMUNIZATION:
      return update(state, "immunizations", action.payload);

    case actions.ADD_IMMUNIZATION:
      return add(state, "immunizations", { ...action.payload, id: uniqueId() });

    case actions.DELETE_IMMUNIZATION:
      return remove(state, "immunizations", action.payload);
    case actions.UPDATE_MEDICATION_STATEMENT:
      return { ...state, medicationStatement: { ...state.medicationStatement, ...action.payload } };
    /*return {
        ...state,
        medicationStatements: state.medicationStatements.map((medicationStatement) => {
          if (medicationStatement.id === action.payload.id) {
            return { ...medicationStatement, ...action.payload };
          }
          return medicationStatement;
        }),
      }; */
    case actions.UPDATE_OBSERVATION:
      update(state, "observations", action.payload);

    case actions.ADD_OBSEVATION:
      return add(state, "observations", { ...action.payload, id: uniqueId() });

    case actions.DELETE_OBSERVATION:
      return remove(state, "observations", action.payload);

    case actions.UPDATE_ADVERSE_EVENT:
      return update(state, "adverseEvents", action.payload);
    case actions.ADD_ADVERSE_EVENT:
      return add(state, "adverseEvents", { ...action.payload, id: uniqueId() });

    case actions.DELETE_ADVERSE_EVENT:
      return remove(state, "adverseEvents", action.payload);

    case actions.ADD_SOCIAL_HISTORY:
      return { ...state, socialHistory: { ...state.socialHistory, ...action.payload } };

    case actions.UPDATE_SOCIAL_HISTORY:
      return { ...state, socialHistory: { ...state.socialHistory, ...action.payload } };

    case actions.DELETE_SOCIAL_HISTORY:
      return { ...state, socialHistory: {} };

    default:
      return state;
  }
};

const RegistrationProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(registrationReducer, initialRegistrationState);

  const onSubmit = () => {
    // call the API to submit the data
    //console.log(state);
  };

  return (
    <RegistrationContext.Provider value={{ state, dispatch, onSubmit }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export { RegistrationProvider, useRegistration };

// const initialRegistrationState = {
//   // patient can have multiple conditions - each as a separate record
//   condition: {
//     resourceType: "Condition",
//     clinicalStatus: "",
//     verificationStatus: "",
//     severity: "",
//     onsetDateTime: "",
//   },

//   // patient can have multiple procedures - each as a separate record
//   procedure: {
//     resourceType: "Procedure",
//     status: "",
//     code: "",
//     reasonCode: "",
//     performer: "",
//     performedDateTime: "",
//     location: "",
//     outcome: "",
//   },

//   // Single or multiple - needs a decision
//   encounter: {
//     resourceType: "Encounter",
//     status: "",
//     class: "",
//     type: "",
//     period: "",
//     reasonCode: "",
//     location: "",
//     hospitalization: "",
//     serviceProvider: "",
//   },

//   // can be multiple each as a separate record
//   allergyIntolerance: {
//     resourceType: "AllergyIntolerance",
//     clinicalStatus: "",
//     verificationStatus: "",
//     category: "",
//     criticality: "",
//     onsetDateTime: "",
//     reaction: "",
//   },

//   // can be multiple each as a separate record
//   familyHistory: {
//     resourceType: "FamilyMemberHistory",
//     history: "",
//     date: "",
//     age: "",
//     relationship: "",
//     //deceasedBoolean: false,
//     deceasedDateTime: "",
//     sex: "",
//   },

//   // can be multiple each as a separate record - each medication statement represents one medication
//   medicationStatement: {
//     resourceType: "MedicationStatement",
//     status: "",
//     taken: "",
//     category: "",
//     note: "",
//     dateAsserted: "",
//   },

//   // can be multiple each as a separate record
//   observation: {
//     resourceType: "Observation",
//     code: "",
//     status: "",
//     effectiveDateTime: "",
//     valueQuantity: "",
//   },

//   // can be multiple each as a separate record
//   immunizations: [immunizations],

//   // can be multiple
//   adverseEvent: {
//     resourceType: "AdverseEvent",
//     status: "",
//     date: "",
//     location: "",
//     seriousness: "",
//     outcome: "",
//     contributingFactor: "",
//   },

//   // can be multiple
//   socialHistory: {
//     resourceType: "Observation",
//     economicStatus: "",
//     highestLevelOfEducation: "",
//     physicalActivity: "",
//     dietAndNutrition: "",
//     substanceUse: "",
//     stressAndCoping: "",
//   },
// };
