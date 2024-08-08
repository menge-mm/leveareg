import { RegistrationState } from "./state";
import * as actions from "./actionTypes";

export const update = (state: RegistrationState, resourceName: string, payload) => {
  return {
    ...state,
    [resourceName]: state[resourceName].map((resource) => {
      if (resource.id === payload.id) {
        return { ...resource, ...payload };
      }
      return resource;
    }),
  };
};

export const add = (state: RegistrationState, resourceName: string, payload) => {
  //check if the resource already exists
  const resource = state.conditions.find((r) => r.code === payload.code);

  return {
    ...state,
    [resourceName]: [...state[resourceName], payload],
  };
};

export const remove = (state: RegistrationState, resourceName: string, id: string) => {
  // console.log("remove", resourceName, id);
  return {
    ...state,
    [resourceName]: state[resourceName].filter((resource) => resource.id !== id),
  };
};

export const getActionType = (type: string, resourceType: string): string => {
  switch (resourceType) {
    case "Condition":
      if (type == "add") return actions.ADD_CONDITION;
      else if (type === "delete") return actions.DELETE_CONDITION;
      else return actions.UPDATE_CONDITION;
    case "Procedure":
      if (type == "add") return actions.ADD_PROCEDURE;
      else if (type === "delete") return actions.DELETE_PROCEDURE;
      else return actions.UPDATE_PROCEDURE;

    case "Encounter":
      if (type == "add") return actions.ADD_ENCOUNTER;
      else if (type === "delete") return actions.DELETE_ENCOUNTER;
      else return actions.UPDATE_ENCOUNTER;

    case "AllergyIntolerance":
      if (type == "add") return actions.ADD_ALLERGY_INTOLERANCE;
      else if (type === "delete") return actions.DELETE_ALLERGY_INTOLERANCE;
      else return actions.UPDATE_ALLERGY_INTOLERANCE;

    case "FamilyMemberHistory":
      if (type == "add") return actions.ADD_FAMILY_MEMBER_HISTORY;
      else if (type === "delete") return actions.DELETE_FAMILY_MEMBER_HISTORY;
      else return actions.UPDATE_FAMILY_MEMBER_HISTORY;

    case "MedicationStatement":
      if (type == "add") return actions.ADD_MEDICATION_STATEMENT;
      else if (type === "delete") return actions.DELETE_MEDICATION_STATEMENT;
      else return actions.UPDATE_MEDICATION_STATEMENT;

    case "Observation":
      if (type == "add") return actions.ADD_OBSEVATION;
      else if (type === "delete") return actions.DELETE_OBSERVATION;
      else return actions.UPDATE_OBSERVATION;

    case "AdverseEvent":
      if (type == "add") return actions.ADD_ADVERSE_EVENT;
      else if (type === "delete") return actions.DELETE_ADVERSE_EVENT;
      else return actions.UPDATE_ADVERSE_EVENT;

    case "Basic":
      if (type == "add") return actions.ADD_SOCIAL_HISTORY;
      else if (type === "delete") return actions.DELETE_SOCIAL_HISTORY;
      else return actions.UPDATE_SOCIAL_HISTORY;

    case "Immunization":
      if (type == "add") return actions.ADD_IMMUNIZATION;
      else if (type === "delete") return actions.DELETE_IMMUNIZATION;
      else return actions.UPDATE_IMMUNIZATION;

    default:
      return "null";
  }
};
