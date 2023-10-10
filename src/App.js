import styles from './styles/app.module.scss'
import Header from './components/Header/Header';
import WhyUs from './components/WhyUs/WhyUs';
import Servises from './components/Servises/Servises';
import Form from './components/Form/Form';
import Faq from './components/Faq/Faq';

import Media from './components/Media/Media';


function App() {
  return (
    <div className={styles.app}>
      <Header />
      <hr></hr>
      <WhyUs />
      <Servises />
      <Faq />
      <Form />
      <hr></hr>
      <Media />
    </div>
  );
}

export default App;
