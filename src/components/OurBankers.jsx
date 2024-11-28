function OurBackers() {
    const backers = [
      { name: "Elevation", imgUrl: "https://via.placeholder.com/200x100" },
      { name: "Mayfield", imgUrl: "https://via.placeholder.com/200x100" },
      {
        name: "Kotak Investment Advisors",
        imgUrl: "https://via.placeholder.com/200x100",
      },
      { name: "Gruhas", imgUrl: "https://via.placeholder.com/200x100" },
    ];
  
    return (
      <div className="our-backers-section py-12 bg-blue-900">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white">Our Backers</h2>
            <p className="text-white mt-2">
              Strata is backed by some of India's largest Venture Capital and
              Private Equity firms. We have, to date, raised over $8 million in
              funding.
            </p>
          </div>
  
          {/* Backer Logos */}
          <div className="flex justify-center flex-wrap gap-6">
            {backers.map((backer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center p-4"
                style={{ width: "200px", height: "100px" }}
              >
                <img
                  src={backer.imgUrl}
                  alt={backer.name}
                  className="max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  export default OurBackers;