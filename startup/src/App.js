import { Tabs } from 'antd';
import 'antd/dist/reset.css'; // Ant Design styles
import React from 'react';

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];


function App() {
  return (
    <div>
      <h1>Ant Design Tabs Example</h1>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
   
  );
}

export default App;
