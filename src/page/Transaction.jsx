import { useState } from 'react';
import { useAuth } from '../contexts/Authcontext';
import { Link } from 'react-router-dom';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { Popover, PopoverHandler, PopoverContent, Button } from "@material-tailwind/react";

const Transaction = () => {
  const { currentUser, error, setError } = useAuth();
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [isTransactionSuccessful, setTransactionSuccessful] = useState(false);

  const validateForm = () => {
    setError('');

    const walletAddressRegex = /^0x[a-fA-F0-9]{40}$/;

    if (walletAddress.trim() === '' || !walletAddressRegex.test(walletAddress)) {
      setError('Please enter a valid Ethereum wallet address.');
      return false;
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount < 0 || parsedAmount > 10000) {
      setError('Please enter a valid amount between 0 and 10,000.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const db = getFirestore();

      try {
        const transactionsRef = await addDoc(collection(db, 'transactions'), {
          userId: currentUser.uid,
          walletAddress,
          amount: parseFloat(amount),
        });

        console.log('Transaction successfully submitted', transactionsRef.id);

        setWalletAddress('');
        setAmount('');
        setTransactionSuccessful(true);

        setTimeout(() => {
          setTransactionSuccessful(false);
        }, 3000);
      } catch (error) {
        console.error('Error submitting transaction:', error);
      }
    }
  };

  return (
    <div className="container p-2 lg:mx-auto mt-8 flex flex-col lg:flex-row bg-lime-50">
      {/* Transaction Form */}
      <div className="lg:w-1/2 lg:pr-4 ">
        <form onSubmit={handleSubmit} className="max-w-md w-full mb-4">
          <h1 className="text-2xl font-bold mb-4">Transaction</h1>
          <div className="mb-4">
            <label htmlFor="walletAddress" className="block text-sm font-medium text-gray-600">
              Wallet Address:
            </label>
            <input
              type="text"
              id="walletAddress"
              className="mt-1 p-2 w-full border rounded-md"
              value={walletAddress}
              placeholder="0x..."
              onChange={(e) => setWalletAddress(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-600">
              Amount:
            </label>
            <input
              type="text"
              id="amount"
              className="mt-1 p-2 w-full border rounded-md"
              value={amount}
              placeholder="0.00"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
            Submit
          </button>
          {isTransactionSuccessful && (
            <Popover>
              <PopoverHandler>
                <Button className="mt-2 bg-green-500 text-white p-2 rounded-md">
                  Transaction Successful
                </Button>
              </PopoverHandler>
              <PopoverContent>
                Transaction successful! Your transaction has been submitted and processed.
                Thank you for using our service.
              </PopoverContent>
            </Popover>
          )}
        </form>
        <Link to="/dashboard" className="block mt-4 text-blue-500">
          Go back to Dashboard
        </Link>
      </div>

      {/* Image Section (Change the image source as needed) */}
      <div className="lg:w-1/2">
        <img
          src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1707674368/WhatsApp_Image_2024-02-11_at_23.29.14_753c468c_ervutv.jpg"
          alt="Transaction Image"
          className="w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default Transaction;
