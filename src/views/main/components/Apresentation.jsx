import React from "react";

import TextPersonal from "./TextPersonal";
import SoftSkills from "./SoftSkills";
import HardSkills from "./HardSkills";
import UpsHab from "./UpsHab";

function Apresentation(){

    return (
        <div className="container">
            <div className="container-apresentation">
                <TextPersonal />
                <UpsHab />
                <SoftSkills />
                <HardSkills />
            </div>

        </div>
    )
};

export default Apresentation;