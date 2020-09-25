import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
    }
}));

export const Dashboard: React.FC<{}> = (): JSX.Element => {
    const [tweets, setTweets] = useState<[{ [key: string]: any }] | null>(null);

    useEffect(() => {
        axios.get('http://localhost:8000/')
             .then((response) => {
                setTweets(response.data)
            })
    }, [])

    return (
        <div>
            {tweets != null && tweets.map((tweet: { [key: string]: any }, index: number) => {
                return <div key={index}>{tweet['text']}</div>
            })}
        </div>
    );
};