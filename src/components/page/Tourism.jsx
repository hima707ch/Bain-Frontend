import PageCard from "./Cards/PageCard";
import { useEffect, useState } from "react";

import axios from "axios";

export default function Tourism() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://bain-omega.vercel.app/tourism');
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
      {loading && <PageCard data={data} /> }
    </div>
  );
}
