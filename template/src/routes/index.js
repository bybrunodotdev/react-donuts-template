import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Loading from '@/views/components/Base/Loading';

// Pages
import DeliciousHome from '@/views/pages/DeliciousHome';

// Erros Pages
const Error404 = React.lazy(() => import('@/views/pages/Erros/404'));

export default function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route path="/" exact component={DeliciousHome} />
          <Route path="*" exact component={Error404} />
        </Switch>
      </Router>
    </Suspense>
  );
}
