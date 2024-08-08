import TriageMessage from "./triage-message";
import Condition from "./condition";
import Procedure from "./procedure";
import PatientProfile from "./profile";
import MedicationStatement from "./medication-statement";
import Observation from "./observation";
import SocialInformation from "./social-history";
import AllergyIntolerance from "./allergy-intolerance";
import AdverseEvent from "./adverse-event";
import Immunization from "./immunization";
import Encounter from "./encounter";
import FamilyMemberHistory from "./family-member-history";

const PatientDetailInfo = () => {
  return (
    <div>
      {/* Latest message from triage */}
      <TriageMessage />
      {/* Patient Profile */}
      <PatientProfile />

      {/* Medical History of the Patient */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Conditions */}
        <Condition />
        {/* Procedures */}
        <Procedure />
        {/* Medication Statements */}
        <MedicationStatement />
        {/* Observations */}
        <Observation />
        {/* Social History */}
        <SocialInformation />
        {/* Allergy Intolerance */}
        <AllergyIntolerance />
        {/* Adverse Event */}
        <AdverseEvent />
        {/* Immunization */}
        <Immunization />
        {/* Encounter */}
        <Encounter />
        {/* Family Member History */}
        <FamilyMemberHistory />
      </div>
    </div>
  );
};

export default PatientDetailInfo;
