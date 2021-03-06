import React from 'react';
import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core';
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            // spacing(1) -> 8px spacing(1.5) -> 12 px and spacing(2) -> 16px
            marginRight: theme.spacing(1)
        }
    }
}))

const useStyles2 = makeStyles({
    root: {
        background: '#fff',
    },
    searchInput: {
        opacity: '0.6',
        padding: '0px 8px',
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: '8px'
        }
    },
    // btnRoot: {
    //     backgroundColor: 'green',
    // },
    // btnLabel: {
    //     backgroundColor: 'red',
    // }
})

export default function Header() {
    
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container alignItems='center'>
                    <Grid item>
                        <InputBase 
                            className={classes.searchInput}
                            placeholder='Search topics'
                            startAdornment={<SearchIcon fontSize='small' />}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        {/* <IconButton classes={{root: classes.btnRoot, label: classes.btnLabel}}> */}
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon fontSize='small' />
                            </Badge>
                        </IconButton>
                        <IconButton>        
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineIcon fontSize='small' />
                            </Badge>
                        </IconButton>
                        <IconButton>        
                            <PowerSettingsNewIcon fontSize='small' />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
