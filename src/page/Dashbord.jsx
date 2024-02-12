import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/Authcontext';
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function Dashboard() {
  const { currentUser } = useAuth();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const db = getFirestore();
      const transactionsRef = collection(db, 'transactions');
      const querySnapshot = await getDocs(transactionsRef);

      const userTransactions = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.userId === currentUser.uid) {
          userTransactions.push({
            id: doc.id,
            ...data,
          });
        }
      });

      setTransactions(userTransactions);
    };

    if (currentUser) {
      fetchTransactions();
    }
  }, [currentUser]);

  return (
    <div className="container mx-auto mt-8 p-4 bg-lime-50">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard, {currentUser.email}!</h1>
      
      {currentUser && (
        <div className="bg-white p-6 rounded-md shadow-md">
          
       
          <h2 className="text-xl font-bold mb-2">Your Transactions:</h2>
          <ul>
            {transactions.map((transaction) => (
              <li key={transaction.id} className="mb-2">
                <span className="overflow-ellipsis max-w-[200px]" title={transaction.walletAddress}>
                  Wallet Address: {transaction.walletAddress}
                </span>, Amount: ${transaction.amount}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8">
        {/* Sample Image (Replace with your actual image URL) */}
        <img
          src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1707675419/WhatsApp_Image_2024-02-11_at_23.46.46_b1032dc0_tzyckn.jpg"
          alt="Dashboard Image"
          className="w-full h-auto rounded-md shadow-md"
        />
      </div>
    </div>
  );
}

export default Dashboard;
