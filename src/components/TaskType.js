import React, { useEffect, useState } from "react";

const TaskType = ({ name }) => {

    const [style, setStyle] = useState({});

    useEffect(() => {
        switch (name) {
            case 'Work': setStyle({background: '#4F74AB'}); break;
            case 'Home': setStyle({background: '#8DD4E3'}); break;
            case 'Hobby': setStyle({background: '#CD8DE3'}); break;
            case 'Reading': setStyle({background: '#F48A68'}); break;
            case 'Sport': setStyle({background: '#94D896'}); break;
            default: setStyle({background: '#4F74AB'}); break;
        }
    }, [name])

    return(
        <div style={style} className="task__type">{name}</div>
    );
};

export default TaskType;