import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../stores';
import { addResource, setActive } from '../stores/resource/actions';
import { Resource as ResourceStore } from '../stores/resource/types';
import GettingstartedProgrammers from './resource-pages/programmers/GettingstartedProgrammers';

interface DirectoryProps {
  name: string;
  depth: number;
}

interface ResourceProps {
  name: string;
  page: any;
}

const Directory: React.FC<DirectoryProps> = ({ name, depth, children }) => {
  const [isViewed, setIsViewed] = useState(false);

  // const dispatch = useDispatch();

  // const directory = useSelector<RootState, DirectoryStore[]>(
  //   state => state.directories.directories
  // ).find(directory => directory.name === name);

  // if (directory === undefined) {
  //   dispatch(
  //     addDirectory({
  //       name: name,
  //       isVisible: false,
  //       depth: depth,
  //     })
  //   );
  // }

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

const Resource: React.FC<ResourceProps> = ({ name, page, children }) => {
  const dispatch = useDispatch();

  const resource = useSelector<RootState, ResourceStore[]>(
    state => state.resources.resources
  ).find(resource => resource.name === name);

  if (resource === undefined) {
    dispatch(
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
          dispatch(setActive(name));
        }}
      >
        {name}
      </h3>
      <div>{children}</div>
    </div>
  );
};

const Resources: React.FC = () => {
  return (
    <div>
      <div id='sidebar'>
        <h4>Resources</h4>

        <Directory name='Programmers' depth={0}>
          <Directory name='Getting Started' depth={1}>
            <Resource
              name='1.0 Downloading Programs'
              page={GettingstartedProgrammers}
            />
          </Directory>
        </Directory>
      </div>

      <div id='content'></div>
    </div>
  );
};

export default Resources;
