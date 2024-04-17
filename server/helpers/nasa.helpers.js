const validateQuery = (query) => {
    let errors = {}
    let validKeys = ["date", "start_date", "end_date", "count", "thumbs"]
    if (typeof query === "object" && Object.keys(query).length > 0) {
        for (let i=0; i<Object.keys(query).length; i++) {
            if (!validKeys.includes(Object.keys(query)[i])) {
                errors[Object.keys(query)[i]] = "Invalid query parameter"
            }
        }
    } else if (typeof query !== "object") {
        errors.query_type = "Query must be an object"
    }
    return errors
}

export { validateQuery }