import Link from "next/link";


export default function Header() {
    return (
        <>
            <div className="bg-slate-400 p-3">
                <Link className="font-bold p-5" href="/">DigSign</Link>
            </div>
        </>
    )
}