import React, { useReducer, useContext, createContext } from "react";
import { schemaDefaultValues } from "@/constants/schema";
import { BundleResourceType } from "@/types";

import ProgressBar from "../ProgressBar";

type FormState = {
  step: number;
  formData: BundleResourceType;
  skipped: {
    conditions: boolean;
    procedures: boolean;
    encounters: boolean;
    observations: boolean;
    allergyIntolerances: boolean;
    adverseEvents: boolean;
    familyMemberHistories: boolean;
    immunizations: boolean;
    medicationStatement: boolean;
  };
};

type FormContextType = {
  state: FormState;
  dispatch: React.Dispatch<any>;
  onSubmit: () => void;
};

const FormContext = createContext<FormContextType>({} as any);

const formReducer = (state: FormState, action: any) => {
  switch (action.type) {
    case "ADD_RESOURCE":
      return {
        ...state,
        formData: { ...state.formData, [action.resource]: action.payload },
        skipped: { ...state.skipped, [action.resource]: false },
      };
    case "CHANGE_SKIP_STATE":
      return {
        ...state,
        skipped: { ...state.skipped, [action.resource]: action.payload },
      };
    case "SKIP":
      return { ...state, step: state.step + 1 };
    case "PREV":
      return { ...state, step: state.step - 1 };
    case "NEXT":
      return {
        ...state,
        step: state.step + 1,
      };
    case "RESET":
      return {
        ...state,
        step: 0,
        formData: schemaDefaultValues,
        skipped: {
          conditions: false,
          procedures: false,
          encounters: false,
          observations: false,
          allergyIntolerances: false,
          adverseEvents: false,
          familyMemberHistories: false,
          immunizations: false,
          medicationStatement: false,
        },
      };

    default:
      return state;
  }
};

const RegFormProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(formReducer, {
    step: 0,
    formData: schemaDefaultValues,
    skipped: {
      conditions: false,
      procedures: false,
      encounters: false,
      observations: false,
      allergyIntolerances: false,
      adverseEvents: false,
      familyMemberHistories: false,
      immunizations: false,
      medicationStatement: false,
    },
  });

  const onSubmit = () => {
    // console.log(state.formData);
  };

  return (
    <FormContext.Provider value={{ state, dispatch, onSubmit }}>
      <ProgressBar
        current={state.step}
        stepLength={11}
        className="h-1 md:h-2 absolute top-0 z-20 left-0 rounded-none md:rounded-tl-lg md:rounded-tr-lg"
      />
      <ProgressBar
        current={state.step}
        stepLength={11}
        className="h-1 absolute bottom-0 z-20 left-0 rounded-none md:rounded-bl-lg md:rounded-br-lg"
      />
      {children}
    </FormContext.Provider>
  );
};

export const useRegFormContext = () => useContext(FormContext);

export default RegFormProvider;
