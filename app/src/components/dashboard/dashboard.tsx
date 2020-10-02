/**
 * @author Shannon Phu <shannon.phu@sjsu.edu>
 */
import React, { useCallback } from "react";
import { TweetListItem } from '../tweet-list-item/tweet-list-item';
import List from '@material-ui/core/List';
import { Divider } from "@material-ui/core";

export interface Tweets {
	id_str: string,
	text: string,
}
export interface DashboardProps {
	tweets: Array<Tweets>,
	handleTweetDelete: (id: string) => void
}

export const Dashboard: React.FC<DashboardProps> = ({ tweets, handleTweetDelete }): JSX.Element => {
	/** Updated the dashboard for the delele function
	 *  @author Jagruti Mohanty<jagruti.mohanty@sjsu.edu>
	 *  @author  Jocelyn Baduria<jocelyn.baduria@sjsu.edu>
	 */
	const handleDeleteFn = useCallback((id: string) => {
		handleTweetDelete(id);
	}, []);

	return (
		<List>
			{tweets != null && tweets.map((tweet: { [key: string]: any }, index: number) => {
				return <div key={index}><TweetListItem id={tweet['id_str']} text={tweet['text']} deleteFn={handleDeleteFn} /><Divider variant="fullWidth" component="li" /></div>
			})}
		</List>
	);
};
