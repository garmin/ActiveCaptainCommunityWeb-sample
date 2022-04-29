import { FC } from 'react';
import { useStyles } from 'views/DemoPage/DemoPageStyles';
import DemoMap from 'views/DemoPage/DemoMap/DemoMap';

const DemoPage: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.mapContainer}>
            <DemoMap />
        </div>
    );
};

export default DemoPage;
