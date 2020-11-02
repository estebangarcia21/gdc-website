import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ADD_DIRECTORY,
  DirectoryState,
  TOGGLE_DIRECTORY,
} from '../stores/directory/types';

interface DirectoryProps {
  name: string;
  depth: number;
}

interface ResourceProps {
  name: string;
  callback?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
}

const Directory: React.FC<DirectoryProps> = ({ name, depth, children }) => {
  const dispatch = useDispatch();

  const directory = useSelector<DirectoryState, DirectoryState['directories']>(
    state => state.directories
  ).find(directory => directory.name == name);

  if (directory === undefined) {
    dispatch({
      type: ADD_DIRECTORY,
      payload: {
        name: name,
        isVisible: false,
        depth: depth,
      },
    });
  }

  const toggleDirectory = (name: string) => {
    dispatch({
      type: TOGGLE_DIRECTORY,
      payload: name,
    });
  };

  return (
    <div>
      <h4
        id='group-title'
        onClick={() => {
          toggleDirectory(name);
        }}
      >
        {name}
      </h4>
      {directory?.isVisible ? <div>{children}</div> : null}
    </div>
  );
};

const Resource: React.FC<ResourceProps> = ({ name, children }) => {
  return (
    <div>
      <h4 id='section'>{name}</h4>
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
            <Resource name='1.0 Downloading Programs'></Resource>
          </Directory>
        </Directory>
      </div>

      <div id='content'></div>
    </div>
  );
};

export default Resources;
