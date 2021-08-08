import { QueryablePromise, QueryablePromiseState } from 'promise-with-state';

let promise;
let stateResolveTime
let promiseResolveState

function launch() {
  promise = null

  stateResolveTime = document.getElementById('stateResolveTime').value

  promiseResolveState = document.getElementById('stateResolveChooser').value;

  console.log('launched')

  // promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     if (promiseResolveState === QueryablePromiseState.FULFILLED) {
  //       console.log(promiseResolveState)
  //       resolve()
  //       console.log('resolve')
  //       testState()
  //     } else {
  //       console.log(promiseResolveState)
  //       reject()
  //       console.log('reject')
  //       testState()
  //     }
  //   }, stateResolveTime)
  // })
  // makeQueryablePromise(promise)

  // promise = QueryablePromise.resolve()

  // promise = QueryablePromise.reject()

  promise = new QueryablePromise((resolve, reject) => {
    setTimeout(() => {
      testState()
      if (promiseResolveState === QueryablePromiseState.FULFILLED) {
        console.log(promiseResolveState)
        resolve('it will resolve')
        console.log('resolve')
        testState()
      } else {
        console.log(promiseResolveState)
        reject('it will reject')
        console.log('reject')
        testState()
      }
    }, stateResolveTime)
  })

  .then(() => {
    console.log('first then')
    testState()
  })
  .then(() => {
    console.log('second then')
    testState()
  })
  .catch(() => {
    console.log('catch')
    testState()
  })
  .finally(() => {
    console.log('finally')
    testState()
  })

  return promise
}

function testState() {
  console.log('promise -> ', promise)
  console.log('promise.state -> ', promise.state)
  console.log('promise.isPending -> ', promise.isPending())
  console.log('promise.isFulfilled -> ', promise.isFulfilled())
  console.log('promise.isRejected -> ', promise.isRejected())
}

window.launch = launch
window.testState = testState
