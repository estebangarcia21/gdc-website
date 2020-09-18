import React from "react";

function PageSection(props) {
    return (
        <div className={"section " + props.styleName}>
            {props.contents}
        </div>
    );
}

export default PageSection;
