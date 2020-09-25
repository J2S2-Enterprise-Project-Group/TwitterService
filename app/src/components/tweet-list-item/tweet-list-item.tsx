/**
 * @author Shannon Phu <shannon.phu@sjsu.edu>
 */
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

interface TweetListItemProps {
    text: string;
    id: string;
}

export const TweetListItem: React.FC<TweetListItemProps> = ({ text = '', id = '' }) => {
    return (
        <ListItem>
            <ListItemText primary={text} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}
