export const getCites = (endpoint, callback) => {
     return fetch(endpoint)
       .then((res) =>
         res.ok
           ? res.json()
           : Promise.reject({
               err: true,
               status: res.status || "00",
               statusText: res.statusText || "Ocurrió un error",
             })
       )
       .then(res => callback(res.slip))
   };