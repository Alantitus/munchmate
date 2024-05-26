import React, { useEffect, useState } from "react";
 import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slice/productSlice";
import { Row, Col, Spinner, Pagination } from "react-bootstrap";


const Landing = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const { allProducts, error, loading } = useSelector(
    (state) => state.productReducer
  );

  console.log(allProducts, "api received data");

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(allProducts?.length / productsPerPage)
    ) {
      setCurrentPage(pageNumber);
    }
  };
  console.log(currentProducts, "all products");

  return (
    <>
      <Header insideHome={true} />
      <div className="mx-3" style={{ marginTop: "80px" }}>
        {loading ? (
          <div className="text-center mt-5 fw-bolder">
            <Spinner className="me-2" animation="border" variant="danger" />{" "}
            Loading...
          </div>
        ) : (
          <Row className="my-5">
            {currentProducts?.length > 0 ? (
              currentProducts?.map((product) => (
                <Col  
                  key={product?.id}
                  className="mb-5 rounded  d-flex justify-content-center justify-content-md-center align-items-center flex-wrap" sm={12} md={6} lg={4} xl={3}>
                  <div className="border-2 rounded">
                    <Link to={`${product.id}/view`}>
                      <img 
                        src={product.photograph}
                        className="img img-responsive rounded"
                        height={"400px"}
                        alt={product.name}
                      />
                    </Link>

                   <div className="text-center font-bold my-3 text-dark text-lg">
                      <div className="text-zinc-900 font-bold">{product.name}</div>
                      <div className="profile-username">{`City: ${product.neighborhood}`}</div>
                      <div className="profile-username2">{`Type: ${product.cuisine_type}`}</div>
                      <div className="mt-2">
                        <Link to={`${product.id}/view`}>
                        <button class="bg-zinc-900 hover:bg-white-100 text-white   py-2 px-4 border border-gray-400 rounded shadow">View More</button>
                        </Link>
                      </div>
                   </div>
                  </div>
                </Col>
              ))
            ) : (
              <div className="fw-bolder text-center mt-5 mb-5 text-danger text-2xl">
                Restaurant not found
              </div>
            )}
          </Row>
        )}
        <div className="d-flex justify-content-center">
          <div class="flex items-center gap-4">
  <button onClick={() => paginate(currentPage - 1)}
    class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
      aria-hidden="true" class="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
    </svg>
    Previous
  </button>
  {Array.from(
              { length: Math.ceil(allProducts?.length / productsPerPage) },
              (_, i) => (
  <div class="flex items-center gap-2">
    <button  key={i}
                  active={i + 1 === currentPage}
                  onClick={() => paginate(i + 1)}
      class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      {i + 1}
      </span>
    </button>
   
  </div>
              ))}
  <button
    class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button" onClick={() => paginate(currentPage + 1)}>
    Next
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
      aria-hidden="true" class="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
    </svg>
  </button>
</div> 
        </div>
      </div>
    </>
  );
};

export default Landing;