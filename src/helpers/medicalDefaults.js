export const pastDiagnosesOptions = [
  'Hypertension',
  'Diabetes',
  'Asthma',
  'Migrain'
  // ... more options
]

export const familyHistoryOptions = [
  'Mother',
  'Father',
  'Sister',
  'Brother',
  'Maternal Grandmother',
  'Maternal Grandfather',
  'Paternal Grandmother',
  'Paternal Grandfather',
  'Aunt',
  'Uncle'
]

export const currentMedicationsOptions = [
  'Metformin',
  'Lisinopril',
  'Atorvastatin',
  'Levothyroxine',
  'Amoxicillin',
  'Ibuprofen',
  'Paracetamol',
  'Other...'
]

export const pastMedicationsOptions = [
  'Metoprolol',
  'Losartan',
  'Hydrochlorothiazide',
  'Gabapentin',
  'Prednisone',
  'Diazepam',
  'Other...'
]

export const surgeriesOptions = [
  'Appendectomy',
  'Gallbladder removal',
  'Hernia repair',
  'C-section'
  // ... more options
]

export const extensiveDiagnosisList = [
  'Hypertension',
  'Diabetic neuropathy',
  'Asthmatic bronchitis'
  //... many more entries
]

export const chronicDiseasesOptions = [
  'Hypertension',
  'Diabetes',
  'Heart Disease'
  // ... more options
]

export const hospitalizationsOptions = [
  'Hypertension',
  'Diabetes',
  'Heart Disease'
  // ... more options
]

export const drugUseOptions = [
  'Marijuana',
  'Cocaine',
  'Methamphetamine',
  'Heroin',
  'Prescription Opioids'
  // ... more options
]

export const occupationalHazardsOptions = [
  'Asbestos',
  'Radiation',
  'Chemical Exposure',
  'Heavy Machinery'
  // ... more options
]

export const vaccinationHistoryOptions = [
  'Measles',
  'Mumps',
  'Rubella',
  'Hepatitis A',
  'Hepatitis B'
  // ... more options
]

export const cardiovascularSymptomsOptions = [
  'Chest Pain',
  'Shortness of Breath',
  'Irregular Heartbeat',
  'Swelling of Legs or Feet'
  // ... more options
]

export const respiratorySymptomsOptions = [
  'Wheezing',
  'Chronic Cough',
  'Shortness of Breath',
  'Bloody Sputum'
  // ... more options
]

export const gastrointestinalSymptomsOptions = [
  'Nausea',
  'Vomiting',
  'Diarrhea',
  'Blood in Stool'
  // ... more options
]

export const neurologicalSymptomsOptions = [
  'Seizures',
  'Tremors',
  'Memory Loss',
  'Numbness or Tingling'
  // ... more options
]

export const exposureToSpecificDiseasesOptions = [
  'Tuberculosis',
  'Malaria',
  'COVID-19',
  'HIV/AIDS'
  // ... more options
]

export const mentalAndEmotionalWellBeingOptions = [
  'Depression',
  'Anxiety',
  'PTSD',
  'Bipolar Disorder'
  // ... more options
]

export const vulnerableGroupStatusOptions = [
  'Pregnant',
  'Elderly',
  'Unaccompanied Minor',
  'Disabled'
  // ... more options
]

export const adverseReactionOptions = [
  // Common Mild Reactions
  'Pain or swelling at injection site',
  'Fatigue',
  'Headache',
  'Mild fever',
  'Muscle or joint aches',
  'Chills',
  'Nausea',

  // More Severe Reactions
  'High fever (over 102°F or 38.9°C)',
  'Seizures caused by fever',
  'Serious allergic reaction (anaphylaxis)',
  'Persistent crying or screaming',
  'Loss of consciousness or fainting',
  'Shoulder pain and reduced range of motion',

  // Specific Vaccine-Related Reactions
  'Temporary joint pain (MMR vaccine)',
  'Rash or bruising (Varicella vaccine)',
  'Guillain-Barre Syndrome (Flu vaccine)',
  'Fainting (HPV vaccine)',
  'Enlarged lymph nodes (COVID-19 vaccine)',
  'Myocarditis or pericarditis (COVID-19 vaccine)',
  'Blood clotting disorders (COVID-19 vaccine)'
  // ... more options
]

export const recentInfectionOrParasitesOptions = [
  'Giardiasis',
  'Malaria',
  'Tuberculosis',
  'Ringworm'
  // ... more options
]

export const knownAllergiesOptions = [
  'Peanuts',
  'Tree nuts',
  'Shellfish',
  'Penicillin'
  // ... more options
]

