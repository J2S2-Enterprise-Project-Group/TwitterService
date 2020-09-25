/**
 * @author Shannon Phu <shannon.phu@sjsu.edu>
 */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { TweetListItem } from '../tweet-list-item/tweet-list-item';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import { API_URL } from "../../config/api-config";

export const Dashboard: React.FC<{}> = (): JSX.Element => {
    const [tweets, setTweets] = useState<[{ [key: string]: any }] | null>(null);

    useEffect(() => {
        axios.get(API_URL.LIST_TWEETS)
             .then((response) => {
                // See API response here
                // console.log(response.data)
                setTweets(response.data)
            })
    }, [])

    return (
        <Container maxWidth='sm'>
            <List>
                {tweets != null && tweets.map((tweet: { [key: string]: any }, index: number) => {
                    return <div key={index}><TweetListItem id={tweet['id_str']} text={tweet['text']} /></div>
                })}
            </List>
        </Container>
    );
};