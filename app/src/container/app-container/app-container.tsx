/**
 * @author Shiv Kumar Ganesh <shivkumar.ganesh@sjsu.edu> 
 * @author Shannon Phu <shannon.phu@sjsu.edu>
 */
import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCallback } from "react";
import { Dashboard } from "../../components/dashboard/dashboard";
import { HeaderBar } from "../../components/header/header-bar";
import { API_URL } from "../../config/api-config";
import { TwitterTextbox } from "../../components/twitter-textbox/twitter-textbox";

interface IAppContainer {

}

interface Tweets {
	id_str: string,
	text: string
}

export const AppContainer: React.FC<IAppContainer> = () => {

	const [tweets, setTweets] = useState<Tweets[]>([] as any); // List of tweets to be displayed
	const [tweetText, setTweetText] = useState(''); // Text in the textbox that will be tweeted


	/**
	 * This function handles fetching of the tweets.
	 */
	const getListOfTweets = useCallback(async () => {
		await axios.get(API_URL.LIST_TWEETS)
			.then((response) => {
				setTweets(response.data)
			});
	}, [setTweets]);

	/**
	 * This useEffect helps to load the initial tweets for
	 * the user's API Keys.
	 */
	useEffect(() => {
		getListOfTweets();
	}, [getListOfTweets]);


	const handleTestBoxBlur = useCallback((evt: React.ChangeEvent<any>) => {
		setTweetText(evt.target.value);
	}, [setTweetText])

	const handleButtonClick = useCallback(async (evt: React.ChangeEvent<any>) => {
		await axios.post(API_URL.CREATE_TWEET, {
			status: tweetText
		}).then((response) => {
			// See API response here
			getListOfTweets();
			setTweetText('')
		});
	}, [tweetText, getListOfTweets]);

	return (
		<>
			<HeaderBar />
			<Container maxWidth="sm">
				<Grid container spacing={1} style={{ marginTop: '30px' }} >
					<Grid item xs={12} container
						direction="column"
						justify="flex-end"
						alignItems="flex-end">
						<TwitterTextbox onBlur={handleTestBoxBlur} />
						<div style={{ marginTop: '10px' }}>
							<Button variant="contained" color="primary" onClick={handleButtonClick}>
								Tweet
             			 </Button>
						</div>
					</Grid>
					<Grid item xs={10} container
						direction="column"
						justify="flex-start"
						alignItems="flex-start"></Grid>
					<Typography variant="body1">My Tweets</Typography>
					<br />
					<Dashboard tweets={tweets}></Dashboard>
				</Grid>
			</Container>
		</>
	);
}