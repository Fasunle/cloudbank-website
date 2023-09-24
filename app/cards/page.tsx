import CardMaintainance from '@/Components/CardMaintainance';
import DebitCard from '@/Components/DebitCard';
import MakePayment from '@/Components/MakePayment';
import Ready from '@/Components/Ready';
import Withdrawals from '@/Components/Withdrawal';
import WithdrawAnywhere from '@/Components/WithdrawalsAnywhere';

export default function Cards() {
  return (
    <>
      <DebitCard />

      <Withdrawals />

      <MakePayment />

      <WithdrawAnywhere />

      <CardMaintainance />

      <Ready />

      {/* <FinancialFreedom /> */}
    </>
  );
}
