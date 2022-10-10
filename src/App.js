import { Router, Route, Switch } from "react-router-dom";
import BlogList from "./components/blogs/BlogList";
import BlogCreate from "./components/blogs/BlogCreate";
import BlogEdit from "./components/blogs/BlogEdit";
import BlogDelete from "./components/blogs/BlogDelete";
import BlogShow from "./components/blogs/BlogShow";
import Header from "./components/Header";
import history from "./history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={BlogList} />
            <Route path="/blogs/new" exact component={BlogCreate} />
            <Route path="/blogs/edit/:id" exact component={BlogEdit} />
            <Route path="/blogs/delete/:id" exact component={BlogDelete} />
            <Route path="/blogs/:id" exact component={BlogShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
