export default function Image() {

    const loginBackgroundStyle: React.CSSProperties = {
        backgroundImage: "url('https://kibeezy.s3.eu-north-1.amazonaws.com/Untitled+(4).png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };
    return (
        <section
                style={loginBackgroundStyle}
                className="flex flex-col items-center justify-center text-white text-center space-y-6 lg:min-h-screen"
            >
            <button
            onClick={() => (window.location.href = "/api/auth/login")}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 font-bold rounded"
            >
            Invest
            </button>
        </section>


);
}