export const defaultFields = {
  pastDiagnoses: '',
  surgeries: '',
  hospitalizations: '',
  chronicDiseases: '',
  familyHistory: '',
  knownAllergies: '',
  currentMedications: '',
  pastMedications: '',
  smokingStatus: '',
  alcoholConsumption: '',
  drugUse: '',
  diet: '',
  physicalActivity: '',
  occupationalHazards: '',
  vaccinationHistory: '',
  adverseReactions: '',
  menstrualHistory: '',
  pregnancyHistory: '',
  birthControlMethods: '',
  menopauseStatus: '',
  cardiovascularSymptoms: '',
  respiratorySymptoms: '',
  gastrointestinalSymptoms: '',
  neurologicalSymptoms: '',
  labReports: '',
  radiologyReports: '',
  previousDoctorsNotes: '',
  insuranceProvider: '',
  policyNumber: '',
  coverageDetails: '',
  consentForTreatment: '',
  mentalHealth: '',
  advanceDirectives: '',
  powerOfAttorney: ''
}

export const formAccProfConfig = [
  {
    id: 'formFirstName',
    label: 'First name',
    type: 'text',
    placeholder: 'John'
  },
  {
    id: 'formLastName',
    label: 'Last name',
    type: 'text',
    placeholder: 'Doe'
  },
  { id: 'formBirthday', label: 'Date of Birth', type: 'date' },
  {
    id: 'formGender',
    label: 'Gender',
    type: 'select',
    options: [
      'Male',
      'Female',
      'Non-Binary',
      'Prefer Not to Say',
      'Other'
    ]
  },
  {
    id: 'formEmail',
    label: 'Email',
    type: 'email',
    placeholder: 'johndoe@example.com'
  },
  {
    id: 'formMobilePhone',
    label: 'Phone Number (Mobile)',
    type: 'text',
    placeholder: 'Phone number format starting with + or 00'
  },
  {
    id: 'formLanguages',
    label: 'Language(s) spoken',
    type: 'select',
    options: [
      'Arabic',
      'Bengali',
      'Chinese',
      'Dutch',
      'English',
      'French',
      'German',
      'Greek',
      'Hebrew',
      'Hindi',
      'Italian',
      'Japanese',
      'Korean',
      'Other',
      'Polish',
      'Portuguese',
      'Russian',
      'Spanish',
      'Swedish',
      'Turkish',
      'Vietnamese'
    ]
  },

  {
    id: 'formNationality',
    label: 'Nationality',
    type: 'select',
    options: [
      'Afghan',
      'Albanian',
      'Algerian',
      'American',
      'Andorran',
      'Armenian',
      'Austrian',
      'Azerbaijani',
      'Bahraini',
      'Belarusian',
      'Belgian',
      'Bosnian',
      'Bulgarian',
      'Canadian',
      'Croatian',
      'Cypriot',
      'Czech',
      'Danish',
      'Dutch',
      'Emirati',
      'Estonian',
      'Ethiopian',
      'Finnish',
      'French',
      'Georgian',
      'German',
      'Greek',
      'Hungarian',
      'Icelandic',
      'Iranian',
      'Iraqi',
      'Irish',
      'Israeli',
      'Italian',
      'Jordanian',
      'Kenyan',
      'Kosovar',
      'Kuwaiti',
      'Latvian',
      'Lebanese',
      'Libyan',
      'Lithuanian',
      'Luxembourgish',
      'Macedonian',
      'Maltese',
      'Malian',
      'Mauritanian',
      'Moldovan',
      'Monacan',
      'Montenegrin',
      'Moroccan',
      'Norwegian',
      'Omani',
      'Palestinian',
      'Polish',
      'Portuguese',
      'Qatari',
      'Romanian',
      'Russian',
      'Saudi',
      'Serbian',
      'Slovak',
      'Slovenian',
      'Spanish',
      'Swedish',
      'Swiss',
      'Syrian',
      'Tunisian',
      'Turkish',
      'Ukrainian',
      'Yemeni'
    ]
  },
  {
    id: 'formEducationLevel',
    label: 'Education Level',
    type: 'select',
    options: [
      'No formal education',
      'Preschool',
      'Primary/Elementary School',
      'Middle School',
      'Secondary/High School',
      'Vocational Training',
      'Post-secondary non-tertiary education (e.g., Post-High School)',
      'Associate Degree',
      'Bachelor’s Degree',
      'Postgraduate Certificate/Diploma',
      'Master’s Degree',
      'Doctorate Degree (e.g., Ph.D.)',
      'Professional Degree (e.g., MD, JD)',
      'Trade School Certification',
      'Specialized Training/Certification',
      'Other'
    ]
  },
  {
    id: 'formPrimaryAddress',
    label: 'Primary Address',
    type: 'text',
    placeholder: '123 Main St, City, State, Zip Code, Country'
  },
  {
    id: 'formMaritalStatus',
    label: 'Marital Status',
    type: 'select',
    options: ['Single', 'Married', 'Divorced', 'Widowed', 'Separated']
  },
  {
    id: 'formOccupation',
    label: 'Occupation',
    type: 'text',
    placeholder: 'Software Developer'
  },
  {
    id: 'formReligion',
    label: 'Religion',
    type: 'select',
    options: [
      'Atheist/Agnostic',
      'Baha’i',
      'Buddhism',
      'Christianity',
      'Hinduism',
      'Islam',
      'Judaism',
      'Other',
      'Sikhism'
    ]
  },
  {
    id: 'formEmergencyContactName',
    label: 'Emergency Contact Name',
    type: 'text',
    placeholder: 'Jane Doe'
  },
  {
    id: 'formEmergencyContactNumber',
    label: 'Emergency Contact Number',
    type: 'text',
    placeholder: 'Phone number format starting with + or 00'
  }
]

