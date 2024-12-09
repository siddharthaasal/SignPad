
type props = {
    name: string | null,
};

export default function TypeSignModal(props: props) {

    function draw() {
        const canvas = document.getElementById("typed-signature") as HTMLCanvasElement | null;
        if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.font = "48px serif";
                ctx.fillText(props.name ?? "", 10, 50); //empty string if name is null
            }
        }
    }

    return (
        <>
            <h3>Customize you Signature</h3>

            <canvas id="typed-signature" width="150" height="150"></canvas>
            {draw};
            {/* have to fix this */}
        </>
    )

}
