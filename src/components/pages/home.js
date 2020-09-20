import React from "react";

import PageSection from "./../objects/PageSection";

class Homepage extends React.Component {
    render() {
        return (
            <>
                <PageSection styleName="section-one" contents={
                    (
                        <>
                            <div className="main-text-format">Game Development Club</div>
                            <div className="text">Making games at Franklin High School since 2020</div>
                        </>
                    )
                } />

                <PageSection />

                <PageSection />
            </>
        );
    }
}

export default Homepage;