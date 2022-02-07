import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Showcase from '../pages/Showcase';
import Lifestyle from '../pages/Lifestyle';
import SingleEdit from '../pages/SingleEdit';
import Login from '../pages/Login';
import Join from '../pages/Join';
import PageError from '../pages/PageError';

function Router(props) {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/showcase' element={<Showcase />} />
      <Route path='/lifestyle' element={<Lifestyle />} />
      <Route path='/single-edit' element={<SingleEdit />} />
      <Route path='/login' element={<Login />} />
      <Route path='/join' element={<Join />} />
      <Route path='/*' element={<PageError />} />
    </Routes>
  );
}

export default Router;
