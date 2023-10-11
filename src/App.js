import styles from './styles/app.module.scss'
import Header from './components/Header/Header';
import WhyUs from './components/WhyUs/WhyUs';
import Servises from './components/Servises/Servises';
import Form from './components/Form/Form';
import Faq from './components/Faq/Faq';

import Media from './components/Media/Media';
import Brief from './components/Brief/Brief';
import OurProjects from './components/OurProjects/OurProjects';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <hr className={styles.line}></hr>
      <WhyUs />
      <OurProjects />
      <Servises />
      <Brief />
      <Faq />
      <Form />
      <hr></hr>
      <Media />
    </div>
  );
}

export default App;
