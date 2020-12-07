//Written by Jacob Bitter
const data = loadTestData()
const $gradeTable = document.getElementById("gradeTable")

function loadTestData(){
    const students = [

        {
            //key:value
            "lastName": "Doe",
            "firstName": "John",
            "Assignments": [
                {
                    "name": "Homework 1",
                    "possibleScore": 10,
                    "earnedScore": 10,
                    "letterGrade": "A+",
                    "passed": true
                },
                {
                    "name": "Homework 2",
                    "possibleScore": 15,
                    "earnedScore": 12,
                    "letterGrade": "B-",
                    "passed": true
                }
            ]
        }

    ]
}