const BASE_URL = `http://fitnesstrac-kr.herokuapp.com/api`;

const registerUser = async (userObj) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userObj.username,
        password: userObj.password,
      }),
    });
    const result = await response.json();
    console.log(result);
    // return result;
  } catch (err) {
    console.log(err);
  }
};

const login = async (userObj) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userObj.name,
        password: userObj.password,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result.token;
  } catch (err) {
    throw err;
  }
};

const getPublicRoutines = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
};

const myData = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
};

const createRoutine = async (token, routineObj) => {
  try {
    console.log(token, routineObj);
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: routineObj.name,
        goal: routineObj.goal,
        isPublic: routineObj.isPublic,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

const getActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export {
  registerUser,
  login,
  myData,
  getPublicRoutines,
  createRoutine,
  getActivities,
};
