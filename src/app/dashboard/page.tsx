import ProgressTile from "@/coponents/dashboard/ProgressTile";
import UpcomingPaymentsTile from "@/coponents/dashboard/UpcomingPaymentsTile";
import BudgetTile from "@/coponents/dashboard/BudgetTile";
import SavingGoalsTile from "@/coponents/dashboard/SavingGoalsTile";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-6 p-4">
      <ProgressTile />
      <UpcomingPaymentsTile />
      <BudgetTile />
      <SavingGoalsTile />
    </main>
  );
}