export const formFieldsConfig = [
  {
    id: 'insuranceStatus',
    label: 'Insurance Status',
    type: 'select',
    options: ['Insured', 'Uninsured', 'Other']
  },
  {
    id: 'migrationOrigin',
    label: 'Origin and Migration Route',
    type: 'text',
    placeholder: 'City, Country'
  },
  {
    id: 'durationInCamps',
    label: 'Duration in Refugee Camps or Transit Areas',
    type: 'select',
    options: [
      'Less than 6 months',
      '6 months - 1 year',
      '1 - 2 years',
      '2 - 3 years',
      '3 - 4 years',
      '4 - 5 years',
      'More than 5 years'
    ]
  },
  {
    id: 'vulnerableGroupStatus',
    label:
      'Vulnerable Group Status (e.g., pregnant, elderly, unaccompanied minor)',
    type: 'text'
  },

  { id: 'pastDiagnoses', label: 'Past Diagnoses', type: 'text' },
  { id: 'surgeries', label: 'Surgeries or Operations', type: 'text' },
  { id: 'hospitalizations', label: 'Hospitalizations', type: 'text' },
  { id: 'chronicDiseases', label: 'Chronic Diseases', type: 'text' },
  { id: 'knownAllergies', label: 'Known Allergies', type: 'text' },
  {
    id: 'familyHistory',
    label: 'Family History of Diseases',
    type: 'text'
  },

  {
    id: 'vaccinationHistory',
    label: 'Vaccination History',
    type: 'text'
  },
  {
    id: 'adverseReaction',
    label: 'Adverse Reactions to Vaccinations',
    type: 'text'
  },

  {
    id: 'currentMedications',
    label: 'Current Medications and Dosages',
    type: 'text'
  },
  { id: 'pastMedications', label: 'Past Medications', type: 'text' },
  {
    id: 'smokingStatus',
    label: 'Smoking Status',
    type: 'select',
    options: ['Never', 'Past', 'Current']
  },
  {
    id: 'alcoholConsumption',
    label: 'Alcohol Consumption',
    type: 'select',
    options: ['Never', 'Occasional', 'Regular']
  },
  {
    id: 'drugUse',
    label: 'Drug Use',
    type: 'text'
  },
  {
    id: 'diet',
    label: 'Diet',
    type: 'select',
    options: ['Vegetarian', 'Non-vegetarian', 'Vegan', 'Other']
  },

  {
    id: 'physicalActivity',
    label: 'Physical Activity Level',
    type: 'select',
    options: ['Sedentary', 'Active', 'Very Active']
  },
  {
    id: 'occupationalHazards',
    label: 'Occupational Hazards',
    type: 'text'
  },
  {
    id: 'pregnancyHistory',
    label: 'Pregnancy History',
    type: 'select',
    options: ['Never pregnant', 'Once', 'Multiple times']
  },
  {
    id: 'birthControlMethods',
    label: 'Birth Control Methods',
    type: 'select',
    options: [
      'None',
      'Birth Control Pills (Combined)',
      'Progestin-Only Pills',
      'Condoms (Male)',
      'Condoms (Female)',
      'Diaphragm',
      'Cervical Cap',
      'Birth Control Patch',
      'Vaginal Ring (NuvaRing)',
      'Birth Control Shot (Depo-Provera)',
      'Birth Control Implant (Nexplanon)',
      'Intrauterine Device (IUD) - Copper (Paragard)',
      'Intrauterine Device (IUD) - Hormonal (Mirena, Skyla, etc.)',
      'Emergency Contraceptive Pills',
      'Tubal Ligation',
      'Vasectomy',
      'Fertility Awareness-Based Methods',
      'Lactational Amenorrhea Method (Breastfeeding)',
      'Sponge',
      'Spermicide',
      'Withdrawal Method (Pulling Out)',
      'Other'
    ]
  },
  {
    id: 'menopauseStatus',
    label: 'Menopause Status',
    type: 'select',
    options: ['Pre-menopause', 'Menopause', 'Post-menopause']
  },
  {
    id: 'cardiovascularSymptoms',
    label: 'Cardiovascular Symptoms',
    type: 'text'
  },
  {
    id: 'respiratorySymptoms',
    label: 'Respiratory Symptoms',
    type: 'text'
  },
  {
    id: 'gastrointestinalSymptoms',
    label: 'Gastrointestinal Symptoms',
    type: 'text'
  },
  {
    id: 'neurologicalSymptoms',
    label: 'Neurological Symptoms',
    type: 'text'
  },
  {
    id: 'recentInfectionOrParasites',
    label: 'Recent Infections or Parasites',
    type: 'text'
  },
  {
    id: 'mentalAndEmotionalWellBeing',
    label:
      'Mental and Emotional Well-being (e.g., any traumatic experiences, feelings of anxiety or depression)',
    type: 'text'
  },
  {
    id: 'consentForTreatment',
    label: 'Consent for Treatment',
    type: 'file'
  },
  {
    id: 'advanceDirectives',
    label: 'Advance Directives',
    type: 'file'
  },
  { id: 'powerOfAttorney', label: 'Power of Attorney', type: 'file' },
  {
    id: 'radiologyReports',
    label: 'Radiology Images and Reports',
    type: 'file'
  },

  { id: 'labReports', label: 'Lab Reports', type: 'file' }, // Using file type for attachments
  {
    id: 'exposureHistory',
    label: 'Exposure to Specific Diseases (e.g., TB, malaria)',
    type: 'text',
    placeholder: 'List any known exposures'
  },

  {
    id: 'oldMedicalRecords',
    label: 'Do you have access to previous medical records?',
    type: 'select',
    options: ['Yes', 'No']
  },
  {
    id: 'previousDoctorsNotes',
    label: "Previous Doctor's Notes",
    type: 'file'
  },
  {
    id: 'consentGiven',
    label: 'Consent for Collecting and Using Medical Data',
    type: 'select',
    options: ['Yes', 'No']
  },
]

