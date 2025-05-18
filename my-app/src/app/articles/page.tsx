import Link from "next/link";
// import { title } from "process";



export default function ArticalPage() {
  return (
    <div>
      <h1>Artical Page</h1>
      <Link href={"/Posts"}>
        <button>
            Take me To Posts Page
        </button>
      </Link>
    </div>
  );
}
