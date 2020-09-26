/**
 * @author Shannon Phu <shannon.phu@sjsu.edu>
 */
import React from "react";
import { TweetListItem } from '../tweet-list-item/tweet-list-item';
import List from '@material-ui/core/List';
import { Divider } from "@material-ui/core";

interface Tweets {
	id_str: string,
	text: string
}
export interface DashboardProps {
	tweets: Array<Tweets>
}

export const Dashboard: React.FC<DashboardProps> = ({ tweets }): JSX.Element => {
	return (
		<List>
			{tweets != null && tweets.map((tweet: { [key: string]: any }, index: number) => {
				return <div key={index}><TweetListItem id={tweet['id_str']} text={tweet['text']} /><Divider variant="fullWidth" component="li" /></div>
			})}
		</List>
	);
};