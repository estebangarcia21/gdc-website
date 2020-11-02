import React, { useContext, useState } from 'react';
import {
  addResource,
  viewResource,
} from '../contexts/resource-context/actions';
import { ResourceContext } from '../contexts/resource-context/ResourceContext';
import GettingStartedProgrammers from './resource-pages/programmers/GettingstartedProgrammers';

interface DirectoryProps {
  name: string;
  depth: number;
}

interface ResourceProps {
  name: string;
  page: React.FC;
}

const Directory: React.FC<DirectoryProps> = ({ name, depth, children }) => {
  const [isViewed, setIsViewed] = useState(false);

  const marginLeft = 50 + 30 * depth;
  const fontSize = 20 - 4 * depth - 1;

  return (
    <div>
      <h4
        id='group-title'
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

const Resource: React.FC<ResourceProps> = ({ name, page }) => {
  const context = useContext(ResourceContext);

  const resource = context.state.resources.find(r => r.name === name);

  if (resource === undefined) {
    context.dispatch(
      addResource({
        name: name,
        page: page,
        isActive: false,
      })
    );
  }

  return (
    <div>
      <h3
        id='resource'
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

  const HigherOrderComponent = (PassedComponent: any) => {
    return class extends React.Component {
      render() {
        return (
          <div>
            <PassedComponent {...this.props} />
          </div>
        );
      }
    };
  };

  const ActivePage = HigherOrderComponent(activeResource?.page);

  return (
    <div>
      <div id='sidebar'>
        <h4>Resources</h4>

        <Directory name='Programmers' depth={0}>
          <Directory name='Getting Started' depth={1}>
            <Resource
              name='1.0 Downloading Programs'
              page={GettingStartedProgrammers}
            />
          </Directory>
        </Directory>
      </div>

      <div id='content'>
        <ActivePage />
      </div>
    </div>
  );
};

export default Resources;
