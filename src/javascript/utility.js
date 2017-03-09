

function equal(x, y) {
    if (x === y) return true;
    if (x == null || y == null) return false;
    if (Array.isArray(x) && Array.isArray(y)) {
        if (x.length != y.length) return false;
        for (let i = 0; i < x.length; i++) {
            if (!(equal(x[i], y[i]))) {
                return false
            }
        }
    }
    return true;
}

function clone(obj) {
    // Case: array
    if (Array.isArray(obj)) {
        return obj.map(x => clone(x))
    // Case: object
    } else if (typeof(obj) == typeof({}) && obj != null) {
        let newObj = {}
        for (let key in obj) {
            newObj[key] = clone(obj[key])
        }
        return newObj
    // Case: value
    } else {
        return obj
    }
}

/*
 * Mimicks Object.assign, but applies to nested objects and arrays as well.
 * Assumes that edits has the same structure as obj.
 */
function deepAssign(obj, edits, options) {
    let newObj;
    // Case: array
    if (Array.isArray(obj)) {
        newObj = [];
        for (let index = 0; index < edits.length; index++) {
            if (edits[index] != {} || index >= obj.length) {
                newObj[index] = deepAssign(obj[index], edits[index]);
            }
        }
    // Case: object
    } else if (typeof(obj) == typeof({}) && obj != null) {
        newObj = {};
        for (let key in obj) {
            if (key in edits) {
                newObj[key] = deepAssign(obj[key], edits[key]);
            } else if (!options || !options.requireInEditsKeySet) {
                newObj[key] = obj[key];
            }
        }
    // Case: value
    } else {
        newObj = edits;
    }
    return newObj;
}

/*
 * Returns an object with the same structure as edits, but with the original
 * values from obj filled out instead of the actual values in edits.
 * This is used to store changes as they are made in order to allow
 * undo/redo functionality.
 */
function reverseEdits(obj, edits) {
    let result
    // Case: array
    if (Array.isArray(obj)) {
        result = [];
        for (let index = 0; index < Math.min(obj.length, edits.length); index++) {
            if (edits.length > index && edits[index] != {}) {
                result[index] = reverseEdits(obj[index], edits[index]);
            }
        }
        for (let index = edits.length; index < obj.length; index++) {
            result.push(obj[index]);
        }
    // Case: object
    } else if (typeof(obj) == typeof({}) && obj != null) {
        result = {};
        for (let key in obj) {
            if (key in edits) {
                result[key] = reverseEdits(obj[key], edits[key]);
            }
        }
    // Case: value
    } else {
        result = obj;
    }
    return result;
}

export default {
    equal,
    deepAssign,
    reverseEdits,
    clone
}
