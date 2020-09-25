import React from 'react';
import { GameCardRenderer } from './game-data';

// interface SidebarProps {
//     year: string;
//     projects?: string[];
// }

// const SidebarSection: React.FC<SidebarProps> = (props) => {
//     const projects = props.projects?.map((element) => (
//         <li style={{ fontSize: '18px' }}>{element}</li>
//     ));

//     return (
//         <div>
//             <p className='subtitle-text white' style={{ fontSize: '26px' }}>
//                 {props.year}
//             </p>

//             <ul className='text white'>{projects}</ul>
//         </div>
//     );
// };

const Ourgamespage: React.FC = () => {
    return (
        <div>
            {/* <div id='sidebar'>
                <p
                    className='subtitle-text white'
                    style={{
                        marginTop: '20px',
                        marginBottom: '5px',
                    }}
                >
                    Projects
                </p>

                <SidebarSection
                    year='2020-2021'
                    projects={['Spooksvile', 'Game-2']}
                />
                <SidebarSection
                    year='2021-2020'
                    projects={['Our first proj', 'Example!']}
                />
            </div> */}
            {GameCardRenderer.renderCards()}
        </div>
    );
};

export default Ourgamespage;
