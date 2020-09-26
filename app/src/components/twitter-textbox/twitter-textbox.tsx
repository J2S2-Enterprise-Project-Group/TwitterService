import { TextareaAutosize } from "@material-ui/core";
import React from "react";

interface TwitterTextboxProps {
    onBlur: (evt: React.ChangeEvent<any>) => void
}
export const TwitterTextbox: React.FC<TwitterTextboxProps> = ({ onBlur }) => {
    return (
        <React.Fragment>
            <TextareaAutosize
                aria-label="Whats Happening"
                rowsMin="5"
                maxLength={140}
                placeholder="Whats Happening"
                style={{ 
                    width: '95%',
                    padding:'10px',
                    fontSize:'14px',
                    fontFamily:'Roboto'
                 }}
                onBlur={onBlur} 
                />
        </React.Fragment>
    );
}