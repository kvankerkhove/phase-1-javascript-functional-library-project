const objectToArray = function(collection) {
    return ((typeof collection === 'object') ? Object.values(collection) : collection)
}


const myEach = function(collection, callback){
    let newCollection = objectToArray(collection)

    for(let i = 0; i < newCollection.length; i++){
        callback(newCollection[i])
    }
    return collection
}

const myMap = function(collection, callback){
    let newCollection = objectToArray(collection)

    let newArray = []

    for(let i = 0; i < newCollection.length; i++){
        newArray.push(callback(newCollection[i]))
    }
    return newArray
}

const myReduce = function(collection, callback, acc){
    let newCollection = objectToArray(collection)

    if(!acc) {
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }

    let len = newCollection.length

    for(let i = 0; i < len; i++) {
        acc = callback(acc, newCollection[i], newCollection)
    }

    return acc
}

const myFind = function(collection, predicate){
    let newCollection = objectToArray(collection)

    for(let i = 0; i < newCollection.length; i++) {
        if(predicate(newCollection[i])) return newCollection[i]
    }
    return undefined
}

const myFilter = function(collection, predicate){
    let newCollection = objectToArray(collection)

    let newArray = []
    for(let i = 0; i < newCollection.length; i++){
        if(predicate(newCollection[i])){
            newArray.push(newCollection[i])
        }
    }
    return newArray
}

const mySize = function(collection){
    let newCollection = objectToArray(collection)

    return newCollection.length
}

const myFirst = function(array, n){
    // if(!n) {
    //     return array[0]
    // }

    // let newArray = []

    // for(let i = 0; i < n; i++){
    //     newArray.push(array[i])
    // }
    // return newArray


    return (!n) ? array[0] : array.slice(0, n)
}

const myLast = function(array, n){
    return (!n) ? array[array.length -1] : array.slice(array.length -n)
}


const mySortBy = function(array, callback) {
    const newArr = [...array];
    return newArr.sort(function(a, b) {
      if (callback(a) > callback(b)) {
        return 1;
      } else if (callback(b) > callback(a)) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  
  const myKeys = function(object){
      let arr = []
      for(const element in object){
          arr.push(element)
      }
      return arr
  }

  const myValues = function(object){
      let arr = []
      for(const element in object){
          arr.push(object[element])
      }
      return arr
  }