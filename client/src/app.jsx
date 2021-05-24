import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState('');

  const fetchValues = async () => {
    const res = await axios.get('/api/values/current');
    setValues(res.data);
  };

  const fetchIndexes = async () => {
    const res = await axios.get('/api/values/all');
    setSeenIndexes(res.data);
  };

  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, [index]);

  const renderValues = () => {
    const entries = [];

    for (let key in values) {
      entries.push(
        <p key={key}>
          For Index {key} I Calculated {values[key]}
        </p>,
      );
    }

    return entries;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: index,
    });
    setIndex('');
  };

  // Hope this works
  return (
    <>
      <div className="text-center bg-green-800 py-3 -mt-5 -ml-5 -mr-5 border border-green-800 rounded-t-md">
        <h1 className="font-bold break-normal text-3xl md:text-4xl text-white">Fib Calculator</h1>
      </div>
      <form
        onSubmit={(evt) => handleSubmit(evt)}
        className="flex flex-row justify-center items-center pt-10"
      >
        <label className="mr-4" htmlFor="fibindex">
          Enter your index
        </label>
        <input
          className="border rounded border-gray-600 border-opacity-25 pl-2 py-1.5"
          id="fibindex"
          type="text"
          value={index}
          onChange={(evt) => setIndex(evt.target.value)}
          placeholder="21"
        />
        <button className="ml-4 bg-blue-500 text-white border border-blue-500 rounded py-1.5 px-8 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100">
          Submit
        </button>
      </form>
      <div className="text-center pt-10">
        <p className="font-bold uppercase">Indexes I have seen:</p>
        <p>{seenIndexes.map(({ number }) => number).join(', ')}</p>
        <p className="font-bold uppercase mt-6">Calculated Values:</p>
        <div className="mb-6">{renderValues()}</div>
      </div>
    </>
  );
}

export default App;
