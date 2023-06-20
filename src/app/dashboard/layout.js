import Link from "next/link";

const layout = ({ children }) => {
    return (
        <section className='flex'>
            <div className='bg-red-300 w-96 h-screen'>
                <ul className='flex flex-col gap-y-4 p-6'>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/dashboard/payment_history'>payment_history</Link>
                    </li>
                </ul>
            </div>
            <div>
                {children}
            </div>
        </section>
    );
};

export default layout;