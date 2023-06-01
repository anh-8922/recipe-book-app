import '../Styles/component.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function RecipeTabs() {
  return (
    <div className='recipe-tab'>
          <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
            <Tab eventKey="contact" title="" disabled></Tab>
            <Tab eventKey="home" title="Appetizer">Appetizer</Tab>
            <Tab eventKey="main" title="Main">Main</Tab>
            <Tab eventKey="dessert" title="Dessert">Dessert</Tab>
            <Tab eventKey="special" title="Specials">Specials</Tab>
            <Tab eventKey="quick" title="Quick Recipes">Quick Recipes</Tab>
          </Tabs>
    </div>
    
  );
}

