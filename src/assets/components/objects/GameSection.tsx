import React from 'react';

interface Props {
    gameTitle: string;
    gameDescription: string;
    builds?: Build[];
}

interface Build {
    operatingSystem: string;
    version: string;
    downloadLink: string;
}

const GameSection: React.FC<Props> = (props) => {
    const builds = props.builds?.map((build) => (
        <div>
            <p className='subtitle-text black'>{build.operatingSystem}</p>
            <p className='text black'>
                {build.version}
                {build.downloadLink}
            </p>
        </div>
    ));

    return (
        <div className='card'>
            <div
                style={{
                    width: '100%',
                    height: '65px',
                }}
            >
                <div
                    style={{
                        width: '200px',
                        height: '65px',
                        position: 'relative',
                        backgroundColor: 'black',
                        float: 'left',
                    }}
                >
                    <div
                        className='subtitle-text white'
                        style={{
                            position: 'relative',
                            top: '50%',
                            transform: 'translate(0%, -50%)',
                            fontSize: '1.4vw',
                        }}
                    >
                        {props.gameTitle}
                    </div>
                </div>
            </div>

            <p
                className='text black'
                style={{
                    marginLeft: '5px',
                    marginTop: '5px',
                    fontSize: '16px',
                    fontFamily: '"Source Code Pro", monospace',
                    letterSpacing: '-1px',
                }}
            >
                {props.gameDescription}
            </p>

            {builds}
        </div>
    );
};

export default GameSection;
