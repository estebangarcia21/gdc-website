import React from "react";

import PageSection from "./../objects/PageSection";

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <PageSection styleName="section-one" contents={
                    (
                        <>
                            <div className="title-text">Game Development Club</div>
                            <div className="subtitle-text">Making games at Franklin High School since 2020</div>
                        </>
                    )
                } />

                <PageSection />
                <PageSection />
            </div>
        );
    }
}

export default Homepage;