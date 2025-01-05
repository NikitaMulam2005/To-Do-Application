import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS,ArcElement} from 'chart.js'

const Stats = ({list}) => {
  ChartJS.register(ArcElement);
  
    const totalTasks = list.length;
    const completedTasks = list.filter(task => task.selected === true).length;
  
    const percentageCompleted = (completedTasks / totalTasks) * 100;
  
    const data = {
      labels: ['Completed', 'Remaining'], 
      datasets: [
        {
        
          data: [completedTasks, totalTasks - completedTasks], 
          backgroundColor: ['#4caf50', '#2d6858'], 
          borderWidth: 1
        }
      ]
    };
  
    const options = {
      responsive: true,
        }
      
    
  return (
    <div className="stats" style={{width:'25rem', height:'14rem', backgroundColor:'white', borderRadius:'2rem'}}>
       <div style={{display:'flex',justifyContent:'space-between', padding:'20px'}}>
            <h4>Statistics</h4>
            <div style={{display:'flex'}}>
            </div>
            
        </div>
        <div style={{display:'flex', alignItems:'center'}}>
        <div style={{width:'12rem',height:'10rem'}}>
        <Pie data={data} options={options} />
        </div>
        <div>
        <div>
          <span style={{fontSize:'4rem', color:'#4caf50'}}>.</span>
          <span>Tasks Completed</span>
        </div>
        <div>
          <span style={{fontSize:'4rem', color:'#2d6858'}}>.</span>
          <span>Tasks Remaining</span>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Stats