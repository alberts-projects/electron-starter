import { useState, useEffect } from 'react'
import './App.css'

import { Button } from "@/components/ui/button"
import { TabsExample } from "./components/tabsExample"

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/data");
        const jsonData = await response.json();
        setData(jsonData.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>{data || "Loading..."}</div>
      <Button>Click me</Button>
      <TabsExample/>
    </div>
  );
}

export default App
