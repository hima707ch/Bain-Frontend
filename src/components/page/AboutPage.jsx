import PageCard from "./Cards/PageCard";
import { useEffect, useState } from "react";
import axios from "axios";


export default function AboutPage() {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://bain-omega.vercel.app/about');
        setData(response.data);
        setLoading(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      { loading && console.log}
      { loading && <PageCard data={data} /> }
    </div>
  );
}
