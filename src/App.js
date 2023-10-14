import styles from './styles/app.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import WhyUs from './components/Share/WhyUs/WhyUs';
import Servises from './components/Share/Servises/Servises';
import Form from './components/Share/Form/Form';
import Faq from './components/Share/Faq/Faq';

import Media from './components/Share/Media/Media';
import Brief from './components/Share/Brief/Brief';
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
      <Media />
    </div>
  );
}

export default App;
