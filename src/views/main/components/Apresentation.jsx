import React from "react";

import TextPersonal from "./TextPersonal";
import SoftSkills from "./SoftSkills";
import HardSkills from "./HardSkills";

function Apresentation(){

    return (
        <div className="container">
            <div className="container-apresentation">
                <TextPersonal />
                <SoftSkills />
                <HardSkills />
            </div>

        </div>
    )
};

export default Apresentation;