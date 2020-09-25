/**
 * @author Shiv Kumar Ganesh <shivkumar.ganesh@sjsu.edu> 
 * @author Shannon Phu <shannon.phu@sjsu.edu>
 */
import { Button, Container, Grid, TextareaAutosize } from "@material-ui/core";
import React, { useState } from "react";
import axios from "axios";
import { useCallback } from "react";
import { Dashboard } from "../../components/dashboard/dashboard";
import { HeaderBar } from "../../components/header/header-bar";
import { API_URL } from "../../config/api-config";

interface IAppContainer {

}

export const AppContainer: React.FC<IAppContainer> = ({ }) => {
    const [tweet, setTweet] = useState('');

    const handleTestBoxChange = useCallback((evt: React.ChangeEvent<any>) => {
        setTweet(evt.target.value);
    }, [setTweet])

    const handleButtonClick = useCallback((evt: React.ChangeEvent<any>) => {
        axios.post(API_URL.CREATE_TWEET, {
            status: tweet
        })
            .then((response) => {
                // See API response here
                console.log(response.data)
            });
    }, [tweet]);

    return (
        <>
            <HeaderBar />
            <Container maxWidth="sm">
                <Grid container spacing={1} style={{ marginTop: '30px' }} >
                    <Grid item xs={10} container
                        direction="column"
                        justify="flex-end"
                        alignItems="flex-end">
                        <TextareaAutosize
                            aria-label="Whats Happening"
                            rowsMin="5"
                            maxLength={140}
                            placeholder="Whats Happening"
                            style={{ width: '100%' }}
                            onChange={handleTestBoxChange} />
                        <div style={{ marginTop: '10px' }}>
                            <Button variant="contained" color="primary" onClick={handleButtonClick}>
                                Tweet
                            </Button>
                        </div>
                        <Dashboard></Dashboard>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}