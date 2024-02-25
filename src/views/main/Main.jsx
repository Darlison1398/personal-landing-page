import React from "react";

import Photo from "./components/Photo";
import Apresentation from "./components/Apresentation";
import Projetos from "./components/Projetos";
import Zap from "./components/Zap";

function Main() {
    return (
        <div className="container ">
            <div className="row flex-md-row flex-column-reverse main">
                <div className="col-md-5 order-1 order-md-0" style={{ overflowY: 'auto' }}>
                    <Photo />
                </div>
                <div className="col-md-7 order-0 order-md-1" style={{ overflowY: 'auto' }}>
                    <Apresentation />
                </div>
            </div>

            <div className="box-projeto">
                <Projetos />
            </div>

            <div className="box-zap">
                <Zap />
            </div>
        </div>
    )
};

export default Main;