
DROP TABLE IF EXISTS dbo.Medication;
DROP TABLE IF EXISTS dbo.MedicalProcedure;
DROP TABLE IF EXISTS dbo.Diagnosis;
DROP TABLE IF EXISTS dbo.Encounter;
DROP TABLE IF EXISTS dbo.Patient;
DROP TABLE IF EXISTS dbo.HealthCareStaff;
DROP TABLE IF EXISTS dbo.HealthCareProvider;
DROP TABLE IF EXISTS dbo.Address;
DROP TABLE IF EXISTS dbo.Consent;

CREATE TABLE dbo.Address (
    [id] UNIQUEIDENTIFIER PRIMARY KEY,
    [street] NVARCHAR(200) NOT NULL,
    [city] NVARCHAR(50) NOT NULL,
    [homeNumber] NVARCHAR(50) NOT NULL,
    [state] NVARCHAR(50),
    [zip] NVARCHAR(50),
    [createdAt] DATETIME NOT NULL DEFAULT GETDATE(),
    [updatedAt] DATETIME NOT NULL DEFAULT GETDATE(),
);

CREATE TABLE dbo.HealthCareProvider ( 
    [id] UNIQUEIDENTIFIER PRIMARY KEY,
    [name] NVARCHAR(50) NOT NULL,
    [telecom] NVARCHAR(15) NOT NULL,
    [createdAt] DATETIME NOT NULL DEFAULT GETDATE(),
    [updatedAt] DATETIME NOT NULL DEFAULT GETDATE(),

    [addressId] UNIQUEIDENTIFIER NOT NULL,
    FOREIGN KEY ([addressId]) REFERENCES dbo.Address([id])
    
);

CREATE TABLE dbo.HealthCareStaff (
    [id] UNIQUEIDENTIFIER PRIMARY KEY,
    [givenName] NVARCHAR(50) NOT NULL,
    [familyName] NVARCHAR(50) NOT NULL,
    [role] NVARCHAR(50) NOT NULL,
    [telecom] NVARCHAR(15) NOT NULL,
    [createdAt] DATETIME NOT NULL DEFAULT GETDATE(),
    [updatedAt] DATETIME NOT NULL DEFAULT GETDATE(),

    [addressId] UNIQUEIDENTIFIER NOT NULL,
    [providerId] UNIQUEIDENTIFIER NOT NULL,

    FOREIGN KEY ([addressId]) REFERENCES dbo.Address([id]),
    FOREIGN KEY ([providerId]) REFERENCES dbo.HealthCareProvider([id])
);

CREATE TABLE dbo.Patient (
    [id] UNIQUEIDENTIFIER PRIMARY KEY,
    [givenName] NVARCHAR(50) NOT NULL,
    [familyName] NVARCHAR(50) NOT NULL,
    [gender] NVARCHAR(50) NOT NULL,
    [telecom] NVARCHAR(50) NOT NULL,
    [birthDate] DATETIME NOT NULL, 
    [contactRelationship] NVARCHAR(10),
    [contactGivenName] NVARCHAR(50) ,
    [contactFamilyName] NVARCHAR(50) ,
    [contactTelecom] NVARCHAR(15),
    [contactGender] NVARCHAR(10),
    [createdAt] DATETIME NOT NULL DEFAULT GETDATE(),
    [updatedAt] DATETIME NOT NULL DEFAULT GETDATE(),
    -- [contactAddressId] UNIQUEIDENTIFIER,   
    -- hardcoded Address -- home number is required
    -- relationship is required
    [addressId] UNIQUEIDENTIFIER NOT NULL,
    [providerId] UNIQUEIDENTIFIER NOT NULL,
    FOREIGN KEY ([addressId]) REFERENCES dbo.Address([id]),
    FOREIGN KEY ([providerId]) REFERENCES dbo.HealthCareProvider([id])
);

CREATE TABLE Consent (
    [id] UNIQUEIDENTIFIER PRIMARY KEY,
    [patientId] UNIQUEIDENTIFIER NOT NULL,
  
    [consentDataCollection] BIT DEFAULT 0,
    [gdprCompliance] BIT DEFAULT 0,
    [gdprProcessingAgreement] BIT DEFAULT 0,
    [hipaaCompliance] BIT DEFAULT 0,
    [hipaaConsent] BIT DEFAULT 0,
    [dataSharing] BIT DEFAULT 0,
    [rightToWithdraw] BIT DEFAULT 0,
    [confidentialityAgreement] BIT  DEFAULT 0,
    [dataRetentionPolicy] BIT DEFAULT 0,
    [termsAndConditions] BIT DEFAULT 0,
    [privacyPolicy] BIT DEFAULT 0,
    [dnaCollectionConsent] BIT DEFAULT 0,
    [createdAt] DATETIME NOT NULL DEFAULT GETDATE(),
    [updatedAt] DATETIME NOT NULL DEFAULT GETDATE(),

    FOREIGN KEY ([patientId]) REFERENCES dbo.Patient([id]),
  
);

