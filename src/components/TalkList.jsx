import React from "react";
import TalkCard from "./TalkCard";
import talks from "../data/talksVideos";


const TalkList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talks.map((talk, index) => (
                <TalkCard key={index} {...talk} />
            ))}
        </div>
    );
};

export default TalkList;