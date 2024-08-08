export const refSteps = (
  str: string
): {
  text: string;
  index: number;
} => {
  switch (str) {
    case "patient":
      return {
        text: "المريض",
        index: 0,
      };
    case "consent":
      return {
        text: "الموافقة",
        index: 11,
      };
    case "encounters":
      return {
        text: "اللقاءات",
        index: 3,
      };
    case "conditions":
      return {
        text: "الحالات",
        index: 1,
      };
    case "procedures":
      return {
        text: "الإجراءات",
        index: 2,
      };
    case "medicationStatement":
      return {
        text: "الأدوية",
        index: 9,
      };
    case "immunizations":
      return {
        text: "التطعيمات",
        index: 4,
      };
    case "allergyIntolerances":
      return {
        text: "الحساسية",
        index: 7,
      };
    case "observations":
      return {
        text: "الملاحظات",
        index: 5,
      };
    case "socialHistory":
      return {
        text: "التاريخ الاجتماعي",
        index: 10,
      };
    case "familyMemberHistories":
      return {
        text: "تاريخ الأسرة",
        index: 8,
      };
    case "adverseEvents":
      return {
        text: "الأحداث الضارة",
        index: 6,
      };
    default:
      return {
        text: "المريض",
        index: 0,
      };
  }
};
