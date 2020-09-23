import React from "react"

interface Props {
    gameTitle: string
    gameDescription: string
    builds?: string[]
}

const GameSection: React.FC<Props> = (props) => {
    return (
        <div className="card">
            <div
                style={{
                    width: "200px",
                    height: "100px",
                    position: "relative",
                    backgroundColor: "red",
                }}
            >
                <div
                    className="subtitle-text"
                    style={{
                        position: "relative",
                        fontSize: "32px",
                        color: "black",
                        top: "50%",
                        transform: "translate(0%, -50%)",
                    }}
                >
                    {props.gameTitle}
                </div>
            </div>
        </div>
    )
}

export default GameSection
