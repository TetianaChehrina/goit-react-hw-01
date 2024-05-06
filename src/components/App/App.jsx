
import Profile from "../Profile/Profile.jsx";
import "modern-normalize";
import userData from "../../userData.json";
import friends from "../../friends.json";
import transactions from "../../transactions.json";
import FriendList from "../FriendList/FriendList.jsx";
import TransactionHistory from "../TransactionHistory/TransactionHistory.jsx";

export default function App()
{
  return (
    <>
      <Profile userData={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
