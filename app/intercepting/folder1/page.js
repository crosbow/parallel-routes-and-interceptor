import Link from "next/link";

const Folder1 = () => {
  return (
    <div className="p-20">
      <h1>Folder1</h1>

      <br />
      <Link href="/intercepting/folder2">Folder2</Link>
    </div>
  );
};
export default Folder1;
