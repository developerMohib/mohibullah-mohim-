import { useEffect, useState } from 'react';
import './ContributionGraph.css';
import useGithubCommit from '../../hook/useGithubCommit';
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const Githubimplement = () => {
  const { data: commit = [], isPending, error } = useGithubCommit();
  const [contributions, setContributions] = useState({});


  console.log('data', commit)


  // Update contributions state whenever commit data changes
  useEffect(() => {
    if (commit && typeof commit === 'object') {
      setContributions(commit);
    }
  }, [commit]);

 const renderGrid = () => {
    const today = new Date();
    const startDate = new Date(today.getFullYear() - 1, today.getMonth(), 1); // last year this month
    const endDate = today;

    // total number of days
    const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    const weeks = Array.from({ length: Math.ceil(totalDays / 7) }, () => []);
    const monthLabels= {}; // weekIndex -> month name

    for (let i = 0; i < totalDays; i++) {
      const dateObj = new Date(startDate.getTime() + i * 86400000);
      const date = dateObj.toISOString().split('T')[0];
      const dayOfWeek = dateObj.getDay(); // 0 = Sunday, 6 = Saturday
      const weekIndex = Math.floor(i / 7);

      // Store month label for first day of month
      if (dateObj.getDate() === 1) {
        monthLabels[weekIndex] = monthNames[dateObj.getMonth()];
      }

      const count = contributions[date] || 0;
      const color =
        count === 0 ? '#ebedf0' : count < 5 ? '#89e899' : '#2bc454';

      weeks[weekIndex][dayOfWeek] = (
        <div
          key={date}
          style={{
            backgroundColor: color,
            width: '12px',
            height: '12px',
            margin: '2px',
          }}
        />
      );
    }

    return { weeks, monthLabels };
  };
  const { weeks, monthLabels } = renderGrid();
  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <div>
      {/* Month Labels */}
      <div className='flex gap-1 mb-1 justify-center bg-red-200'>
        {weeks?.map((_, idx) => (
          <div className='w-4 text-center text-xs' key={idx} >
            {monthLabels[idx] || ''}
          </div>
        ))}
      </div>

      {/* Contribution Grid */}
      <div className='flex gap-[2px]'>
        {weeks?.map((week, idx) => (
          <div key={idx} className='flex flex-col'>
            {week}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Githubimplement;