import React from "react";
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";

const course={
    title:"Course 450",
    modules: [
        {title:"Module 1",id:1,
        lessons:[
            {title:"Lesson 1.1",id:1, selected:true},
            {title:"Lesson 1.2",id:2},
            {title:"Lesson 1.3",id:3},
            {title:"Lesson 1.4",id:4}
                ]
        },
        {title:"Module 2",id:2},
        {title:"Module 3",id:3},
        {title:"Module 4",id:4}
    ]
}
const CourseEditor=()=>
    <div>
        <h2>Course Editor</h2>
        <div className="row">
            <div className="col-3">
                <ModuleList course={course}/>
            </div>
            <div className="col-9">
                <LessonTabs lessons={course.modules[0].lessons}/>

            </div>
        </div>

    </div>
export default CourseEditor