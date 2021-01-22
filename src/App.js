import styled from 'styled-components';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Editor from './Editor.jsx';



function App() {


 

  return (
    <div>
      <Switch>
        <Route exact path="/editor" component={Editor} />
      </Switch>
    </div>
  );
}

export default App;
