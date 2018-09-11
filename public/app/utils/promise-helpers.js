export const handleStatus = (res) => {
  if (res.ok) return res.json()
  return Promise.reject(res.statusText);
}

export const log = (data) => {
  console.log(data);
  return data;
}

export const timeoutPromise = (milliseconds, promise) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => reject(`Limite excedido da promise: ${milliseconds}ms`), milliseconds);
  });

  return Promise.race([
    timeout, promise
  ]);
}