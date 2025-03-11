import { useEffect, useRef } from "react";

type Props = {
    name: string | null;
};

export default function TypeSignModal({ name }: Props) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
                // Clear previous drawings
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // Draw the name
                ctx.font = "48px serif";
                ctx.fillText(name ?? "", 10, 50);
            }
        }
    }, [name]); // Re-run whenever `name` changes

    return (
        <>
            {console.log("Inside TypeSignModal")}
            <canvas ref={canvasRef} id="typed-signature" width="700" height="150"></canvas>
        </>
    );
}
