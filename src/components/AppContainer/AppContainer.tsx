import { FC } from 'react';
import { useStyles } from './AppContainerStyles';

const AppContainer: FC = (props) => {
    const classes = useStyles();

    return <div className={classes.contentContainer}>{props.children}</div>;
};

export default AppContainer;
