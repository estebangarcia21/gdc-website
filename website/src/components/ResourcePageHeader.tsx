import React from "react";

interface ResourcePageHeaderProps {
    title: string;
}

const ResourcePageHeader: React.FC<ResourcePageHeaderProps> = ({ title }) => {
    return <div>{title}</div>;
};

export default ResourcePageHeader;
