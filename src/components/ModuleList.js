import React from "react";
import ModuleListItems from "./ModuleListItems";

const ModuleList=({course})=>
    <div>
        <ul className="list-group">
            {
                course.modules.map(module=>
                    <ModuleListItems
                        key={module.id}
                        module={module}
                    />
                )
            }

        </ul>
    </div>
export default ModuleList