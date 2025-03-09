import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, Title);

const MarksSection: React.FC = () => {
  const [subject, setSubject] = useState('Maths');

  const marksData: ChartData<'line'> = {
    labels: ['FT1', 'FT2', 'FT3'],
    datasets: [
      {
        label: 'Marks',
        data: [25, 28, 30],
        borderColor: '#1E3A8A',
        backgroundColor: 'rgba(30, 58, 138, 0.2)',
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: '#1E3A8A',
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 35,
        ticks: {
          stepSize: 5,
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-blue-700 shadow w-full max-w-lg">
      {/* Header with title and dropdown */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg text-[#1E3A8A]">Marks</h3>
        <div className="relative">
          <select
            className="bg-[#1E3A8A] text-white text-sm px-3 py-1 rounded-md cursor-pointer"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="Maths">Maths</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
          </select>
        </div>
      </div>

      {/* Graph Section */}
      <div className="h-25 mt-3">
        <Line data={marksData} options={options} />
      </div>

      {/* Marks Summary */}
      <div className="flex justify-between text-xs text-gray-600 pt-2 border-t mt-4">
        <div>FT1 - 28/35</div>
        <div>FT2 - 28/35</div>
        <div>FT3 - 28/35</div>
      </div>
    </div>
  );
};

export default MarksSection;
