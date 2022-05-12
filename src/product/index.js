import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductPage() {
  const { id } = useParams();
  const [product, setProducts] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://f44c6841-8e3c-4e83-bee1-af39bca47021.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProducts(result);
        //console.log(result);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (product === null) {
    return <h1>상품 정보를 불러오고 있습니다...</h1>;
  }
  //console.log(params);
  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="nanme">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2022년 3월 4일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
