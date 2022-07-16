const domain = process.env.DOMAIN + "/property/";

export const createProperty = async (requestData) => {
  const response = await fetch(domain + requestData.userId,{
    method: 'POST',
    body: JSON.stringify(requestData.propertyData),
  });
  const data = await response.json();

  if(!response.ok) {
    throw new Error(data.message || 'Could not create property.');
  }

  return data
}