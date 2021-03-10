
import './App.css';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import bgImage from  './assets/bg3.jpg';

const  App = () =>  {
    const title = 'This is title';
    const descr = 'This is Description!';
  return (
    <>
      <Header title={title} descr={descr}/>
      <Layout title={title} descr={descr} urlBg={bgImage} colorBg='#181d23'/>
      <Layout title={title} descr={descr} colorBg='#181d23'/>
      <Layout title={title} descr={descr} urlBg={bgImage} colorBg='#181d23'/>
      <Footer />
    </>
  );
};

export default App;
