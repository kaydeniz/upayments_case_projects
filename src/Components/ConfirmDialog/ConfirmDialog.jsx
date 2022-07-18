import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";

const ConfirmDialog = (props) => {
    const {title, children, open, setOpen, onConfirm,loading} = props;
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="confirm-dialog"
        >
            <DialogTitle id="confirm-dialog">{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button variant="contained" color="secondary" size="small" onClick={() => setOpen(false)}>No</Button>
                <Button disabled={loading} variant="contained" color="primary" size="small" onClick={() => {
                    onConfirm();
                }}>Yes</Button>
            </DialogActions>
        </Dialog>
    );
};
export default ConfirmDialog;
