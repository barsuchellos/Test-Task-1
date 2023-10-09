import styles from './styles/app.module.scss'
import Header from './components/Header/Header';
import WhyUs from './components/WhyUs/WhyUs';
import Servises from './components/Servises/Servises';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <WhyUs />
      <Servises />
    </div>
  );
}

export default App;