CREATE TABLE dbo.Encounter (
    [id] UNIQUEIDENTIFIER PRIMARY KEY,   
    [date] DATETIME NOT NULL,
    [type] NVARCHAR(50) NOT NULL,
    [reason] NVARCHAR(50) NOT NULL,
    [note] NVARCHAR(200) NOT NULL,
    [createdAt] DATETIME NOT NULL DEFAULT GETDATE(),
    [updatedAt] DATETIME NOT NULL DEFAULT GETDATE(),

    [patientId] UNIQUEIDENTIFIER NOT NULL,
    [providerId] UNIQUEIDENTIFIER NOT NULL,
    FOREIGN KEY ([patientId]) REFERENCES dbo.Patient([id]),
    FOREIGN KEY ([providerId]) REFERENCES dbo.HealthCareProvider([id])
);

CREATE TABLE dbo.Diagnosis (
    [id] UNIQUEIDENTIFIER PRIMARY KEY,
    [staffId] UNIQUEIDENTIFIER NOT NULL,
    [encounterId] UNIQUEIDENTIFIER NOT NULL,
    [createdAt] DATETIME NOT NULL DEFAULT GETDATE(),
    [updatedAt] DATETIME NOT NULL DEFAULT GETDATE(),

    [code] NVARCHAR(50) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,    
    FOREIGN KEY ([staffId]) REFERENCES dbo.HealthCareStaff([id]),
    FOREIGN KEY ([encounterId]) REFERENCES dbo.Encounter([id])
);

CREATE TABLE dbo.MedicalProcedure (
    [id] UNIQUEIDENTIFIER PRIMARY KEY,
    [staffId] UNIQUEIDENTIFIER NOT NULL,
    [encounterId] UNIQUEIDENTIFIER NOT NULL, 
    [code] NVARCHAR(50) NOT NULL,
    [description] NVARCHAR(1000),    
    [createdAt] DATETIME NOT NULL DEFAULT GETDATE(),
    [updatedAt] DATETIME NOT NULL DEFAULT GETDATE(),
   
    FOREIGN KEY ([staffId]) REFERENCES dbo.HealthCareStaff([id]),
    FOREIGN KEY ([encounterId]) REFERENCES dbo.Encounter([id])
);

CREATE TABLE dbo.Medication (
    [id] UNIQUEIDENTIFIER PRIMARY KEY,   
    [patientId] UNIQUEIDENTIFIER NOT NULL,
    [encounterId] UNIQUEIDENTIFIER NOT NULL,

    [code] NVARCHAR(50) NOT NULL,
    [description] NVARCHAR(200) NOT NULL,

    [createdAt] DATETIME NOT NULL DEFAULT GETDATE(),
    [updatedAt] DATETIME NOT NULL DEFAULT GETDATE(),
    
    FOREIGN KEY ([patientId]) REFERENCES dbo.Patient([id]),
    FOREIGN KEY ([encounterId]) REFERENCES dbo.Encounter([id])
);

CREATE INDEX IDX_AddressId ON dbo.HealthCareProvider ([addressId]);
CREATE INDEX IDX_PatientHealthCareProviderId ON dbo.Patient ([providerId]);
CREATE INDEX IDX_PatientAddressId ON dbo.Patient ([addressId]);

CREATE INDEX IDX_HealthCareProviderId ON dbo.HealthCareStaff ([providerId]);
CREATE INDEX IDX_HealthCareStaffAddressId ON dbo.HealthCareStaff ([addressId]);

CREATE INDEX IDX_EncounterPatientId ON dbo.Encounter ([patientId]);
CREATE INDEX IDX_EncounterHealthCareProviderId ON dbo.Encounter ([providerId]);

CREATE INDEX IDX_DiagnosisStaffId ON dbo.Diagnosis ([staffId]);
CREATE INDEX IDX_DiagnosisEncounterId ON dbo.Diagnosis ([encounterId]);

CREATE INDEX IDX_ProcedureStaffId ON dbo.MedicalProcedure ([staffId]);
CREATE INDEX IDX_ProcedureEncounterId ON dbo.MedicalProcedure ([encounterId]);

CREATE INDEX IDX_MedicationPatientId ON dbo.Medication ([patientId]);
CREATE INDEX IDX_MedicationEncounterId ON dbo.Medication ([encounterId]);
