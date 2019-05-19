// this is an error handle function to check if a field is empty
const isEmpty = value =>
    value === undefined || value === null || (typeof value === "object" && Object.keys(value).length === 0) || (typeof value === "string" && value.trim().length === 0);

module.exports = isEmpty
