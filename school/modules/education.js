// pregatiti acest modul in felul urmator

class Student {
    /**
     * @param {String} name    Student fullname.
     * @param {Number} year    Student year of birth.
     */
    constructor(name, year) {
        this.name = name
        this.year = year

    }
}

class Group {
    /**
     * @param {String} name    Group name.
     * @param {Number} grade   Group grade.
     */
    constructor(name, grade) {
            this.name = name
            this.grade = grade
            this.students = []

        }
        /**
         * @param {Student} student    the object of the student.
         */
    addStudent(student) {
        this.students.push(student)

    }
}

class University {
    /**
     * @param {String} name    Group name.
     */
    constructor(name) {
            this.name = name
            this.groups = []

        }
        /**
         * @param {Group} group    the object of the group.
         */
    addGroup(group) {
        this.groups.push(group)

    }
}

exports.Student = Student
exports.Group = Group
exports.University = University