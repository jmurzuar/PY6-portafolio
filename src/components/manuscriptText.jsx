import Link from "next/link";

const ManuscriptText = () => {
    return (
      <div className="text-center text-2xl font-bold hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300 ease-in-out">
        <Link href="/">
        <div>
          <span className="text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>Juan</span>{' '}
          <span className="text-orange-500" style={{ fontFamily: 'Dancing Script, cursive' }}>Urzúa</span>
        </div>
        <div className="text-xs uppercase text-gray-300">P  O  R  T  A  F  O  L  I  O</div>
        </Link>
      </div>
    );
  };
  
  export default ManuscriptText;