import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import SplitContentSlide from './components/SplitContentSlide';

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full items-center">
      <Header />
      <Content>
        <SplitContentSlide />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
