import wait from "@/app/lib/wait";

const DashboardPage = async () => {
  await wait(2000);

  const isError = true;
  if (isError) throw new Error("Error Occurred at dashboard page");

  return (
    <div className="p-5">
      <h2 className="text-5xl text-violet-600 "> DashboardPage </h2>
      <p className="mt-4 text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi qui
        libero reiciendis temporibus sunt quos aperiam, corrupti quasi est
        doloremque dolore, iusto, earum laboriosam aspernatur possimus eligendi
        assumenda aut. Vel?
      </p>
    </div>
  );
};
export default DashboardPage;
