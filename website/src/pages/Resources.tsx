import React, { CSSProperties, useContext, useEffect, useState } from "react";
import {
    addResource,
    viewResource,
} from "../contexts/resource-context/actions";
import { ResourceContext } from "../contexts/resource-context/ResourceContext";
import { ComponentChildren } from "../utils/component-children";
import GettingStartedProgrammers from "./resource-pages/programmers/GettingStartedProgrammers";

interface DirectoryProps extends ComponentChildren {
    name: string;
    depth: number;
}

interface ResourceProps {
    name: string;
    page: React.ComponentType;
}

const Directory = ({ name, depth, children }: DirectoryProps) => {
    const [isViewed, setIsViewed] = useState(false);

    const marginLeft = 50 + 30 * (depth + 1);
    const fontSize = 20 - 4 * depth - 1;

    return (
        <div>
            <h4
                id="group-title"
                style={{
                    marginLeft: `${marginLeft}px`,
                    fontSize: `${fontSize}px`,
                }}
                onClick={() => {
                    setIsViewed(!isViewed);
                }}
            >
                {name}
            </h4>
            {isViewed && <div>{children}</div>}
        </div>
    );
};

const Resource = ({ name, page }: ResourceProps) => {
    const context = useContext(ResourceContext);

    const resource = context.state.resources.find(r => r.name === name);

    useEffect(() => {
        if (resource === undefined) {
            context.dispatch(
                addResource({
                    name: name,
                    page: page,
                    isActive: false,
                })
            );
        }
    }, [name, page, resource, context]);

    return (
        <div>
            <h3
                id="resource"
                onClick={() => {
                    context.dispatch(viewResource(resource!));
                }}
            >
                {name}
            </h3>
        </div>
    );
};

const Resources: React.FC = () => {
    const activeResource = useContext(ResourceContext).state.resources.find(
        r => r.isActive
    );

    const ActivePage = (Page: React.ComponentType) => ({ ...props }) => {
        return <Page {...props} />;
    };

    const styles = (isDefault: boolean): CSSProperties => {
        return isDefault
            ? {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
              }
            : {};
    };

    return (
        <div>
            <div id="sidebar">
                <p style={{ marginLeft: "50px", fontSize: "32px" }}>
                    Resources
                </p>

                <Directory name="Programmers" depth={0}>
                    <Directory name="Getting Started" depth={1}>
                        <Resource
                            name="1.0 Welcome"
                            page={GettingStartedProgrammers}
                        />
                        <Resource
                            name="1.1 Setting Up"
                            page={GettingStartedProgrammers}
                        />
                    </Directory>
                    <Directory name="Your First Program" depth={1}>
                        <Resource
                            name="1.0 What is Object Oriented Programming"
                            page={GettingStartedProgrammers}
                        />
                    </Directory>
                </Directory>
                <Directory name="Artists" depth={0}>
                    <Directory name="Getting Started" depth={1}>
                        <Resource
                            name="1.0 Welcome"
                            page={GettingStartedProgrammers}
                        />
                        <Resource
                            name="1.1 Setting Up"
                            page={GettingStartedProgrammers}
                        />
                    </Directory>
                    <Directory name="Your First Program" depth={1}>
                        <Resource
                            name="1.0 The Art Workflow"
                            page={GettingStartedProgrammers}
                        />
                    </Directory>
                </Directory>
                <Directory name="Animators" depth={0}>
                    <Directory name="Getting Started" depth={1}>
                        <Resource
                            name="1.0 Welcome"
                            page={GettingStartedProgrammers}
                        />
                        <Resource
                            name="1.1 Setting Up"
                            page={GettingStartedProgrammers}
                        />
                    </Directory>
                    <Directory name="Your First Program" depth={1}>
                        <Resource
                            name="1.0 Animation Introduction"
                            page={GettingStartedProgrammers}
                        />
                    </Directory>
                </Directory>
                <Directory name="Writers" depth={0}>
                    <Directory name="Getting Started" depth={1}>
                        <Resource
                            name="1.0 Welcome"
                            page={GettingStartedProgrammers}
                        />
                        <Resource
                            name="1.1 Setting Up"
                            page={GettingStartedProgrammers}
                        />
                    </Directory>
                    <Directory name="Your First Program" depth={1}>
                        <Resource
                            name="1.0 The Writing Workflow"
                            page={GettingStartedProgrammers}
                        />
                    </Directory>
                </Directory>
                <Directory name="Musicians" depth={0}>
                    <Directory name="Getting Started" depth={1}>
                        <Resource
                            name="1.0 Welcome"
                            page={GettingStartedProgrammers}
                        />
                        <Resource
                            name="1.1 Setting Up"
                            page={GettingStartedProgrammers}
                        />
                    </Directory>
                    <Directory name="The Digital Audio Workstation" depth={1}>
                        <Resource
                            name="1.0 Learning the Digital Audio Workstation (DAW)"
                            page={GettingStartedProgrammers}
                        />
                    </Directory>
                </Directory>
            </div>

            <div
                id="content"
                style={styles(activeResource?.name === "Welcome")}
            >
                <ActivePage />
            </div>
        </div>
    );
};

export default Resources;
