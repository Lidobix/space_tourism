import { BrowserRouter } from 'react-router';
import { Routes, Route } from 'react-router';
import HomeScreen from './screens/home';
import DestinationScreen from './screens/destination';
import CrewScreen from './screens/crew';
import TechnologyScreen from './screens/technology';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/crew" element={<CrewScreen />}></Route>
        <Route path="/destination" element={<DestinationScreen />}></Route>
        <Route path="/technology" element={<TechnologyScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
