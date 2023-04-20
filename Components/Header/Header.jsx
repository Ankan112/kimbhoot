import Link from "next/link";

const Header = () => {
    return (
        <div className="navbar text-white bg-[#190245] bg-opacity-80 fixed">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#190245] rounded-box w-52">
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/march'}>March</Link></li>
                        <li><Link href={'/shows'}>Shows</Link></li>
                        <li><Link href={'/extras'}>Extras</Link></li>
                    </ul>
                </div>
                <Link href={'/'} className="btn btn-ghost normal-case text-xl">কিম্ভূত</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={'/'}>হোম</Link></li>
                    <li><Link href={'/march'}>March</Link></li>
                    <li><Link href={'/shows'}>Shows</Link></li>
                    <li><Link href={'/extras'}>Extras</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link href={'/content'} className="mr-5">কনটেন্ট</Link>
                <Link href={'/team'} className=" mr-5">Team</Link>
            </div>
        </div>
    );
};

export default Header;