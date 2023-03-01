import React from "react";
import CourseRow from "./CourseRow";
const Courses=[
    {code:"CS4549",title:"Learning React Components",id:1},
    {code:"CS4550",title:"Introduction to Javascript",id:2},
    {code:"CS4551",title:"Data Structures and Algorithms",id:3},
    {code:"CS4552",title:"Linear Algebra",id:4},
    {code:"CS4553",title:"Learning React Components",id:5},

]
const Courselist=()=>
    <div>
        <h2>Course List</h2>
        <table className="table">
            <thead>
            <tr>
                <td>
                    Course Code
                </td>
                <td>
                    Course Title
                </td>
            </tr>

            </thead>
            <tbody>

            {
                Courses.map(course=>
               <CourseRow
                    key={course.id}
                    code={course.code}
                    title={course.title}/>

            )


            }
            </tbody>
        </table>

    </div>

export default Courselist