
export function fetchUsers(){
    return fetch("http://localhost:3000/api/users", {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function(response){
        return response.json();
    })
}


export function deleteUserAPI(){
    return fetch("http://localhost:3000/api/users", {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function(response){
        return response.json();
    })
}

export function addUsersByEmailAPI(users,type){
    var usersSpitted = users.split(",");

    var promises = usersSpitted.map(user =>
        fetch("http://localhost:3000/api/users",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": user,
                "email": user,
                "user_type": type,
                "password": "11111111",
                "user_last_connection": "",
                "registration_code": "XXXXXXXXXXXX",
                "active": 1,
                "udg_code": null,
                "createdAt": "2018-02-01 00:00:00",
                "updatedAt": "2018-02-01 00:00:00"
            })
        }).then(response => response));

    return Promise.all(promises).then(results => {
        return results;
    })

}


export function loginRequestAPI(userData){
    return fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }).then(function(response){
        return response.json()
    })
}


export function logoutRequestAPI(){
    return fetch("http://localhost:3000/api/users/logout", {
        method: "POST"
    }).then(function(response){
        return response
    })
}



export function fetchCourses(){
    return fetch("http://localhost:3000/api/courses", {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function(response){
        return response.json();
    })
}

export function fetchCourse(id){
    return fetch("http://localhost:3000/api/courses/"+id, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function(response){
        return response.json();
    })
}

export function addCourseAPI(course){
    return fetch("http://localhost:3000/api/courses",{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            course
        )
        }).then(function(response){
            return response.json();
        });
}

export function updateCourseAPI(course){
    return fetch("http://localhost:3000/api/courses/"+course.id,{
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
    }).then(function(response){
        return response.json();
    });
}


export function deleteCourseAPI(id){
    return fetch("http://localhost:3000/api/courses/"+id,{
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
    }).then(function(response){
        return response.json();
    });
}




