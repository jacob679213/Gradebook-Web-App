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
                },
                {
                    "name": "Test 1",
                    "possibleScore": 100,
                    "earnedScore": 95,
                    "letterGrade": "A",
                    "passed": true
                }
            ]
        }

    ]
}

/**
 * Takes in a student's array of assignments and returns the average grade of those assignments
 * 
 * @param {array} assignments the array of assignments to read
 * @returns {number} the average score out of 100 for the assignments
 */
function findAverageScore (assignments){
    const possibleScore = 0;
    const earnedScore = 0;
    assignments.forEach(assignment => {
        possibleScore += assignment.possibleScore
        earnedScore += assignment.earnedScore
    })

    const average = earnedScore/possibleScore
    return (average*100).toFixed(1)
}