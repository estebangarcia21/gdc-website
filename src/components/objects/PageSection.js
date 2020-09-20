import React from "react";

class PageSection extends React.Component {
    render() {
        return (
            <div className={"section " + this.props.styleName}>
                {this.props.contents}
            </div>
        );
    }
}

export default PageSection;
