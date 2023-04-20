
const Banner = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div>
                <h1 className="">this is banner section</h1>
                {/* The button to open modal */}
                <label htmlFor="my-modal-3" className="btn">open modal</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">About Kimvout</h3>
                        <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quidem, nihil reprehenderit est a labore, nemo ducimus odit hic repellat iure dolorem facere animi. Officia tenetur animi velit provident illum!</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;