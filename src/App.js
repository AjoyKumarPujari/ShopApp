import Item from './components/Item'
import ItemDate from './components/ItemDate';
import  './App.css';

function App() {
  const response = [
    {
        itemName:"nirma",
        itemDate: "2",
        itemMonth: "august",
        itemYear: "1990"

    },
    {
      itemName:"surf",
      itemDate: "2",
      itemMonth: "august",
      itemYear: "1990"

  },
  {
    itemName:"555",
    itemDate: "5",
    itemMonth: "april",
    itemYear: "1990"

},
  ]
  return (
    <div className="App">
      <Item name={response[0].itemName} ></Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

      <Item name={response[1].itemName} ></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

      <Item name={response[2].itemName} ></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
      <div className="App">Hello Jee</div>
    </div>
  );
}

export default App;
