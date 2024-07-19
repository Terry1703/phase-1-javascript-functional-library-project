// index.js

// myEach function definition
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key]);
        }
      }
    }
    // Return the original collection
    return collection;
  }


// myMap function definition
function myMap(collection, callback) {
    if (Array.isArray(collection)) {
      // If collection is an array, map over each element
      return collection.map(callback);
    } else if (typeof collection === 'object') {
      // If collection is an object, map over each value
      let mappedArray = [];
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          mappedArray.push(callback(collection[key]));
        }
      }
      return mappedArray;
    } else {
      // Handle cases where collection is neither array nor object
      throw new Error('Unsupported collection type');
    }
  }
  
  // Example usage
  // Uncomment the following lines for testing purposes once implemented
  /*
  const arr = [1, 2, 3];
  const mappedArr = myMap(arr, (item) => item * 2);
  console.log(mappedArr); // Should output: [2, 4, 6]
  
  const obj = { a: 1, b: 2, c: 3 };
  const mappedObj = myMap(obj, (value) => value * 3);
  console.log(mappedObj); // Should output: [3, 6, 9]
  */
  
  // Exporting the function if needed
  // module.exports = myMap;

 

// index.js

// Function to reduce an array or object to a single value
function myReduce(collection, callback, initialValue) {
    // Check if the collection is an array or an object
    if (Array.isArray(collection)) {
        // Array case
        let accumulator = initialValue !== undefined ? initialValue : collection[0];
        let startIndex = initialValue !== undefined ? 0 : 1;

        for (let i = startIndex; i < collection.length; i++) {
            accumulator = callback(accumulator, collection[i], i, collection);
        }

        return accumulator;
    } else if (typeof collection === 'object' && collection !== null) {
        // Object case
        let accumulator = initialValue !== undefined ? initialValue : Object.values(collection)[0];
        let keys = Object.keys(collection);
        let startIndex = initialValue !== undefined ? 0 : 1;

        for (let i = startIndex; i < keys.length; i++) {
            const key = keys[i];
            accumulator = callback(accumulator, collection[key], key, collection);
        }

        return accumulator;
    } else {
        throw new TypeError('myReduce called on invalid type');
    }
}

// Export the myReduce function if you're using modules
module.exports = {
    myReduce,
    // other functions if defined in this file
};


// Function to find the first element in an array that satisfies the callback function
function myFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}

// Export the myFind function if you're using modules
module.exports = {
    myFind,
    // other functions if defined in this file
};
// index.js

// Function to filter elements from an array
function myFilter(collection, callback) {
    if (!Array.isArray(collection)) {
        // Return an empty array if the input is not an array
        return [];
    }

    const filteredArray = [];

    for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i], i, collection)) {
            filteredArray.push(collection[i]);
        }
    }

    return filteredArray;
}

// Export the myFilter function if you're using modules
module.exports = {
    myFilter,
    // other functions if defined in this file
};
// index.js

// Function to determine the size of a collection (array or object)
function mySize(collection) {
    if (Array.isArray(collection)) {
        // Return the length of the array
        return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
        // Return the number of keys in the object
        return Object.keys(collection).length;
    } else {
        // Return 0 for unsupported types or empty inputs
        return 0;
    }
}

// Export the mySize function if you're using modules
module.exports = {
    mySize,
    // other functions if defined in this file
};
// index.js

// Function to retrieve the first element or first n elements from a collection
function myFirst(collection, n = 1) {
    if (Array.isArray(collection)) {
        // If collection is an array
        if (n === 1) {
            return collection[0]; // Return the first element directly
        } else {
            return collection.slice(0, n); // Return an array of first n elements
        }
    } else if (typeof collection === 'object' && collection !== null) {
        // If collection is an object
        const keys = Object.keys(collection);
        if (n === 1) {
            return collection[keys[0]]; // Return the value of the first key directly
        } else {
            return keys.slice(0, n).map(key => collection[key]); // Return an array of first n values
        }
    } else {
        // Return empty array for unsupported types or empty inputs
        return [];
    }
}

// Export the myFirst function if you're using modules
module.exports = {
    myFirst,
    // other functions if defined in this file
};
// index.js

// Function to retrieve the last element or last n elements from a collection
function myLast(collection, n = 1) {
    if (Array.isArray(collection)) {
        // If collection is an array
        const len = collection.length;
        if (n === 1) {
            return collection[len - 1]; // Return the last element directly
        } else {
            return collection.slice(Math.max(len - n, 0)); // Return an array of last n elements
        }
    } else if (typeof collection === 'object' && collection !== null) {
        // If collection is an object
        const keys = Object.keys(collection);
        const len = keys.length;
        if (n === 1) {
            return collection[keys[len - 1]]; // Return the value of the last key directly
        } else {
            return keys.slice(Math.max(len - n, 0)).map(key => collection[key]); // Return an array of last n values
        }
    } else {
        // Return empty array for unsupported types or empty inputs
        return [];
    }
}

// Export the myLast function if you're using modules
module.exports = {
    myLast,
    // other functions if defined in this file
};
// index.js

// Function to retrieve keys of an object's own enumerable properties
function myKeys(obj) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        return []; // Return empty array for non-object inputs
    }

    return Object.keys(obj); // Return array of keys
}

// Export the myKeys function if you're using modules
module.exports = {
    myKeys,
    // other functions if defined in this file
};
// index.js

// Function to retrieve values of an object's own properties
function myValues(obj) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        return []; // Return empty array for non-object inputs
    }

    return Object.values(obj); // Return array of values
}

// Export the myValues function if you're using modules
module.exports = {
    myValues,
    // other functions if defined in this file
};
