//Written by Jacob Bitter

renderClassData()

/**
 * Takes in student data and turns it into HTMP for the page to load
 */
function renderClassData(){
    const data = loadTestData()
    const $classGradeTable = document.getElementById("classGradeTable")

    data.students.forEach(student => {
        const $studentBlock = document.createElement("tr")
        const $studentName = document.createElement("td")
        const $studentGrade = document.createElement("td")

        const $studentButton = document.createElement("button")
        $studentButton.innerHTML = `${student.lastName}, ${student.firstName}`
        $studentButton.onclick = function(){renderStudentData(student)}

        $studentName.append($studentButton)
        $studentGrade.innerHTML = `${findAverageScore(student.assignments)}`

        $studentBlock.append($studentName)
        $studentBlock.append($studentGrade)
        $classGradeTable.append($studentBlock)
    })
}

function renderStudentData(student){
    console.log(student.firstName + student.lastName)

    const $studentGradeTable = document.getElementById("studentGradeTable")
    document.getElementById("studentNameBox").innerHTML = `${student.firstName} ${student.lastName}`
    $studentGradeTable.innerHTML = "<tr> <th>Assignment</th> <th>Score</th> <th>Letter Grade</th> </tr>"

    flipVisibility()

    student.assignments.forEach(assignment => {
        const $assignmentRow = document.createElement("tr")
        const $assignmentName = document.createElement("td")
        const $assignmentScore = document.createElement("td")
        const $assignmentGrade = document.createElement("td")

        $assignmentName.innerHTML = `${assignment.name}`
        $assignmentScore.innerHTML = `${assignment.earnedScore}/${assignment.possibleScore}`
        $assignmentGrade.innerHTML = `${assignment.letterGrade}`

        $assignmentRow.append($assignmentName)
        $assignmentRow.append($assignmentScore)
        $assignmentRow.append($assignmentGrade)

        $studentGradeTable.append($assignmentRow)
    })
}

function flipVisibility(){
    const $class = document.getElementById("classGrades")
    const $student = document.getElementById("studentGrades")
    if($class.style.display == "block"){
        $class.style.display = "none"
        $student.style.display = "block"
    }
    else{
        $class.style.display = "block"
        $student.style.display = "none"
    }
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
                    "earnedScore": 6,
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