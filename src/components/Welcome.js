import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {ListItemText, ListItem, IconButton, Typography, Toolbar, Drawer, Collapse, Divider} from '@material-ui/core';
import {Link} from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        zIndex: 0,//
        paddingTop: 60,//
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    link: {
        textDecoration: "none",
        color: "black"
    },
    lists: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(1),
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));


export default function Welcome(props) {
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };


    const [borderlands2, setBorderlands2] = React.useState(false);
    const [payday2, setPayday2] = React.useState(false);
    const [minecraft, setMinecraft] = React.useState(false);

    const handleExpandClick = (e,menu) => {
        let map = new Map([
            ["borderlands2", () => setBorderlands2(!borderlands2)],
            ["payday2", () => setPayday2(!payday2)],
            ["minecraft", () => setMinecraft(!minecraft)],
        ])
        let func = map.get(menu)
        if (func) {
            func()
        }
    };


    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Game Tools
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <Divider />
                <Link className={classes.link} to="#">
                    <ListItem button key={"borderlands2"} onClick={(e) => handleExpandClick(e,"borderlands2")}>
                        <ListItemText primary={"borderlands2"}/>
                    </ListItem>
                </Link>
                <Collapse in={borderlands2} timeout="auto" unmountOnExit>
                    <Link className={classes.link} to="/borderlands2/calculator">
                        <ListItem button key={"borderlands2-calculator"}>
                            <ListItemText primary={"· 压血计算器"}/>
                        </ListItem>
                    </Link>
                </Collapse>
                <Divider />
                <Link className={classes.link} to="#">
                    <ListItem button key={"payday2"} onClick={(e) => handleExpandClick(e,"payday2")}>
                        <ListItemText primary={"payday2"}/>
                    </ListItem>
                </Link>
                <Collapse in={payday2} timeout="auto" unmountOnExit>
                    <Link className={classes.link} to="/payday2/bigoil">
                        <ListItem button key={"payday2-bigoil"}>
                            <ListItemText primary={"· 大油引擎"}/>
                        </ListItem>
                    </Link>
                </Collapse>
                <Divider />
                <Link className={classes.link} to="#">
                    <ListItem button key={"minecraft"} onClick={(e) => handleExpandClick(e,"minecraft")}>
                        <ListItemText primary={"minecraft"}/>
                    </ListItem>
                </Link>
                <Collapse in={minecraft} timeout="auto" unmountOnExit>
                    <Link className={classes.link} to="/minecraft/village">
                        <ListItem button key={"minecraft-village"}>
                            <ListItemText primary={"· 村民交易"}/>
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to="/minecraft/actuallyaddons">
                        <ListItem button key={"minecraft-actuallyaddons"}>
                            <ListItemText primary={"· 实用拓展"}/>
                        </ListItem>
                    </Link>
                </Collapse>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader}/>
                {props.children}
            </main>
        </div>
    );
}