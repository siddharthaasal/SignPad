import TypeSign from "../TypeSign/page";
import DrawSign from "../DrawSign/page";

export default function MainSection() {
    return (
        <>
            <div className="mt-10 ml-10 flex space-x-5">
                <DrawSign />
                <TypeSign />
            </div>
        </>
    )
}