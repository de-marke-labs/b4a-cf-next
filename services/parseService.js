import Parse from "parse/dist/parse.min.js";

Parse.initialize(
  process.env.NEXT_PUBLIC_PARSE_APP_ID,
  process.env.NEXT_PUBLIC_PARSE_JS_KEY
);
Parse.serverURL = 'https://parseapi.back4app.com/';

export const getPersons = async () => {
  const Person = Parse.Object.extend("Person");
  const query = new Parse.Query(Person);

  try {
    let results = await query.find();
    return results;
  } catch (error) {
    console.log(error);
  }
};

export const createPerson = async (user) => {
  const Person = Parse.Object.extend("Person");
  const person = new Person();

  person.set("name", user.name);
  person.set("email", user.email);
  person.set("address", user.address);
  person.set("phone", user.phone);

  try {
    const result = await person.save();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const updatePerson = async (formValues, personId) => {
  const Person = Parse.Object.extend("Person");
  const query = new Parse.Query(Person);

  try {
    const result = await query.get(personId);
    result.set("name", formValues.name);
    result.set("email", formValues.email);
    result.set("address", formValues.address);
    result.set("phone", formValues.phone);
    result.save();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const deletePerson = async (personId) => {
  const Person = Parse.Object.extend("Person");
  const query = new Parse.Query(Person);

  try {
    const result = await query.get(personId);
    result.destroy();
  } catch (error) {
    console.log(error);
  }
};
