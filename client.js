//Written by Jacob Bitter
const data = loadTestData()
const $gradeTable = document.getElementById("gradeTable")

renderData()

/**
 * Takes in student data and turns it into HTMP for the page to load
 * @todo Make the student's name a button or a link or something, so clicking on it will show a more detailed view of what the student's grades are
 */
function renderData(){
    data.students.forEach(student => {
        const $studentGrade = document.createElement("tr")
        $studentGrade.innerHTML = `<td>${student.lastName}, ${student.firstName}</td><td>${findAverageScore(student.assignments)}</td>`
        $gradeTable.append($studentGrade)
    })
}

/**
 * Takes in a student's array of assignments and returns the average grade of those assignments
 * 
 * @param {array} assignments the array of assignments to read
 * @returns {number} the average score out of 100 for the assignments
 */
function findAverageScore (assignments){
    let possibleScore = 0;
    let earnedScore = 0;
    assignments.forEach(assignment => {
        possibleScore += assignment.possibleScore
        earnedScore += assignment.earnedScore
    })

    const average = earnedScore/possibleScore
    return (average*100).toFixed(1)
}

function loadTestData(){
    const students = [

        {
            //key:value
            "lastName": "Doe",
            "firstName": "John",
            "assignments": [
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
        },

        {
            "lastName": "Doe",
            "firstName": "Jane",
            "assignments": [
                {
                    "name": "Homework 1",
                    "possibleScore": 10,
                    "earnedScore": 7,
                    "letterGrade": "C-",
                    "passed": true
                },
                {
                    "name": "Homework 2",
                    "possibleScore": 15,
                    "earnedScore": 7,
                    "letterGrade": "F",
                    "passed": false
                },
                {
                    "name": "Homework 1",
                    "possibleScore": 100,
                    "earnedScore": 75,
                    "letterGrade": "C",
                    "passed": true
                },
            ]
        }

    ]

    return {
        "students":  students
    }
}