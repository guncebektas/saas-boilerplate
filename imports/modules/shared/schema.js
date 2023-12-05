import Ajv from "ajv";
import addFormats from "ajv-formats";

const schema = new Ajv({
  allErrors: true,
  useDefaults: true,
  keywords: ["uniforms"]
});
addFormats(schema);

export {schema};
