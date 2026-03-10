const fetchUser = (id: number) => {
  console.log(`Fetching user ${id} from DB...`);
  return { id, name: "Abhishek" };
};

// Functional Proxy Wrapper 
const loggingProxy = <Args extends any[], R>(
  fn: (...args: Args) => R
) => {
  return (...args: Args): R => {
    console.log("Calling function with args:", args);
    const result = fn(...args);
    console.log("Returned:", result);
    return result;
  };
};

// use proxy
const fetchUserWithLogging = loggingProxy(fetchUser);

fetchUserWithLogging(10);