export const hospitalizationQuestions = [
  {
    label: 'Reason for Hospitalization',
    options: ['Surgery', 'Medical Illness', 'Accident/Injury', 'Maternity', 'Mental Health', 'Diagnostic Test', 'Other']
  },
  {
    label: 'Duration of Stay',
    options: ['Less than 24 hours', '1-3 days', '4-7 days', 'Over a week', 'Over a month']
  }
]

export const familyHistoryQuestions = [
  {
    label: 'Relationship to Patient',
    options: ['Mother', 'Father', 'Sibling', 'Grandparent', 'Child', 'Aunt/Uncle', 'Other']
  },
  {
    label: 'Medical Conditions',
    options: ['Heart Disease', 'Diabetes', 'Cancer (Specify type in notes)', 'Stroke', 'Hypertension', 'Mental Health Disorder', 'Other']
  }
]

export const adverseReactionQuestions = [
  {
    label: 'Type of Adverse Reaction',
    options: ['Allergy', 'Intolerance', 'Side Effect', 'Toxicity', 'Idiosyncratic Reaction', 'Drug Interaction']
  },
  {
    label: 'Severity',
    options: ['Mild', 'Moderate', 'Severe', 'Life-threatening', 'Unknown']
  }
]

export const currentMedicationsQuestions = [
  {
    label: 'Medication Type',
    options: ['Oral Pill/Tablet', 'Injection', 'Topical', 'Inhaler', 'Drops', 'Suppository', 'Patch']
  },
  {
    label: 'Frequency',
    options: ['Once daily', 'Twice daily', 'Three times daily', 'As needed']
  }
]

export const pastMedicationsQuestions = [
  {
    label: 'Reason for Discontinuation',
    options: ['Completed Course', 'Side Effects', 'Ineffective', 'Alternative Treatment Found', 'Cost', 'Other']
  },
  {
    label: 'Effectiveness',
    options: ['Effective', 'Partially Effective', 'Not Effective', 'Unknown']
  }
]
