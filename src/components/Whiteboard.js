import React from "react";
import Coursecards from "./Coursecards";
import Message from "./Message";
import Add from "./Add";
import Courselist from "./Courselist";
import CourseRow from "./CourseRow";
import CourseEditor from "./CourseEditor";
export default class Whiteboard extends React.Component {
    render() {
        return (
            <div>
                <h1>WhiteBoard</h1>
                <CourseEditor/>
                <Courselist/>

            </div>

        )

    }


}

