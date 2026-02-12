// optional chaining

// stops the evaluation if the value before ?. 
// is undefined or null and return undefined


let user = {};

alert(user?.address?.street);

// doesnt matter what we use ?. , ?[] they are all the same



// obj?.prop – returns obj.prop if obj exists, otherwise undefined.
// obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
// obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
