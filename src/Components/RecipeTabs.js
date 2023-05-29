import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './component.css';


export default function RecipeTabs() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="main" title="Main" className='recipe-tabs'>
        test
      </Tab>
      <Tab eventKey="dessert" title="Dessert" className='recipe-tabs'>
        Tab content for Profile
      </Tab>
      <Tab eventKey="occasions" title="Occasions" className='recipe-tabs'>
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="specials" title="Specials" className='recipe-tabs'>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

