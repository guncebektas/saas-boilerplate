import {schema} from "./schema.js";

export function schemaValidator(providedSchema) {
  const validator = schema.compile(providedSchema);

  return model => {
    validator(model);
    return validator.errors?.length ? {details: validator.errors} : null;
  };
}
