import React from 'react';
import Sidebar from '../components/Sidebar'; // Assuming Sidebar component file path
import styles from '../styles/dashboard.module.css';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <main className={styles.content}>
        <h1>Dashboard</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Version</th>
              <th scope="col">Size</th>
              <th scope="col">Date</th>
              <th scope="col">Date</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Dashboard;