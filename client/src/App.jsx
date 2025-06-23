import s from "./app.module.less";
import Gallery from "./components/gallery/gallery";
import LeftBar from "./components/leftBar/leftBar";
import TopBar from "./components/topBar/topBar";

const App = () => {
  return (
    <div className={s.app}>
      <LeftBar />
      <div className={s.content}>
        <TopBar />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
