import request from 'superagent';
const baseURL = 'http://localhost:3000';
const userEndPoint = '/Users';
const taskEndPoint = '/Tasks';
const sprintEndPoint = '/Sprints';


/**
 * Hit the companylookup endpoint with the proper query.
 * Return a promise that resolves with the response.
 */
export function exampleRequest() {
  return new Promise((resolve, reject) => {
    request.get(baseURL + '/example')
      .query({})
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.body);
        }
      }
    );
  });
}

export function getAllProfessors() {
  return new Promise((resolve, reject) => {
    request.get(baseURL + userEndPoint + '/getAllProfessors')
      .query({})
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.body);
        }
      }
    );
  });
}

export function addProfessor(professor){
    return new Promise((resolve, reject) => {
    request.post(baseURL + userEndPoint)
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(professor))
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.body);
        }
      }
    );
  });
}
