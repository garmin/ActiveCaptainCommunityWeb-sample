import { FC } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppHeader from 'components/AppHeader';
import AppContainer from 'components/AppContainer';
import DemoPage from 'views/DemoPage';
import { Route, Switch } from 'react-router-dom';
import NoMatch from 'components/Routing/NoMatch';

const App: FC = () => {
    return (
        <div>
            <CssBaseline />
            <AppHeader />
            <AppContainer>
                <Switch>
                    <Route exact path="/">
                        <DemoPage />
                    </Route>
                    <Route>
                        <NoMatch />
                    </Route>
                </Switch>
            </AppContainer>
        </div>
    );
};

export default App;
