import MainSlide from '../components/Main/MainSlide';
import MainShowcase from '../components/Main/MainShowcase';
import MainLife from '../components/Main/MainLife';
import MainSearch from '../components/Main/MainSearch';
import MainMedia from '../components/Main/MainMedia';
import MainEdit from '../components/Main/MainEdit';
import MainSubscribe from '../components/Main/MainSubscribe';
import MainIssue from '../components/Main/MainIssue';

function Main() {
  return (
    <main>
      <MainSlide />
      <MainShowcase />
      <MainLife />
      <MainSearch />
      <MainMedia />
      <MainEdit />
      <MainIssue />
      <MainSubscribe />
    </main>
  );
}

export default Main;
