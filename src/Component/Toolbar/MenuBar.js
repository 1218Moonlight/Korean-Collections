import React from 'react';
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'

const sections = [
    'Collections',
    'Two',
    'Three',
    'Four',
    'Contact',
];

export default (function SecondBar(props) {
    const {classes} = props;
    return (
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
            {sections.map(section => (
                <Link
                    color="inherit"
                    noWrap
                    key={section}
                    variant="body2"
                    // href={section}
                    href={'#/'+section}
                    className={classes.toolbarLink}
                >
                    {section}
                </Link>
            ))}
        </Toolbar>
    )
})