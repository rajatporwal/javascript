let promiseToCleanTheRoom = new Promise( (resolve, reject) => {

    let isClean = false;
  
    if(isClean) {
      resolve('resolved')
    }
    else {
      reject('rejected')
    }
  })
  
  promiseToCleanTheRoom.then( (fromResolve) => {
    console.log(fromResolve);
  })
  .catch( (fromReject) => {
    console.log(fromReject);
  })
  
  // Nested Promise Example
  let cleanRoom = () => {
    return new Promise( (resolve, reject) => {
      resolve('Cleaned the room');
    });
  };
  
  let removeGarbage = (msg) => {
    return new Promise( (resolve, reject) => {
      resolve(msg + ' remove garbage');
    });
  };
  
  let winIcecream = (msg) => {
    return new Promise( (resolve, reject) => {
      resolve(msg + ' won icecream');
    });
  };
  
  cleanRoom().then( result => {
    return removeGarbage(result);
  }).then( (result) => {
    return winIcecream(result);
  }).then( (result) => {
    console.log('finished ' + result);
  });
  
  // all will run .then when all of the promises will resolve.
  Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then( () => {
    console.log('finished all')
  });
  
  // race will run .then when any of the promises will resolve.
  Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then( () => {
    console.log('finished any')
  });
  