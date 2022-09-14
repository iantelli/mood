interface Props {
    moodInput: string;
    moodRating: number;
}

export default function Mood(props: Props) {

    let starRating = "";
    for (let i = 0; i < 10; i++) {
        if (i < props.moodRating) {
            starRating += "⭐";
        } else {
            starRating += "☆";
        }
    };

    const dateUpdated = new Date().toLocaleDateString();

    return (
        <div>
            <h2>My Mood is {props.moodInput}</h2>
            <h3>{starRating}</h3>
            <p>{dateUpdated}</p>
        </div>
    )
}

