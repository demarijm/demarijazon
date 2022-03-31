const PriceChart = () => {
    let prices = new dict[] = {
        'bronze': 

    }
    return (
        <>
        <div className="flex h-80 py-4 border-b-2 border-black">
                {boxes.map((box, index) => {
                    return (
                        <div
                            key={index}
                            className="border-2 w-full mr-2 bg-blue-400 flex justify-between items-end border-black"
                        >
                            <div className="bg-white ">
                                <p className="w-full h-full">{box}</p>
                            </div>
                            <div className="bg-white ">
                                <p className="w-full h-full">{box}</p>
                            </div>
                        </div>
                    );
                })}
            </div></>
      
    )
}

export default PriceChart;