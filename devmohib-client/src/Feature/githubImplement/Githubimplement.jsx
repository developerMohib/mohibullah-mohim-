import './ContributionGraph.css';
import useGithubCommit from '../../hook/useGithubCommit';
import { useEffect, useState } from 'react';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const ContributionBox = ({ isActive, index }) => {
  return (
    <div
      className={`w-8 h-8 border border-gray-600 ${isActive ? 'bg-green-500' : 'bg-gray-700'}`}
    > <p className='text-white' >{index}</p> </div>
  );
};

const Githubimplement = () => {
  const { data: commit = [], isPending, error } = useGithubCommit();
  const [contributions, setContributions] = useState([]);
  console.log('data', commit)
  console.log('data', commit.length)


  const fetchContributions = () => {
    // You would replace this with actual data fetching logic
    const today = new Date();
    const newContributions = [];
    // Assume we check the last 7 days
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      // Randomizing contribution status (for demo purposes)
      newContributions.push({ date: date.toLocaleDateString(), commit });
    }
    setContributions(newContributions);
  };
  useEffect(() => {
    fetchContributions();
  }, []);


  return (
    <div className="flex flex-wrap gap-1">
      {commit?.map((cont, index) => (

        <div key={index}
          className={`w-8 h-8 border border-gray-600`}
        >
          <p className='text-black' >{index + 1}</p>
        </div>
      ))}
    </div>
  );
};

export default Githubimplement;