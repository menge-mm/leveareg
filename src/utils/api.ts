import axios from 'axios';
import { formatBundleResource } from '@/utils/formatters/formatBundleResource';
import { userProfileInfo } from './userInfo';
import { msalInstance } from '@/auth/msalInstance';
import { loginRequest } from '@/auth/msalConfig';

export const formatForFhirBundle = async (formData: any) => {
  let arr: {}[] = [];
  const stateMap = new Map(Object.entries(formData.skipped));
  const patientId = formData.data.patient.id;
  const userProfile = await getUserProfileInfo();
  const registeredBy = userProfile?.identifier;

  Object.entries(formData.data).map(([key, resource]: [string, any]) => {
    if (stateMap.get(key) === true) return;
    if (Array.isArray(resource)) {
      resource.forEach((r: any) => {
        arr.push({ ...r, patientId });
      });
    } else {
      if (key === 'patient') {
        arr.push({
          ...resource,
          registeredBy,
        });
      } else {
        arr.push({ ...resource, patientId });
      }
    }
  });

  console.log(formatBundleResource(arr));

  return arr;
};

export const submitDataToFhirServer = async (formData: any) => {
  const url = 'http://localhost:7071/api/createBundleResource?resourceType=Bundle';

  const body = await formatForFhirBundle(formData);
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  const response = await axios.post(url, body, { headers });

  if (response.status === 201) {
    return response.data;
  } else {
    return {
      error: 'Unable to create the resource',
      message: response.data,
    };
  }
};

/*
  This function is a workaround to get the information from the professionals working as data collector 
  */

export const getUserProfileInfo = async () => {
  const userInfo = await userProfileInfo();
  if (!userInfo) {
    return null;
  }
  const request = {
    ...loginRequest,
    account: userInfo?.account,
  };

  const res = await msalInstance.acquireTokenSilent(request);
  const user = await axios.get('https://graph.microsoft.com/v1.0/me', {
    headers: {
      Authorization: `Bearer ${res.accessToken}`,
    },
  });

  return {
    id: userInfo.id,
    resourceType: 'RelatedPerson',
    active: true,
    identifier: userInfo.localAccountId,
    relationshipCode: 'self',
    familyName: user.data.surname,
    givenName: user.data.givenName,
    phone: user.data.mobilePhone,
    email: user.data.mail || userInfo.email,
    userPrincipalName: user.data.userPrincipalName,
    // gender: userInfo.gender,
    // birthDate: userInfo.birthDate,
    photo: userInfo.photo,
    account: userInfo.account,
  };
};

// try {
//   const photo = await axios.get(`https://graph.microsoft.com/v1.0/me/photo/$value`, {
//     headers: {
//       Authorization: `Bearer ${res.accessToken}`,
//     },
//   });

//   console.log(photo.data);
// } catch (e) {
//   console.log(e);
// }
