import logo from './logo.svg';
import Table from './components/Table';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import ViewMovie from './components/ViewMovie';
import AddMovie from './components/AddMovie';
import DeleteMovie from './components/DeleteMovie';
import EditMovie from './components/EditMovie';
import SortMovie from './components/SortMovie';
function App() {
  return (
   <div className='App'>
    <Router>
      <Routes>
        <Route exact path="/"element={<Table />} />
        <Route exact path="/viewmovie"element={<ViewMovie />} />
        <Route exact path="/addmovie" element={<AddMovie/>} />
        <Route exact path="/delete" element={<DeleteMovie/>} />
        <Route exact path="/editmovie" element={<EditMovie/>} />
        <Route exact path="/sortmovie" element={<SortMovie/>} />
      </Routes>

    </Router>
   </div>
  );
}

export default App;
