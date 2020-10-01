/**
 * @author Shannon Phu <shannon.phu@sjsu.edu>
 */
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Paper } from '@material-ui/core';
import { useCallback } from 'react';

interface TweetListItemProps {
    text: string;
    id: string;
    deleteFn: (id: string) => void;
}

export const TweetListItem: React.FC<TweetListItemProps> = ({ text = '', id = '', deleteFn }) => {
    /**
    * Updated the delete item
    *  @author Jagruti Mohanty<jagruti.mohanty@sjsu.edu>
    *  @author  Jocelyn Baduria<jocelyn.baduria@sjsu.edu>
    */
    const handleClick = useCallback((id) => {
        deleteFn(id)
    }, [id]);

    return (
        <Paper style={{ marginBottom: '5px' }}>
            <ListItem>
                <ListItemText primary={text} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="comments" onClick={() => handleClick(id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </Paper>
    );
}
