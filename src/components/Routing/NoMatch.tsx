import { FC } from 'react';

const NoMatch: FC<{}> = () => {
    return <p style={{ textAlign: 'center' }}>The page does not exist, please check the route</p>;
};

export default NoMatch;
