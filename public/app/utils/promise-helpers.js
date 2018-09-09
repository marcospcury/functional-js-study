export const handleStatus = (res) => {
  if (res.ok) return res.json()
  return Promise.reject(res.statusText);
}

export const log = (data) => {
  console.log(data);
  return data;
}