import React from "react";
import ModuleListItems from "./ModuleListItems";

export default class ModuleListContainer
    extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            modules:[
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
    }
    render(){
        return (
            <div>
                <ul className="list-group">
                    <li>
                        <input/>
                    </li>
                    {
                        this.state.modules.map(module=>
                            <ModuleListItems
                                key={module.id}
                                module={module}
                            />
                        )
                    }

                </ul>
            </div>
        )
    }


}
